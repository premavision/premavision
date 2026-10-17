import { ArrowLink, ButtonLink, CardArt, Section } from '../components';
import { Link } from '../router';
import { PageHero } from './shared';

export const DIRECTIONS = [
  {
    path: '/mobile/',
    art: 'mobile-flow',
    tone: 'glass-sky',
    title: 'Mobile apps with AI under the hood',
    body: "AI features on Apple's on-device model, Siri and App Intents, Apple Watch apps, App Clips, MCP connectors, or a new app from zero.",
    from: 'from $2,400'
  },
  {
    path: '/ai-interviews/',
    art: 'interview-thread',
    tone: 'glass-sun',
    title: 'AI interviews and expert systems',
    body: 'AI interviewers that ask what your experts would ask and end in structured requirements, with a back office your experts edit and publish themselves.',
    from: 'from $2,400'
  },
  {
    path: '/ai-operations/',
    art: 'ops-pipeline',
    tone: 'glass',
    title: 'AI in your operations',
    body: 'Processes mapped and then automated, AI connected to your CRM, inbox, helpdesk and Slack, plus audits and observability for agents you already run.',
    from: 'from $2,400'
  },
  {
    path: '/engineering/',
    art: 'engineering-infra',
    tone: 'glass',
    title: 'Engineering leadership and infrastructure',
    body: 'Architecture and code audits, technical and AI due diligence, a technical partner for founders, taking a product back from an agency, and infrastructure.',
    from: 'from $4,800'
  }
] as const;

export default function Services() {
  return (
    <>
      <PageHero
        image="services-paths"
        eyebrow="Services"
        title={
          <>
            Four ways in. <span className="text-gradient">One way of building.</span>
          </>
        }
        lead={
          <p>
            Every project starts with a short, fixed-price map of what lives in people's heads today, and ends in
            production with a handover your team can extend. AI runs through all of it.
          </p>
        }
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {DIRECTIONS.map((d) => {
            return (
              <Link key={d.path} to={d.path} className={`${d.tone} group flex flex-col overflow-hidden rounded-2xl p-7 sm:p-9`}>
                <CardArt name={d.art} />
                <h2 className="text-2xl font-semibold text-white group-hover:text-ice">{d.title}</h2>
                <p className="mt-3 text-[16px] leading-7 text-slate-300">{d.body}</p>
                <p className="mt-auto pt-6 text-[15px] font-semibold text-sun">{d.from} · fixed price</p>
              </Link>
            );
          })}
        </div>
        <Link to="/retainers/" className="glass-sun group relative mt-6 block overflow-hidden rounded-2xl p-7 sm:p-9">
          <img
            src="/img/process-track-960.webp"
            srcSet="/img/process-track-960.webp 960w, /img/process-track.webp 1920w"
            sizes="100vw"
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[30%_62%] opacity-80 transition duration-700 group-hover:scale-[1.03]"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0c142f] via-[#0c142f]/85 to-[#0c142f]/10"
            aria-hidden="true"
          />
          <div className="relative max-w-xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-sun">From day one, not only after launch</p>
            <h2 className="mt-3 text-2xl font-semibold text-white group-hover:text-ice">Retainers: AI oversight and care</h2>
            <p className="mt-3 text-[16px] leading-7 text-slate-300">
              We watch what your AI and systems do and tell you before your customers notice: weekly reports, alerts,
              monthly analysis, and fixes included. Care plans for apps, expert systems and infrastructure.
            </p>
            <p className="mt-6 text-[15px] font-semibold text-sun">from $900 a month · 3 months at a time</p>
          </div>
        </Link>
        <Link to="/local/" className="glass group relative mt-6 flex flex-col overflow-hidden rounded-2xl p-7 sm:p-9">
          <img
            src="/img/contact-diamond-960.webp"
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-bottom opacity-40 transition duration-700 group-hover:opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c142f] via-[#0c142f]/80 to-transparent" aria-hidden="true" />
          <div className="relative max-w-2xl">
            <h2 className="text-xl font-semibold text-white">For local businesses around Palm Coast</h2>
            <p className="mt-2 text-[15px] leading-6 text-slate-300">
              Website checks, websites, missed-call answering, and App Clips at your door. Launch prices with the discount included on every
              service and free App Clip setup.
            </p>
          </div>
        </Link>
        <div className="mt-12 flex flex-wrap items-center gap-6">
          <ButtonLink to="/contact/">Not sure which? Tell us the problem</ButtonLink>
          <ArrowLink to="/work/">See how we built our own</ArrowLink>
        </div>
      </Section>
    </>
  );
}
