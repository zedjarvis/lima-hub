/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { MotionPlugin } from '@vueuse/motion'
import router from '../router'
import pinia from '../store'
import head from './unhead'
import vuetify from './vuetify'


// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(head)
    .use(MotionPlugin)
}
