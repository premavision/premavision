# Deploy premavision.net

GitHub Pages serves `docs/` from `main` (CNAME `premavision.net`). **Any push to `main` publishes.**

## Build

```bash
npm run build
```

What it does:

1. `tsc --noEmit`: type check.
2. `NODE_ENV=production vite build`: client bundle into `docs/`. `NODE_ENV` is forced because the terminal has `NODE_ENV=local`, which would ship development React (twice the JavaScript).
3. `vite build --ssr src/entry-server.tsx`: a server build into `.ssr-build/` (git-ignored).
4. `node scripts/prerender.mjs`: renders every route into `docs/<path>/index.html` with its own title, description, canonical URL, Open Graph tags and JSON-LD; writes `404.html`, redirect pages for old URLs (`/services/`, `/cases/`, `/check/`, `/websites/`, `/automation/`), `sitemap.xml`, `robots.txt`, `llms.txt` and `llms-full.txt`.

Check locally with `npx vite preview --port 4180` (it serves `docs/`).

## Articles

Articles live in `src/notes.ts`. `status: 'draft'` articles show in `npm run dev` and in `npm run build:drafts`, and are left out of the production build. Never deploy a `build:drafts` output. To publish one: set `status: 'published'`, set `date` to the publication day, build, deploy.

## Images

- Backgrounds: `public/img/<name>.webp` (1920 px) and `<name>-960.webp`. Generated in ChatGPT and Gemini with the recipe in `korolkov-pro-for-prema-vision/images/prompts.md`; prompts for this site are in `og/prompts.md`.
- Portraits: `public/img/denys-korolkov.webp`, `victoria-von.webp` (768×960).
- Share preview: `public/og/premavision.jpg`, rendered from `og/og-source.html`:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 --window-size=1200,630 --virtual-time-budget=5000 --screenshot=/tmp/og.png "file://$PWD/og/og-source.html"
```

then save `/tmp/og.png` as JPEG quality 86 into `public/og/premavision.jpg`.

## Analytics

On: Cloudflare Web Analytics (no cookies, no consent banner), site "premavision.net" in the denyskorolkov@premavision.net Cloudflare account, Analytics → Web analytics. The site token is in `scripts/prerender.mjs`; every page gets the beacon. To build without it (for example, a local test you don't want counted):

```bash
CF_ANALYTICS_TOKEN= npm run build
```

## Contact forms

All forms (main and `/local/`) post to the Apps Script in `src/google_script.js` with `formGuard` and an empty `website` honeypot. The script drops anything without the guard silently, so a form that stops sending it loses every message with no error. The script itself is deployed by hand in Google Apps Script; the file here is its source.

## After deploy

- Open `/`, `/mobile/`, `/ai-interviews/`, `/work/`, `/about/`, `/notes/`, `/contact/`, `/local/` on a phone.
- Paste the home URL into LinkedIn's Post Inspector to refresh the preview.
- Google Search Console: property `https://premavision.net/` (account denys@premavision.net), verified by `public/googlee4c7d61c501032fe.html` (keep that file), sitemap submitted 17 Oct 2026.
- Bing, Yandex and other IndexNow engines: after a deploy is live, run `npm run indexnow` (key file in `public/`, script in `scripts/indexnow.mjs`). Bing Webmaster Tools itself needs a Microsoft sign-in; it can import the Google property.
