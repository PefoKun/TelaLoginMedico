<template>
<div class="show-info">
  <strong> {{title}} </strong>
  <span><slot></slot></span>
</div>
</template>

<script>
export default {
  name:'InfoShow',
  props:{
    title: String
  }
}
</script>

<style scoped lang="scss">
.show-info{
  display: flex;
  flex-direction: column;
  max-width: 300px;
  
  strong{
    font-weight: 500;
    margin-bottom: 5px;
  }
  span{
    width: 100%;
    height: fit-content;
    line-break: anywhere;
  }
}
</style>