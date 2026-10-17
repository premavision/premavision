import React from 'react';
import ReactDOM from 'react-dom/client';
import App, { preloadPage } from './App';
import './index.css';

/* Every page is prerendered into its HTML (scripts/prerender.mjs), so the
 * text is there for crawlers, link previews and the first paint. When it is,
 * React hydrates it; in dev the root is empty and React renders from scratch. */
const root = document.getElementById('root')!;
const tree = (
  <React.StrictMode>
    <App initialPath={window.location.pathname} />
  </React.StrictMode>
);
// Load this page's chunk first, so hydration finds it ready (it is usually
// already in the cache from the modulepreload in the HTML).
// If it can't load even after one fresh reload, the prerendered page stays as
// it is: readable, with plain links, rather than replaced by an error.
preloadPage(window.location.pathname).then(
  () => {
    if (root.hasChildNodes()) ReactDOM.hydrateRoot(root, tree);
    else ReactDOM.createRoot(root).render(tree);
  },
  () => {}
);
