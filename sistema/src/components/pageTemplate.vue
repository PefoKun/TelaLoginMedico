<template>
<div class="container">
  <div class="row position-center--class d-flex">
    <b-aspect aspect="5:3" class="col-10 central-element d-flex">
    <slot></slot>
    </b-aspect>
  </div>
</div>
</template>

<script>
export default {
name:'PageTemplate'
}
</script>

<style lang="scss" scoped>
@import  '../assets/variaveis.scss';

div.position-center--class{
height: 100vh;
justify-content: center;

align-items: center;
}
div.central-element{
  border-radius: 30px 30px;
  background-color:$secondary-color-0;
  box-shadow: 0px 5px 20px -10px $secondary-color-7;
    height: fit-content;
}

</style>