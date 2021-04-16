<template>
<div>
  <el-input
    ref="input"
    type="text"
    :value="inputValue"
    @input="handleInputValue"
    @blur="$emit('blur')"
    @change="$emit('change')"
    :disabled="disabled"
    :placeholder="placeholder"
    >
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
      val = _.trim(val).replace(/,/g, '')
      if (val === '' || /^[1-9]\d*$/.test(val) || (val === '0' && this.isIncludeZero)) {
        if (val !== '') {
          this.inputValue = this.format_number(val)
        } else {
          this.inputValue = val
        }
        this.$emit('input', this.inputValue)
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
    this.$watch('value', (val) => {
      if (this.inputValue !== val) {
        this.inputValue = this.format_number(val)
        this.$emit('input', this.inputValue)
      }
    }, {
      immediate: true
    })
  }
}
</script>
