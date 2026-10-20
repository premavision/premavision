import { ButtonLink, EmailLink, LinkedInLink, Portrait, Section } from '../components';
import { SITE } from '../site';
import { PageHero } from './shared';
import { QuoteRow } from '../testimonials';
import { StackSection } from '../stack';

const PRINCIPLES = [
  ['One accountable lead', 'You talk to the person who designs the system and answers for it, from the first call to the check four weeks after launch.'],
  ['Fixed price, agreed first', 'Priced from the map, before the build starts. It moves only if you change what you asked for.'],
  ['A working build every week', 'On your phone or in your browser. Progress you can tap, not a status report.'],
  ['You own everything', 'Code, accounts and keys are yours from the first commit. Leaving us is a handover, not a negotiation.'],
  ['AI does the typing, an engineer makes the calls', 'Agents write and test code on our own instructions, with AI review on every change. Nothing ships that Denys has not reviewed.'],
  ['We say what we can\'t do', 'If a rule, a spreadsheet or a ready-made tool would do the job, you hear that on the first call.']
];

const WORK_MODEL = [
  [
    'The lead',
    'Denys designs the architecture, decides what AI should and shouldn\'t do, and reviews every change before it ships. You talk to him, not to a project manager.'
  ],
  [
    'AI agents',
    'Coding agents write and test code on the project\'s own instructions and skills, with AI code review on every change in CI. Structed\'s engineering ran this way with one engineer.'
  ],
  [
    'Specialists, when the scope needs them',
    'For more hands or a skill outside our own, we bring in specialists who work in the same repository, under the same review and the same fixed price.'
  ]
];

export default function About() {
  return (
    <>
      <PageHero
        image="about-team"
        eyebrow="About"
        title={
          <>
            Small on purpose. <span className="text-gradient">Built to scale with AI.</span>
          </>
        }
        lead={
          <p>
            Prema Vision LLC designs and builds AI systems for companies: inside their apps, in
            conversations with their clients, and in their daily operations. Every project has one accountable lead who designs it and reviews what ships. AI agents do the routine
            engineering, specialists join when the scope needs them. Based in Palm Coast, Florida, working with
            clients across the US.
          </p>
        }
      />

      <Section>
        <div className="space-y-16">
          <article className="grid items-start gap-8 md:grid-cols-[300px_1fr] lg:gap-12">
            <Portrait src="/img/denys-korolkov.webp" alt="Denys Korolkov" />
            <div>
              <h2 className="text-3xl font-semibold text-white">Denys Korolkov</h2>
              <p className="mt-1 text-[15px] text-ice">Co-owner · lead engineer</p>
              <div className="mt-5 max-w-3xl space-y-4 text-[17px] leading-8 text-slate-300">
                <p className="text-[18px] leading-8 text-white">
                  The hardest part of any system is the part that still lives in someone's head and has no shape.
                  That is the part Denys takes on: he gives it a form people and AI can work with, builds the product
                  around it, and takes it all the way to production.
                </p>
                <p>
                  Behind that are 18+ years of production software: launching Groupon's merchant booking platform from zero,
                  checkout for Autodesk's 7M+ users, and AI incident tooling at BigPanda that on-call teams at large
                  enterprises rely on.
                </p>
                <p>
                  In 2026 he founded Routine Run, a platform that turns the processes people carry in their heads into
                  ones that run, on the phone and the wrist, and through an API and MCP for other systems and AI
                  assistants. As CTO he designed and built Structed, an AI that talks to the client and brings back a detailed
                  brief for any marketing project, selected for the Grishin Robotics accelerator.
                </p>
                <p>
                  He leads every Prema Vision project: designs the system, makes the technical calls, and reviews
                  everything that ships. Accessibility and ADHD shape his work from the first screen.
                </p>
                <ul className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
                  {[
                    ['18+', 'years in production software'],
                    ['7M+', 'users on the Autodesk system he worked on'],
                    ['60+', 'App Intents in Routine Run'],
                    ['2', 'AI products built from a blank page']
                  ].map(([v, l]) => (
                    <li key={l} className="glass rounded-2xl p-3">
                      <div className="text-2xl font-semibold text-white">{v}</div>
                      <div className="mt-1 text-[12px] leading-4 text-slate-400">{l}</div>
                    </li>
                  ))}
                </ul>
                <p>
                  <a href={SITE.korolkov} className="font-semibold text-ice hover:text-white">
                    korolkov.pro
                  </a>
                  {' · '}
                  <LinkedInLink href={SITE.linkedinDenys} />
                  {' · '}
                  <EmailLink email={SITE.email} />
                </p>
              </div>
            </div>
          </article>

          <article className="grid items-start gap-8 md:grid-cols-[300px_1fr] lg:gap-12">
            <Portrait src="/img/victoria-von.webp" alt="Victoria Von" />
            <div>
              <h2 className="text-3xl font-semibold text-white">Victoria Von</h2>
              <p className="mt-1 text-[15px] text-ice">Co-owner · design and client experience</p>
              <div className="mt-5 max-w-3xl space-y-4 text-[17px] leading-8 text-slate-300">
                <p>
                  Victoria leads the human side of every project: how people actually think and behave, how they use
                  technology, and what makes them come back. Product experience and onboarding, behavioural design
                  that survives a bad week (no streaks, no shame), brand and creative direction.
                </p>
                <p>
                  She is often the first person you talk to, and she tests builds with real people before a client
                  sees them. At Routine Run she is co-founder in charge of sales and distribution. She made its brand, from the
                  logo and visual style to “Your head is for decisions”, and runs the App Clip pilots around Palm Coast.
                </p>
                <p>
                  <LinkedInLink href={SITE.linkedinVictoria} />
                  {' · '}
                  <EmailLink email={SITE.emailVictoria} />
                </p>
              </div>
            </div>
          </article>
        </div>
      </Section>

      <Section
        art="ops-pipeline"
        eyebrow="How the work gets done"
        title="Fast because of AI. Safe because an engineer answers for it."
        lead="AI changed how much one good engineer can ship. It didn't change who should be accountable when it breaks."
      >
        <div className="snap-row hide-scrollbar mt-12 grid gap-4 md:grid-cols-3">
          {WORK_MODEL.map(([t, b]) => (
            <div key={t} className="glass rounded-2xl p-6">
              <h3 className="text-[17px] font-semibold text-white">{t}</h3>
              <p className="mt-2 text-[15px] leading-6 text-slate-300">{b}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="pb-4">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <QuoteRow keys={['elenaHonest', 'katya', 'hadar']} />
        </div>
      </section>

      <StackSection />

      <Section tone="ambient" eyebrow="How we work" title="Six rules we keep">
        <div className="snap-row hide-scrollbar mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map(([t, b]) => (
            <div key={t} className="glass rounded-2xl p-6">
              <h3 className="text-[17px] font-semibold text-white">{t}</h3>
              <p className="mt-2 text-[15px] leading-6 text-slate-300">{b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="labyrinth">
        <div className="grid items-center gap-10 md:grid-cols-[180px_1fr]">
          <img
            src="/logo-512.png"
            alt="The Prema Vision logo: nested diamond paths in blue and yellow"
            width={180}
            height={180}
            loading="lazy"
            decoding="async"
            className="logo-tilt mx-auto h-40 w-40 md:mx-0"
          />
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-white">Why the logo is a labyrinth</h2>
            <p className="mt-4 text-[16px] leading-7 text-slate-300">
              Daedalus built a labyrinth for King Minos so tangled that nobody who went in came back out. Ariadne gave
              Theseus a ball of thread; he tied it at the door, found the Minotaur at the centre, and followed the
              thread home. A process that lives in one head is the labyrinth. Written down step by step, it becomes
              the thread: anyone can walk it and find the way out, not only the person who built the maze.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="glass-sun grid gap-10 rounded-2xl p-8 sm:p-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">What happens after you write</h2>
            <p className="mt-3 text-[16px] leading-7 text-slate-300">
              Two sentences about the problem are enough. You get a reply within one business day from the person who
              would lead the work, not from a sales team.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink to="/contact/">Start a project</ButtonLink>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center rounded-full px-5 py-3.5 text-[15px] font-semibold text-ice hover:text-white"
              >
                {SITE.email}
              </a>
            </div>
          </div>
          <ol className="space-y-4">
            {[
              ['Within a day', 'A yes, a no, or the name of someone better suited. If yes, a 30-minute call at a time that suits you.'],
              ['On the call', 'You describe what lives in one head; we ask the questions that decide the scope and say which way in fits.'],
              ['Within a week', 'A fixed price for the first step, usually the one-week map, credited in full to the build.']
            ].map(([t, b], i) => (
              <li key={t} className="flex gap-4">
                <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-sun text-sm font-semibold text-ink">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-[16px] font-semibold text-white">{t}</h3>
                  <p className="mt-1 text-[15px] leading-6 text-slate-300">{b}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>
    </>
  );
}
