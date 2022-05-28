<template>
  <PageTemplate class='position-relative'>
  <div class="container m-5">
    <div class="row ml-3">
      <div class="col title">
      <Titulo>Sobre o profissional</Titulo>
      <SubTitulo>Dados do profissional</SubTitulo>
      <ReviewDataPage/>
      </div>
    </div>
  </div>
  </PageTemplate>
</template>

<script>
import PageTemplate from "../components/PageTemplate.vue";
import Titulo from "../components/main/Titulo.vue"
import SubTitulo from "@/components/main/SubTitulo.vue";

import ReviewDataPage from "@/components/ReviewDataPage.vue";
export default {
  name:'PersonalDataPage',
  components:{ PageTemplate, Titulo, SubTitulo, ReviewDataPage }
}
</script>

<style lang="scss" scoped>
@import  '../assets/variaveis.scss';


</style>