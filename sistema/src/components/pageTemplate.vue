<template>
<div class="container">
  <div class="row position-center--class">
    <b-aspect aspect="4:3" class="col-8 central-element">
    <div>
    </div>
    </b-aspect>
  </div>
</div>
</template>

<script>
export default {
name:'pageTemplate.vue'
}
</script>

<style lang="scss" scoped>
@import  '../../public/variaveis.scss';

div.position-center--class{
display:flex;
height: 100vh;
justify-content: center;
align-items: center;
overflow: hidden;
}
div.central-element{
  border-radius: 30px 30px;
  background-color:$secondary-color-0;
  display:flex;
box-shadow: 0px 5px 20px -10px $secondary-color-7;


}

</style>