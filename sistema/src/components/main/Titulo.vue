<template>
  <h1 class="title"><slot></slot></h1>
</template>

<script>
export default {
name:'TituloPrincipal'
}
</script>

<style lang="scss" scoped>
@import  '../../assets/variaveis.scss';
.title{
  font-size: 40px;
  font-weight: 700;
  color:$primary-color-0;
  margin-bottom: 30px;
}
</style>