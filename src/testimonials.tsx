/* Short, exact phrases from recommendations on Denys's LinkedIn profile,
 * each linked to the source. Phrases are trimmed, never reworded. */

export const RECS_URL = 'https://www.linkedin.com/in/denyskorolkov/details/recommendations/';

export const QUOTES = {
  elenaDayOne: {
    quote: 'Denys gets the day-one architecture decisions right.',
    name: 'Elena Pinteleeva',
    role: 'Co-founder & Head of Structed Lab · 20+ years in C-level roles'
  },
  elenaOperators: {
    quote: 'That is production-grade AI engineering built for operators, not only for engineers.',
    name: 'Elena Pinteleeva',
    role: 'Co-founder & Head of Structed Lab'
  },
  elenaSandbox: {
    quote: "In my daily work I change the agent's behaviour myself: I set up a sandbox, test there and publish to production.",
    name: 'Elena Pinteleeva',
    role: 'Designs how the Structed agent behaves'
  },
  elenaHonest: {
    quote: 'He speaks business with non-technical founders and is precise about what the system does today versus what it will do.',
    name: 'Elena Pinteleeva',
    role: 'Co-founder & Head of Structed Lab'
  },
  hadar: {
    quote: 'He is very production-aware, consistently applying best practices such as feature toggles and gradual rollouts to ensure smooth, safe delivery.',
    name: 'Hadar Carmely',
    role: 'Senior Engineering Manager, AI platform & incident management · managed Denys directly'
  },
  juanFullStack: {
    quote: 'We originally brought Denys in to strengthen our frontend but he quickly proved himself as a full-stack force, taking on backend, infra and automations with ease.',
    name: 'Juan D. Cardozo',
    role: 'Staff Software Engineer · managed Denys directly'
  },
  juanCms: {
    quote: 'Implementing our CMS, which empowered technical writers to update in-app integration docs independently, saving engineers countless hours.',
    name: 'Juan D. Cardozo',
    role: 'Staff Software Engineer · managed Denys directly'
  },
  elenaVersioned: {
    quote: 'New domains and dozens of specializations go in without rewriting the core: domain knowledge lives as versioned data, not hard-coded logic.',
    name: 'Elena Pinteleeva',
    role: 'Co-founder & Head of Structed Lab'
  },
  elenaTrace: {
    quote: 'Every result traces back to the exact client statement it came from.',
    name: 'Elena Pinteleeva',
    role: 'Co-founder & Head of Structed Lab'
  },
  elenaBusiness: {
    quote: 'He makes them not only for the users, but for the business that has to run the system.',
    name: 'Elena Pinteleeva',
    role: 'Co-founder & Head of Structed Lab · 20+ years in C-level roles'
  },
  hadarBalance: {
    quote: 'His mindset always balances speed with stability, which makes him an invaluable contributor to production systems.',
    name: 'Hadar Carmely',
    role: 'Senior Engineering Manager, AI platform & incident management'
  },
  juanStreamline: {
    quote: 'Proactively identifies opportunities to streamline workflows and create long-term efficiency.',
    name: 'Juan D. Cardozo',
    role: 'Staff Software Engineer · managed Denys directly'
  },
  jearRoot: {
    quote: 'Unwavering commitment to getting to the root of any problem.',
    name: 'Jear Jujaroen',
    role: 'Tech Lead · worked with Denys on the same team'
  },
  katya: {
    quote: 'Denys consistently showcased his expertise and strong understanding of business requirements.',
    name: 'Katya Savenkova',
    role: 'Senior to Denys across projects over six years'
  }
} as const;

export type QuoteKey = keyof typeof QUOTES;

/* The large opening mark that tells the eye "this is a quote" before it reads a word. */
const BigQuote = ({ className = '' }: { className?: string }) => (
  <span
    aria-hidden="true"
    className={`pointer-events-none absolute select-none font-[Georgia,serif] text-[96px] leading-none text-sun/80 ${className}`}
  >
    “
  </span>
);

export function Quote({ k, className = '' }: { k: QuoteKey; className?: string }) {
  const q = QUOTES[k];
  return (
    <figure className={`glass relative flex flex-col rounded-2xl p-6 pt-16 sm:p-7 sm:pt-[4.5rem] ${className}`}>
      <BigQuote className="left-5 top-3 sm:left-6" />
      <blockquote className="font-display text-[1.2rem] font-medium leading-[1.4] text-white">{q.quote}</blockquote>
      <figcaption className="mt-auto pt-5">
        <p className="text-[15px] font-semibold text-slate-200">{q.name}</p>
        <p className="mt-0.5 text-[13px] leading-5 text-slate-400">{q.role}</p>
        <a
          href={RECS_URL}
          className="hit relative z-10 mt-2 inline-block font-mono text-[11px] uppercase tracking-[0.12em] text-ice/80 hover:text-white"
        >
          Recommendation on LinkedIn ↗
        </a>
      </figcaption>
    </figure>
  );
}

export function QuoteRow({ keys, title = 'What people who worked with Denys say' }: { keys: QuoteKey[]; title?: string }) {
  return (
    <div className="mt-14">
      <p className="font-mono text-[12px] font-medium uppercase tracking-[0.16em] text-ice/80">{title}</p>
      <div className={`snap-row hide-scrollbar mt-5 grid gap-4 ${keys.length >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
        {keys.map((k) => (
          <Quote key={k} k={k} />
        ))}
      </div>
    </div>
  );
}

/* One or two short quotes right under the offer they back up. */
export function InlineQuotes({ keys, className = 'mt-10' }: { keys: QuoteKey[]; className?: string }) {
  return (
    <div className={`grid gap-6 ${keys.length > 1 ? 'md:grid-cols-2' : 'max-w-3xl'} ${className}`}>
      {keys.map((k) => {
        const q = QUOTES[k];
        return (
          <figure key={k} className="relative pl-14">
            <BigQuote className="-top-3 left-0 !text-[76px]" />
            <blockquote className="font-display text-[1.08rem] font-medium leading-[1.45] text-slate-100">{q.quote}</blockquote>
            <figcaption className="mt-2 text-[13px] leading-5 text-slate-400">
              <span className="font-semibold text-slate-300">{q.name}</span>, {q.role} ·{' '}
              <a href={RECS_URL} className="hit text-ice/80 hover:text-white">
                LinkedIn ↗
              </a>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
