<template>
  <el-input
    ref="input"
    type="text"
    :value="inputValue"
    @input="handleInputValue"
    @blur="$emit('blur')"
    @change="$emit('change')"
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
  name: 'CInputPositiveInt',
  data () {
    return {
      inputValue: undefined
    }
  },
  props: {
    value: [Number, String],
    disabled: Boolean,
    append: String,
    prepend: String,
    placeholder: String,
    isIncludeZero: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInputValue (val) {
      if (val === '' || /^[1-9]\d*$/.test(val) || (val === '0' && this.isIncludeZero)) {
        this.inputValue = val
        this.$emit('input', val)
      }
    }
  },
  created () {
    this.$watch('value', (val) => {
      if (this.inputValue !== val) {
        this.inputValue = val
      }
    }, {
      immediate: true
    })
  }
}
</script>
