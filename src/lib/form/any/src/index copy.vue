<template>
  <el-form-item :label="label" :prop="prop" :label-width="labelWidth" :rules="rules">
    <template v-if="!isReadonly">
      <slot name="edit"></slot>
    </template>
    <template v-else>
      <slot name="read">{{ modelValue }}</slot>
    </template>
  </el-form-item>
</template>

<script>
import formItemMixin from '../../formItemMixin'
export default {
  name: 'CFormAny',
  mixins: [formItemMixin],
  data () {
    return {

    }
  },
  created () {

  }
}
</script>

<style>
</style>
