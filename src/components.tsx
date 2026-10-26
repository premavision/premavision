import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, Mail } from 'lucide-react';
import { Link, useRouter } from './router';
import { FORM, NAV, SITE } from './site';

/* ------------------------------------------------------------------ */
/* Layout primitives                                                   */
/* ------------------------------------------------------------------ */

export const Container = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  lead?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  tone?: 'plain' | 'ambient' | 'ambient-sun';
  /* a generated background behind the section, kept quiet */
  art?: string;
}

export const Section = ({ id, eyebrow, title, lead, children, className = '', tone = 'plain', art }: SectionProps) => (
  <section id={id} className={`relative py-16 sm:py-20 ${tone === 'plain' ? '' : tone} ${className}`}>
    {art && (
      <div className="section-art" aria-hidden="true">
        <img {...responsive(art)} sizes="100vw" alt="" loading="lazy" decoding="async" />
      </div>
    )}
    <Container className="relative">
      {(eyebrow || title || lead) && (
        <header className="max-w-3xl">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          {title && <h2 className="mt-4 text-3xl font-semibold text-white sm:text-[2.6rem] sm:leading-[1.1]">{title}</h2>}
          {lead && <div className="mt-5 text-lg leading-8 text-slate-300">{lead}</div>}
        </header>
      )}
      {children}
    </Container>
  </section>
);

export const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="font-mono text-[12px] font-medium uppercase tracking-[0.16em] text-ice/80">{children}</p>
);

type ButtonVariant = 'primary' | 'ghost';
const BUTTON: Record<ButtonVariant, string> = {
  primary: 'bg-sun text-ink hover:bg-[#ffd54f] focus-visible:outline-white',
  ghost: 'border border-white/15 bg-white/[0.03] text-white hover:border-white/30 hover:bg-white/[0.06]'
};

export const ButtonLink = ({
  to,
  children,
  variant = 'primary',
  className = '',
  onClick
}: {
  to: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-[15px] font-medium transition ${BUTTON[variant]} ${className}`}
  >
    {children}
  </Link>
);

export const ArrowLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} className="hit group inline-flex items-center gap-1.5 font-semibold text-ice hover:text-white">
    {children}
    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
  </Link>
);

/* ------------------------------------------------------------------ */
/* Cards                                                               */
/* ------------------------------------------------------------------ */

export const Stat = ({ value, label, note, href }: { value: string; label: string; note?: string; href?: string }) => (
  <div className="glass rounded-2xl p-5">
    <div className="font-display text-[2.2rem] leading-none text-white tabular-nums">{value}</div>
    <div className="mt-3 text-[14px] leading-5 text-slate-300">{label}</div>
    {note && <div className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-slate-500">{note}</div>}
    {href && (
      <a href={href} className="hit relative z-10 mt-2 inline-block text-[12px] font-semibold text-ice underline-offset-2 hover:underline">
        Source ↗
      </a>
    )}
  </div>
);

/* Where every claim can be checked. Keep these to public pages only. */
export const PROOF = {
  rrHome: 'https://routinerun.com/',
  appStore: 'https://apps.apple.com/app/id6812338054',
  rrIntents: 'https://routinerun.com/app-intents',
  rrSiri: 'https://routinerun.com/siri',
  rrOnCall: 'https://routinerun.com/on-call',
  rrAssistants: 'https://routinerun.com/help/assistants',
  rrDevelopers: 'https://routinerun.com/developers',
  rrMethod: 'https://routinerun.com/methodology',
  rrAccess: 'https://routinerun.com/accessibility',
  rrOrgs: 'https://routinerun.com/for-organisations',
  rrChanges: 'https://routinerun.com/changes',
  rrRepo: 'https://github.com/routinerun/routinerun',
  claudeDirectory: 'https://claude.ai/directory/connectors/routine-run',
  linkedinExperience: 'https://www.linkedin.com/in/denyskorolkov/details/experience/',
  structed: 'https://structed.ai/',
  structedMilestones: 'https://korolkov.pro/notes/#structed-milestones',
  demoDay: 'https://korolkov.pro/notes/#four-weeks-to-demo-day',
  grishin: 'https://grishinrobotics.com/accelerator',
  grishinLinkedIn: 'https://www.linkedin.com/company/grishinrobotics/'
};

export const ProofLinks = ({ links }: { links: [string, string][] }) => (
  <div className="mt-6">
    <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-slate-400">Check it yourself</p>
    <ul className="mt-3 flex flex-wrap gap-2">
      {links.map(([label, href]) => (
        <li key={href}>
          <a
            href={href}
            className="inline-flex items-center gap-1 rounded-full border border-white/15 px-3.5 py-1.5 text-[13px] font-medium text-slate-200 hover:border-ice hover:text-white"
          >
            {label} ↗
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export interface Package {
  name: string;
  time: string;
  price: string;
  body: string;
  includes?: string[];
  highlight?: boolean;
}

export const PackageCard = ({ p }: { p: Package }) => (
  <article className={`${p.highlight ? 'glass-sun' : 'glass'} flex flex-col rounded-2xl p-6 sm:p-7`}>
    <div className="flex items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.14em]">
      <span className="text-ice/80">{p.time}</span>
      {p.highlight && <span className="text-sun">Start here</span>}
    </div>
    <h3 className="card-title mt-4">{p.name}</h3>
    <p className="mt-3 text-[15px] leading-7 text-slate-300">{p.body}</p>
    {p.includes && (
      <ul className="mt-5 space-y-2.5">
        {p.includes.map((item) => (
          <li key={item} className="flex gap-3 text-[14px] leading-6 text-slate-300">
            <span className="mt-[9px] h-px w-3 flex-shrink-0 bg-sun/80" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    )}
    <div className="mt-auto pt-6">
      <div className="flex items-end justify-between gap-4 border-t border-white/[0.08] pt-5">
        <span className="pb-1 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">Fixed price</span>
        <span className="text-right">
          <span className="block font-display text-[1.45rem] leading-none text-white">{p.price.split(', ')[0]}</span>
          {p.price.includes(', ') && (
            <span className="mt-1.5 block font-mono text-[12px] uppercase tracking-[0.1em] text-sun/90">
              {p.price.split(', ').slice(1).join(', ')}
            </span>
          )}
        </span>
      </div>
    </div>
  </article>
);

/* ------------------------------------------------------------------ */
/* How a project runs: drawn the way Routine Run draws a run. The first */
/* step glows (that is where you are), the rest wait their turn.       */
/* ------------------------------------------------------------------ */

export interface Step {
  title: string;
  when: string;
  chip: string;
  body: string;
}

export const RunSteps = ({ steps }: { steps: Step[] }) => (
  <div>
    <div className="mt-10 hidden items-center md:flex" aria-hidden="true">
      {steps.map((s, i) => (
        <React.Fragment key={s.title}>
          <span
            className={`h-3 w-3 flex-shrink-0 rounded-full ${i === 0 ? 'breathe scale-125 bg-sun' : 'bg-white/25'}`}
          />
          {i < steps.length - 1 && (
            <span
              className={`h-[2px] flex-1 ${
                i === 0 ? 'bg-gradient-to-r from-sun to-white/20' : 'bg-white/15'
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
    <ol className="snap-row hide-scrollbar mt-6 grid gap-4 md:grid-cols-5">
      {steps.map((s, i) => (
        <li key={s.title} className={`${i === 0 ? 'glass-sun' : 'glass'} flex flex-col gap-3 rounded-2xl p-5`}>
          <div className="flex items-center gap-3">
            <span
              className={`grid h-8 w-8 flex-shrink-0 place-items-center rounded-full text-sm font-semibold tabular-nums ${
                i === 0 ? 'breathe bg-sun text-ink' : 'bg-white/10 text-white/70 ring-1 ring-white/15'
              }`}
            >
              {i + 1}
            </span>
            <span
              className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${
                i === 0 ? 'bg-sun/20 text-sun' : 'bg-sky/15 text-ice'
              }`}
            >
              {s.chip}
            </span>
          </div>
          <div>
            <h3 className="text-[17px] font-semibold leading-snug text-white">{s.title}</h3>
            <p className="mt-0.5 text-[13px] text-slate-400">{s.when}</p>
            <p className="mt-2 text-[15px] leading-6 text-slate-300">{s.body}</p>
          </div>
        </li>
      ))}
    </ol>
  </div>
);

/* ------------------------------------------------------------------ */
/* Milestones: a vertical run. Done beads are dim sun, the current one */
/* glows, the ones ahead are hollow.                                   */
/* ------------------------------------------------------------------ */

export interface Milestone {
  when: string;
  what: string;
  state?: 'done' | 'now' | 'next';
  href?: string;
}

export const Timeline = ({ items }: { items: Milestone[] }) => (
  <ol className="relative mt-10 space-y-7 border-l border-white/15 pl-7">
    {items.map((m) => {
      const state = m.state ?? 'done';
      return (
        <li key={m.when + m.what.slice(0, 20)} className="relative">
          <span
            aria-hidden="true"
            className={`absolute -left-[35px] top-1 h-3.5 w-3.5 rounded-full ${
              state === 'now'
                ? 'breathe bg-sun'
                : state === 'next'
                ? 'border-2 border-ice/60 bg-ink'
                : 'bg-sun/60'
            }`}
          />
          <p className={`text-[12px] font-semibold uppercase tracking-[0.14em] ${state === 'next' ? 'text-slate-400' : 'text-ice'}`}>
            {m.when}
            {state === 'now' && <span className="ml-2 rounded-full bg-sun/20 px-2 py-0.5 text-sun">Now</span>}
            {state === 'next' && <span className="ml-2 rounded-full bg-white/10 px-2 py-0.5 text-slate-300">Next</span>}
          </p>
          <p className={`mt-1.5 max-w-2xl text-[16px] leading-7 ${state === 'next' ? 'text-slate-400' : 'text-slate-200'}`}>
            {m.what}
            {m.href && (
              <>
                {' '}
                <a href={m.href} className="hit whitespace-nowrap text-[13px] font-semibold text-ice hover:underline">
                  Source ↗
                </a>
              </>
            )}
          </p>
        </li>
      );
    })}
  </ol>
);

/* ------------------------------------------------------------------ */
/* FAQ: native details/summary, so it works before hydration too.      */
/* ------------------------------------------------------------------ */

export interface QA {
  q: string;
  a: string;
}

export const Faq = ({ items }: { items: QA[] }) => (
  <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10">
    {items.map((it) => (
      <details key={it.q} className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-semibold text-white">
          {it.q}
          <ChevronDown className="h-5 w-5 flex-shrink-0 text-ice transition group-open:rotate-180" aria-hidden="true" />
        </summary>
        <p className="mt-3 max-w-3xl text-[15px] leading-7 text-slate-300">{it.a}</p>
      </details>
    ))}
  </div>
);

/* ------------------------------------------------------------------ */
/* Pictures                                                            */
/* ------------------------------------------------------------------ */

/* Generated backgrounds exist in two widths: name.webp (1920) and
 * name-960.webp (960). */
export const responsive = (name: string) => ({
  src: `/img/${name}.webp`,
  srcSet: `/img/${name}-960.webp 960w, /img/${name}.webp 1920w`
});

export const Backdrop = ({ name, className = '', eager = false }: { name: string; className?: string; eager?: boolean }) => (
  <img
    {...responsive(name)}
    sizes="100vw"
    alt=""
    aria-hidden="true"
    loading={eager ? 'eager' : 'lazy'}
    decoding="async"
    {...(eager ? { fetchPriority: 'high' as const } : {})}
    className={`pointer-events-none absolute inset-0 h-full w-full select-none object-cover ${className}`}
  />
);

export const Portrait = ({ src, alt, className = '' }: { src: string; alt: string; className?: string }) => (
  <img
    src={src}
    alt={alt}
    width={480}
    height={600}
    loading="lazy"
    decoding="async"
    className={`aspect-[4/5] w-full rounded-2xl object-cover object-top ${className}`}
  />
);

/* A card's picture: one of the generated backgrounds, cropped to its
 * subject (the art sits on the right of every image) and faded into the
 * card. Used instead of icons. Expects the card to have p-7 sm:p-9. */
export const CardArt = ({ name, position = '82% 50%', small = false }: { name: string; position?: string; small?: boolean }) => (
  <div
    className={`relative overflow-hidden rounded-t-2xl ${
      small ? '-mx-6 -mt-6 mb-5 h-32' : '-mx-7 -mt-7 mb-7 h-48 sm:-mx-9 sm:-mt-9 sm:h-56'
    }`}
    aria-hidden="true"
  >
    <img
      src={`/img/${name}-960.webp`}
      srcSet={`/img/${name}-960.webp 960w, /img/${name}.webp 1920w`}
      sizes="(min-width: 1024px) 50vw, 100vw"
      alt=""
      loading="lazy"
      decoding="async"
      className="h-full w-full object-cover opacity-90 transition duration-700 ease-out group-hover:scale-[1.04]"
      style={{ objectPosition: position }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#081028]/30 to-[#0c142f]" />
  </div>
);

/* Product marks, the same files korolkov.pro uses. */
export const PRODUCT_LOGO = {
  'Routine Run': '/img/logos/routine-run-mark.webp',
  Structed: '/img/logos/structed-logo.svg'
} as const;

export const ProductMark = ({ name, size = 28 }: { name: keyof typeof PRODUCT_LOGO; size?: number }) => (
  <img
    src={PRODUCT_LOGO[name]}
    alt=""
    aria-hidden="true"
    width={size}
    height={size}
    loading="lazy"
    decoding="async"
    className="inline-block flex-shrink-0 object-contain"
    style={{ width: size, height: size }}
  />
);

/* LinkedIn as a small labelled link, used wherever a person is named. */
export const LinkedInLink = ({ href, label = 'LinkedIn', className = '' }: { href: string; label?: string; className?: string }) => (
  <a
    href={href}
    className={`hit relative z-10 inline-flex items-center gap-1.5 text-[14px] font-semibold text-ice hover:text-white ${className}`}
  >
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
    {label}
  </a>
);

export const EmailLink = ({ email, className = '' }: { email: string; className?: string }) => (
  <a
    href={`mailto:${email}`}
    className={`hit relative z-10 inline-flex items-center gap-1.5 text-[14px] font-semibold text-ice hover:text-white ${className}`}
  >
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
    {email}
  </a>
);

/* The diamond: the logo itself. */
export const Logo = ({ withName = true }: { withName?: boolean }) => (
  <span className="inline-flex items-center gap-2.5">
    <img src="/logo-64.webp" alt="" width={32} height={32} className="logo-tilt h-8 w-8" />
    {withName && <span className="text-[16px] font-semibold tracking-tight text-white">Prema Vision</span>}
  </span>
);

/* ------------------------------------------------------------------ */
/* Header and footer                                                   */
/* ------------------------------------------------------------------ */

export function Header() {
  const [open, setOpen] = useState(false);
  const { path } = useRouter();
  // the open menu covers the page: the page underneath doesn't scroll
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#050B24]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label="Prema Vision, home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.path}
              to={n.path}
              className={`text-[14px] transition ${
                path.startsWith(n.path) ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/contact/"
            className="hidden rounded-lg bg-sun px-4 py-2 text-[14px] font-medium text-ink transition hover:bg-[#ffd54f] sm:inline-flex"
          >
            Start a project
          </Link>
          <button
            type="button"
            className="rounded-lg px-3 py-2 text-[14px] font-medium text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="flex h-[calc(100dvh-4rem)] flex-col overflow-y-auto border-t border-white/[0.07] bg-[#050B24] px-4 pb-8 pt-2 lg:hidden"
        >
          {[...NAV, { label: 'Retainers', path: '/retainers/' }].map((n) => (
            <Link
              key={n.path}
              to={n.path}
              onClick={() => setOpen(false)}
              className="block border-b border-white/[0.06] px-1 py-4 font-display text-[20px] text-white"
            >
              {n.label}
            </Link>
          ))}
          <div className="mt-auto pt-8">
            <ButtonLink to="/contact/" className="w-full justify-center" onClick={() => setOpen(false)}>
              Start a project
            </ButtonLink>
            <a href={`mailto:${SITE.email}`} className="mt-4 block text-center text-[15px] text-slate-400">
              {SITE.email}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#030718] py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-[15px] leading-6 text-slate-400">
              AI systems for companies, designed, built and taken to production: in your apps, your client
              conversations and your operations. Retainers keep a person on it after launch.
            </p>
            <p className="mt-5 flex items-center gap-2 text-[15px] text-slate-300">
              <Mail className="h-4 w-4 text-ice" aria-hidden="true" />
              <a href={`mailto:${SITE.email}`} className="hit hover:text-white">
                {SITE.email}
              </a>
            </p>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 text-[15px] md:grid-cols-1 md:gap-y-2.5">
            {[...NAV, { label: 'Retainers', path: '/retainers/' }, { label: 'How we work together', path: '/how-we-work/' }, { label: 'Contact', path: '/contact/' }].map((n) => (
              <Link key={n.path} to={n.path} className="py-2 text-slate-400 hover:text-white md:py-0">
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="text-[15px] md:space-y-2.5">
            <Link to="/local/" className="block py-2 text-slate-400 hover:text-white md:py-0">
              For local businesses around Palm Coast
            </Link>
            <a href={SITE.routineRun} className="block py-2 text-slate-400 hover:text-white md:py-0">
              Routine Run
            </a>
            <a href={SITE.korolkov} className="block py-2 text-slate-400 hover:text-white md:py-0">
              Denys Korolkov, korolkov.pro
            </a>
            <a href={SITE.linkedinDenys} className="block py-2 text-slate-400 hover:text-white md:py-0">
              Denys on LinkedIn
            </a>
            <a href={SITE.linkedinVictoria} className="block py-2 text-slate-400 hover:text-white md:py-0">
              Victoria on LinkedIn
            </a>
            <a href={SITE.linkedinCompany} className="block py-2 text-slate-400 hover:text-white md:py-0">
              Prema Vision on LinkedIn
            </a>
            <a href={SITE.facebook} className="block py-2 text-slate-400 hover:text-white md:py-0">
              Prema Vision on Facebook
            </a>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-[13px] text-slate-500">
          © {new Date().getFullYear()} {SITE.legalName} · {SITE.city} · Remote across the US ·{' '}
          <Link to="/privacy/" className="hit hover:text-white">
            Privacy
          </Link>
        </p>
      </Container>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Contact form. Posts as text/plain (no CORS preflight) to the Apps   */
/* Script in src/google_script.js, with the guard token and an empty   */
/* honeypot that real people never see.                               */
/* ------------------------------------------------------------------ */

export const NEEDS = [
  'A mobile app with AI inside',
  'Siri, Apple Watch or on-device AI for our app',
  'An AI interview or expert system',
  'An AI pilot that has to work every day',
  'An App Clip for a place or an event',
  'AI in our operations, or an AI integration',
  'AI assistants or coding agents set up for our team',
  'An AI agent audit or observability',
  'An audit, due diligence or a technical partner',
  'A retainer: AI oversight or care after launch',
  'Not sure yet'
];

const BUDGETS = ['Under $5,000', '$5,000 to $15,000', '$15,000 to $40,000', '$40,000 and up', 'Not sure yet'];

export function ContactForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    need: '',
    budget: '',
    message: '',
    source: '',
    website: ''
  });
  // ?need=mobile|siri|interview|pilot preselects the first matching option.
  // Read after hydration so the server HTML and the first client render match.
  useEffect(() => {
    const want = new URLSearchParams(window.location.search).get('need')?.toLowerCase();
    if (!want) return;
    const keys: Record<string, number> = { mobile: 0, siri: 1, watch: 1, interview: 2, expert: 2, pilot: 3, appclip: 4, ops: 5, audit: 6, engineering: 7, retainer: 8 };
    const i = keys[want];
    if (i !== undefined) setValues((v) => ({ ...v, need: NEEDS[i] }));
  }, []);

  const set = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState('sending');
    try {
      const res = await fetch(FORM.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          company: values.company,
          budgetRange: values.budget,
          projectType: `premavision.net: ${values.need || 'not chosen'}`,
          projectBrief: values.message,
          howFound: values.source,
          website: values.website,
          formGuard: FORM.guard
        })
      });
      const data = await res.json();
      setState(data && data.success ? 'sent' : 'error');
    } catch {
      setState('error');
    }
  }

  if (state === 'sent') {
    return (
      <div className="glass-sun rounded-2xl p-8" role="status">
        <h2 className="text-2xl font-semibold text-white">Got it.</h2>
        <p className="mt-3 text-[17px] leading-7 text-slate-200">
          Denys reads every message himself and replies within one business day. If it can't wait, write to{' '}
          <a href={`mailto:${SITE.email}`} className="text-ice underline">
            {SITE.email}
          </a>
          .
        </p>
      </div>
    );
  }

  const field =
    'mt-1.5 block w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-[16px] text-white placeholder:text-slate-500 focus:border-sky focus:outline-none focus:ring-2 focus:ring-sky/40';
  const label = 'block text-[14px] font-medium text-slate-200';

  return (
    <form onSubmit={onSubmit} className="glass space-y-5 rounded-2xl p-6 sm:p-8" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={label}>
            Your name
          </label>
          <input id="cf-name" required autoComplete="name" value={values.name} onChange={set('name')} className={field} />
        </div>
        <div>
          <label htmlFor="cf-email" className={label}>
            Work email
          </label>
          <input
            id="cf-email"
            type="email"
            required
            autoComplete="email"
            value={values.email}
            onChange={set('email')}
            className={field}
          />
        </div>
      </div>
      <div>
        <label htmlFor="cf-company" className={label}>
          Company <span className="text-slate-500">(optional)</span>
        </label>
        <input id="cf-company" autoComplete="organization" value={values.company} onChange={set('company')} className={field} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-need" className={label}>
            What do you need?
          </label>
          <select id="cf-need" value={values.need} onChange={set('need')} className={`${field} select-pv`}>
            <option value="">Choose one</option>
            {NEEDS.map((n) => (
              <option key={n} value={n} className="bg-navy">
                {n}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="cf-budget" className={label}>
            Budget
          </label>
          <select id="cf-budget" value={values.budget} onChange={set('budget')} className={`${field} select-pv`}>
            <option value="">Choose one</option>
            {BUDGETS.map((b) => (
              <option key={b} value={b} className="bg-navy">
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="cf-message" className={label}>
          What lives in one head, or what should your app do?
        </label>
        <p id="cf-message-help" className="mt-1 text-[13px] leading-5 text-slate-400">
          Useful to include: who carries it today, what it costs when it breaks, and why now.
        </p>
        <textarea
          id="cf-message"
          required
          rows={5}
          aria-describedby="cf-message-help"
          value={values.message}
          onChange={set('message')}
          className={field}
        />
      </div>
      <div>
        <label htmlFor="cf-source" className={label}>
          How did you find us? <span className="text-slate-500">(optional)</span>
        </label>
        <input id="cf-source" value={values.source} onChange={set('source')} className={field} />
      </div>
      {/* honeypot: hidden from people and screen readers, bots fill it */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="cf-website">Website</label>
        <input id="cf-website" tabIndex={-1} autoComplete="off" value={values.website} onChange={set('website')} />
      </div>
      {state === 'error' && (
        <p role="alert" className="rounded-xl border border-red-400/40 bg-red-500/10 p-4 text-[15px] text-red-200">
          That didn't go through. Please write to {SITE.email} instead, and sorry for the trouble.
        </p>
      )}
      <button
        type="submit"
        disabled={state === 'sending'}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sun px-6 py-3.5 text-[16px] font-semibold text-ink transition hover:bg-[#ffd54f] disabled:opacity-60"
      >
        {state === 'sending' ? 'Sending…' : 'Send'}
      </button>
    </form>
  );
}

/* A short muted clip that plays while it is on screen (never under
 * prefers-reduced-motion), with controls to unmute or pause. */
export function Clip({
  src,
  poster,
  width,
  height,
  caption
}: {
  src: string;
  poster: string;
  width: number;
  height: number;
  caption: React.ReactNode;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    v.muted = true; // React doesn't write the muted attribute, and browsers only autoplay muted video
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.4 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <figure className="mx-auto max-w-3xl">
      <video
        ref={ref}
        muted
        loop
        playsInline
        controls
        preload="none"
        poster={poster}
        width={width}
        height={height}
        className="h-auto w-full rounded-2xl border border-white/10 bg-black shadow-[0_30px_80px_-30px_rgba(0,168,240,0.35)]"
      >
        <source src={src} type="video/mp4" />
      </video>
      <figcaption className="mt-3 text-center text-[14px] leading-6 text-slate-400">{caption}</figcaption>
    </figure>
  );
}

/* A muted clip that sits in the layout like a picture: whole frame, no player,
 * edges melting into the page. Plays only while on screen; under
 * prefers-reduced-motion only the poster shows. */
export function AmbientVideo({ src, poster, label, className = '' }: { src: string; poster: string; label: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    v.muted = true;
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()), { threshold: 0.2 });
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <div className={`ambient-video relative ${className}`}>
      <div className="absolute -inset-y-8 inset-x-0 -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(0,168,240,0.22),transparent)] blur-2xl lg:-inset-10" aria-hidden="true" />
      <video
        ref={ref}
        muted
        loop
        playsInline
        preload="none"
        poster={poster}
        aria-label={label}
        className="block aspect-[848/624] h-auto w-full rounded-2xl object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
