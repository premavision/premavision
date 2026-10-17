import { ArrowLink, ButtonLink, Faq, PackageCard, PROOF, ProofLinks, RunSteps, Section, type Package, type QA, type Step } from '../components';
import { PageHero } from './shared';
import { InlineQuotes } from '../testimonials';
import { RoutineCard } from '../routines';

export const OPS_PACKAGES: Package[] = [
  {
    name: 'Process map',
    time: '1 week',
    price: '$2,400, credited to the build',
    highlight: true,
    body: 'We sit with the people who run the process and write it down as it really happens: steps, handoffs, the tools each step touches, the exceptions, and the decisions that need a person.',
    includes: ['Which steps AI can take, which a rule can take, which stay human', 'A fixed price for automating it']
  },
  {
    name: 'One process, automated with AI',
    time: '3 to 6 weeks',
    price: 'from $12,000',
    body: 'The predictable steps run on their own: reading, sorting, drafting, checking, routing. People get the decisions, with everything they need on one screen, and approve anything that cannot be undone.',
    includes: ['Runs inside the tools your team already uses', 'Every run recorded with what the AI did and why']
  },
  {
    name: 'AI connected to your systems',
    time: '2 to 4 weeks',
    price: 'from $6,500',
    body: 'Your CRM, helpdesk, inbox, calendar, Slack or database, connected to an AI model or assistant through APIs, webhooks and MCP. One integration done properly, with limits and logs.',
    includes: ['Claude or ChatGPT can read and act in your tools', 'Secrets kept out of prompts, access scoped per tool']
  },
  {
    name: "Your team's AI, set up properly",
    time: '2 to 3 weeks',
    price: 'from $4,800',
    body: "Your team already pays for ChatGPT or Claude, and everyone still starts each task from a blank prompt. We turn your playbooks, templates and house style into skills the assistant follows, and connect it to the tools your team works in.",
    includes: ['Up to 5 skills and 2 connectors (MCP) to your tools', 'Shared instructions, access rules and one training session']
  },
  {
    name: 'From AI pilot to daily work',
    time: '2 to 3 weeks',
    price: 'from $7,500',
    body: 'For an AI pilot that impressed in the demo and stalled in real work. Traces on every run, a test set built from your real failures, a check before each release, and a person in the loop where a mistake costs money.',
    includes: ['The bad answer a customer reports becomes a test', 'Cost per task, not just a monthly bill']
  }
];

const SIGNS = [
  ['Someone copies data between tools', 'A task starts in the CRM, moves to email, gets pasted into a spreadsheet and ends in Slack. People are the glue.'],
  ['One person holds it together', 'It works because one person remembers the order and the exceptions. The week they are away, it breaks.'],
  ['You have five automation tools', 'Zapier, Make, a few scripts, and the team still does most of it by hand, because the real process has exceptions the tools never saw.'],
  ['AI was tried, and nothing changed', 'A chatbot here, a pilot there. None of it is part of how work actually gets done on a Tuesday.']
];

const ORDER: Step[] = [
  { title: 'Run it with a shape', when: 'Week 1', chip: 'Map', body: 'Steps on a screen instead of in someone\'s memory. See which are skipped, which take three times longer.' },
  { title: 'Fix the order', when: 'Week 2', chip: 'Refine', body: 'Keep what matters, cut what doesn\'t, agree who decides what.' },
  { title: 'Automate what earned it', when: 'Weeks 3 to 6', chip: 'AI + rules', body: 'The steps that became predictable go to AI or to a plain rule, whichever is cheaper and safer.' },
  { title: 'People decide', when: 'Always', chip: 'Approval', body: 'Anything that cannot be undone waits for a yes from the person who owns it.' },
  { title: 'Improve from runs', when: 'After launch', chip: 'Data', body: 'Every run is recorded, so the next change comes from what happened, not from a guess.' }
];

export const QUALITY_PACKAGES: Package[] = [
  {
    name: 'AI agent audit',
    time: '1 week',
    price: '$2,400, credited to the fixes',
    highlight: true,
    body: 'Where your agent breaks once real users touch it. We read your traces and code, score the setup against a 17-point readiness checklist, cluster the failures, check cost per conversation and what an injected prompt could make it do, and rank the fixes.',
    includes: ['A written report: each failure, its cause, its fix and its price', 'A one-hour walkthrough with your team']
  },
  {
    name: 'Emergency debugging',
    time: '1 day',
    price: '$800, flat',
    body: 'Something broke in production and nobody knows why. We read the traces, isolate the root cause, record a walkthrough, and send the fix as a pull request or exact steps.',
    includes: ['Full refund if we do not find the root cause', 'Starts the same or next business day']
  },
  {
    name: 'Observability and evals',
    time: '2 to 3 weeks',
    price: 'from $5,000',
    body: 'Traces on every step, not only the model call: tools, retrievers, routing. Environments kept apart, evaluators for what good means in your domain, a test set from real failures, dashboards and alerts.',
    includes: ['LangSmith, Langfuse or your own stack', 'Cost per conversation, with limits before the bill arrives']
  },
  {
    name: 'Experts fix quality without a ticket',
    time: '2 to 3 weeks',
    price: 'from $6,500',
    body: 'The people who spot a bad answer (a support lead, a lawyer, a clinician) review it in an annotation queue, adjust the prompt with versions and rollback, run the test set, and approve. No sprint, no developer.',
    includes: ['Quality dashboard in business language, not tokens', 'Two training sessions and a runbook']
  }
];

const READINESS = [
  ['Setup', 'Keys out of code, production apart from staging and dev, traces on tools and retrievers, run metadata: user, session, agent.'],
  ['Quality', 'A golden set of 30+ real cases, evaluators calibrated against people, checks before each release and on live traffic, alerts when quality drops.'],
  ['Cost', 'Cost per run and per agent, budget alerts, and the cheapest model that passes your test set.'],
  ['Operations', 'Latency at p50, p95 and p99, error alerts, versioned prompts, retention you chose, and a runbook for the night it breaks.']
];

export const OPS_FAQ: QA[] = [
  {
    q: 'What happens to the people who do this work today?',
    a: 'They stop copying, sorting and chasing, and spend that time on the decisions and the clients. The judgement stays with them, and the map shows exactly which steps change for whom.'
  },
  {
    q: 'Why not just buy Zapier or an AI tool?',
    a: 'Often you should, and the map will say so. Tools automate one step; the trouble usually sits in the exceptions between steps and the decisions nobody wrote down. That part needs design first.'
  },
  {
    q: 'Which tools can you connect?',
    a: 'Anything with an API or webhooks: CRMs, helpdesks, email and calendars, Slack and Teams, databases, PagerDuty, Stripe, and AI assistants through MCP. If a tool has no API, we tell you what that costs.'
  },
  {
    q: 'We already run an AI agent. Can you audit it?',
    a: 'Yes. The audit takes a week, works from your traces and code, and ends with a ranked list of fixes, each with a price. If you have no traces yet, setting them up is the first fix.'
  },
  {
    q: 'What if the AI makes a mistake?',
    a: "It will, sometimes. So every run is recorded with its reason, anything irreversible waits for a person, and each mistake someone reports becomes a test that runs before the next change."
  }
];

export default function Operations() {
  return (
    <>
      <PageHero
        image="ops-pipeline"
        eyebrow="AI in your operations"
        title={
          <>
            Processes that run, <span className="text-gradient">with AI doing the predictable part</span>
          </>
        }
        lead={
          <p>
            We take a process that lives in people's heads and inboxes, give it a shape, and let AI take the steps that
            repeat: reading, sorting, drafting, checking, routing. Your team keeps the decisions and runs it without a
            developer.
          </p>
        }
      >
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/contact/">Start with a process map</ButtonLink>
          <ButtonLink to="/ai-operations/#packages" variant="ghost">
            Packages and prices
          </ButtonLink>
          <ButtonLink to="/ai-operations/#quality" variant="ghost">
            Agent audit
          </ButtonLink>
        </div>
      </PageHero>

      <Section eyebrow="Signs it's time" title="Where AI pays for itself first">
        <div className="snap-row hide-scrollbar mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SIGNS.map(([t, b]) => (
            <div key={t} className="glass rounded-2xl p-6">
              <h3 className="text-[17px] font-semibold text-white">{t}</h3>
              <p className="mt-2 text-[15px] leading-6 text-slate-300">{b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        art="process-track"
        eyebrow="The order that works"
        title="Automate a process only after it has a shape"
        lead="Most automation projects wire tools to a process nobody ever ran from a page, and automate the chaos faster. We do it in this order."
      >
        <RunSteps steps={ORDER} />
      </Section>

      <Section id="packages" eyebrow="Packages" title="Fixed price, agreed before we start" lead="Most projects start with the process map. Its price is credited in full to the build.">
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {OPS_PACKAGES.map((p) => (
            <PackageCard key={p.name} p={p} />
          ))}
        </div>
        <InlineQuotes keys={['juanStreamline', 'katya']} />
        <p className="mt-10 text-[14px] text-slate-400">AI model costs are billed at cost, without a markup, and estimated per run in the map.</p>
        <div className="mt-4">
          <ArrowLink to="/retainers/">After launch: AI oversight from $900 a month</ArrowLink>
        </div>
      </Section>

      <Section
        id="quality"
        tone="ambient-sun"
        eyebrow="AI quality: audits and observability"
        title="An agent nobody can see is an agent nobody can fix"
        lead="Agent systems rarely fail loudly. One step is slightly wrong, the next treats it as truth, and the system still looks healthy. Four steps that are each 95% right finish correctly 81% of the time."
      >
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {QUALITY_PACKAGES.map((p) => (
            <PackageCard key={p.name} p={p} />
          ))}
        </div>
        <InlineQuotes keys={['elenaTrace', 'jearRoot']} />
        <h3 className="mt-14 text-xl font-semibold text-white">The 17-point readiness checklist, in four parts</h3>
        <div className="snap-row hide-scrollbar mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {READINESS.map(([t, b]) => (
            <div key={t} className="glass rounded-2xl p-5">
              <h4 className="text-[16px] font-semibold text-white">{t}</h4>
              <p className="mt-2 text-[14px] leading-6 text-slate-300">{b}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-[15px] leading-7 text-slate-300">
          Background: AI incident tooling at BigPanda, where noisy signals from many systems had to become one decision
          for an on-call team. In the Structed AI interview: LangSmith traces with metadata on every run, prompts
          versioned in LangSmith Hub and changed without a redeploy, golden and regression sets per stage, annotation
          queues, and cost estimated per interview.
        </p>
        <RoutineCard
          slug="ai-ready"
          className="mt-12"
          intro="Six of the seventeen points, the ones that fail quietly. Run them on your phone before customers meet your agent."
        />
      </Section>

      <Section
        tone="ambient"
        eyebrow="Proof"
        title="The same idea, built into our own platform"
        lead="Routine Run turns a process people carry in their heads into one that runs. Any system can start or move a process through an API and webhooks; AI assistants work with it through MCP, and a change a model writes waits for a person to approve it."
      >
        <ul className="mt-8 grid gap-3 text-[15px] leading-6 text-slate-300 md:grid-cols-2">
          <li className="glass rounded-2xl p-4">
            On 22 September 2026 a real PagerDuty page started an on-call runbook on the Lock Screen and the Apple Watch,
            about two seconds from event to decision.
          </li>
          <li className="glass rounded-2xl p-4">
            A published method: your head is for decisions, not for remembering the order of steps. The machine does
            what can be undone; the person decides what cannot.
          </li>
          <li className="glass rounded-2xl p-4">
            Before AI, Denys worked on AI incident tooling at BigPanda, where noisy signals from many systems had to
            become one decision for an on-call team.
          </li>
          <li className="glass rounded-2xl p-4">
            In Structed, experts change what the AI does and publish it themselves, with no developer and no deploy.
          </li>
        </ul>
        <ProofLinks
          links={[
            ['The method', PROOF.rrMethod],
            ['PagerDuty to the Watch', PROOF.rrOnCall],
            ['API and webhooks', PROOF.rrDevelopers],
            ['MCP connector', PROOF.rrAssistants]
          ]}
        />
        <InlineQuotes keys={['juanCms']} className="mt-12" />
      </Section>

      <Section eyebrow="Questions" title="What people ask before they start">
        <Faq items={OPS_FAQ} />
        <div className="mt-12 flex flex-wrap items-center gap-6">
          <ButtonLink to="/contact/">Tell us which process to start with</ButtonLink>
          <ArrowLink to="/ai-interviews/">AI interviews for expert knowledge</ArrowLink>
        </div>
      </Section>
    </>
  );
}
