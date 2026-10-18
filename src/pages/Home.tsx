import { ArrowLink, Backdrop, ButtonLink, CardArt, Container, Eyebrow, EmailLink, LinkedInLink, Portrait, ProductMark, PROOF, ProofLinks, RunSteps, Section, Stat } from '../components';
import { SITE } from '../site';
import { HeroArt } from '../art';
import { Link } from '../router';
import { NotesTeaser } from './Notes';
import { StackSection } from '../stack';
import { PROJECT_STEPS } from './shared';
import { RoutineCard } from '../routines';
import { QuoteRow } from '../testimonials';

const PAINS = [
  { quote: "We're growing, and I still check every handoff myself.", who: 'Founder, 15 to 150 people' },
  { quote: 'Three people know how this works. If one of them leaves, half of it stops.', who: 'Expert services firm' },
  { quote: "We spent money on AI pilots. The way we work hasn't changed.", who: 'Head of operations or AI' },
  { quote: "Our app has users. Siri, the Watch and Apple's on-device AI can't see it.", who: 'Product lead, iOS app' },
  { quote: 'Every small change goes back to a developer.', who: 'COO' },
  { quote: 'Our developers built what we asked for, not what we need.', who: 'Founder without a technical co-founder' }
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pb-16 pt-32 sm:pt-40">
        <Backdrop name="hero-blueprint" eager className="opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/70 to-ink" aria-hidden="true" />
        <div className="blueprint absolute inset-0" aria-hidden="true" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <Eyebrow>Prema Vision · AI products, built and taken to production</Eyebrow>
            <h1 className="mt-6 text-[2.4rem] font-semibold leading-[1.05] text-white sm:text-[3.6rem]">
              If it only works because one person remembers it,{' '}
              <span className="text-gradient">it isn't a system yet.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
              We design and build AI systems for companies and take them to production: inside the iPhone and Apple
              Watch apps your people use, in the conversations your experts have with clients, and in your daily
              operations. Your team runs them and changes them without a developer.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/contact/">Tell us what lives in one head</ButtonLink>
              <ButtonLink to="/#build" variant="ghost">
                See what we build
              </ButtonLink>
            </div>
            <div className="mt-12 border-t border-white/[0.08] pt-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                15+ years of production software · built first in our own products
              </p>
              <ul className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 text-[17px] font-semibold tracking-tight text-slate-400">
                <li>Groupon</li>
                <li>Autodesk</li>
                <li>BigPanda</li>
                <li className="flex items-center gap-2 text-slate-300">
                  <ProductMark name="Routine Run" size={22} />
                  Routine Run
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <ProductMark name="Structed" size={20} />
                  Structed
                </li>
              </ul>
            </div>
          </div>
          <HeroArt className="mx-auto w-full max-w-[560px]" />
        </Container>
      </section>

      {/* PAINS */}
      <Section
        eyebrow="Sound familiar?"
        title="Six ways people describe the same problem"
        lead="Different words, one cause: the business got more complex than the system it runs on, and the missing part lives in someone's head."
      >
        <ul className="snap-row hide-scrollbar mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PAINS.map((p) => (
            <li key={p.quote} className="glass flex flex-col justify-between rounded-2xl p-6">
              <p className="font-display text-[1.3rem] font-medium leading-[1.3] text-white">“{p.quote}”</p>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">{p.who}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* TWO THINGS WE BUILD */}
      <Section
        id="build"
        art="interview-thread"
        eyebrow="What we build"
        title="AI products and AI systems, one way of building them"
        lead="Both start the same way: we take the part that has no shape yet and give it a form people and AI can work with. Then we build the product around it and take it to production."
      >
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="glass-sky group flex flex-col overflow-hidden rounded-2xl p-7 sm:p-9">
            <CardArt name="mobile-flow" position="70% 50%" />
            <h3 className="text-2xl font-semibold text-white">Mobile apps with AI under the hood</h3>
            <p className="mt-4 text-[16px] leading-7 text-slate-300">
              Apple now ships a language model inside every recent iPhone. It runs on the device, costs nothing per
              request and keeps data on the phone. Siri, Shortcuts, Spotlight, widgets and the Action button all read
              one set of App Intents. Most apps use none of it.
            </p>
            <ul className="mt-6 space-y-2.5 text-[15px] text-slate-200">
              <li>· AI features on the device and on Apple's Private Cloud Compute</li>
              <li>· Siri, Shortcuts and the Action button for your most repeated actions</li>
              <li>· Apple Watch apps that move the work on from the wrist</li>
              <li>· MCP connectors, so Claude and ChatGPT can use your product</li>
              <li>· New apps, from zero to the App Store</li>
            </ul>
            <p className="mt-6 rounded-2xl bg-white/5 p-4 text-[14px] leading-6 text-slate-300">
              <strong className="text-white">Built first in Routine Run:</strong> 60+ App Intents, Apple's models write a
              routine from one sentence, and a PagerDuty page starts a runbook on the Watch.
            </p>
            <div className="mt-7">
              <ArrowLink to="/mobile/">Mobile + AI packages and prices</ArrowLink>
            </div>
          </article>

          <article className="glass-sun group flex flex-col overflow-hidden rounded-2xl p-7 sm:p-9">
            <CardArt name="interview-thread" position="78% 50%" />
            <h3 className="text-2xl font-semibold text-white">AI interviews and expert systems</h3>
            <p className="mt-4 text-[16px] leading-7 text-slate-300">
              Your best expert can't sit in every conversation, and won't be with you forever. An AI interviewer asks
              what they would ask, one question at a time, and records the answers as structured data. Your experts
              decide what it knows and change it themselves.
            </p>
            <ul className="mt-6 space-y-2.5 text-[15px] text-slate-200">
              <li>· Client intake that ends in structured requirements, not a transcript</li>
              <li>· Capturing a senior expert's judgement before they leave</li>
              <li>· A back office to edit, test, publish and roll back, with no developer</li>
              <li>· Quality measured on test runs, not guessed from complaints</li>
              <li>· A person approves anything that can't be undone</li>
            </ul>
            <p className="mt-6 rounded-2xl bg-white/5 p-4 text-[14px] leading-6 text-slate-300">
              <strong className="text-white">Already running in Structed</strong>, which we can set up for your domain instead
              of building from scratch: facts clients gave stopped going missing
              (18 of 19 recovered), and replies went from 20–60 seconds to 1–13.
            </p>
            <div className="mt-7">
              <ArrowLink to="/ai-interviews/">AI interview packages and prices</ArrowLink>
            </div>
          </article>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Link to="/ai-operations/" className="glass group flex flex-col overflow-hidden rounded-2xl p-7 sm:p-9">
            <CardArt name="ops-pipeline" position="80% 50%" />
            <div>
              <h3 className="text-xl font-semibold text-white group-hover:text-ice">AI in your operations</h3>
              <p className="mt-2 text-[15px] leading-6 text-slate-300">
                A process mapped, then automated: AI takes the reading, sorting, drafting and routing, connected to your
                CRM, inbox, helpdesk and Slack. Plus audits and observability for the agents you already run.
              </p>
            </div>
          </Link>
          <Link to="/engineering/" className="glass group flex flex-col overflow-hidden rounded-2xl p-7 sm:p-9">
            <CardArt name="engineering-infra" position="80% 50%" />
            <div>
              <h3 className="text-xl font-semibold text-white group-hover:text-ice">Engineering leadership and infrastructure</h3>
              <p className="mt-2 text-[15px] leading-6 text-slate-300">
                Architecture and code audits, a technical partner for founders, taking a product back from an agency,
                and infrastructure that runs without a babysitter.
              </p>
            </div>
          </Link>
        </div>
      </Section>

      {/* PROOF */}
      <Section
        art="diamond-architecture"
        eyebrow="Proof"
        title="Everything we sell, we built first"
        lead="No slideware. Two products in production, built the way we build yours: one accountable engineer, AI agents doing the routine work, tests from the first day."
      >
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="flex items-center gap-3 text-xl font-semibold text-white">
              <ProductMark name="Routine Run" size={34} />
              <a href="https://routinerun.com/" className="hover:text-ice">
                Routine Run
              </a>
              <span className="ml-2 text-[14px] font-normal text-slate-400">Denys is the founder</span>
            </h3>
            <p className="mt-3 text-[16px] leading-7 text-slate-300">
              A platform that turns a process people carry in their heads into one that runs. Its native app is
              the first form; underneath, an API, webhooks and an MCP connector link it to other systems
              and AI assistants.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Stat value="60+" label="App Intents for Siri, Shortcuts and the Action button" href={PROOF.rrIntents} />
              <Stat value="2,200+" label="automated tests" href={PROOF.linkedinExperience} />
              <Stat value="67 ms" label="to compute the day's schedule on a real phone" note="was 8.5 s" href={PROOF.linkedinExperience} />
              <Stat value="MCP" label="connector listed in Claude's directory" href={PROOF.rrAssistants} />
            </div>
            <ProofLinks
              links={[
                ['routinerun.com', PROOF.rrHome],
                ['TestFlight beta', PROOF.testflight],
                ['PagerDuty to the Watch', PROOF.rrOnCall],
                ['API and MCP docs', PROOF.rrDevelopers]
              ]}
            />
          </div>
          <div>
            <h3 className="flex items-center gap-3 text-xl font-semibold text-white">
              <ProductMark name="Structed" size={30} />
              <a href="https://structed.ai/" className="hover:text-ice">
                Structed
              </a>
              <span className="ml-2 text-[14px] font-normal text-slate-400">built as CTO</span>
            </h3>
            <p className="mt-3 text-[16px] leading-7 text-slate-300">
              One AI-led interview turns what a client carries in their head into a structured set of requirements,
              even when they can't quite explain what they need. Experts change the agent and publish without a
              developer.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Stat value="18 of 19" label="dropped facts recovered" href={PROOF.linkedinExperience} />
              <Stat value="1–13 s" label="per reply" note="was 20–60 s" href={PROOF.linkedinExperience} />
              <Stat value="¼ fewer" label="turns per interview, no topic asked twice" href={PROOF.linkedinExperience} />
              <Stat value="1,400+" label="automated tests" href={PROOF.linkedinExperience} />
            </div>
            <ProofLinks
              links={[
                ['structed.ai', PROOF.structed],
                ['Grishin Robotics, cohort 4', PROOF.grishin],
                ['Milestones, Dec 2025 to Oct 2026', PROOF.structedMilestones],
                ['Denys on LinkedIn', PROOF.linkedinExperience]
              ]}
            />
          </div>
        </div>
        <QuoteRow keys={['elenaDayOne', 'hadar', 'juanFullStack']} />
        <div className="mt-10">
          <ArrowLink to="/work/">How both were built</ArrowLink>
        </div>
      </Section>

      <StackSection compact />

      {/* HOW A PROJECT RUNS */}
      <Section
        art="process-track"
        eyebrow="How a project runs"
        title="Five steps, the way a run goes in Routine Run"
        lead="You always know which step you're on, what it costs and what comes next. Fixed price, agreed before the work starts."
      >
        <RunSteps steps={PROJECT_STEPS} />
      </Section>

      {/* EVERY USER */}
      <Section>
        <div>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Built for every person who will use it</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              We design through the eyes of everyone who will use a product, not one imagined persona. A person with
              ADHD, someone on their first day, an expert in a hurry, someone using VoiceOver. If a design leaves
              load on the person, we count it as a bug.
            </p>
            <ul className="mt-6 grid gap-3 text-[15px] text-slate-200 sm:grid-cols-2">
              <li className="glass rounded-2xl p-4">One step on screen at a time</li>
              <li className="glass rounded-2xl p-4">Colour never carries meaning alone</li>
              <li className="glass rounded-2xl p-4">Undo instead of “are you sure?”</li>
              <li className="glass rounded-2xl p-4">Plain words over jargon, in the user's language</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* PEOPLE */}
      <Section
        eyebrow="Who you work with"
        title="One accountable lead. A team that grows with the work."
        lead="Denys designs every project and reviews everything that ships. AI agents do the routine engineering, and when the scope needs more hands, specialists join under the same review. Victoria makes sure it works for the people who will use it."
      >
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:max-w-4xl">
          <div className="glass block overflow-hidden rounded-2xl">
            <Portrait src="/img/denys-korolkov.webp" alt="Denys Korolkov" className="rounded-b-none" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">Denys Korolkov</h3>
              <p className="mt-1 text-[15px] text-ice">Co-owner · lead engineer</p>
              <p className="mt-3 text-[15px] leading-6 text-slate-300">
                15+ years shipping production software, from Groupon's merchant booking platform to checkout for
                Autodesk's 7M+ users and BigPanda's AI incident tooling. Founder of Routine Run; built Structed's AI
                interview as CTO. Leads every project and reviews what ships.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-5">
                <LinkedInLink href={SITE.linkedinDenys} />
                <EmailLink email={SITE.email} />
                <ArrowLink to="/about/">More</ArrowLink>
              </div>
            </div>
          </div>
          <div className="glass block overflow-hidden rounded-2xl">
            <Portrait src="/img/victoria-von.webp" alt="Victoria Von" className="rounded-b-none" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">Victoria Von</h3>
              <p className="mt-1 text-[15px] text-ice">Co-owner · design and client experience</p>
              <p className="mt-3 text-[15px] leading-6 text-slate-300">
                Product experience, behavioural design and creative direction; tests every build with real people.
                Co-founder, Sales &amp; Distribution at Routine Run.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-5">
                <LinkedInLink href={SITE.linkedinVictoria} />
                <EmailLink email={SITE.emailVictoria} />
                <ArrowLink to="/about/">More</ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <NotesTeaser />

      {/* Why a labyrinth: the logo's story, short; the full one is on /about/ */}
      <section className="relative py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-10 border-y border-white/[0.08] py-12 md:grid-cols-[160px_1fr]">
            <img
              src="/logo-512.png"
              alt="The Prema Vision logo: nested diamond paths in blue and yellow"
              width={160}
              height={160}
              loading="lazy"
              decoding="async"
              className="logo-tilt mx-auto h-32 w-32 md:mx-0 md:h-36 md:w-36"
            />
            <div className="max-w-3xl">
              <Eyebrow>Why the logo is a labyrinth</Eyebrow>
              <p className="mt-4 font-display text-[1.5rem] leading-snug text-white sm:text-[1.8rem]">
                Theseus found his way out of the Minotaur's labyrinth because Ariadne gave him a thread.
              </p>
              <p className="mt-4 text-[17px] leading-8 text-slate-300">
                A process that lives in one head is the labyrinth. Written down step by step, it becomes the thread:
                anyone can walk it and find the way out, not only the person who built the maze. That is the work.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Section
        eyebrow="The thread, on your phone"
        title="Five questions we ask on a first call"
        lead="A routine you open in Routine Run, the app we built for exactly this: a process written down step by step, so anyone can walk it."
      >
        <RoutineCard slug="first-call" className="mt-10" />
      </Section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <Backdrop name="contact-diamond" className="opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" aria-hidden="true" />
        <Container className="relative text-center">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Which process in your business lives in one head?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-300">
            Two sentences are enough to start. Denys reads every message and replies within one business day.
          </p>
          <div className="mt-9">
            <ButtonLink to="/contact/">Start a project</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
