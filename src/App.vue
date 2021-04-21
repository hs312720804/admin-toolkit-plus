<template>
<div>
  <img alt="Vue logo" src="./assets/logo.png" />
  <c-card title="1111" @go-back="goBack">
        1111
  </c-card>
  
</div>
</template>
<script lang="ts">
import components from './lib/index'
import { defineComponent, onMounted } from 'vue'
export default defineComponent({
  name: 'App',
  components: {
    ...components
  },
  setup (props, ctx) {
    // methods
    const goBack = () => {
    }
    onMounted(() => {
     
    })
    return {
      goBack
    }
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