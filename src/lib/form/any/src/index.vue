<template>
  <el-form-item  v-bind="formItemAttr">
    <template v-if="!isReadonly">
      <slot name="edit"></slot>
    </template>
    <template v-else>
      <slot name="read">{{ modelValue }}</slot>
    </template>
  </el-form-item>
</template>
<script>
import { h, defineComponent, inject } from 'vue'
export default defineComponent({
  name: 'CFormAny',
  props: {
    modelValue: {},
    formItemAttr: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup () {
    const isReadonly = inject('readonly')
    return {
      isReadonly
    }
  }
})
</script>
