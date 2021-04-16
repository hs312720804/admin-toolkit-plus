<template>
<div>
  <el-form-item :label="label" :prop="prop" :label-width="labelWidth" :rules="macRules">
    <el-input
      v-if="!isReadonly"
      :value="value"
      :type="type"
      :disabled="disabled"
      :clearable="clearable"
      :placeholder="placeholder"
      :maxlength="type!=='textarea' ? 12 : undefined"
      show-word-limit
      @input="$emit('input', $event)"
      @change="$emit('change', $event)"
    />
    <template v-else>{{ value }}</template>
  </el-form-item>
</div>
</template>

<script>
import formItemMixin from '../../formItemMixin'
import _ from 'lodash'
export default {
  name: 'CFormMac',
  mixins: [formItemMixin],
  data () {
    var validateMac = (rule, value, callback) => {
      const reg = /^[a-fA-F0-9]{12}$/
      value = _.trim(value)
      if (value !== '' && !reg.test(value)) {
        callback(new Error(this.$t('cMessage.inputRuleMac')))
      } else {
        callback()
      }
    }
    var validateMacs = (rule, value, callback) => {
      const reg = /^[a-fA-F0-9]{12}$/
      if (value.indexOf('，') > -1) {
        callback(new Error(this.$t('cMessage.useEnglishComma')))
      }
      value = value.split(',')
      try {
        value.forEach((e, index) => {
          if (e !== '' && !reg.test(_.trim(e))) {
            throw Error(this.$t('cMessage.the') + (index + 1) + this.$t('cMessage.macError'))
          }
        })
        callback()
      } catch (e) {
        callback(new Error(e.message))
      }
    }
    return {
      macRules: [],
      customRules: {
        singleMac: [
          { validator: validateMac, trigger: 'blur' }
        ],
        multipleMac: [
          { validator: validateMacs, trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    if (this.type === 'textarea') {
      this.macRules = this.rules ? this.customRules.multipleMac.concat(this.rules) : this.customRules.multipleMac
    } else {
      this.macRules = this.rules ? this.customRules.singleMac.concat(this.rules) : this.customRules.singleMac
    }
  }
}
</script>

<style>
</style>
