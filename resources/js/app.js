import { createApp, h } from 'vue'
import { createInertiaApp, Link, Head } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'

import { setupCalendar } from 'v-calendar'

import 'v-calendar/style.css'
import 'flowbite'

createInertiaApp({
  progress: {
    delay: 500,
    color: '#29d',
    showSpinner: true,
  },
  resolve: async (name) =>
    await resolvePageComponent(
      `./Pages/${name}.vue`,
      import.meta.glob('./Pages/**/*.vue'),
    ),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(setupCalendar, {})
      .component('Link', Link)
      .component('Head', Head)
      .mixin({ methods: { route: window.route } })
      .mount(el)
  },
})
