<template>
  <el-breadcrumb>
    <el-breadcrumb-item
      v-for="(item, index) in items"
      :key="index"
      :to="item.to"
    >
      {{ item.name }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CBreadcrumb',
  props: {
    items: Array
  }
})
</script>
