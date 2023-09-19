import { createRouter, createWebHistory } from 'vue-router'
import BackendHomeViewVue from '../views/BackendHomeView.vue'
import FrontendHomeViewVue from '../views/FrontendHomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Frontend',
      name: 'Frontend',
      component: FrontendHomeViewVue
    },
    {
      path: '/Backend',
      name: 'Backend',
      component: BackendHomeViewVue
    }
  ]
})

export default router
