import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';
import svg from '@poppanator/sveltekit-svg';
import arraybuffer from 'vite-plugin-arraybuffer';

export default defineConfig({
  plugins: [
    sveltekit(),
    enhancedImages(),
    arraybuffer(),
    svg({
      svgoOptions: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false // Why is this on by default!?
              }
            }
          }
        ]
      }
    })
  ],
  build: {
    cssMinify: 'lightningcss',
    modulePreload: false
  }
});
