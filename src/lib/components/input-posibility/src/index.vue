<template>
  <el-input
    ref="input"
    type="text"
    :modelValue="inputValue"
    @update:modelValue="handleInputValue"
    @blur="handleBlur"
    :disabled="disabled"
    :placeholder="placeholder">
    <template v-slot:prepend v-if="prepend">
      <span>
        {{prepend}}
      </span>
    </template>
    <template v-slot:append v-if="append">
    <span>
      {{append}}
    </span>
    </template>
  </el-input>
</template>

<script>
export default {
  name: 'CInputPosibility',
  props: {
   isRestrictNum: {
     type: Boolean,
     default: false
   },
   decimalsLength: {
     type: Number,
     default: 1
   },
   modelValue: {},
   disabled: {},
   append: {},
   prepend: {},
   placeholder: {}
  },
  data () {
    return {
      inputValue: undefined
    }
  },
  methods: {
    handleInputValue (val) {
      const reg = this.isRestrictNum ? new RegExp("^(0|1|0\\.\\d{0," + this.decimalsLength + "})$") : /^(0|1|0\.\d*)$/
      if (val === '' || reg.test(val)) {
        this.inputValue = val
        this.$emit('update:modelValue', val === '' ? '' : parseFloat(val))
      }
    },
    handleBlur () {
      if (this.inputValue.length === 2 && this.inputValue.lastIndexOf('.') === 1) {
        this.inputValue = this.inputValue.replace(/\./g, '')
      }
      this.$emit('blur')
    }
  },
  created () {
    this.$watch('modelValue', (val) => {
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
