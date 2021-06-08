<template>
<div>
  <el-input
    ref="input"
    type="text"
    :modelValue="inputValue"
    @update:modelValue="handleInputValue"
    @blur="$emit('blur')"
    @change="$emit('change')"
    :disabled="disabled"
    :placeholder="placeholder"
    >
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
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'CInputThousands',
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
      val = _.trim(val).replace(/,/g, '')
      if (val === '' || /^[1-9]\d*$/.test(val) || (val === '0' && this.isIncludeZero)) {
        if (val !== '') {
          this.inputValue = this.format_number(val)
        } else {
          this.inputValue = val
        }
        this.$emit('update:modelValue', this.inputValue)
      }
    },
    getPositiveInt (data) {
      return data.replace(/,/g, '')
    },
    format_number (n) {
      n = n.toString()
      var len = n.length
      if (len <= 3) { return n }
      var r = len % 3
      const start = n.slice(0, r)
      const end = n.slice(r).match(/\d{3}/g).join(',')
      return r > 0 ? start + ',' + end : end
    }
  },
  created () {
    this.$watch('modelValue', (val) => {
      if (this.inputValue !== val) {
        this.inputValue = this.format_number(val)
        this.$emit('update:modelValue', this.inputValue)
      }
    }, {
      immediate: true
    })
  }
}
</script>
