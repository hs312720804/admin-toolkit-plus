<template>
  <el-form-item  class="textAlignLeft" :label="label" :prop="prop" :label-width="labelWidth" :rules="rules">
    <el-input
      v-if="!isReadonly"
      :modelValue="modelValue"
      :type="type"
      autosize
      :disabled="disabled"
      :clearable="clearable"
      :maxlength="maxlength"
      :rows="rows"
      :minlength="minlength"
      :placeholder="placeholder"
      :show-word-limit="showWordLimit"
      @update:modelValue="$emit('update:modelValue', $event)"
      @change="$emit('change', $event)"
    />
    <template v-else>{{ value }}</template>
  </el-form-item>
</template>

<script>
import formItemMixin from '../../formItemMixin'
export default {
  name: 'CFormString',
  mixins: [formItemMixin],
  data () {
    return {

    }
  }
}
</script>

<style>
</style>
