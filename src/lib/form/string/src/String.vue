<template>
  <el-form-item :label="label" :prop="prop" :label-width="labelWidth" :rules="rules">
    <el-input
      v-if="!isReadonly"
      :value="value"
      :type="type"
      autosize
      :disabled="disabled"
      :clearable="clearable"
      :maxlength="maxlength"
      :rows="rows"
      :minlength="minlength"
      :placeholder="placeholder"
      :show-word-limit="showWordLimit"
      @input="$emit('input', $event)"
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
