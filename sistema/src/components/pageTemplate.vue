<template>
<div class="container">
  <div class="row position-center--class d-flex">
    <b-aspect :aspect="pageAspect" class="col-10 central-element d-flex">
    <slot></slot>
    </b-aspect>
  </div>
</div>
</template>

<script>
export default {
name:'PageTemplate',
props:{
  pageAspect:{
    default:'7:4'
  }
}
}
</script>

<style lang="scss" >
@import  '../assets/variaveis.scss';

body{
  background-color: $cta-color-1;
}
div.position-center--class{
height: 100vh;
justify-content: center;
width: 100%;
align-items: center;
height: min-content;
}
div.central-element{
  border-radius: 30px 30px;
  background-color:$secondary-color-0;
  box-shadow: 0px 5px 20px -10px $secondary-color-7;
  max-width: 90vw;
  margin:30px;
  height: fit-content;
}

</style>