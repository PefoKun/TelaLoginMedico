import Vue from 'vue'
import VueRouter from 'vue-router'
import PersonalDataPage from '../views/PersonalDataPage.vue'
import AtendimentoDataPage from '../views/AtendimentoDataPage.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'paginaCadastroPessoal',
    component: PersonalDataPage
  },
  {
    path:'/cadastro-atendimento',
    name: 'paginaCadastroConsulta',
    component: AtendimentoDataPage
  },
  {
    path:'/sobre-o-atendimento',
    name: 'paginaDadosConsulta',
    component: AtendimentoDataPage
  }
]

const router = new VueRouter({
  routes
})

export default router
