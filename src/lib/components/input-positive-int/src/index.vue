<template>
  <el-input
    ref="input"
    type="text"
    :modelValue="inputValue"
    @update:modelValue="handleInputValue"
    @blur="$emit('blur')"
    @change="$emit('change')"
    :disabled="disabled"
    :placeholder="placeholder">
    <template v-slot:prepend v-if="prepend">
      <span >
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
  name: 'CInputPositiveInt',
  data () {
    return {
      inputValue: undefined
    }
  },
  props: {
    modelValue: [Number, String],
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
        this.$emit('update:modelValue', val)
      }
    }
  },
  created () {
    this.$watch('modelValue', (val) => {
      if (this.inputValue !== val) {
        this.inputValue = val
      }
    }, {
      immediate: true
    })
  }
}
</script>
