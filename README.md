# 🌐 Prema Vision — AI Automation & Backend Consulting Marketing Site

A modern, fast, React-powered marketing site for **Prema Vision**, built with **Vite**, **Tailwind CSS**, and a lightweight component architecture.  
Includes a fully functional **Google Apps Script–based contact form**, dark-mode–friendly UI, and clean layout optimized for conversion.

Deployed via **GitHub Pages** with zero-config CI.

---

## 🚀 Features

- **React + Vite** frontend with instant HMR and fast builds  
- **Responsive, modern UI** with Tailwind CSS  
- **Dark theme defaults** with polished styling  
- **Google Apps Script contact form** (serverless backend)  
- **Full SEO optimization** with dynamic meta tags, structured data, and Open Graph support
- **History API routing** with clean URLs (`/services`, `/contact`, etc.) - no hash fragments!
- **Optimized for GitHub Pages deployment**  
- Clean component structure ready for future expansion (blog, services, case studies)

---

## 🔍 SEO Features

This site is fully optimized for search engines and social media:

- ✅ **Dynamic Meta Tags** - Unique title, description, and keywords for each page
- ✅ **Open Graph Tags** - Optimized previews for Facebook, LinkedIn, Twitter
- ✅ **Structured Data** - Schema.org markup for Organization and ProfessionalService
- ✅ **Sitemap & Robots.txt** - Properly configured for search engine crawlers
- ✅ **Hash Routing** - SEO-friendly URLs with working browser navigation
- ✅ **Mobile Optimized** - Fast loading and perfect mobile experience

📄 **Documentation:**
- `SEO.md` - Complete SEO setup and best practices
- `HISTORY-API.md` - Technical deep dive on clean URL routing
- `DEPLOY.md` - Step-by-step deployment guide
- `SEO-CHECKLIST.md` - Quick post-deploy checklist

---

## 🏗 Tech Stack

- **React 18**
- **Vite**
- **TypeScript**
- **Tailwind CSS**
- **Google Apps Script** (form submission endpoint)
- **GitHub Pages** for hosting

---

## 📁 Project Structure

```
docs/                  # Production build (GitHub Pages entry point)
src/
  components/          # Reusable UI blocks (hero, pricing, footer…)
  sections/            # Page-level sections
  hooks/               # Form + UX hooks
  styles/              # Tailwind + global styles
public/                # Icons, manifest, robots
index.html             # Vite entry
form.js                # Apps Script endpoint (backend logic)
vite.config.ts         
tailwind.config.js
```

---

## ⚙️ Local Development

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Default URL:  
`http://localhost:5173`

### Build for production

```bash
npm run build
```

This outputs the static site to the `docs/` folder, used by GitHub Pages.

### Preview production build

```bash
npm run preview
```

---

## ✉️ Contact Form (Google Apps Script)

The form submits directly to a Google Apps Script endpoint (`form.js`).  
The script handles:

- Input validation
- Sending the email to your inbox
- Returning success/error JSON responses

To update the endpoint:

1. Copy the content of `form.js` into a new Apps Script project  
2. Deploy as “Web app”  
3. Paste the live URL into the frontend script

---

## 🎨 UI/UX Highlights

- Dark-first visual system  
- Clean typography + spacing scale  
- Subtle animations for interactivity  
- Mobile-first layout  
- Smooth form submission UX with loading + success states  

---

## 🌍 Deployment (GitHub Pages)

The site is deployed automatically from `docs/`.

If you need to redeploy manually:

```bash
npm run build
git add docs
git commit -m "deploy: update marketing site"
git push
```

GitHub Pages serves at:  
**https://premavision.net**

---

## 📌 Roadmap (Optional Enhancements)

- Add blog (MDX or static .md renderer)
- Add case studies / portfolio
- Integrate analytics (Plausible / GA4)
- Add pricing calculator UI
- Add A/B-testable landing page variants

---

## 📜 License

MIT — feel free to reuse structure and ideas.

---

If хочешь, могу также сделать **логотип**, **favicon pack**, **OpenGraph обложки**, или собрать тебе **full brand README badge set (like shields.io)**.
