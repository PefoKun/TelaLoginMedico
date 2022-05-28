<template>
  <b-button class="button-submit" type="submit">Próximo</b-button>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import  '../../assets/variaveis.scss';
.button-submit{
  background-color:$primary-color-0;
  text-transform: uppercase;
  border-radius: 15px;
  width: 95%;
  &:active{
    border:1px solid $secondary-color-7;
  }
  &:hover{
    background-color: #33266c;
  }
}


</style>