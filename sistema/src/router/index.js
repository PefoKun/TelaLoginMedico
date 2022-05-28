import Vue from 'vue'
import VueRouter from 'vue-router'
import PersonalDataPage from '../views/PersonalDataPage.vue'
import AtendimentoDataPage from '../views/AtendimentoDataPage.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: PersonalDataPage
  },
  {
    path:'/sobre-o-atendimento',
    name: 'paginaAtendimento',
    component: AtendimentoDataPage
  }
]

const router = new VueRouter({
  routes
})

export default router
