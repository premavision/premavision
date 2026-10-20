/* Site-wide constants and the route table. Every route listed here is
 * prerendered into docs/<path>index.html by scripts/prerender.mjs, with the
 * title, description and structured data below. Copy rules for this site:
 * no em dashes, no buzzwords, numbers over adjectives; facts only from the
 * Fact Ledger (Structed: only the numbers already public on LinkedIn). */

export const SITE = {
  name: 'Prema Vision',
  legalName: 'Prema Vision LLC',
  url: 'https://premavision.net',
  email: 'denys@premavision.net',
  emailVictoria: 'victoria@premavision.net',
  phoneDisplay: '(407) 867-9870',
  phoneHref: 'tel:+14078679870',
  city: 'Palm Coast, Florida',
  linkedinDenys: 'https://www.linkedin.com/in/denyskorolkov/',
  linkedinVictoria: 'https://www.linkedin.com/in/victoriavon/',
  linkedinCompany: 'https://www.linkedin.com/company/premavision/',
  facebook: 'https://www.facebook.com/premavision',
  korolkov: 'https://korolkov.pro/',
  routineRun: 'https://routinerun.com/',
  structed: 'https://structed.ai/'
};

/* Google Apps Script web app behind every form on the site (src/google_script.js).
 * The script drops anything without formGuard, or with the `website` honeypot
 * filled, as spam with a fake success, so every form must send exactly this. */
export const FORM = {
  endpoint:
    'https://script.google.com/macros/s/AKfycbx7lwPV-HbYr85IoeI27e7DL0HOaOeGsRjr6Mp6CabxlUxGcOFO3QoeaaQFx5X7knoo/exec',
  guard: 'kp-guard-2026-08'
};

export type RouteKind = 'main' | 'local' | 'note' | 'redirect';

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  kind: RouteKind;
  /* for redirects: where the old URL now lives */
  to?: string;
  /* shown in the sitemap with this priority */
  priority?: number;
  image?: string;
}

export const MAIN_ROUTES: RouteMeta[] = [
  {
    path: '/',
    kind: 'main',
    priority: 1,
    title: 'Prema Vision · AI systems for companies, built and taken to production',
    description:
      'Prema Vision designs and builds AI systems for companies: AI inside your iPhone and Apple Watch apps, AI interviews your experts run, AI in your operations, and retainers that keep a person on it. Fixed price.'
  },
  {
    path: '/mobile/',
    kind: 'main',
    priority: 0.9,
    title: 'Mobile apps with AI under the hood · Prema Vision',
    description:
      "Apple's on-device model, Siri and App Intents, Apple Watch apps and MCP connectors for iOS apps, or a new iPhone and Watch app from zero. Fixed-price packages from $2,400."
  },
  {
    path: '/ai-interviews/',
    kind: 'main',
    priority: 0.9,
    title: 'AI interviews and expert systems · Prema Vision',
    description:
      'AI interviewers that ask what your experts would ask and record the answers as structured requirements, with a back office your experts edit, test and publish without a developer.'
  },
  {
    path: '/ai-operations/',
    kind: 'main',
    priority: 0.9,
    title: 'AI in your operations: process automation, AI integrations, agent audits · Prema Vision',
    description:
      'Map a process, let AI take the steps that repeat, connect it to your CRM, inbox and helpdesk, and audit and observe the agents you already run. Fixed price from $2,400.'
  },
  {
    path: '/engineering/',
    kind: 'main',
    priority: 0.8,
    title: 'Engineering leadership and infrastructure · Prema Vision',
    description:
      'Architecture and code audits, technical and AI due diligence before you buy or partner, a technical partner for founders, taking a product back from an agency, and infrastructure.'
  },
  {
    path: '/retainers/',
    kind: 'main',
    priority: 0.9,
    title: 'Retainers: AI oversight and care after launch · Prema Vision',
    description:
      'From day one, not only after launch: we monitor your AI and systems, alert you, and send weekly and monthly reports. AI oversight from $900 a month, add-ons and care plans.'
  },
  {
    path: '/services/',
    kind: 'main',
    priority: 0.9,
    title: 'Services: mobile AI, AI interviews, AI operations, engineering · Prema Vision',
    description:
      'Four ways in: mobile apps with AI under the hood, AI interviews and expert systems, AI in your operations, and engineering leadership and infrastructure. Fixed price, taken to production.'
  },
  {
    path: '/work/',
    kind: 'main',
    priority: 0.8,
    title: 'Work and proof: Routine Run and Structed · Prema Vision',
    description:
      'What Prema Vision sells was built first in our own products: Routine Run, a process execution platform that starts on iPhone and Apple Watch, with 60+ App Intents, and the Structed AI interview.'
  },
  {
    path: '/about/',
    kind: 'main',
    priority: 0.6,
    title: 'About Prema Vision · Denys Korolkov and Victoria Von',
    description:
      'Prema Vision LLC, Palm Coast, Florida. One accountable lead engineer, AI agents for the routine work, design by Victoria Von. Fixed price, taken to production.'
  },
  {
    path: '/notes/',
    kind: 'main',
    priority: 0.7,
    title: 'Notes on mobile AI and AI interviews · Prema Vision',
    description:
      "Field notes from building Routine Run and the Structed AI interview: Apple's on-device model, MCP, evals, and what an AI interview needs to stop losing facts."
  },
  {
    path: '/how-we-work/',
    kind: 'main',
    priority: 0.6,
    title: 'How we work together: proposal, contract, payment · Prema Vision',
    description:
      'From the first call to a signed handover: a written proposal in two business days, a fixed price, 50% to start, weekly builds, and you own everything once paid.'
  },
  {
    path: '/privacy/',
    kind: 'main',
    priority: 0.3,
    title: 'Privacy · Prema Vision',
    description: 'What premavision.net collects and what it does not: no accounts, no cookies, no tracking. What you send us, we keep only to reply.'
  },
  {
    path: '/contact/',
    kind: 'main',
    priority: 0.8,
    title: 'Start a project · Prema Vision',
    description:
      'Tell us which process lives in one head, or which AI feature your app is missing. Denys reads every message and replies within one business day.'
  }
];

export const LOCAL_ROUTES: RouteMeta[] = [
  {
    path: '/local/',
    kind: 'local',
    priority: 0.6,
    title: 'For local businesses around Palm Coast · Prema Vision',
    description:
      "Your business on your customers' phones: App Clips at your door, websites built for the phone and missed-call text-back for businesses in Flagler, Volusia and St. Johns counties. Launch prices, a local person to call."
  },
  {
    path: '/local/app-clips/',
    kind: 'local',
    priority: 0.6,
    title: 'App Clips for local businesses: steps on a visitor\'s phone · Palm Coast, FL',
    description:
      'A QR code or NFC tag at your door opens the steps on a visitor\'s iPhone, with nothing to install. Free setup for local businesses that order any service, and a free 90-day pilot.'
  },
  {
    path: '/local/apps/',
    kind: 'local',
    priority: 0.6,
    title: 'Apps for your regulars: a Wallet loyalty card or your own iPhone app · Palm Coast, FL',
    description:
      'A loyalty card in Apple Wallet from $1,500, or an iPhone app for booking and reordering from $7,500, for businesses in Flagler, Volusia and St. Johns counties. Launch prices, discount included.'
  },
  {
    path: '/local/check/',
    kind: 'local',
    priority: 0.5,
    title: 'Website check for local businesses · Palm Coast, FL',
    description:
      'A check of what is actually broken on your website, on a phone, the way your customers see it. $250, credited against any work.'
  },
  {
    path: '/local/websites/',
    kind: 'local',
    priority: 0.5,
    title: 'Small business websites · Palm Coast, FL',
    description:
      'Websites that load fast, read well on a phone and put your number one tap away. $3,000 to $4,500 fixed, and you own everything.'
  },
  {
    path: '/local/automation/',
    kind: 'local',
    priority: 0.5,
    title: 'Missed-call answering and text-back for contractors · Palm Coast, FL',
    description:
      'Software that answers when you cannot, texts the caller back in seconds and puts the job in your calendar. Setup $997, month to month.'
  }
];

/* Old URLs that may be indexed or linked. Each gets a tiny page with a
 * canonical link and an instant redirect. */
export const REDIRECTS: RouteMeta[] = [
  { path: '/cases/', kind: 'redirect', to: '/work/', title: 'Moved', description: '' },
  { path: '/check/', kind: 'redirect', to: '/local/check/', title: 'Moved', description: '' },
  { path: '/websites/', kind: 'redirect', to: '/local/websites/', title: 'Moved', description: '' },
  { path: '/automation/', kind: 'redirect', to: '/local/automation/', title: 'Moved', description: '' }
];

export const NAV = [
  { label: 'Services', path: '/services/' },
  { label: 'Mobile + AI', path: '/mobile/' },
  { label: 'AI interviews', path: '/ai-interviews/' },
  { label: 'Work', path: '/work/' },
  { label: 'Notes', path: '/notes/' },
  { label: 'About', path: '/about/' }
];

export const normalizePath = (p: string) => {
  let path = p.split(/[?#]/)[0] || '/';
  if (!path.startsWith('/')) path = '/' + path;
  if (!path.endsWith('/')) path += '/';
  return path.replace(/\/+/g, '/');
};
