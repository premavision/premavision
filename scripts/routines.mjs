#!/usr/bin/env node
/* Prema Vision routines as Routine Run share links, plus QR codes.
 *
 * Link format is the one the app's Share writes (RoutineKit/Model/RoutineLink.swift):
 *   https://routinerun.com/r?v=1&d= base64url( rawDEFLATE( JSON bundle, sorted keys ) )
 * The app refuses links over 2000 chars. Both the QR and the button carry a routinerun.com
 * address, so iOS opens the app straight from the camera (a universal link; a redirect
 * through premavision.net would land on the web page instead). A routine published from
 * the app ("Publish for a code") gets a short routinerun.com/c/<code>: set `code` and the
 * QR uses it, which also opens the App Clip once Routine Run is on the App Store.
 *
 * Output: src/routines.gen.json (names, steps, links) and public/img/qr/<slug>.svg, both
 * deterministic and committed so dev works without a build. The QR stays out of the JS
 * bundle: four of them as inline paths were 390 KB. */
import zlib from 'node:zlib';
import crypto from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';
import qrcode from 'qrcode-generator';

const EXPORTED_AT = '2026-10-17T00:00:00Z'; // fixed, so links don't change between builds
const TINT = '#FE0494';

export const ROUTINES = [
  {
    slug: 'first-call',
    name: 'First call with Prema Vision',
    detail: 'Five things to have in mind before a 30-minute call. Two sentences each is enough.',
    symbolName: 'phone.bubble',
    steps: [
      { title: 'Name the process', detail: 'The one that only works because someone remembers it.' },
      { title: 'Who carries it today', detail: 'One person, a few, or nobody for sure.' },
      { title: 'What it costs when it breaks', detail: 'Hours, money, a client. A rough number is fine.' },
      { title: 'Why now', detail: 'What changed this month or this quarter.' },
      { title: 'The tools it touches', detail: 'CRM, inbox, spreadsheets, your app.' }
    ]
  },
  {
    slug: 'ai-ready',
    name: 'Is your AI ready for real users?',
    detail: 'Six checks before customers meet your agent. Each one fails quietly if you skip it.',
    symbolName: 'checklist',
    steps: [
      { title: 'Keys out of the code', detail: 'Secrets in a vault, not in prompts or the repo.' },
      { title: 'Production apart from staging', detail: 'Separate projects, so a test never mixes with real traces.' },
      { title: 'Trace every step', detail: 'Tools and retrievers too, not only the model call.' },
      { title: 'A golden set of 30 real cases', detail: 'Run it before every prompt or model change.' },
      { title: 'Cost per run, with a limit', detail: 'Know it per conversation, not from the monthly bill.' },
      { title: 'A runbook for the night it breaks', detail: 'Who is alerted, what they check first, how to roll back.' }
    ]
  },
  {
    slug: 'before-an-agency',
    name: 'Before you hire an agency',
    detail: 'Five questions to ask before you sign. Write the answers down.',
    symbolName: 'person.2.badge.gearshape',
    steps: [
      { title: 'Who owns the code and accounts?', detail: 'Yours from the first commit, in your name.' },
      { title: 'A fixed price per milestone?', detail: 'And what counts as done for each one.' },
      { title: 'How do you test?', detail: 'Ask to see a test run, not a slide.' },
      { title: 'What happens when you leave?', detail: 'A handover doc a new engineer can start from.' },
      { title: 'A client I can call', detail: 'Not a logo. A person with a phone number.' }
    ]
  },
  {
    slug: 'website-check',
    name: 'Ten-minute website check',
    detail: 'Do it on your phone, the way your customers see your site.',
    symbolName: 'iphone',
    steps: [
      { title: 'Open it without the www', detail: 'A red warning page means a certificate problem.', duration: 60 },
      { title: 'Open it on your phone', detail: 'No pinching, no scrolling sideways.', duration: 60 },
      { title: 'Tap your phone number', detail: 'It should start a call, to the right number.', duration: 60 },
      { title: 'Search your business name', detail: 'The headline and the map listing should agree.', duration: 180 },
      { title: 'Send yourself the contact form', detail: 'Then check the message actually arrived.', duration: 240 }
    ]
  }
];

/* ---- link ------------------------------------------------------------ */

function uuidFrom(...parts) {
  const h = crypto.createHash('sha1').update(parts.join('\u0000')).digest();
  h[6] = (h[6] & 0x0f) | 0x50;
  h[8] = (h[8] & 0x3f) | 0x80;
  const x = h.subarray(0, 16).toString('hex').toUpperCase();
  return `${x.slice(0, 8)}-${x.slice(8, 12)}-${x.slice(12, 16)}-${x.slice(16, 20)}-${x.slice(20)}`;
}

// Every key Swift's encoder writes, with the app's defaults.
function fullRoutine({ slug, ...r }) {
  const id = uuidFrom('premavision', r.name);
  return {
    allowsMultipleInstances: false, archivesWhenDone: false, hooks: [], isOff: false,
    liveActivityControls: { showsAgain: true, showsBack: true, showsDecide: true, showsNext: true, showsPin: true, showsPutOff: true },
    parameters: {}, showsLiveActivity: true, stepsBelongToEachRun: false, tagIDs: [], tintHex: TINT, triggers: [],
    ...r,
    id,
    steps: r.steps.map((s, i) => {
      const step = { actions: [], isOff: false, parameters: {}, onDeadline: { actions: [], advances: false, reminds: true }, ...s, id: uuidFrom(id, 'step', i, s.title) };
      if (step.duration == null) delete step.duration;
      return step;
    })
  };
}

const sorted = (v) =>
  Array.isArray(v) ? v.map(sorted) : v && typeof v === 'object' ? Object.fromEntries(Object.keys(v).sort().map((k) => [k, sorted(v[k])])) : v;

function linkFor(r) {
  const routine = fullRoutine(r);
  const bundle = {
    formatVersion: 1, exportedAt: EXPORTED_AT, exportedFrom: 'premavision.net',
    routines: [routine], routine,
    notes: [], places: [], records: [], schemas: [], shortcuts: [], states: [], tags: [], templates: [], triggers: []
  };
  const d = zlib.deflateRawSync(Buffer.from(JSON.stringify(sorted(bundle))), { level: 9 }).toString('base64url');
  const link = `https://routinerun.com/r?v=1&d=${d}`;
  if (link.length > 2000) throw new Error(`${r.slug}: link is ${link.length} chars, the app refuses over 2000`);
  return link;
}

/* ---- QR: one SVG path, one unit per module, dark runs merged per row ---- */

function qrSvg(text, level) {
  const qr = qrcode(0, level);
  qr.addData(text);
  qr.make();
  const n = qr.getModuleCount();
  let d = '';
  for (let y = 0; y < n; y++)
    for (let x = 0; x < n; x++) {
      if (!qr.isDark(y, x)) continue;
      let w = 1;
      while (x + w < n && qr.isDark(y, x + w)) w++;
      d += `M${x} ${y}h${w}v1h-${w}z`;
      x += w - 1;
    }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 ${n + 4} ${n + 4}" shape-rendering="crispEdges"><rect x="-2" y="-2" width="${n + 4}" height="${n + 4}" fill="#fff"/><path d="${d}" fill="#001C41"/></svg>\n`;
}

await mkdir('public/img/qr', { recursive: true });
const out = [];
for (const { code, ...r } of ROUTINES) {
  const link = linkFor(r);
  const svg = qrSvg(code ? `https://routinerun.com/c/${code}` : link, code ? 'M' : 'L');
  await writeFile(`public/img/qr/${r.slug}.svg`, svg);
  out.push({ slug: r.slug, name: r.name, detail: r.detail, steps: r.steps, link, qr: `/img/qr/${r.slug}.svg` });
  console.log(`${r.slug}: link ${link.length} chars, QR ${(svg.length / 1024).toFixed(1)} KB`);
}
await writeFile('src/routines.gen.json', JSON.stringify(out, null, 1) + '\n');
