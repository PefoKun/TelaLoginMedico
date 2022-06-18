<template>
  <b-button class="button-submit" type="submit">CADASTRAR PROFISSIONAL</b-button>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import  '../../assets/variaveis.scss';
.button-submit{
  background-color:$cta-color-0;
  text-transform: uppercase;
  border-radius: 15px;
  width: 95%;
  color:$secondary-color-7;
  margin-top: 30px;
  font-size: 20px;
  line-height: 25px;
  font-weight: bold;
  border:0;
  &:hover{
    background-color: #e9cf3b;
    color:#4a4949;
  }
}


</style>