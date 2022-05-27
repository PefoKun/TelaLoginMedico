<template>
  <div class="split">
  <slot class="flex1" name="one"></slot>
  <slot class="flex1" name="two"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.split{
display:flex;
flex-wrap: nowrap;
width: 100%;
}
</style>