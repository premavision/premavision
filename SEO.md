# SEO Configuration

This document outlines the SEO improvements implemented for the Prema Vision website.

## ✅ What's Implemented

### 1. **Dynamic Meta Tags**
- Each page has unique title, description, and keywords
- Meta tags update automatically when navigating between pages
- Configured in `src/App.tsx` via `PAGE_SEO` object

### 2. **Open Graph Tags** (Social Media)
- Facebook, LinkedIn preview optimization
- Twitter Card support
- Dynamic updates for each page

### 3. **Structured Data (Schema.org)**
- Organization schema for company info
- ProfessionalService schema for services
- Helps Google show rich snippets in search results

### 4. **SEO Files**
- `robots.txt` - tells search engines what to crawl
- `sitemap.xml` - lists all pages for search engines
- Both files are in `/public` and auto-copied to `/docs` during build

### 5. **History API Routing (Clean URLs)**
- Clean URLs like `/services`, `/contact` (no hash!)
- Better for SEO than hash-based routing
- Browser back/forward buttons work correctly
- GitHub Pages compatible via 404.html redirect trick

## 📊 Testing Your SEO

### Test Meta Tags
1. Build the site: `npm run build`
2. Preview: `npm run preview`
3. Visit different pages and inspect the `<head>` section

### Test Social Sharing
Use these tools to see how your site appears when shared:
- **Facebook**: https://developers.facebook.com/tools/debug/
- **Twitter**: https://cards-dev.twitter.com/validator
- **LinkedIn**: Share the URL and check preview

### Test Structured Data
- **Google Rich Results Test**: https://search.google.com/test/rich-results
- Paste your URL to see if structured data is valid

### Test Overall SEO
- **Google Search Console**: https://search.google.com/search-console
- **PageSpeed Insights**: https://pagespeed.web.dev/

## 🔄 Updating SEO Content

### Change Page Metadata
Edit the `PAGE_SEO` object in `src/App.tsx`:

```typescript
const PAGE_SEO = {
  home: {
    title: "Your New Title",
    description: "Your new description",
    keywords: "keyword1, keyword2"
  },
  // ... other pages
};
```

### Update Global SEO (index.html)
Edit `/index.html` to change:
- Default meta tags
- Open Graph default image
- Structured data (company info)

### Update Sitemap
Edit `/public/sitemap.xml` and update `<lastmod>` dates when content changes.

## 📈 Recommended Next Steps

### 1. Submit to Search Engines
- **Google Search Console**: https://search.google.com/search-console
  - Submit your sitemap: `https://premavision.net/sitemap.xml`
  - Request indexing for main pages
- **Bing Webmaster Tools**: https://www.bing.com/webmasters

### 2. Add Analytics (Optional)
Consider adding Google Analytics 4 or Plausible for tracking:
```html
<!-- Add to index.html <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

### 3. Improve Images
- Add alt text to all images (currently using external Unsplash images)
- Optimize logo.png file size
- Consider creating a larger OG image (1200x630px recommended)

### 4. Content Optimization
- Add blog posts for better organic traffic
- Use internal linking between pages
- Add FAQ schema markup to FAQ sections

### 5. Monitor Performance
- Use Google PageSpeed Insights
- Aim for Core Web Vitals: LCP, FID, CLS
- Current setup is already optimized with Vite

## ⚙️ History API + GitHub Pages

This site uses **History API routing** for clean, SEO-friendly URLs like `/services` instead of `/#services`.

### How it works with GitHub Pages:

1. **Normal navigation**: React handles routing via `window.history.pushState()`
2. **Direct URL access**: When users visit `premavision.net/services` directly:
   - GitHub Pages doesn't find `/services/index.html` → serves `404.html`
   - Our `404.html` redirects to root with a redirect parameter
   - `index.html` script processes the redirect and updates the URL
   - React loads the correct page

### Benefits:
- ✅ Clean URLs without hash fragments
- ✅ Better SEO (search engines prefer clean URLs)
- ✅ Better social media sharing
- ✅ Professional appearance
- ✅ Works on GitHub Pages (static hosting)

### Trade-offs:
- Slightly more complex setup than hash routing
- Extra redirect on direct URL access (negligible performance impact)
- Still better than SSR for simple sites

## 📞 Questions?

If you need help with SEO, contact the Prema Vision team at support@premavision.net
