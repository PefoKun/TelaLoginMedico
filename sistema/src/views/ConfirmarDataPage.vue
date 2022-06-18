<template>
  <PageTemplate class='position-relative'>
  <div class="container m-5" >
    <div class="row ml-3">
      <div class="col title">
      <Titulo>Revisão do cadastro</Titulo>

      <ReviewDataPage/>
      </div>
    </div>
  </div>
  </PageTemplate>
</template>

<script>
import PageTemplate from "../components/PageTemplate.vue";
import Titulo from "../components/main/Titulo.vue"
import ReviewDataPage from "@/components/ReviewDataPage.vue";
export default {
  name:'PersonalDataPage',
  components:{ PageTemplate, Titulo, ReviewDataPage }
}
</script>

<style lang="scss" scoped>
@import  '../assets/variaveis.scss';


</style>