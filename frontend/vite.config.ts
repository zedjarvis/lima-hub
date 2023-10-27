// Plugins
import { unheadVueComposablesImports } from '@unhead/vue'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import ViteFonts from 'unplugin-fonts/vite'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import MetaLayouts from 'vite-plugin-vue-meta-layouts'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// Utilities
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      routesFolder: [
        'src/landingpage',
        {
          src: 'src/dashboard',
          path: 'app/'
        }

      ]
    }),
    vue({
      template: { transformAssetUrls }
    }),
    vueJsx({}),
    vuetify({
      autoImport: true,
    }),
    MetaLayouts({}),
    UnoCSS({}),
    Components({}),
    AutoImport({
      imports: [
        'vue',
        'pinia',
        '@vueuse/core',
        unheadVueComposablesImports,
        VueRouterAutoImports,
      ]
    }),
    ViteFonts({
      google: {
        families: [{
          name: 'Roboto',
          styles: 'wght@100;300;400;500;700;900',
        }],
      },
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    port: 3000,
  },
})
