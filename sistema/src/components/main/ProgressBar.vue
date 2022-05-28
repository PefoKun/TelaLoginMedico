<template>
  <div class="inline">
  <b-progress :max="max" height="1.5rem" class="half-input">
    <b-progress-bar class="purple-bar"  :value="progress"></b-progress-bar>
  </b-progress> 
  <span class="confortaa">{{progress}} de {{max}}</span> 
  </div>
</template>

<script>
export default {
name:'ProgressBar',
props:{
  max:{
    type:Number,
    required:true
  },
  progress:{
    type:Number,
    required:true
  },
}
}
</script>

<style scoped lang="scss">
@import  '../../assets/variaveis.scss';
.half-input{
    width:75%;
    background-color:$secondary-color-1;
  }
.purple-bar{
  background-color:$primary-color-0;
}
.inline{
  display:flex;
  flex-wrap: nowrap;
  flex-direction:row;
  width: 100%;
  margin-top: 20px;
  align-items: center;
  margin-bottom: 20px;
}
span{
  margin-left:30px;
  color:$primary-color-0;
  font-weight: 700;
  font-size:1.2rem;
}
</style>