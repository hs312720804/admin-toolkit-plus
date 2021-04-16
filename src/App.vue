<template>
<div>
  <img alt="Vue logo" src="./assets/logo.png" />
  <c-test></c-test>
</div>
</template>
<script lang="ts">
import CTest from './lib/components/test/index'
import components from './lib/index'
import { defineComponent, onMounted } from 'vue'
export default defineComponent({
  name: 'App',
  components: {
    CTest
  },
  setup(props, ctx) {
     onMounted(() => {
       console.log(components.cTest.name)
     })
  }
})
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>