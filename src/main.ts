import './main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as VueRouter from 'vue-router'

import App from './App.vue'

import MobileLandingView from './views/Mobile/MobileLandingView.vue'
import MobileContactView from './views/Mobile/MobileContactView.vue'
import MobileFrontendHomeView from './views/Mobile/MobileFrontendHomeView.vue'
import MobileBackendHomeView from './views/Mobile/MobileBackendHomeView.vue'

import FrontendHomeView from './views/FrontendHomeView.vue'
import BackendHomeView from './views/BackendHomeView.vue'
import LandingView from './views/LandingView.vue'
import BackendContactView from './views/BackendContactView.vue'
import FrontendContactView from './views/FrontendContactView.vue'

const mobileRoutes = [
  { path: '/', component: MobileLandingView },
  { path: '/Frontend', component: MobileFrontendHomeView, props: true },
  { path: '/Backend', component: MobileBackendHomeView, props: true },
  { path: '/Contact', component: MobileContactView, props: true }
]

const mobileRouter = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: mobileRoutes
})

const routes = [
  { path: '/', component: LandingView },
  { path: '/Frontend', component: FrontendHomeView, props: true },
  { path: '/Backend', component: BackendHomeView, props: true },
  { path: '/Backend/Contact', component: BackendContactView, props: true },
  { path: '/Frontend/Contact', component: FrontendContactView, props: true }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})

function isMobile() {
  return window.innerWidth <= 900
}

const app = createApp(App)

app.use(createPinia())
app.use(isMobile() ? mobileRouter : router)

app.mount('#app')
