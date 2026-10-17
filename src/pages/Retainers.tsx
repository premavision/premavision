import { ArrowLink, ButtonLink, Faq, PackageCard, PROOF, ProofLinks, RunSteps, Section, type Package, type QA, type Step } from '../components';
import { PageHero } from './shared';
import { RoutineCard } from '../routines';
import { InlineQuotes } from '../testimonials';

/* Retainers: AI oversight as the lead offer, care plans for the rest.
 * Benchmarks (Oct 2026, agency guides): AI monitoring $500–1,200/mo,
 * active management $1,200–2,500, engineering retainers with evals and
 * security $2,500–5,000+, partner tiers $4,500–8,000; app maintenance
 * 15–20% of the build per year. */

export const OVERSIGHT_PLANS: Package[] = [
  {
    name: 'Watch',
    time: 'Monthly review',
    price: '$900 a month',
    body: 'We watch what your AI does, alert you when it goes wrong, and once a month read real runs and tell you what we found, before your customers do.',
    includes: [
      'Alerts when failures, cost or latency cross a line you set',
      'A sample of real runs read and scored against your test set',
      'Cost, latency and failure rates, month against month',
      'The top three issues, each with its cause and a fixed price to fix it'
    ]
  },
  {
    name: 'Steward',
    time: 'Weekly review',
    price: '$2,400 a month',
    highlight: true,
    body: 'A weekly look at your AI in production, with the fixes included. The test set grows from every real failure, so a mistake is caught once and then never again.',
    includes: [
      'Everything in Watch, plus a weekly digest you can read in five minutes',
      'Up to 12 hours a month of fixes: prompts, rules, evals, code',
      'Every prompt or model change tested before it ships',
      'A prompt-injection test every quarter'
    ]
  },
  {
    name: 'Partner',
    time: 'Continuous',
    price: '$4,800 a month',
    body: 'For AI that carries part of your business. Someone who knows your system is on it every week and answers the same business day when it misbehaves.',
    includes: [
      'Everything in Steward, with up to 30 hours a month',
      'Same or next business day response to AI incidents',
      'New models from your providers tested on your cases',
      'A quarterly plan: what to automate next, what to stop'
    ]
  }
];

/* Paid separately, once, on top of any plan. */
export const ADD_ONS: Package[] = [
  {
    name: 'Dashboards in business language',
    time: 'One-time',
    price: '$1,500',
    body: 'Outcomes, quality, cost per task and what needs a person, on one screen your managers read without us.'
  },
  {
    name: 'Alerts where your team already is',
    time: 'One-time',
    price: '$900',
    body: 'Slack, Telegram, email or SMS, routed to the person who can act, with the trace one tap away.'
  },
  {
    name: 'An evaluator for your domain',
    time: 'One-time, each',
    price: '$1,500',
    body: 'An automatic check for what good means in your work, calibrated against your experts until it agrees with them.'
  },
  {
    name: 'Prompt-injection test',
    time: 'One-time',
    price: '$2,400',
    body: 'We try to make your AI leak, misbehave or act outside its role, and hand you the fixes ranked by risk.'
  },
  {
    name: 'Cost review',
    time: 'One-time',
    price: '$1,500',
    body: 'Where the money goes per run and per agent, and what to change: caching, a smaller model, shorter context.'
  },
  {
    name: 'Audit log for compliance',
    time: 'One-time',
    price: 'from $2,400',
    body: 'Who asked what, what the AI did and who approved it, exported in a form your auditor or client can read.'
  }
];

const DELIVERABLES = [
  ['Alerts, as it happens', 'When failure rate, cost or latency crosses the line you set, the right person hears about it, with the run attached.'],
  ['A weekly digest', 'How many runs, how many went well, what it cost, and the handful worth a look, each linked to its trace. Five minutes to read.'],
  ['A monthly analysis', 'What people actually asked, where the AI was unsure, which steps a person keeps correcting, what to automate next and what to stop.'],
  ['A quarterly plan', 'On Partner: models worth switching to, costs to cut, and the next process worth handing to AI.']
];

export const CARE_PLANS: Package[] = [
  {
    name: 'Mobile app care',
    time: 'Monthly',
    price: 'from $800 a month',
    body: 'Every September Apple ships a new iOS and watchOS, and App Intents, Siri and the on-device model change with it. Your app keeps up without a scramble.',
    includes: ['New OS releases tested and shipped', 'Crash and App Store review watch', 'Up to 6 hours a month of small changes']
  },
  {
    name: 'Expert system care',
    time: 'Monthly',
    price: 'from $1,800 a month',
    body: 'For an AI interviewer or expert system in daily use: your experts get help with the taxonomy and prompts, and quality is measured every month.',
    includes: ['Eval runs and a quality report every month', 'Model updates tested on your interviews', 'Up to 10 hours a month for changes']
  },
  {
    name: 'Infrastructure care',
    time: 'Monthly',
    price: 'from $1,200 a month',
    body: 'Monitoring that reaches the right person, backups that have actually been restored, dependencies and security patches kept current, and a cloud bill reviewed line by line.',
    includes: ['A restore test every month', 'Security and dependency updates', 'Up to 8 hours a month']
  },
  {
    name: 'Technical partner for founders',
    time: 'Monthly, 3 months at a time',
    price: 'from $6,000 a month',
    body: 'An experienced engineer on your side of the table: architecture decisions, vendor and hiring checks, reviews of the work that matters.',
    includes: ['A weekly call and same-day answers in your chat']
  }
];

const WHY = [
  ['Models change under you', 'Providers update and retire models. The same prompt can answer differently next month, and nothing in your code changed.'],
  ['AI fails plausibly', 'It rarely crashes. It gives a confident, slightly wrong answer, and the next step treats it as true.'],
  ['Costs creep', 'A longer prompt here, a retry loop there. The bill grows faster than usage, and nobody notices until it arrives.'],
  ['Users find new edges', "Real people ask what the test set never imagined. Those cases are the most valuable data you have, if someone reads them."]
];

const REVIEW: Step[] = [
  { title: 'Sample', when: 'Every review', chip: 'Read', body: 'Real runs pulled from your traces: the normal ones, the slow ones, the ones a person corrected.' },
  { title: 'Score', when: 'Every review', chip: 'Measure', body: 'Each run checked against your test set and your rules, by an evaluator we calibrate against people.' },
  { title: 'Find', when: 'Every review', chip: 'Diagnose', body: 'Failures grouped by cause, not by symptom, with cost and latency next to quality.' },
  { title: 'Fix', when: 'Within the plan', chip: 'Ship', body: 'Prompt, rule, eval or code: the fix goes out tested, and the failure becomes a test.' },
  { title: 'Report', when: 'Monthly', chip: 'Decide', body: 'One page in plain language: what the AI did, what broke, what we changed, what you should decide.' }
];

export const RETAINER_FAQ: QA[] = [
  {
    q: 'Can we start before launch?',
    a: 'Yes, and it is the best moment. Monitoring set up with the first real users catches the failures nobody tested for, while they are still cheap to fix.'
  },
  {
    q: 'Do we need to have built the system with you?',
    a: 'No. We start every retainer with a one-week audit of what you run today, priced at $2,400 and credited against the first month if you continue. If there are no traces to read yet, setting them up is the first fix.'
  },
  {
    q: 'How long do we commit for?',
    a: 'Three months at a time. After that it runs month to month and stops with 30 days notice.'
  },
  {
    q: 'What happens to unused hours?',
    a: 'They carry over one month, then expire. Work beyond the plan is quoted at a fixed price before we start it.'
  },
  {
    q: 'Who pays for the AI models and hosting?',
    a: 'You do, directly or at cost. The retainer is our work, never a markup on tokens.'
  },
  {
    q: 'Which tools do you watch?',
    a: 'LangSmith, Langfuse, OpenTelemetry traces or your own logs; OpenAI, Anthropic, Google, Apple and open models; agents in LangGraph or your own code.'
  }
];

export default function Retainers() {
  return (
    <>
      <PageHero
        image="process-track"
        eyebrow="Retainers"
        title={
          <>
            Someone watches what your AI does. <span className="text-gradient">From day one.</span>
          </>
        }
        lead={
          <p>
            Not only after launch. From the first real user, we monitor what your AI and systems do, alert you when
            something goes wrong, and send reports you can read in five minutes. Fixes are included, and the extra
            tooling is there when you need it.
          </p>
        }
      >
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/contact/">Start with an audit</ButtonLink>
          <ButtonLink to="/retainers/#oversight" variant="ghost">
            AI oversight plans
          </ButtonLink>
        </div>
      </PageHero>

      <Section eyebrow="What you get" title="You hear about problems before your customers do">
        <div className="snap-row hide-scrollbar mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DELIVERABLES.map(([t, b]) => (
            <div key={t} className="glass rounded-2xl p-6">
              <h3>{t}</h3>
              <p className="mt-2 text-[15px] leading-6 text-slate-300">{b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Why it needs a person" title="AI doesn't stay the way you shipped it">
        <div className="snap-row hide-scrollbar mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map(([t, b]) => (
            <div key={t} className="glass rounded-2xl p-6">
              <h3>{t}</h3>
              <p className="mt-2 text-[15px] leading-6 text-slate-300">{b}</p>
            </div>
          ))}
        </div>
        <RoutineCard
          slug="ai-ready"
          className="mt-12"
          intro="Where we start on day one of a retainer. Run it yourself first: if any step makes you hesitate, that's the first thing to watch."
        />
      </Section>

      <Section
        id="oversight"
        art="ops-pipeline"
        eyebrow="AI oversight"
        title="Three levels of attention"
        lead="For agents, assistants, AI interviews and automations, built by us or by anyone else, from the first real user or years after launch. Fixed monthly fee, three months at a time."
      >
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {OVERSIGHT_PLANS.map((p) => (
            <PackageCard key={p.name} p={p} />
          ))}
        </div>
        <InlineQuotes keys={['hadarBalance']} />
        <p className="mt-8 text-[14px] text-slate-400">
          Every retainer starts with the one-week AI agent audit ($2,400), credited against the first month.
        </p>
      </Section>

      <Section art="notes-pages" eyebrow="What a review looks like" title="The same five steps, every time">
        <RunSteps steps={REVIEW} />
      </Section>

      <Section
        eyebrow="Add-ons"
        title="Extra tooling, paid once"
        lead="On top of any plan, when you need it. Each one is a fixed price, agreed before we start."
      >
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ADD_ONS.map((p) => (
            <PackageCard key={p.name} p={p} />
          ))}
        </div>
      </Section>

      <Section
        tone="ambient"
        eyebrow="Care plans"
        title="For everything else we build"
        lead="The same idea for the rest of the stack: a fixed monthly fee, a capped number of hours, and someone who already knows the system."
      >
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {CARE_PLANS.map((p) => (
            <PackageCard key={p.name} p={p} />
          ))}
        </div>
        <p className="mt-6 text-[14px] text-slate-400">
          Local businesses around Palm Coast have their own care plans, from $150 a month. <ArrowLink to="/local/">See them</ArrowLink>
        </p>
      </Section>

      <Section
        eyebrow="Why us"
        title="We already run this on our own systems"
        lead="The Structed AI interview was measured this way: test personas copied from real interviews with the AI's mistakes, golden sets, run-against-run comparison, and an AI judge checked against people. Before AI, Denys worked on incident tooling at BigPanda, where noisy signals had to become one decision for an on-call team."
      >
        <ProofLinks
          links={[
            ['Structed milestones', PROOF.structedMilestones],
            ['Four weeks to a demo day', PROOF.demoDay],
            ['Denys on LinkedIn', PROOF.linkedinExperience]
          ]}
        />
      </Section>

      <Section eyebrow="Questions" title="What people ask before they sign">
        <Faq items={RETAINER_FAQ} />
        <div className="mt-12">
          <ButtonLink to="/contact/">Ask about a retainer</ButtonLink>
        </div>
      </Section>
    </>
  );
}
