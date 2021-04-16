<template>
  <el-input
    ref="input"
    type="text"
    :value="inputValue"
    @input="handleInputValue"
    :disabled="disabled"
    :placeholder="placeholder">
    <span
      v-if="prepend"
      slot="prepend">
      {{prepend}}
    </span>
    <span
      v-if="append"
      slot="append">
      {{append}}
    </span>
  </el-input>
</template>

<script>
export default {
  name: 'CInputPosibility',
  data () {
    return {
      inputValue: undefined
    }
  },
  props: ['value', 'disabled', 'append', 'prepend', 'placeholder'],
  methods: {
    handleInputValue (val) {
      if (val === '' || /^(0|1|0\.[1-9]*)$/.test(val)) {
        this.inputValue = val
        this.$emit('input', parseFloat(val))
      }
    }
  },
  created () {
    this.$watch('value', (val) => {
      if (parseFloat(this.inputValue) !== parseFloat(val)) {
        this.inputValue = val
      }
    }, {
      immediate: true
    })
  }
}
</script>

<style>
</style>
