
<template>
  <el-form-item class="textAlignLeft" :label="label" :prop="prop" :label-width="labelWidth" :rules="rules">
    <template v-if="!isReadonly">
      <slot name="edit"></slot>
    </template>
    <template v-else>
      <slot name="read">{{ modelValue }}</slot>
    </template>
  </el-form-item>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import formItemMixin from '../../formItemMixin'
export default defineComponent({
  name: 'CFormAny',
  mixins: [formItemMixin]
})
</script>
