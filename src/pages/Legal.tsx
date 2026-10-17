import { ButtonLink, Container, RunSteps, Section, type Step } from '../components';
import { SITE } from '../site';
import { PageHero } from './shared';

/* Privacy and how a contract works. Plain language, written to match what the
 * site actually does (no cookies, no accounts, one contact form that emails
 * us through Google Apps Script). Denys reviews before publishing; this is not
 * legal advice and a lawyer may want to tighten the terms. */

const UPDATED = '17 October 2026';

const Doc = ({ children }: { children: React.ReactNode }) => (
  <Container className="max-w-[42rem] pb-20">
    <div className="prose-pv text-[17px] text-slate-300">{children}</div>
  </Container>
);

export function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="What this site collects, and what it doesn't"
        lead={<p>Short version: no accounts, no cookies, no tracking of who you are. If you write to us, we keep what you wrote so we can reply.</p>}
      />
      <Doc>
        <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-slate-500">Last updated {UPDATED}</p>
        <h2>Who we are</h2>
        <p>
          {SITE.legalName}, {SITE.city}. Questions about your data go to{' '}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
        <h2>What we collect</h2>
        <ul>
          <li>
            <strong>What you send through a form:</strong> your name, email, company, website and message. The form sends
            it to our email inbox through Google Apps Script.
          </li>
          <li>
            <strong>What you send by email or phone:</strong> the same, through our email and phone providers.
          </li>
          <li>
            <strong>Server logs:</strong> the site is hosted on GitHub Pages, which keeps standard request logs, including
            IP addresses, for security.
          </li>
        </ul>
        <p>
          The site sets no cookies and has no accounts. To count visits we use Cloudflare Web Analytics, which works
          without cookies and without identifying you: it sees which page was opened, from which site you came, and your
          browser and country, never who you are.
        </p>
        <h2>How we use it</h2>
        <p>Only to reply to you, prepare a proposal, and do the work you hire us for. We never sell it or use it for ads.</p>
        <h2>Who else sees it</h2>
        <p>
          Our service providers, only as needed to run the site and our email: Google (Workspace and Apps Script), GitHub
          (hosting) and Cloudflare (visit counts). During a project we work inside your accounts and under your rules.
        </p>
        <h2>How long we keep it</h2>
        <p>
          Inquiries that don't become a project are deleted within 12 months. Project correspondence is kept as long as
          the law and the contract require. Ask us any time and we delete what we can.
        </p>
        <h2>Your choices</h2>
        <p>
          Write to <a href={`mailto:${SITE.email}`}>{SITE.email}</a> to see, correct or delete what we have about you. We
          reply within 30 days, usually much sooner.
        </p>
        <h2>Changes</h2>
        <p>When this page changes, the date at the top changes with it.</p>
      </Doc>
    </>
  );
}

const CONTRACT_STEPS: Step[] = [
  { title: 'A 30-minute call', when: 'Free', chip: 'Talk', body: 'We hear the problem and say whether we are the right people. An NDA first, if you need one.' },
  { title: 'A written proposal', when: 'Within 2 business days', chip: 'Scope', body: "What we'll build, what's not included, a fixed price, a timeline, and what 'done' means." },
  { title: 'Agreement and deposit', when: 'You sign', chip: 'Contract', body: 'A short services agreement and a statement of work with Prema Vision LLC, signed electronically. 50% to start.' },
  { title: 'Weekly builds', when: 'During', chip: 'Build', body: 'A working build every week. A change of scope is written down with its price before we start it.' },
  { title: 'Acceptance and handover', when: 'At the end', chip: 'Done', body: 'You check it against the list in the statement of work, pay the second 50%, and get the code, accounts and a handover doc.' }
];

const TERMS = [
  ['Fixed price', 'Agreed before work starts. It moves only if you change what you asked for, and only after you approve the new price in writing.'],
  ['Payment', 'Projects: 50% to start, 50% on acceptance. Retainers: monthly in advance, three months at a time. Invoices come from Prema Vision LLC.'],
  ['You own the work', 'Code, designs, prompts, data and accounts are yours once paid. We keep only general know-how and our own tools.'],
  ['Who does the work', 'Denys leads every project and reviews everything that ships; AI agents do the routine engineering. If a project needs more hands, we name the specialist in advance, they sign the same confidentiality terms, and they join only with your OK.'],
  ['Bugs after launch', 'Defects in what we built are fixed free for 30 days after acceptance. The check four weeks after launch is included.'],
  ['Confidentiality', 'Your business, data and code stay confidential, during the project and after it. Our access to your systems ends with the project.'],
  ['Stopping', 'You can stop a project at any milestone and pay for the work done. Retainers run month to month after the first three months, with 30 days notice.']
];

export function HowWeWork() {
  return (
    <>
      <PageHero
        eyebrow="How we work together"
        title="From the first call to a signed handover"
        lead={
          <p>
            What happens, in what order, and what you sign. No hourly billing, no surprises: a fixed price, a written
            scope, and a working build every week.
          </p>
        }
      />
      <Section eyebrow="The steps" title="Five steps, from call to handover">
        <RunSteps steps={CONTRACT_STEPS} />
      </Section>
      <Section tone="ambient" eyebrow="The terms" title="What the agreement says, in plain words">
        <div className="snap-row hide-scrollbar mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TERMS.map(([t, b]) => (
            <div key={t} className="glass rounded-2xl p-6">
              <h3>{t}</h3>
              <p className="mt-2 text-[15px] leading-6 text-slate-300">{b}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <ButtonLink to="/contact/">Start with a call</ButtonLink>
        </div>
      </Section>
    </>
  );
}
