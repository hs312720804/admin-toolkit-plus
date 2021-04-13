<template>
  <div>{{test}}122</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'CTest',
  setup() {
    const test = ref(0)
    return {
      test
    }
  },
})
</script>

