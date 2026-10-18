import { ButtonLink, ProductMark, PROOF, ProofLinks, Section, Stat, Timeline, type Milestone } from '../components';
import { PageHero } from './shared';

/* Listed oldest first here and shown newest first on the page.
 * Dates: Structed from the structed-app git history as published on
 * korolkov.pro/notes (numbers only those public in LinkedIn, 15 Oct 2026);
 * Routine Run from routinerun.com/changes and the public roadmap. */

const STRUCTED: Milestone[] = [
  { when: 'December 2025', what: 'Designed it with the founder from a blank page: the architecture and the agent concept. An outsourced team started on the base.' },
  { when: 'February 2026', what: 'Audited the base, ended the outsourcing and took over all engineering.' },
  { when: 'March 2026', what: 'Traces on every run, model routing, and prompts domain experts can edit without a developer.' },
  { when: 'April 2026', what: 'Simulated clients: an AI persona runs an interview end to end, so a change is tested before a real client sees it.' },
  { when: 'June 2026', what: 'The domain taxonomy moved out of code into a database with its own admin, and an MCP server opened interviews to AI assistants.' },
  { when: 'July 2026', what: 'Paid accounts through Stripe, a moderation step before requirements reach the client, deploys without downtime, and a security pass.' },
  { when: 'August 2026', what: 'Self-serve sign-up with a trial, organizations with seats, and test personas run against the live stack and compared run against run. Selected for the Grishin Robotics accelerator, cohort 4.', href: PROOF.grishin },
  { when: '17 September 2026', what: 'Demo day in London, with the product able to show its own measurements.', href: PROOF.demoDay }
];

const ROUTINE_RUN: Milestone[] = [
  { when: 'August 2026', what: 'Routine Run founded. The method Denys carried for years becomes a native Apple app: the engine and App Intents first.' },
  { when: '16 September 2026', what: 'Public beta builds on TestFlight, with every build described in plain words.', href: PROOF.rrChanges },
  { when: '19 September 2026', what: 'Private iCloud sync, earlier versions of every routine, and support back to iOS 26.1 and watchOS 26.' },
  { when: '22 September 2026', what: 'A real PagerDuty page started an on-call runbook on the Lock Screen and the Watch, about two seconds from event to decision.', href: PROOF.rrOnCall },
  { when: '24 September 2026', what: "Apple's on-device model writes a routine from one sentence. Siri can change a routine, and one Undo puts it back.", href: PROOF.rrSiri },
  { when: '29 September 2026', what: "Apple's Private Cloud Compute writes routines inside the app on iOS 27. The person chooses: Apple's cloud, or only this phone." },
  { when: '2 October 2026', what: 'Assistive Access: one large step with Next and Not now. Larger Text and Reduce Motion reach every screen.', href: PROOF.rrAccess },
  { when: '4 to 5 October 2026', what: 'A routine scanned at a door opens in an App Clip with nothing to install; a routine can be published under a code, a poster or an NFC tag.', href: PROOF.rrOrgs },
  { when: '14 October 2026', what: "Connections: any system or PagerDuty can start a run through its own address. Claude and ChatGPT connect with a code, and what they write waits for the person's yes. The MCP connector is listed in Claude's directory.", href: PROOF.rrAssistants },
  { when: 'In progress', state: 'now', what: 'Getting version 1.0 onto the App Store, for everyone.' },
  { when: 'With the release', state: 'next', what: "App Clip pilots with local businesses: a code at the door, the steps on the visitor's phone." },
  { when: 'Next', state: 'next', what: 'The same routine in any browser, then iPad and Mac, then beyond Apple.' }
];

const BEFORE = [
  ['Groupon', 'Main frontend contributor on the merchant booking platform while its team grew from 2 to 8 engineers.', 'A product merchants depend on every day has to stay easy for the next engineer to change.'],
  ['Autodesk', 'Checkout for a product with 7M+ users, a system under real load.', 'Respect for the invisible failure: in billing it shows up on an invoice, weeks later.'],
  ['BigPanda', 'AI incident tooling for enterprise on-call teams.', 'Noisy input quietly breaks every decision below it, so the signal gets fixed first.']
];

export default function Work() {
  return (
    <>
      <PageHero
        image="diamond-architecture"
        eyebrow="Work"
        title={
          <>
            Two products, <span className="text-gradient">milestone by milestone</span>
          </>
        }
        lead={
          <p>
            Prema Vision shows the products its lead engineer built and runs, because that is where you can check the
            work: open the app, read the changelog, ask how a number was measured. Newest first, like a changelog:
            every milestone has a date, and most have a link.
          </p>
        }
      />

      <Section
        art="mobile-flow"
        eyebrow="Routine Run · since August 2026 · Denys is the founder"
        title={
          <span className="flex items-start gap-4">
            <ProductMark name="Routine Run" size={52} />
            <span>A process people carry in their heads, turned into one that runs</span>
          </span>
        }
      >
        <div className="mt-6 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="max-w-2xl text-[17px] leading-8 text-slate-300">
              In Routine Run a process is described once in a sentence, walked through step by step, and improved run by
              run. The native app is its first form; underneath is a platform that connects processes to
              the systems and AI assistants a business already uses. No account, private by default.
            </p>
            <Timeline items={[...ROUTINE_RUN].reverse()} />
          </div>
          <div className="h-fit lg:sticky lg:top-28">
            <div className="grid grid-cols-2 gap-3">
              <Stat value="60+" label="App Intents" href={PROOF.rrIntents} />
              <Stat value="2,200+" label="automated tests" href={PROOF.linkedinExperience} />
              <Stat value="67 ms" label="day's schedule on a real phone" note="was 8.5 s" href={PROOF.linkedinExperience} />
              <Stat value="~2 s" label="from a PagerDuty event to Routine Run's decision" href={PROOF.rrOnCall} />
            </div>
            <ProofLinks
              links={[
                ['routinerun.com', PROOF.rrHome],
                ['TestFlight beta', PROOF.testflight],
                ['Every build, newest first', PROOF.rrChanges],
                ['The method', PROOF.rrMethod],
                ['MCP connector', PROOF.rrAssistants],
                ['Claude directory', PROOF.claudeDirectory],
                ['API and webhooks', PROOF.rrDevelopers]
              ]}
            />
          </div>
        </div>
      </Section>
      <Section
        art="interview-thread"
        eyebrow="Structed · December 2025 to October 2026 · built as CTO"
        title={
          <span className="flex items-start gap-4">
            <ProductMark name="Structed" size={46} />
            <span>One AI interview instead of weeks of back-and-forth</span>
          </span>
        }
      >
        <div className="mt-6 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="max-w-2xl text-[17px] leading-8 text-slate-300">
              Structed turns one AI-led client interview into a clear, structured set of requirements, even when the
              client can't quite explain what they need. Experts run it themselves: they edit the domain taxonomy in a
              sandbox, test it and publish to production with no developer. Engineering ran as one engineer working with
              AI agents: Claude Code and Copilot on the repository's instructions and 28 skills, with AI code review in
              CI.
            </p>
            <Timeline items={[...STRUCTED].reverse()} />
          </div>
          <div className="h-fit lg:sticky lg:top-28">
            <div className="grid grid-cols-2 gap-3">
              <Stat value="18 of 19" label="dropped facts recovered" href={PROOF.linkedinExperience} />
              <Stat value="1–13 s" label="per reply" note="was 20–60 s" href={PROOF.linkedinExperience} />
              <Stat value="¼ fewer" label="turns per interview" href={PROOF.linkedinExperience} />
              <Stat value="1,400+" label="automated tests" href={PROOF.linkedinExperience} />
            </div>
            <ProofLinks
              links={[
                ['Try structed.ai', PROOF.structed],
                ['Milestones in full', PROOF.structedMilestones],
                ['Four weeks to a demo day', PROOF.demoDay],
                ['Grishin Robotics accelerator', PROOF.grishin],
                ['Denys on LinkedIn', PROOF.linkedinExperience]
              ]}
            />
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Before AI · 15+ years"
        title="Three systems that carried real load"
        lead="What you get from them is judgement about where things break."
      >
        <div className="snap-row hide-scrollbar mt-10 grid gap-4 md:grid-cols-3">
          {BEFORE.map(([name, what, lesson]) => (
            <div key={name} className="glass rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white">{name}</h3>
              <p className="mt-2 text-[15px] leading-6 text-slate-300">{what}</p>
              <p className="mt-4 border-t border-white/10 pt-4 text-[14px] leading-6 text-ice">{lesson}</p>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <ButtonLink to="/contact/">Start a project</ButtonLink>
        </div>
      </Section>

    </>
  );
}
