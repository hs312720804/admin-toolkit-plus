<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="活动名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
  </el-form>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'CFormAny',
  setup() {
    const form =reactive({
      name: '王海花'
    })
    return {
      form
    }
  },
})
</script>
