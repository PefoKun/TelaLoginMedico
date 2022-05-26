import Vue from 'vue'
import VueRouter from 'vue-router'
import PersonalDataPage from '../views/PersonalDataPage.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: PersonalDataPage
  },
]

const router = new VueRouter({
  routes
})

export default router
