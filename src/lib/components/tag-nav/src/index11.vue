<template>
<div style="background-color:#ccc;">
     <el-dropdown>
      <span class="el-dropdown-link">
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="a">黄金糕</el-dropdown-item>
          <el-dropdown-item command="b">狮子头</el-dropdown-item>
          <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
          <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CTagNav',
  setup() {
    
  },
})
</script>
