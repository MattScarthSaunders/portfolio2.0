import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as VueRouter from 'vue-router'

import App from './App.vue'
import FrontendHomeView from './views/FrontendHomeView.vue'
import BackendHomeView from './views/BackendHomeView.vue'
import LandingView from './views/LandingView.vue'
import BackendContactView from './views/BackendContactView.vue'
import FrontendContactView from './views/FrontendContactView.vue'

const routes = [
  { path: '/', component: LandingView },
  { path: '/Frontend', component: FrontendHomeView, props: true },
  { path: '/Backend', component: BackendHomeView, props: true },
  { path: '/Backend/Contact', component: BackendContactView, props: true },
  { path: '/Frontend/Contact', component: FrontendContactView, props: true }
]

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes // short for `routes: routes`
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
