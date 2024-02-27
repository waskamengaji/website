import adapter from '@sveltejs/adapter-vercel'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess()],
  kit: {
    adapter: adapter({
      runtime: 'nodejs20.x',
      regions: ['sin1'],
      split: true,
    }),
    alias: {
      $assets: 'src/assets',
      $components: 'src/components',
      $routes: 'src/routes',
    },
  },
}

export default config
