import { lazy, startTransition, Suspense, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ButtonLink, Container, Footer, Header } from './components';
import { RouterContext } from './router';
import { LOCAL_ROUTES, MAIN_ROUTES, normalizePath } from './site';
import { NOTES, visibleNotes } from './notes';
import { useMotion } from './useMotion';

/* Each page is its own chunk, so a visitor downloads the JS for the page they
 * opened, not the whole site. The prerendered HTML is already on screen;
 * main.tsx loads the page's chunk before hydrating, and prerender.mjs adds a
 * modulepreload for it (PAGE_SOURCE maps a path to its file for that). */

/* After a deploy the chunk names change. A tab opened before it asks for files
 * that no longer exist: load the page fresh once instead of breaking. */
function fresh<T>(importer: () => Promise<T>): () => Promise<T> {
  return () =>
    importer().catch((err) => {
      if (typeof window === 'undefined') throw err;
      const key = `pv-reloaded:${window.location.pathname}`;
      try {
        if (sessionStorage.getItem(key)) throw err;
        sessionStorage.setItem(key, '1');
      } catch {
        throw err; // already tried once, or storage is blocked: don't loop
      }
      window.location.reload();
      return new Promise<T>(() => {}); // the reload takes over
    })
    .then((m) => {
      if (typeof window !== 'undefined')
        try {
          sessionStorage.removeItem(`pv-reloaded:${window.location.pathname}`);
        } catch {
          /* storage blocked */
        }
      return m;
    });
}

const load = {
  home: fresh(() => import('./pages/Home')),
  mobile: fresh(() => import('./pages/Mobile')),
  interviews: fresh(() => import('./pages/AiInterviews')),
  work: fresh(() => import('./pages/Work')),
  about: fresh(() => import('./pages/About')),
  notes: fresh(() => import('./pages/Notes')),
  contact: fresh(() => import('./pages/Contact')),
  operations: fresh(() => import('./pages/Operations')),
  engineering: fresh(() => import('./pages/Engineering')),
  services: fresh(() => import('./pages/Services')),
  retainers: fresh(() => import('./pages/Retainers')),
  legal: fresh(() => import('./pages/Legal')),
  local: fresh(() => import('./local/LocalPages'))
};
type Chunk = keyof typeof load;

const Home = lazy(load.home);
const Mobile = lazy(load.mobile);
const AiInterviews = lazy(load.interviews);
const Work = lazy(load.work);
const About = lazy(load.about);
const Notes = lazy(load.notes);
const NotePage = lazy(() => load.notes().then((m) => ({ default: m.NotePage })));
const Contact = lazy(load.contact);
const Operations = lazy(load.operations);
const Engineering = lazy(load.engineering);
const Services = lazy(load.services);
const Retainers = lazy(load.retainers);
const HowWeWork = lazy(() => load.legal().then((m) => ({ default: m.HowWeWork })));
const Privacy = lazy(() => load.legal().then((m) => ({ default: m.Privacy })));
const LocalCheck = lazy(() => load.local().then((m) => ({ default: m.LocalCheck })));
const LocalWebsites = lazy(() => load.local().then((m) => ({ default: m.LocalWebsites })));
const LocalAutomation = lazy(() => load.local().then((m) => ({ default: m.LocalAutomation })));
const LocalAppClips = lazy(() => load.local().then((m) => ({ default: m.LocalAppClips })));
const LocalIndex = lazy(() => load.local().then((m) => ({ default: m.LocalIndex })));
const LocalApps = lazy(() => load.local().then((m) => ({ default: m.LocalApps })));

const CHUNK: Record<string, Chunk> = {
  '/': 'home',
  '/mobile/': 'mobile',
  '/ai-interviews/': 'interviews',
  '/work/': 'work',
  '/about/': 'about',
  '/notes/': 'notes',
  '/contact/': 'contact',
  '/ai-operations/': 'operations',
  '/engineering/': 'engineering',
  '/services/': 'services',
  '/retainers/': 'retainers',
  '/how-we-work/': 'legal',
  '/privacy/': 'legal'
};
const chunkFor = (path: string): Chunk | undefined =>
  CHUNK[path] ?? (path.startsWith('/local/') ? 'local' : path.startsWith('/notes/') ? 'notes' : undefined);

export const PAGE_SOURCE: Record<Chunk, string> = {
  home: 'src/pages/Home.tsx',
  mobile: 'src/pages/Mobile.tsx',
  interviews: 'src/pages/AiInterviews.tsx',
  work: 'src/pages/Work.tsx',
  about: 'src/pages/About.tsx',
  notes: 'src/pages/Notes.tsx',
  contact: 'src/pages/Contact.tsx',
  operations: 'src/pages/Operations.tsx',
  engineering: 'src/pages/Engineering.tsx',
  services: 'src/pages/Services.tsx',
  retainers: 'src/pages/Retainers.tsx',
  legal: 'src/pages/Legal.tsx',
  local: 'src/local/LocalPages.tsx'
};
export const sourceFor = (path: string) => {
  const c = chunkFor(path);
  return c ? PAGE_SOURCE[c] : undefined;
};
export const preloadPage = (path: string) => {
  const c = chunkFor(normalizePath(path));
  return c ? load[c]() : Promise.resolve();
};

const useIsoLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

function NotFound() {
  return (
    <section className="pb-24 pt-40">
      <Container className="max-w-2xl text-center">
        <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-ice">404</p>
        <h1 className="mt-4 text-4xl font-extrabold text-white">This path leads nowhere.</h1>
        <p className="mt-4 text-lg text-slate-300">Even a labyrinth has a way out. Here are two.</p>
        <div className="mt-8 flex justify-center gap-3">
          <ButtonLink to="/">Home</ButtonLink>
          <ButtonLink to="/contact/" variant="ghost">
            Contact
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

export const isLocalPath = (path: string) => path.startsWith('/local/');

export function knownPath(path: string) {
  if (MAIN_ROUTES.some((r) => r.path === path) || LOCAL_ROUTES.some((r) => r.path === path)) return true;
  const m = path.match(/^\/notes\/([^/]+)\/$/);
  return !!m && visibleNotes().some((n) => n.slug === m[1]);
}

function Page({ path }: { path: string }) {
  switch (path) {
    case '/':
      return <Home />;
    case '/mobile/':
      return <Mobile />;
    case '/ai-interviews/':
      return <AiInterviews />;
    case '/work/':
      return <Work />;
    case '/about/':
      return <About />;
    case '/notes/':
      return <Notes />;
    case '/contact/':
      return <Contact />;
    case '/ai-operations/':
      return <Operations />;
    case '/engineering/':
      return <Engineering />;
    case '/services/':
      return <Services />;
    case '/retainers/':
      return <Retainers />;
    case '/how-we-work/':
      return <HowWeWork />;
    case '/privacy/':
      return <Privacy />;
  }
  const m = path.match(/^\/notes\/([^/]+)\/$/);
  if (m && visibleNotes().some((n) => n.slug === m[1])) return <NotePage slug={m[1]} />;
  return <NotFound />;
}

function LocalPage({ path }: { path: string }) {
  switch (path) {
    case '/local/check/':
      return <LocalCheck />;
    case '/local/websites/':
      return <LocalWebsites />;
    case '/local/automation/':
      return <LocalAutomation />;
    case '/local/app-clips/':
      return <LocalAppClips />;
    case '/local/apps/':
      return <LocalApps />;
    default:
      return <LocalIndex />;
  }
}

/* Title and description follow the page on client-side navigation; the
 * prerendered HTML already has them for the first load. */
function syncHead(path: string) {
  const route = [...MAIN_ROUTES, ...LOCAL_ROUTES].find((r) => r.path === path);
  const note = NOTES.find((n) => `/notes/${n.slug}/` === path);
  const title = route?.title ?? (note ? `${note.title} · Prema Vision` : 'Not found · Prema Vision');
  const description = route?.description ?? note?.description ?? '';
  document.title = title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', `https://premavision.net${path}`);
  document.documentElement.dataset.theme = isLocalPath(path) ? 'local' : 'dark';
}

export default function App({ initialPath }: { initialPath: string }) {
  const [path, setPath] = useState(normalizePath(initialPath));
  const mainRef = useRef<HTMLElement>(null);
  const first = useRef(true);
  const [navigated, setNavigated] = useState(false);

  const navigate = useCallback((to: string) => {
    const [p, hash] = to.split('#');
    const next = normalizePath(p);
    window.history.pushState({}, '', next + (hash ? `#${hash}` : ''));
    setNavigated(true);
    // keep the current page on screen while the next page's chunk loads
    startTransition(() => setPath(next));
  }, []);

  useEffect(() => {
    const onPop = () => startTransition(() => setPath(normalizePath(window.location.pathname)));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // after a client-side page change: head, scroll, focus
  useIsoLayoutEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    syncHead(path);
    const hash = window.location.hash.slice(1);
    const target = hash ? document.getElementById(hash) : null;
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
    mainRef.current?.focus({ preventScroll: true });
  }, [path]);

  useMotion(path);

  const value = { path, navigate };

  if (isLocalPath(path)) {
    return (
      <RouterContext.Provider value={value}>
        <Suspense fallback={null}>
          <LocalPage path={path} />
        </Suspense>
      </RouterContext.Provider>
    );
  }

  return (
    <RouterContext.Provider value={value}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main" ref={mainRef} tabIndex={-1} className="outline-none">
        <div key={path} className={navigated ? 'page-in' : undefined}>
          <Suspense fallback={null}>
            <Page path={path} />
          </Suspense>
        </div>
      </main>
      <Footer />
    </RouterContext.Provider>
  );
}
