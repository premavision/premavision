import React, { useState } from 'react';
import { Link } from '../router';
import { FORM, SITE } from '../site';
import { RoutineCard } from '../routines';

/* Pages for local businesses around Palm Coast (/local/...). Light on
 * purpose, unlike the dark main site: Flagler County's median age is 54 and
 * 32% of residents are over 65, so large type and high contrast. Still the
 * Prema Vision brand: navy, sky blue and sun yellow from the logo. They must
 * pass WCAG 2.1 AA themselves, since they sell accessibility fixes.
 *
 * Prices: every price shown is a launch price with the discount included;
 * `was` is the regular price after the launch. Regular prices are a proposal
 * awaiting Denys's OK (see the review doc). */

const NAVY = '#0A1640';

const LINKS = [
  { path: '/local/app-clips/', label: 'App Clips' },
  { path: '/local/apps/', label: 'Apps' },
  { path: '/local/websites/', label: 'Websites' },
  { path: '/local/automation/', label: 'Missed calls' },
  { path: '/local/check/', label: 'Website check' }
];

export const APP_STORE = 'https://apps.apple.com/app/id6812338054';

function LocalHeader({ current }: { current: string }) {
  return (
    <header className="border-b border-slate-200 bg-white">
      {/* phone: name and Call on one row, the four links in one scrollable row under it */}
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-5 py-3 md:py-4">
        <Link to="/local/" className="order-1 flex items-center gap-3">
          <img src="/logo-64.webp" alt="" width={40} height={40} className="h-10 w-10" />
          <span>
            <span className="block text-[17px] font-bold leading-tight text-slate-900">Denys Korolkov</span>
            <span className="block text-sm text-slate-600">
              <span className="hidden sm:inline">Prema Vision · </span>Palm Coast, Florida
            </span>
          </span>
        </Link>
        <nav aria-label="Local services" className="hide-scrollbar order-3 -mx-5 w-[calc(100%+2.5rem)] overflow-x-auto px-5 md:order-2 md:mx-0 md:w-auto md:px-0">
          <ul className="flex gap-x-6 whitespace-nowrap text-base">
            {LINKS.map((l) => (
              <li key={l.path}>
                <Link
                  to={l.path}
                  className={
                    'inline-block border-b-2 py-2 ' +
                    (current === l.path ? 'border-[#00A8F0] font-semibold text-slate-900' : 'border-transparent text-slate-700 hover:text-slate-900')
                  }
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={SITE.phoneHref}
          aria-label={`Call ${SITE.phoneDisplay}`}
          className="order-2 rounded-xl px-4 py-2.5 text-base font-semibold text-white focus:outline-none focus:ring-4 focus:ring-sky-300 md:order-3 md:px-5 md:py-3"
          style={{ background: NAVY }}
        >
          <span className="md:hidden">Call</span>
          <span className="hidden md:inline">Call {SITE.phoneDisplay}</span>
        </a>
      </div>
    </header>
  );
}

function OfferBanner() {
  return (
    <section style={{ background: NAVY }} className="px-5 py-4 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[17px] leading-relaxed">
          <span className="mr-2 rounded-md bg-[#FFC81E] px-2 py-0.5 text-sm font-bold uppercase tracking-wide text-[#0A1640]">
            Launch offer
          </span>
          I'm launching App Clips for local businesses. Every price here is a launch price, and your App Clip is set up
          free.
        </p>
        <Link to="/local/app-clips/" className="hit flex-shrink-0 font-semibold text-[#90D8F0] underline underline-offset-4 hover:text-white">
          What's an App Clip?
        </Link>
      </div>
    </section>
  );
}

function Hero({ kicker, title, children }: { kicker: string; title: string; children: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#E6F4FC] to-[#F5F7FB] px-5 py-14 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(10,22,64,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,22,64,0.05) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-[#0B6FA4]">{kicker}</p>
          <h1 className="text-[2rem] font-bold leading-[1.1] text-slate-900 sm:text-5xl">{title}</h1>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-800 sm:text-xl">{children}</div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#start" className="rounded-xl bg-[#FFC81E] px-6 py-3.5 text-center text-lg font-bold text-[#0A1640] hover:bg-[#ffd54f]">
              Send me your website
            </a>
            <a
              href={SITE.phoneHref}
              className="rounded-xl border-2 px-6 py-3.5 text-center text-lg font-semibold text-slate-900 hover:bg-white"
              style={{ borderColor: NAVY }}
            >
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
        <figure className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_-20px_rgba(10,22,64,0.35)]">
          <img
            src="/img/denys-korolkov.webp"
            alt="Denys Korolkov"
            width={768}
            height={960}
            className="aspect-[4/4.2] w-full object-cover object-top"
          />
          <figcaption className="p-5">
            <p className="text-lg font-bold text-slate-900">Denys Korolkov</p>
            <p className="mt-1 text-base leading-relaxed text-slate-700">
              Software engineer, 18+ years. I live in Palm Coast and help local businesses get found, answer every call
              and run smoother.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Block({ title, children, tone = 'white' }: { title?: string; children: React.ReactNode; tone?: 'white' | 'grey' }) {
  return (
    <section className={`${tone === 'grey' ? 'bg-[#F5F7FB]' : 'bg-white'} px-5 py-14 sm:py-20`}>
      <div className="mx-auto max-w-3xl">
        {title ? <h2 className="mb-6 text-[1.75rem] font-bold leading-tight text-slate-900 sm:text-4xl">{title}</h2> : null}
        <div className="local-copy space-y-4 text-lg leading-relaxed text-slate-800">{children}</div>
      </div>
    </section>
  );
}

interface PriceRow {
  what: string;
  cost: string;
  was?: string;
}

function Price({ rows, note }: { rows: PriceRow[]; note?: string }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_-24px_rgba(10,22,64,0.35)] ring-1 ring-slate-200">
      <div className="flex flex-wrap items-center justify-between gap-2 px-6 py-4 text-white" style={{ background: NAVY }}>
        <span className="text-base font-bold">Launch prices</span>
        <span className="rounded-md bg-[#FFC81E] px-2 py-0.5 text-sm font-bold text-[#0A1640]">Discount included</span>
      </div>
      <dl className="divide-y divide-slate-200 px-6">
        {rows.map((r) => (
          <div key={r.what} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-4">
            <dt className="max-w-md font-medium text-slate-800">{r.what}</dt>
            <dd className="text-right">
              {r.was && (
                <span className="mr-3 text-base text-slate-500 line-through" aria-label={`regular price ${r.was}`}>
                  {r.was}
                </span>
              )}
              <span className="text-xl font-bold text-slate-900">{r.cost}</span>
            </dd>
          </div>
        ))}
      </dl>
      {note ? <p className="border-t border-slate-200 bg-[#F5F7FB] px-6 py-4 text-base text-slate-700">{note}</p> : null}
    </div>
  );
}

function LocalForm({ source, heading, blurb }: { source: string; heading: string; blurb: string }) {
  const [site, setSite] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');
  const [trap, setTrap] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState('sending');
    try {
      const res = await fetch(FORM.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          name: site || 'not given',
          email,
          projectType: `local: ${source}`,
          projectBrief: `Website or business: ${site}\n\n${note || '(no note)'}`,
          website: trap, // honeypot: empty for people
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
      <div className="rounded-xl border-2 border-green-700 bg-green-50 p-6" role="status">
        <h2 className="text-2xl font-bold text-green-900">Got it.</h2>
        <p className="mt-3 text-lg text-green-900">
          I look at it myself, not a robot, and reply within one business day. If it is urgent, call {SITE.phoneDisplay}.
        </p>
      </div>
    );
  }

  const input =
    'mt-2 w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-lg text-slate-900 placeholder:text-slate-500 focus:border-[#00A8F0] focus:outline-none focus:ring-4 focus:ring-sky-200';

  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-white p-6 shadow-[0_20px_50px_-24px_rgba(10,22,64,0.35)] ring-1 ring-slate-200 sm:p-8">
      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{heading}</h2>
      <p className="mt-3 text-lg text-slate-800">{blurb}</p>
      <div className="mt-6 space-y-5">
        <div>
          <label htmlFor="lf-site" className="block text-base font-semibold text-slate-900">
            Your website address
          </label>
          <p id="lf-site-help" className="mt-1 text-base text-slate-700">
            If you do not have one, write the name of your business instead.
          </p>
          <input
            id="lf-site"
            required
            value={site}
            onChange={(e) => setSite(e.target.value)}
            aria-describedby="lf-site-help"
            placeholder="yourbusiness.com"
            className={input}
          />
        </div>
        <div>
          <label htmlFor="lf-email" className="block text-base font-semibold text-slate-900">
            Where do I send it?
          </label>
          <input
            id="lf-email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@yourbusiness.com"
            className={input}
          />
        </div>
        <div>
          <label htmlFor="lf-note" className="block text-base font-semibold text-slate-900">
            Anything you already know is wrong? <span className="font-normal text-slate-700">(optional)</span>
          </label>
          <textarea id="lf-note" rows={3} value={note} onChange={(e) => setNote(e.target.value)} className={input} />
        </div>
        <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
          <label htmlFor="lf-website">Website</label>
          <input id="lf-website" tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} />
        </div>
        <button
          type="submit"
          disabled={state === 'sending'}
          className="w-full rounded-xl bg-[#FFC81E] px-6 py-4 text-lg font-bold text-[#0A1640] hover:bg-[#ffd54f] focus:outline-none focus:ring-4 focus:ring-amber-200 disabled:opacity-60 sm:w-auto"
        >
          {state === 'sending' ? 'Sending…' : 'Send it to me'}
        </button>
        {state === 'error' ? (
          <p role="alert" className="text-lg font-semibold text-red-800">
            That did not go through. Please call {SITE.phoneDisplay} or email {SITE.email}.
          </p>
        ) : null}
      </div>
    </form>
  );
}

function LocalFooter() {
  return (
    <footer style={{ background: NAVY }} className="px-5 py-12 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-3 text-base">
          <p className="flex items-center gap-3 text-lg font-bold text-white">
            <img src="/logo-64.webp" alt="" width={32} height={32} className="h-8 w-8" />
            Denys Korolkov · Prema Vision LLC
          </p>
          <p>Software engineer, 18+ years. I live in Palm Coast and help businesses in Flagler, Volusia and St. Johns counties.</p>
          <p>
            <a href={SITE.phoneHref} className="font-semibold text-white underline underline-offset-4">
              {SITE.phoneDisplay}
            </a>
            {' · '}
            <a href={`mailto:${SITE.email}`} className="font-semibold text-white underline underline-offset-4">
              {SITE.email}
            </a>
          </p>
        </div>
        <ul className="space-y-2 text-base">
          {LINKS.map((l) => (
            <li key={l.path}>
              <Link to={l.path} className="text-slate-200 underline-offset-4 hover:text-white hover:underline">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="space-y-2 text-base">
          <li>
            <a href={APP_STORE} className="text-slate-200 underline-offset-4 hover:text-white hover:underline">
              Get Routine Run on the App Store
            </a>
          </li>
          <li>
            <a href={SITE.linkedinDenys} className="text-slate-200 underline-offset-4 hover:text-white hover:underline">
              Denys on LinkedIn
            </a>
          </li>
          <li>
            <Link to="/" className="text-slate-200 underline-offset-4 hover:text-white hover:underline">
              Prema Vision: AI systems for companies
            </Link>
          </li>
          <li>
            <Link to="/privacy/" className="text-slate-200 underline-offset-4 hover:text-white hover:underline">
              Privacy
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

function Shell({ current, children }: { current: string; children: React.ReactNode }) {
  return (
    <div className="local min-h-screen font-sans">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <LocalHeader current={current} />
      <OfferBanner />
      <main id="main">{children}</main>
      <LocalFooter />
    </div>
  );
}

const FormSection = (props: { source: string; heading: string; blurb: string }) => (
  <section id="start" className="bg-gradient-to-b from-[#F5F7FB] to-[#E6F4FC] px-5 py-14 sm:py-20">
    <div className="mx-auto max-w-3xl">
      <LocalForm {...props} />
    </div>
  </section>
);

/* ---------------------------------------------------------------------- */

export function LocalIndex() {
  const cards = [
    {
      path: '/local/app-clips/',
      title: 'App Clips at your door',
      price: 'Free setup with any service (regular $500), 90-day pilot free',
      body: "A code at your door or counter opens your steps on a visitor's iPhone in a second, with nothing to install: check-in, a first visit, what to bring, how the gate opens."
    },
    {
      path: '/local/apps/',
      title: 'An app for your regulars',
      price: 'Wallet loyalty card from $1,500 (regular $2,000), iPhone app from $7,500 (regular $10,000)',
      body: 'Your regulars keep your card in Apple Wallet, or book and reorder from your own app in two taps, and hear from you when a slot opens.'
    },
    {
      path: '/local/websites/',
      title: 'Websites built for the phone',
      price: '$3,000 to $4,500 (regular $4,500 to $6,000)',
      body: 'Most of your visitors arrive on a phone. Five to seven pages that load fast there, read well with a thumb and put your number one tap away. You own all of it.'
    },
    {
      path: '/local/automation/',
      title: 'Missed calls, answered',
      price: 'Setup $997 (regular $1,500), then monthly',
      body: "For contractors on a job: when you can't pick up, the caller gets a text back in seconds, and the job lands in your calendar and on your phone."
    },
    {
      path: '/local/check/',
      title: 'Website check, on a phone',
      price: '$250 (regular $350), credited against any work',
      body: 'I go through your website the way a customer does, on a phone, and write down what is broken and what it costs to fix.'
    }
  ];
  return (
    <Shell current="/local/">
      <Hero kicker="Flagler, Volusia, St. Johns" title="Your business, on your customers' phones.">
        <p>
          I'm Denys, a mobile and AI engineer who lives in Palm Coast. I build mobile apps with AI inside for companies
          across the US. For businesses around here I bring the same to the phone in your customer's pocket: your steps
          at the door, a site that works with a thumb, and no call left unanswered. Fixed prices, and you can call me, a
          neighbour, when something breaks.
        </p>
        <p>
          <strong>Right now I'm launching App Clips</strong>: a code at your door that opens your steps on a visitor's
          iPhone, with nothing to install. To get the first ones out, every price on these pages is a launch price with
          the discount already included, and the App Clip is set up free.
        </p>
      </Hero>
      <section className="bg-[#F5F7FB] px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-[1.75rem] font-bold text-slate-900 sm:text-4xl">What I build for local businesses</h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-2">
            {cards.map((c) => (
              <li key={c.path}>
                <Link
                  to={c.path}
                  className="group flex h-full flex-col rounded-2xl border-t-4 border-[#00A8F0] bg-white p-7 shadow-[0_20px_50px_-28px_rgba(10,22,64,0.4)] ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-24px_rgba(10,22,64,0.45)]"
                >
                  <h3 className="text-2xl font-bold text-slate-900">{c.title}</h3>
                  <p className="mt-2 text-base font-semibold text-[#0B6FA4]">{c.price}</p>
                  <p className="mt-3 text-lg leading-relaxed text-slate-800">{c.body}</p>
                  <span className="mt-auto pt-5 font-semibold text-slate-900 underline underline-offset-4 group-hover:text-[#0B6FA4]">
                    Read more
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <FormSection source="local index" heading="Not sure which one you need?" blurb="Send me your website address, or the name of your business, and I'll tell you honestly." />
    </Shell>
  );
}

export function LocalCheck() {
  return (
    <Shell current="/local/check/">
      <Hero kicker="Website check · Flagler, Volusia, St. Johns" title="Your website may be costing you calls right now.">
        <p>
          In August 2026 I checked 57 local business websites across Palm Coast, Bunnell, Ormond, Daytona, Port Orange,
          New Smyrna and St. Augustine. Only two had no website at all.
          <strong> Nineteen had something concretely broken.</strong>
        </p>
        <p>
          Not "could be improved". Broken, in ways their owners almost certainly do not know about, because the site
          looks fine on the computer they built it on.
        </p>
      </Hero>

      <Block title="Real things I found in this county, August 2026" tone="grey">
        <ul className="list-disc space-y-3 pl-6">
          <li>
            A pool company whose security certificate does not match their domain. Type their address without the www
            and <strong>every browser shows a full-page red warning</strong>.
          </li>
          <li>
            A barbershop whose website lists a San Francisco address and the phone number 555-555-5555.{' '}
            <strong>Their real number appears nowhere on it.</strong>
          </li>
          <li>
            A bar whose website, listed in every directory, returns a 404. Google shut down that kind of page in 2024
            and nobody told them.
          </li>
          <li>
            A boat shop with a 441-kilobyte website and <strong>no phone number anywhere on it</strong>.
          </li>
          <li>
            Two auto shops whose sites do not resize on a phone, and whose browser tab shows no name at all, so their
            Google result has no headline to click.
          </li>
          <li>A restaurant whose homepage has no phone, no address, no hours and no menu. Search engines see a blank page.</li>
        </ul>
        <p>
          Every one of those was verified, not guessed. I have not contacted any of them. If yours is on that list you
          will recognise it immediately.
        </p>
      </Block>

      <Block title="What the check actually is">
        <p>
          I go through your website the way a customer does, on a phone, on a normal connection, and I check the things
          that quietly cost you work:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Does it load, and does it load securely, with and without the www</li>
          <li>Does it work on a phone, or does it load desktop-width and force pinching</li>
          <li>Is your phone number on it, findable in one tap, and is it the right one</li>
          <li>What your Google result actually looks like, headline included</li>
          <li>Whether your Google Business Profile exists and says the right thing</li>
          <li>What ChatGPT and Google's AI say about your business, because more and more people ask them first</li>
          <li>Contact forms: do they still deliver, or have they been failing silently</li>
          <li>Accessibility failures that carry real legal exposure in Florida</li>
        </ul>
        <p>
          You get a plain-language list: what is wrong, how much it matters, and what it costs to fix, including the
          things you can fix yourself for nothing. No jargon and no report padded out to look expensive.
        </p>
      </Block>

      <section className="bg-[#F5F7FB] px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-3 text-slate-900">Try the first five checks yourself</h2>
          <p className="mb-8 max-w-3xl text-lg leading-relaxed text-slate-700">
            Ten minutes, on your own phone. If any step goes wrong, that's exactly what the full check finds, with the fix
            and its price.
          </p>
          <RoutineCard slug="website-check" />
        </div>
      </section>

      <Block title="What it costs" tone="grey">
        <Price
          rows={[
            { what: 'Website check, written up', cost: '$250', was: '$350' },
            { what: 'Credited in full against any work you decide to do', cost: '−$250' },
            { what: 'Fixing what it finds', cost: 'quoted per item, before I start' }
          ]}
          note="If I look at your site and find nothing worth fixing, I will tell you that and there is no charge. That has happened: 36 of the 57 sites I checked were fine. Order the check and your App Clip is set up free."
        />
      </Block>

      <Block title="Why Florida matters here">
        <p>
          Website accessibility lawsuits in Florida went from 310 in 2022 to <strong>961 in 2025</strong>, roughly a
          third of every such case filed in the country. Florida is now the second most active venue in the United
          States, and the appeals-court decision that used to protect businesses here was wiped off the books in 2022.
        </p>
        <p>
          Restaurants and anything with online ordering are the most targeted. The six most common failures cause almost
          all of it, and most are cheap to fix. I check for them and tell you where you stand.
        </p>
        <p className="text-base text-slate-700">
          I am not a lawyer and this is not legal advice. Those are filing counts, published by a law firm that tracks
          them.
        </p>
      </Block>

      <FormSection
        source="check"
        heading="Send me your website address"
        blurb="I look at it myself and reply within one business day, whether or not there is anything to sell you."
      />
    </Shell>
  );
}

export function LocalApps() {
  return (
    <Shell current="/local/apps/">
      <Hero kicker="Apps for your regulars · Flagler, Volusia, St. Johns" title="Your regulars already have your number. Put your business on their phone.">
        <p>
          A paper punch card gets lost. A text from you gets buried. The things people keep on their phone are the
          ones they use every week: a card in Apple Wallet, an app on the home screen.
        </p>
        <p>
          I build mobile apps for companies across the US. For businesses around here I offer two sizes of the same
          idea, at launch prices with the discount already included.
        </p>
      </Hero>

      <Block title="A loyalty card in Apple Wallet" tone="grey">
        <p>
          The smallest step onto your customers' phones, and often the only one you need. They scan a code at your
          counter and the card is in their Wallet, with nothing to install.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Stamps or points that update on their own after each visit</li>
          <li>Your logo, colours and offer on the card</li>
          <li>Always at hand in Wallet, next to the cards they pay with</li>
          <li>Updates to every card at once: a new offer, a holiday schedule</li>
          <li>Google Wallet for Android customers, on request</li>
        </ul>
      </Block>

      <Block title="An app of your own">
        <p>
          For businesses people come back to every week or month: a salon, a gym, a restaurant, a pet groomer, a car
          wash. Your own iPhone app, on the App Store under your name.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Booking or reordering in two taps, connected to the calendar or system you already use</li>
          <li>Your services, menu or prices, which you change yourself</li>
          <li>Notifications when a slot opens or a special is on, sent from your phone</li>
          <li>The loyalty card built in</li>
          <li>The App Store listing, review and launch handled for you</li>
        </ul>
        <p>
          It is built the way I build apps for larger companies, with tests from the first day, so it keeps working
          after the next iOS update.
        </p>
      </Block>

      <Block title="What it costs" tone="grey">
        <Price
          rows={[
            { what: 'Loyalty card in Apple Wallet, designed and set up', cost: 'from $1,500', was: '$2,000' },
            { what: 'Your own iPhone app, 6 to 10 weeks', cost: 'from $7,500', was: '$10,000' },
            { what: 'Routine Run App Clip at your door, setup', cost: 'free', was: '$500' },
            { what: 'Android app, or care after launch', cost: 'quoted separately' }
          ]}
          note="Fixed price agreed before I start. Half up front, half when it is live. The app, the App Store account and the customer list are yours."
        />
      </Block>

      <FormSection
        source="apps"
        heading="Tell me what your regulars come back for"
        blurb="A haircut, a coffee, a weekly order. Two sentences are enough, and I will tell you whether a Wallet card covers it or an app is worth it."
      />
    </Shell>
  );
}

export function LocalWebsites() {
  return (
    <Shell current="/local/websites/">
      <Hero kicker="Websites · Flagler, Volusia, St. Johns" title="A website that works on a phone and makes the phone ring.">
        <p>
          Most of your customers find you on a phone, in a hurry, standing in a driveway or sitting in a truck. If your
          site makes them pinch, scroll sideways, or hunt for your number, they call whoever came up second.
        </p>
        <p>I build small business websites that load fast, read well on a phone, and put your number one tap away.</p>
      </Hero>

      <Block title="What you get" tone="grey">
        <ul className="list-disc space-y-2 pl-6">
          <li>Five to seven pages, written with you, not stuffed with filler</li>
          <li>Built for the phone first, then the desktop</li>
          <li>Your phone number tappable on every screen</li>
          <li>A contact form that actually delivers, and that I test</li>
          <li>Your Google Business Profile set up and wired in, so the map listing and the site agree</li>
          <li>Accessibility to WCAG 2.1 AA, with the report that says so</li>
          <li>Fast: no page-builder bloat, no forty plugins</li>
        </ul>
        <p>
          No WordPress unless you specifically want it. Most web shops between here and St. Augustine build on
          WordPress, which is why so many of those sites break quietly a year later when a plugin updates. I build
          sites that have nothing to break.
        </p>
      </Block>

      <Block title="What it costs">
        <Price
          rows={[
            { what: 'Website, 5 to 7 pages', cost: '$3,000 to $4,500', was: '$4,500 to $6,000' },
            { what: 'Care plan: hosting, updates, backups, monitoring, small changes', cost: 'from $150/mo', was: '$200/mo' },
            { what: 'Routine Run App Clip at your door, setup', cost: 'free', was: '$500' },
            { what: 'Website check first, credited against the build', cost: '$250', was: '$350' },
            { what: 'E-commerce or booking', cost: 'quoted separately' }
          ]}
          note="Fixed price agreed before I start, and it does not move unless you change what you asked for. Half up front, half when it goes live."
        />
        <p>
          You will find people who will do it for four hundred dollars. That is four hours of work and you will get four
          hours of work. You will also find agencies that will not tell you the price until you sit through a meeting. I
          would rather you knew now.
        </p>
      </Block>

      <Block title="You own it. Here is how you leave." tone="grey">
        <p>
          If you stop working with me, you get the whole site exported, and your domain stays registered in your name,
          where it should have been all along. No hostage taking, no "we will look into it", no thirty-day wait.
        </p>
        <p>
          I put that in writing because the most common warning small business owners read about web designers is that
          the designer ends up controlling something they cannot get back. It is a fair warning. It just should not apply
          to me.
        </p>
      </Block>

      <Block title="Honest about where I am">
        <p>
          I have built software for 18+ years, including at Autodesk and BigPanda, and in 2026 I built a production AI
          interview system as CTO. What I do not yet have is a wall of local logos, because I started working with
          businesses here in 2026.
        </p>
        <p>
          So I will do two things. I will show you exactly what I have built and let you judge the work. And my first
          few local projects are priced to be worth your risk, in exchange for your honest word about how it went.
        </p>
      </Block>

      <FormSection
        source="websites"
        heading="Send me your website address"
        blurb="Have one already? I will tell you whether it needs replacing or just fixing. Those are very different bills."
      />
    </Shell>
  );
}

export function LocalAutomation() {
  return (
    <Shell current="/local/automation/">
      <Hero kicker="Missed calls · for contractors and service businesses" title="The calls you miss are the jobs you lose.">
        <p>
          You are on a roof, under a house, or driving. The phone rings. By the time you call back, they have booked
          someone else. Nobody needs to explain that arithmetic to you.
        </p>
        <p>
          I build the software that answers, takes the details, texts them back, and puts the job in front of you, so a
          missed call becomes a message instead of a lost job.
        </p>
      </Hero>

      <Block title="What it does" tone="grey">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Answers when you cannot.</strong> Name, address, what is wrong, how urgent.
          </li>
          <li>
            <strong>Texts the caller back within seconds</strong>, so they stop dialling the next name on the list.
          </li>
          <li>
            <strong>Puts it where you already work:</strong> your calendar, your phone, Jobber, Housecall Pro,
            ServiceTitan, Square, whatever you use.
          </li>
          <li>
            <strong>Follows up with the ones who never called back</strong>, on a schedule you set.
          </li>
          <li>
            <strong>Asks for the review</strong> after the job is done, once, without nagging.
          </li>
        </ul>
      </Block>

      <Block title="What I will tell you before you buy it">
        <p>AI phone answering is not magic, and I would rather you heard the failure modes from me than found them yourself.</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Addresses are the hard part.</strong> Street names get misheard. I test yours specifically, against
            your real service area, before it goes live.
          </li>
          <li>
            <strong>Some callers want a human, immediately.</strong> So it says it is an assistant in the first sentence,
            and anyone who asks gets put through or gets you texted at once.
          </li>
          <li>
            <strong>Florida requires everyone on a call to consent to recording.</strong> That is not a formality here, it
            is a felony statute. The announcement plays before recording starts, and anyone who declines gets a normal
            voicemail.
          </li>
          <li>
            <strong>Texting has rules.</strong> Your business gets registered properly with the carriers, in your name, and
            STOP works instantly and permanently.
          </li>
          <li>
            <strong>I will not do outbound robocalls or cold texting.</strong> That is where the lawsuits live, and I am not
            putting your company in that position.
          </li>
        </ul>
      </Block>

      <Block title="What it costs" tone="grey">
        <Price
          rows={[
            { what: 'Setup, built around your business and tested on your real calls', cost: '$997', was: '$1,500' },
            { what: 'Monthly, including 500 minutes of answered calls', cost: '$297 to $397', was: '$397 to $497' },
            { what: 'Missed-call text-back only, no answering', cost: 'from $150/mo', was: '$200/mo' },
            { what: 'Routine Run App Clip at your door, setup', cost: 'free', was: '$500' },
            { what: 'Bigger jobs: quoting, document intake, connecting systems', cost: 'quoted' }
          ]}
          note="Month to month. No annual contract and no cancellation fee. A part-time receptionist runs about $2,580 a month and does not work weekends."
        />
        <p>
          There are $49-a-month apps that answer a phone. They do not know your service area, they do not put the job in
          your calendar, and there is nobody to call when they get it wrong. That difference is the entire job.
        </p>
      </Block>

      <Block title="Why me">
        <p>
          Eighteen-plus years building software, most of it the unglamorous kind that has to keep working while people
          depend on it. In 2026 I built a production AI system that holds conversations with clients, as CTO, and I live
          in Palm Coast.
        </p>
        <p>When it breaks, and software breaks, you call me, not a support queue in another time zone.</p>
      </Block>

      <FormSection
        source="automation"
        heading="Tell me about your calls"
        blurb="Roughly how many come in a week, and how many you think you are missing. Your website address is enough to start."
      />
    </Shell>
  );
}

export function LocalAppClips() {
  const fits = [
    ['Vacation rentals and hotels', 'Check-in when nobody is at the desk, and check-out by the door: trash, thermostat, the key in the lockbox.'],
    ['Campgrounds and RV parks', 'Arrival in order: where to park, hookups, quiet hours, the code for the bathhouse.'],
    ['Clinics and studios', 'What to bring and when to stop eating, or a first visit: the locker, the induction, the class you booked.'],
    ['Restaurants and shops', "Opening and closing lists for staff, done the same way by whoever is on. Returns at the counter: what to bring."],
    ['Tours, museums and events', 'A walk with one step per stop, and what to look at. The phone stays in a pocket between stops.'],
    ['Storm season', 'A checklist that runs against the clock: 72 hours, 48, 24. Which shelter takes pets.']
  ];
  return (
    <Shell current="/local/app-clips/">
      <Hero kicker="App Clips · Flagler, Volusia, St. Johns" title="A code at your door. The steps on your visitor's phone.">
        <p>
          Your visitors ask the same questions every time: where to park, how the gate opens, what to do before they
          leave. A QR code or an NFC tag opens those steps on their iPhone in a second.{' '}
          <strong>Nothing to install, no account, nothing collected.</strong>
        </p>
        <p>
          It runs on Routine Run, the app I built. Your staff can use the same steps as
          checklists on the phone or the Watch.{' '}
          <a href={APP_STORE} className="font-semibold text-[#0B6FA4] underline underline-offset-4">
            Get Routine Run on the App Store
          </a>
          .
        </p>
      </Hero>

      <Block title="Launch offer" tone="grey">
        <p>
          I'm launching App Clips with local businesses around Palm Coast, and I want the first ones to be places I can
          walk into and see working. So while the launch runs:
        </p>
        <ul className="list-disc space-y-3 pl-6">
          <li>
            <strong>Order any service</strong> (a website check, a website, or missed-call setup) and I set up your App
            Clip for free: I write the steps with you, from the checklist you hand out today.
          </li>
          <li>
            <strong>Launch prices on every service</strong>: the prices you see on these pages already include the
            discount.
          </li>
          <li>
            <strong>The pilot is with Routine Run and free for 90 days</strong>, one location. After that, Routine Run
            costs $29 a month per location, billed yearly, or you simply stop. The setup is my part, and it is free.
          </li>
        </ul>
        <Price
          rows={[
            { what: 'App Clip setup: your steps written with you, codes and tags ready', cost: 'free with any service', was: '$500' },
            { what: 'App Clip on its own, setup', cost: '$350', was: '$500' },
            { what: 'Routine Run pilot, one location', cost: 'free for 90 days' },
            { what: 'After the pilot, Routine Run per location', cost: '$29/mo, billed yearly' }
          ]}
        />
        <p className="text-base text-slate-700">
          Want only the App Clip? Ask for a pilot below. I'm choosing a small number of pilot partners around Palm Coast.
        </p>
      </Block>

      <Block title="Where it fits">
        <ul className="grid gap-4 sm:grid-cols-2">
          {fits.map(([t, b]) => (
            <li key={t} className="rounded-xl border-2 border-slate-200 p-5">
              <h3 className="text-lg font-bold text-slate-900">{t}</h3>
              <p className="mt-2 text-base text-slate-800">{b}</p>
            </li>
          ))}
        </ul>
      </Block>

      <Block title="How it works" tone="grey">
        <ol className="list-decimal space-y-3 pl-6">
          <li>
            <strong>Scan.</strong> A QR code on the door, an NFC tag on the counter, or a link in your confirmation email.
          </li>
          <li>
            <strong>One step at a time.</strong> Each says what counts. Something left in the car can wait, and the step
            comes back at the end.
          </li>
          <li>
            <strong>Put the phone away.</strong> The step they are on stays on the Lock Screen while they wait.
          </li>
          <li>
            <strong>You change the steps any time.</strong> No reprinting the code.
          </li>
        </ol>
      </Block>

      <Block title="What I will tell you before you start">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>App Clips are an iPhone feature.</strong> For visitors on Android, I put the same steps on a plain page
            on your website.
          </li>
          <li>
            <strong>It does not take money or orders.</strong> Payments stay with your point-of-sale. This guides people
            through steps.
          </li>
          <li>
            <strong>Where it stands:</strong> Routine Run and its App Clip have been on the App Store since 25 October 2026.
            Pilot partners are set up first.
          </li>
        </ul>
      </Block>

      <FormSection
        source="app clip pilot"
        heading="Ask for a pilot"
        blurb="Tell me what your visitors or staff keep asking. Your website address, or the name of your business, is enough to start."
      />
    </Shell>
  );
}
