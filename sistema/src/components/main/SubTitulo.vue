<template>
  <h3 class="title"><slot></slot></h3>
</template>

<script>
export default {
name:'TituloSecundario'
}
</script>

<style lang="scss" scoped>
@import  '../../assets/variaveis.scss';
.title{
  font-size: 30px;
  font-weight: 600;
  color:$secondary-color-7;
  margin-bottom:30px;

}
</style>