<template>
  <div class="demo">
    <slot />
  </div>
</template>
<script type="ts">
export default {
  name: 'demo',
  data () {
    return {

    }
  }
}
</script>
<style lang="stylus" scoped>
.demo
  margin 10px
  padding 10px
  border 1px solid #ccc
</style>