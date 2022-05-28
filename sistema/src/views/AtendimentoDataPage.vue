<template>
  <PageTemplate class='position-relative'>
  <div class="container m-5">
    <div class="row ml-3">
      <div class="col title">
      <Titulo>Sobre o atendimento</Titulo>
      <SubTitulo>Detalhes do atendimento</SubTitulo>

      <FormularioPersonalDataPage/>
      
      </div>
    </div>
  </div>
  </PageTemplate>
</template>

<script>
import PageTemplate from "../components/PageTemplate.vue";
import Titulo from "../components/main/Titulo.vue"
import SubTitulo from "@/components/main/SubTitulo.vue";
import FormularioPersonalDataPage from "../components/formularioPersonalDataPage.vue";
export default {
  name:'AtendimentoDataPage',
  components:{ PageTemplate, Titulo, SubTitulo, FormularioPersonalDataPage }
}
</script>

<style lang="scss" scoped>
@import  '../assets/variaveis.scss';


</style>