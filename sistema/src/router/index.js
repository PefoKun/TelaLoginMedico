import Vue from 'vue'
import VueRouter from 'vue-router'
import PersonalDataPage from '../views/PersonalDataPage.vue'
import AtendimentoDataPage from '../views/AtendimentoDataPage.vue'
import ConfirmarDataPage from '../views/ConfirmarDataPage.vue'
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
    path:'/revisao-dados',
    name: 'paginaDadosConsulta',
    component: ConfirmarDataPage
  }
]

const router = new VueRouter({
  routes
})

export default router
