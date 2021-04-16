<template>
  <el-form-item :label="label" :prop="prop" :label-width="labelWidth" :rules="rules">
    <el-input-number
      v-if="!isReadonly"
      :value="value"
      :min="min"
      :max="max"
      :disabled="disabled"
      @input="$emit('input', $event)"
      @change="$emit('change', $event)"
    />
    <template v-else>{{ value }}</template>
    <slot></slot>
  </el-form-item>
</template>

<script>
import formItemMixin from '../../formItemMixin'
export default {
  name: 'CFormNumber',
  mixins: [formItemMixin],
  data () {
    return {

    }
  }
}
</script>

<style>
</style>
