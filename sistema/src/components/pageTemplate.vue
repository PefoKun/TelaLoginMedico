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
margin:auto;

padding: 40px 50px;
@media(max-width:1600px){
  padding: 0px 50px; 
  height: 110vh; 
}
@media(max-width:1360px){
padding:0px 20px;
}
@media(max-width:1050px){
      padding:0px 0px;
}

}
div.central-element{
  border-radius: 30px 30px;
  background-color:$secondary-color-0;
  box-shadow: 0px 5px 20px -10px $secondary-color-7;
  max-width: 85vw;
  height: fit-content;
  
  margin-bottom: 0px;


}

</style>