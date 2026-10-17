import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// One client entry (index.html). scripts/prerender.mjs renders every route
// into its own docs/<route>/index.html after both builds have run, so GitHub
// Pages serves real HTML for every URL and React hydrates it.
// SHOW_DRAFTS=1 keeps draft articles in the build for review; never deploy it.
export default defineConfig(({ ssrBuild }) => ({
  plugins: [react()],
  define: {
    __SHOW_DRAFTS__: JSON.stringify(process.env.SHOW_DRAFTS === '1' || process.env.NODE_ENV !== 'production')
  },
  server: { host: true, port: 5180 },
  build: ssrBuild
    ? { outDir: '.ssr-build', emptyOutDir: true }
    : {
        outDir: 'docs',
        emptyOutDir: true,
        assetsDir: 'assets',
        sourcemap: false,
        cssCodeSplit: false,
        manifest: true, // read by prerender.mjs for modulepreload, then deleted
        rollupOptions: {
          output: {
            // React changes far less often than the site: its own cacheable file
            manualChunks: (id: string) => (/node_modules\/(react|react-dom|scheduler)\//.test(id) ? 'react' : undefined)
          }
        }
      }
}));
