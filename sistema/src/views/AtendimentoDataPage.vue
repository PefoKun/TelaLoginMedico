<template>
  <PageTemplate pageAspect="10:8" class='position-relative'>
  <div class="container m-5">
    <div class="row ml-3">
      <div class="col title">
      <Titulo>Sobre o atendimento</Titulo>
      <SubTitulo>Detalhes do atendimento</SubTitulo>

      <FormularioAtendimentoDataPageVue></FormularioAtendimentoDataPageVue>
    
      </div>
    </div>
  </div>
  </PageTemplate>
</template>

<script>
import PageTemplate from "../components/PageTemplate.vue";
import Titulo from "../components/main/Titulo.vue"
import SubTitulo from "@/components/main/SubTitulo.vue";
import FormularioAtendimentoDataPageVue from "@/components/FormularioAtendimentoDataPage.vue";
export default {
  name:'AtendimentoDataPage',
  components:{ PageTemplate, Titulo, SubTitulo, FormularioAtendimentoDataPageVue }
}
</script>

<style lang="scss" scoped>
@import  '../assets/variaveis.scss';


</style>