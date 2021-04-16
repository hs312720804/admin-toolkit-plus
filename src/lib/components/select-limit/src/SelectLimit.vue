<template>
  <div>
    <el-select
      class="CSelectLimit"
      :value="value1"
      :filterable="filterable"
      :multiple="multiple"
      :disabled="disabled"
      :allow-create="allowCreate"
      :clearable="clearable"
      :placeholder="placeholder"
      @input="handleInput"
      @change="handleChange"
    >
      <el-option
        v-for="(item, index) in options"
        :key="index"
        :label="item[labelKey]"
        :value="item[valueKey]"
      >
      </el-option>
    </el-select>
  </div>
</template>
<script>
export default {
  name: 'CSelectLimit',
  props: {
    filterable: null,
    multiple: null,
    disabled: null,
    allowCreate: null,
    clearable: null,
    value: [String, Array, Number],
    placeholder: String,
    limits: {
      type: Number
    },
    limitReg: {
      type: Object
    },
    options: {
      type: Array,
      default () {
        return []
      }
    },
    labelKey: {
      type: String,
      default () {
        return 'label'
      }
    },
    valueKey: {
      type: String,
      default () {
        return 'value'
      }
    }
  },
  data () {
    return {
      value1: ''
    }
  },
  mounted () {
    let obj = document
      .getElementsByClassName('CSelectLimit')[0]
      .getElementsByTagName('input')[0]
    if (this.limits) {
      obj.maxLength = this.limits
    }
    let _this = this
    obj.oninput = function (event) {
      let val = event.target.value
      _this.inputChange(val)
    }
    this.value1 = this.value
  },
  methods: {
    inputChange (val) {
      this.$emit('inputChange', val)
    },
    handleInput (val) {
      this.value1 = val
      this.$emit('input', this.value1)
    },
    handleChange () {
      this.$emit('change', this.value1)
    }
  }
}
</script>
