# 🚀 Deploy Guide - History API + SEO

Quick guide to deploy your site with History API routing.

## 📦 Before Deploy

### 1. Build the site
```bash
npm run build
```

### 2. Verify build output
Check that these files exist in `docs/`:
- ✅ `index.html` (with redirect handler)
- ✅ `404.html` (SPA redirect trick)
- ✅ `robots.txt`
- ✅ `sitemap.xml`
- ✅ `logo.png`
- ✅ `assets/` folder

### 3. Test locally
```bash
npm run preview
```
Test these URLs:
- http://localhost:4173/ ✅
- http://localhost:4173/services ✅
- http://localhost:4173/contact ✅

Navigate between pages and use browser back/forward buttons.

## 🌐 Deploy to GitHub Pages

### Option 1: Git Push (Automatic)
```bash
git add .
git commit -m "Implement History API routing with clean URLs"
git push origin main
```

GitHub Pages will automatically serve from `/docs` folder.

### Option 2: Manual Deploy
1. Go to GitHub repo settings
2. Pages → Source → Deploy from branch
3. Branch: `main`, Folder: `/docs`
4. Save

## ✅ Post-Deploy Checklist

### 1. Verify Site is Live (2-5 minutes)
Visit: https://premavision.net

### 2. Test All Routes
- ✅ https://premavision.net/ (home)
- ✅ https://premavision.net/services
- ✅ https://premavision.net/cases  
- ✅ https://premavision.net/about
- ✅ https://premavision.net/contact

**Important**: Direct URLs should work (not show 404)

### 3. Test Navigation
- Click links between pages
- Use browser back/forward buttons
- Refresh page (should stay on same page)
- Share URL and open in new tab

### 4. Test SEO Files
- https://premavision.net/robots.txt
- https://premavision.net/sitemap.xml

### 5. Check Meta Tags
Open any page → View source → Check:
- `<title>` matches page
- `<meta name="description">` is present
- `<link rel="canonical">` has clean URL (no hash)
- Open Graph tags present

### 6. Test Social Sharing
**Facebook Debugger:**
1. Visit: https://developers.facebook.com/tools/debug/
2. Enter: https://premavision.net/services
3. Click "Scrape Again"
4. Verify preview looks good

**Twitter Card Validator:**
1. Visit: https://cards-dev.twitter.com/validator
2. Enter: https://premavision.net/services
3. Verify card preview

**LinkedIn:**
1. Create new post
2. Paste: https://premavision.net/services
3. Check preview

## 🔍 Submit to Search Engines

### Google Search Console
1. Visit: https://search.google.com/search-console
2. Add property: `https://premavision.net`
3. Verify ownership (DNS or HTML file)
4. Submit sitemap: `https://premavision.net/sitemap.xml`
5. Request indexing for key pages:
   - /
   - /services
   - /cases
   - /contact

**Expected**: Pages indexed within 3-7 days

### Bing Webmaster Tools
1. Visit: https://www.bing.com/webmasters
2. Add site: `https://premavision.net`
3. Verify ownership
4. Submit sitemap: `https://premavision.net/sitemap.xml`

## 📊 Monitor Performance

### Week 1: Technical Check
- [ ] All URLs load without errors
- [ ] No 404 errors in browser console
- [ ] Page load time < 2 seconds
- [ ] Mobile-friendly test passes

### Week 2: Search Console
- [ ] Pages appear in search console
- [ ] No indexing errors
- [ ] Sitemap processed successfully
- [ ] Mobile usability: No issues

### Month 1: SEO Impact
- [ ] Check Google Search Console for impressions
- [ ] Monitor average position
- [ ] Check click-through rate (CTR)
- [ ] Verify structured data appears

## 🐛 Common Issues

### Issue: Direct URLs show 404
**Cause**: GitHub Pages not finding 404.html  
**Fix**: 
1. Verify `docs/404.html` exists
2. Check GitHub Pages settings (should be `/docs`)
3. Wait 2-3 minutes for cache to clear
4. Hard refresh (Cmd+Shift+R)

### Issue: URLs have `?redirect=` parameter
**Cause**: Redirect script working, but not cleaning URL  
**Fix**: Check browser console for JavaScript errors

### Issue: Social sharing shows old content
**Cause**: Facebook/Twitter cache  
**Fix**: Use debugging tools to force re-scrape:
- Facebook: https://developers.facebook.com/tools/debug/
- LinkedIn: Wait 7 days or use inspector

### Issue: Google not indexing pages
**Cause**: New site or recent changes  
**Fix**: 
1. Submit sitemap in Search Console
2. Request indexing manually
3. Wait 3-7 days
4. Check robots.txt isn't blocking

## 🎯 Success Metrics

After 1 month, you should see:

| Metric | Target |
|--------|--------|
| PageSpeed Score | 90+ |
| Mobile-Friendly | Pass ✅ |
| Structured Data | Valid ✅ |
| Pages Indexed | 5/5 pages |
| Average Position | < 50 (improving) |
| Organic Impressions | Growing |

## 📚 Additional Resources

- `HISTORY-API.md` - Technical deep dive on routing
- `SEO.md` - Complete SEO documentation
- `SEO-CHECKLIST.md` - Quick reference checklist

## 🆘 Need Help?

1. Check browser console for errors
2. Review `HISTORY-API.md` for technical details
3. Test in incognito mode (eliminates cache issues)
4. Contact: support@premavision.net

---

**Remember**: History API is a **major SEO improvement**. Your site now has:
- ✅ Clean URLs (no hash)
- ✅ Better search engine visibility
- ✅ Professional appearance
- ✅ Improved social sharing

Give search engines 1-2 weeks to re-crawl and you'll see the benefits! 🚀
