<template>
  <el-form-item class="textAlignLeft" :label="label" :prop="prop" :label-width="labelWidth" :rules="rules">
    <el-input-number
      v-if="!isReadonly"
      :modelValue="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      :min="min"
      :max="max"
      :disabled="disabled"
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
