<template>
<div>
  <img alt="Vue logo" src="./assets/logo.png" />
  <c-test></c-test>
</div>
</template>
<script lang="ts">
import CTest from './packages/components/test/index'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  components: {
    CTest
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