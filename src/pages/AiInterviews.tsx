import { ArrowLink, ButtonLink, Clip, Faq, PackageCard, ProductMark, PROOF, ProofLinks, Section, Stat, type Package, type QA } from '../components';
import { PageHero } from './shared';
import { InlineQuotes } from '../testimonials';

/* Structed first: the platform Denys built as CTO, set up and integrated
 * instead of building from scratch when it fits. Structed's own plans are
 * billed by Structed; setup and integration are ours, at a fixed price. */
export const STRUCTED_PACKAGES: Package[] = [
  {
    name: 'Structed, set up for your domain',
    time: '2 to 3 weeks',
    price: 'from $4,800',
    highlight: true,
    body: 'Your professions, the questions your experts ask, the sections your requirements need and the rules for what counts as an answer, configured in Structed\'s back office and tested on simulated clients built from your real cases.',
    includes: ['Your experts trained to change it and publish without a developer', 'A working interviewer in weeks, not months']
  },
  {
    name: 'Structed, connected to your systems',
    time: '2 to 4 weeks',
    price: 'from $6,500',
    body: 'Interview links go out from your own flows, and finished requirements land where your team works: your CRM, helpdesk or project tool, through the API, webhooks or MCP.',
    includes: ['AI assistants can start and read interviews over MCP', 'Every handoff logged, nothing copied by hand']
  }
];

export const INTERVIEW_PACKAGES: Package[] = [
  {
    name: 'Expertise map',
    time: '1 week',
    price: '$2,400, credited to the build',
    highlight: true,
    body: 'We interview your experts and write down what they ask, in what order, and how they decide. Useful on its own: it is the onboarding doc nobody had time to write.',
    includes: ['The questions, the decisions and the exceptions', 'A fixed price for the AI interviewer built on it']
  },
  {
    name: 'AI interviewer, live',
    time: '5 to 7 weeks',
    price: 'from $18,000',
    body: 'An agent that runs the conversation your expert would run, by link with no account, and ends with structured requirements your team and your AI tools can work from.',
    includes: ['Voice or text, on a phone or a laptop', 'Every requirement points back to what the person said']
  },
  {
    name: 'Expert back office',
    time: '3 to 4 weeks',
    price: 'from $9,000',
    body: 'The people who own the knowledge change what the agent asks and knows. They edit in a sandbox, test on simulated clients, publish, and roll back in one click.',
    includes: ['No developer and no deploy for a change', 'Every version kept, every interview pinned to one']
  },
  {
    name: 'From AI pilot to daily work',
    time: '2 to 3 weeks',
    price: 'from $7,500',
    body: 'For an agent that works in the demo and breaks with real users. Traces on every run, a test set built from your real failures, an automatic check before each release, and a person in the loop where a mistake costs money.',
    includes: ['The bad answer a customer reports becomes a test', 'Cost per conversation, not just a monthly bill']
  }
];

const USES = [
  ['Client intake', 'The first conversation with a new client, done before the first meeting. Your team starts with requirements, not a guessing game.'],
  ['Before an expert leaves', 'A senior person retires or moves on. What they would ask, and how they would decide, stays with the company.'],
  ['Onboarding', 'A new hire answers the questions a lead would ask on day one, and the lead reviews the result instead of running the session.'],
  ['Qualification and triage', 'Each case gets the same questions in the same order, and the answers arrive as data that routes itself.']
];

const HOW = [
  ['One question at a time', "In the client's words, not your jargon. Long forms get abandoned; a conversation gets finished."],
  ['Non-answers are kept', '"I don\'t know" and "I\'ll send it later" are recorded, not asked again and again.'],
  ['Traceable', 'Every requirement points back to the moment the person said it. Nothing invented, nothing quietly dropped.'],
  ['Experts own the knowledge', 'What the agent asks lives as versioned data experts edit, not as code a developer has to change.'],
  ['The model is a setting', 'Reasoning, speed and cost tuned per stage, any major model through one router, swapped without a rewrite.'],
  ['Client text is data', 'A separate layer treats what clients type as data, never as instructions to the agent.'],
  ['Quality is measured', 'Test personas, written from scratch or copied from a real interview with the AI\'s mistakes; golden sets; and a human check on the AI judge.'],
  ['A person approves', 'Results can be reviewed before the client sees them, and anything that can\'t be undone waits for a yes.']
];

const FAQ: QA[] = [
  {
    q: 'Will it replace our experts?',
    a: 'No. It takes the repeated questions off them, so their time goes to decisions. The experts decide what it asks, and they change it themselves.'
  },
  {
    q: 'What happens when it gets something wrong?',
    a: 'Every answer traces back to the conversation, a person can review results before the client sees them, and the case that went wrong becomes a test that runs before the next release.'
  },
  {
    q: 'Which AI models do you use?',
    a: 'Any major model, through one router. We pick per stage on speed, cost and quality measured on your own cases, and you can switch later without rebuilding.'
  },
  {
    q: 'Where does our data live?',
    a: 'We agree on it before the build starts: your cloud or a hosted setup, which model providers are allowed, and how long conversations are kept.'
  },
  {
    q: 'Do you build custom agents beyond interviews?',
    a: "Yes, when the work combines AI with expert judgement: triage, review, planning. If a plain rule or a ready-made tool would do, we'll tell you that instead."
  }
];

export default function AiInterviews() {
  return (
    <>
      <PageHero
        image="interview-thread"
        eyebrow="AI interviews and expert systems"
        title={
          <>
            Your best expert can't be in every conversation. <span className="text-gradient">An AI interview can.</span>
          </>
        }
        lead={
          <p>
            We build AI interviewers that ask the questions your experts would ask, record the answers as structured
            requirements, and run on rules your experts edit themselves. AI does the predictable part. People make the
            decisions.
          </p>
        }
      >
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/contact/">Start with an expertise map</ButtonLink>
          <ButtonLink to="/ai-interviews/#packages" variant="ghost">
            Packages and prices
          </ButtonLink>
        </div>
      </PageHero>

      <Section
        eyebrow="Where it fits"
        title="Wherever a conversation is the bottleneck"
        lead="If your business sells knowledge, the slowest part is usually getting the right information out of someone's head, the client's or your own expert's."
      >
        <div className="snap-row hide-scrollbar mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {USES.map(([t, b]) => (
            <div key={t} className="glass rounded-2xl p-6">
              <h3 className="text-[17px] font-semibold text-white">{t}</h3>
              <p className="mt-2 text-[15px] leading-6 text-slate-300">{b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        art="interview-thread"
        eyebrow="Already built"
        title={
          <span className="flex items-center gap-4">
            <ProductMark name="Structed" size={42} />
            Start with Structed, not from scratch
          </span>
        }
        lead="Structed is an AI interview platform that already exists and runs: AI-led client interviews that end in structured requirements, a back office where experts change the agent and publish without a developer, and an MCP server for AI assistants. Denys built it as CTO. When it fits your conversation, we set it up and connect it to your business instead of building a new one: weeks instead of months, and a fraction of the cost."
      >
        <div className="mt-12">
          <Clip
            src="/video/structed-interview.mp4"
            poster="/video/structed-interview-poster.webp"
            width={848}
            height={624}
            caption="Ten seconds of Structed: the client answers out loud, wherever they are, and the AI interviewer asks the next question. The requirements come out at the end."
          />
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {STRUCTED_PACKAGES.map((p) => (
            <PackageCard key={p.name} p={p} />
          ))}
        </div>
        <InlineQuotes keys={['elenaVersioned']} />
        <p className="mt-6 max-w-3xl text-[14px] leading-6 text-slate-400">
          Structed's subscription is billed by Structed under its own plans. Setup and integration are fixed price from
          us. When your conversation doesn't fit Structed's shape, we build a custom interviewer: see the packages below.
        </p>
        <ProofLinks
          links={[
            ['Try structed.ai', PROOF.structed],
            ['How it was built', PROOF.structedMilestones],
            ['Grishin Robotics accelerator, cohort 4', PROOF.grishin]
          ]}
        />
      </Section>

      <Section art="about-team" eyebrow="How it works" title="What makes an AI interview trustworthy">
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HOW.map(([t, b]) => (
            <div key={t} className="glass rounded-2xl p-5">
              <h3 className="text-[16px] font-semibold text-white">{t}</h3>
              <p className="mt-2 text-[14px] leading-6 text-slate-300">{b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="packages"
        eyebrow="Packages"
        title="Fixed price, agreed before we start"
        lead="Most projects start with the expertise map. Its price is credited in full to the build."
      >
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {INTERVIEW_PACKAGES.map((p) => (
            <PackageCard key={p.name} p={p} />
          ))}
        </div>
        <InlineQuotes keys={['elenaSandbox', 'juanCms']} />
        <p className="mt-6 text-[14px] text-slate-400">
          Model and hosting costs are billed at cost, without a markup, and estimated per conversation in the plan.
        </p>
        <div className="mt-4">
          <ArrowLink to="/retainers/">After launch: expert system care and AI oversight from $900 a month</ArrowLink>
        </div>
      </Section>

      <Section
        tone="ambient"
        eyebrow="Proof"
        title={
          <span className="flex items-center gap-4">
            <ProductMark name="Structed" size={42} />
            Built first in Structed
          </span>
        }
        lead="Structed's AI interview, which Denys built as CTO, turns what a client carries in their head into a structured set of requirements, even when they can't quite explain what they need. These are the engineering results."
      >
        <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <Stat value="18 of 19" label="facts the interview used to drop, now recovered" href={PROOF.linkedinExperience} />
          <Stat value="1–13 s" label="per reply" note="was 20–60 s" href={PROOF.linkedinExperience} />
          <Stat value="¼ fewer" label="turns, with no topic asked twice" href={PROOF.linkedinExperience} />
          <Stat value="1,400+" label="automated tests" href={PROOF.linkedinExperience} />
        </div>
        <p className="mt-8 max-w-3xl text-[16px] leading-7 text-slate-300">
          16 professions and their specializations live as versioned data, not code, so a new domain doesn't need a
          rewrite. Experts edit the taxonomy in a sandbox, test it, and publish to production without a developer.
        </p>
        <ProofLinks
          links={[
            ['Try structed.ai', PROOF.structed],
            ['Milestones, Dec 2025 to Oct 2026', PROOF.structedMilestones],
            ['Four weeks to a demo day', PROOF.demoDay],
            ['Grishin Robotics on LinkedIn', PROOF.grishinLinkedIn],
            ['Denys on LinkedIn', PROOF.linkedinExperience]
          ]}
        />
        <div className="mt-8">
          <ArrowLink to="/work/">The full Structed story</ArrowLink>
        </div>
      </Section>

      <Section eyebrow="Questions" title="What people ask before they start">
        <Faq items={FAQ} />
        <div className="mt-12">
          <ButtonLink to="/contact/">Tell us which conversation to start with</ButtonLink>
        </div>
      </Section>
    </>
  );
}

export { FAQ as INTERVIEW_FAQ };
