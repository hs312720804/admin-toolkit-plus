<template>
  <c-context-menu>
    <template v-slot:menu>
     <div class="menu">
      <li>新建</li>
      <li>编辑</li>
    </div>
    </template>
    <div>
      右键我
    </div>
  </c-context-menu>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.menu
  padding 10px
</style>
