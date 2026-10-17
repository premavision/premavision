#!/usr/bin/env node
/* Tell Bing, Yandex and other IndexNow engines that the pages changed.
 * Run after a deploy is live: npm run indexnow. Reads the live sitemap.
 * The key is public by design: it is the file public/200a53d9bcc129ed801d56bb69d45976.txt. */
const HOST = 'premavision.net';
const KEY = '200a53d9bcc129ed801d56bb69d45976';

const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList })
});
console.log(`IndexNow: ${urlList.length} urls, HTTP ${res.status}`); // 200 or 202 means accepted
