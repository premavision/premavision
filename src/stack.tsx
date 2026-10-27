import { Section } from './components';

/* What we build with. Every item is something Denys has shipped: the
 * "where" line names the system, so nothing here is a claim from a course.
 * Sources: LinkedIn Experience (15 Oct 2026), Fact Ledger F-024..F-029,
 * F-052..F-055, routinerun.com/developers. */

const GROUPS = [
  {
    name: 'AI and agents',
    where: 'Structed, Routine Run',
    items: [
      'LangGraph agents and multi-agent pipelines',
      'MCP servers and connectors',
      'Evals: golden sets, test personas, LLM-as-judge checked against people',
      'Tracing and observability in LangSmith',
      'Model routing across OpenAI, Anthropic, Google through OpenRouter',
      'Structured outputs and tool calling',
      'Retrieval on pgvector',
      'Prompt-injection defences',
      "Apple's on-device model and Private Cloud Compute"
    ]
  },
  {
    name: 'Apple platforms',
    where: 'Routine Run',
    items: [
      'Swift and SwiftUI',
      'App Intents, Siri, Shortcuts, the Action button',
      'Apple Watch apps and complications',
      'Live Activities and widgets',
      'App Clips',
      'App Attest and APNs push'
    ]
  },
  {
    name: 'Backend',
    where: 'Structed, Routine Run, BigPanda',
    items: [
      'TypeScript and Node.js, NestJS',
      'Python and FastAPI',
      'PostgreSQL',
      'APIs, webhooks, OAuth 2.1',
      'Payments with Stripe',
      'Streaming over SSE',
      'Angular and React front ends'
    ]
  },
  {
    name: 'Infrastructure',
    where: 'Structed, Routine Run, BigPanda',
    items: [
      'AWS and Cloudflare Workers',
      'Docker, Kubernetes, Argo CD',
      'Deploys without downtime',
      'CI with tests and AI code review',
      'Sentry, logs and traces, alerts to the team',
      'Backups that get restored, not just taken'
    ]
  }
];

export function StackSection({ compact = false }: { compact?: boolean }) {
  return (
    <Section
      eyebrow="Stack and expertise"
      title={compact ? 'What we build with' : '18+ years of software engineering, now AI engineering'}
      lead={
        compact
          ? 'Every item below is something we have shipped to production, and the line under each group says where.'
          : 'AI is only as reliable as the backend and infrastructure under it. Everything below has been shipped to production, and the line under each group says where.'
      }
    >
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {GROUPS.map((g) => (
          <div key={g.name} className="glass flex flex-col rounded-2xl p-6">
            <h3>{g.name}</h3>
            <ul className="mt-4 space-y-2">
              {(compact ? g.items.slice(0, 5) : g.items).map((i) => (
                <li key={i} className="flex gap-3 text-[14px] leading-6 text-slate-300">
                  <span className="mt-[11px] h-px w-3 flex-shrink-0 bg-ice/60" aria-hidden="true" />
                  {i}
                </li>
              ))}
            </ul>
            <p className="mt-auto pt-5 font-mono text-[11px] uppercase tracking-[0.12em] text-slate-500">
              Shipped at {g.where}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
