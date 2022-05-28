<template>
  <PageTemplate class='position-relative'>
  <div class="container m-5">
    <div class="row ml-3">
      <div class="col title">
      <Titulo>Revisão do cadastro</Titulo>

      <FormularioPersonalDataPage/>
      
      </div>
    </div>
  </div>
  </PageTemplate>
</template>

<script>
import PageTemplate from "../components/PageTemplate.vue";
import Titulo from "../components/main/Titulo.vue"
import FormularioPersonalDataPage from "../components/FormularioPersonalDataPage.vue";
export default {
  name:'PersonalDataPage',
  components:{ PageTemplate, Titulo, FormularioPersonalDataPage }
}
</script>

<style lang="scss" scoped>
@import  '../assets/variaveis.scss';


</style>