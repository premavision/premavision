import ROUTINES from './routines.gen.json';
import { PROOF } from './components';

/* Routine Run routines on the site, in Routine Run's own card style (dusk
 * gradient, pink ring). Links and QR codes come from scripts/routines.mjs.
 * QR and button both carry the routinerun.com link, so an iPhone with the app
 * opens the routine in it straight from the camera. */

type Routine = (typeof ROUTINES)[number];
export type RoutineSlug = 'first-call' | 'ai-ready' | 'before-an-agency' | 'website-check';

const bySlug = Object.fromEntries(ROUTINES.map((r) => [r.slug, r])) as Record<RoutineSlug, Routine>;

const DUSK = 'linear-gradient(160deg,#001C41 0%,#2A1B4E 62%,#6B3A6E 100%)';
const RING = 'linear-gradient(135deg,#FE0494 0%,#FD02B4 28%,#E302FC 60%,#D673F1 100%)';

const minutes = (s?: number) => (s ? (s < 60 ? `${s} s` : `${Math.round(s / 60)} min`) : null);

const TapIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
    <rect x="4" y="5" width="9" height="15" rx="2" />
    <path d="M16 8.5a5 5 0 0 1 0 7" />
    <path d="M18.6 6a8.6 8.6 0 0 1 0 12" />
  </svg>
);

const Qr = ({ r }: { r: Routine }) => (
  <img src={r.qr} alt={`QR code that opens “${r.name}” in Routine Run`} width={264} height={264} loading="lazy" decoding="async" className="h-auto w-full" />
);

export function RoutineCard({ slug, intro, className = '' }: { slug: RoutineSlug; intro?: string; className?: string }) {
  const r = bySlug[slug];
  return (
    <div
      className={`rr-card relative overflow-hidden rounded-3xl p-[1.5px] shadow-[0_30px_80px_-30px_rgba(254,4,148,0.45)] ${className}`}
      style={{ background: RING }}
    >
      <div className="grid gap-8 rounded-[calc(1.5rem-1.5px)] p-6 text-white sm:p-8 md:grid-cols-[1fr_auto] md:gap-10" style={{ background: DUSK }}>
        <div>
          <div className="flex items-center gap-3">
            <img src="/img/logos/routine-run-icon.webp" alt="" width={36} height={36} className="h-9 w-9 rounded-[10px]" loading="lazy" />
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#FF7CCB]">A Routine Run routine</p>
          </div>
          <h3 className="rr-title mt-5">{r.name}</h3>
          <p className="mt-2 max-w-xl text-[15px] leading-6 text-[#FDD9E3]/80">{intro ?? r.detail}</p>
          <ol className="mt-6 space-y-3">
            {r.steps.map((s: { title: string; detail?: string; duration?: number }, i: number) => (
              <li key={s.title} className="flex gap-3">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-[11px] text-white"
                  style={{ background: RING }}
                >
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <p className="text-[15px] font-semibold leading-6">
                    {s.title}
                    {minutes(s.duration) && <span className="ml-2 font-mono text-[11px] font-normal text-[#D673F1]">{minutes(s.duration)}</span>}
                  </p>
                  {s.detail && <p className="text-[14px] leading-5 text-white/60">{s.detail}</p>}
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-col md:w-[264px]">
          <a
            href={r.link}
            className="hidden w-full max-w-[264px] rounded-2xl bg-white p-2.5 transition-transform hover:scale-[1.02] md:block [@media(pointer:fine)]:block"
            aria-label={`Open “${r.name}” in Routine Run`}
          >
            <Qr r={r} />
          </a>
          <p className="mt-3 hidden items-center gap-2 text-[13px] text-white/80 md:flex [@media(pointer:fine)]:flex">
            <TapIcon /> Tap or scan with your iPhone
          </p>
          <a
            href={r.link}
            className="mt-auto inline-flex items-center justify-center rounded-full px-5 py-3 text-[15px] font-semibold text-white shadow-[0_10px_30px_-10px_rgba(254,4,148,0.8)] md:mt-5"
            style={{ background: RING }}
          >
            Open in Routine Run
          </a>
          <p className="mt-3 text-[12px] leading-5 text-white/55">
            Opens on any phone or computer. To run it, get the app on{' '}
            <a href={PROOF.testflight} className="text-[#FF7CCB] underline-offset-2 hover:underline">
              TestFlight
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
