import { prerender } from 'react-dom/static';
import App, { sourceFor } from './App';
import { LOCAL_ROUTES, MAIN_ROUTES } from './site';
import { NOTES, visibleNotes } from './notes';
import { MOBILE_PACKAGES, MOBILE_FAQ } from './pages/Mobile';
import { INTERVIEW_PACKAGES, INTERVIEW_FAQ, STRUCTED_PACKAGES } from './pages/AiInterviews';
import { OPS_PACKAGES, OPS_FAQ, QUALITY_PACKAGES } from './pages/Operations';
import { ENG_PACKAGES, ENG_FAQ } from './pages/Engineering';
import { OVERSIGHT_PLANS, CARE_PLANS, RETAINER_FAQ, ADD_ONS } from './pages/Retainers';

/* Used only at build time by scripts/prerender.mjs. */
export async function render(path: string) {
  // prerender, unlike renderToString, waits for the lazy page chunks
  const { prelude } = await prerender(<App initialPath={path} />);
  return new Response(prelude).text();
}

export { sourceFor };

export const data = {
  MAIN_ROUTES,
  LOCAL_ROUTES,
  NOTES,
  visibleNotes: visibleNotes(),
  MOBILE_PACKAGES,
  MOBILE_FAQ,
  INTERVIEW_PACKAGES,
  INTERVIEW_FAQ,
  STRUCTED_PACKAGES,
  OPS_PACKAGES,
  OPS_FAQ,
  QUALITY_PACKAGES,
  ENG_PACKAGES,
  ENG_FAQ,
  OVERSIGHT_PLANS,
  CARE_PLANS,
  RETAINER_FAQ,
  ADD_ONS
};
