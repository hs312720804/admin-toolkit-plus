<script>
import { h, defineComponent } from 'vue'
import { ElFormItem, ElInput } from 'element-plus'
import _ from 'lodash'
export default defineComponent({
  name: 'CFormMac',
  props: {
    modelValue: {},
    formItemAttr: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  inject: ['dataForm'],
  render () {
    var validateMac = (rule, value, callback) => {
      const reg = /^[a-fA-F0-9]{12}$/
      value = _.trim(value)
      if (value !== '' && !reg.test(value)) {
        callback(new Error(this.$t('message.cMessage.inputRuleMac')))
      } else {
        callback()
      }
    }
    var validateMacs = (rule, value, callback) => {
      const reg = /^[a-fA-F0-9]{12}$/
      if (value.indexOf('，') > -1) {
        callback(new Error(this.$t('message.cMessage.useEnglishComma')))
      }
      value = value.split(',')
      try {
        value.forEach((e, index) => {
          if (e !== '' && !reg.test(_.trim(e))) {
            throw Error(
              this.$t('message.cMessage.the') +
                (index + 1) +
                this.$t('message.cMessage.macError')
            )
          }
        })
        callback()
      } catch (e) {
        callback(new Error(e.message))
      }
    }
    const type = this.$attrs.type
    const rules = this.formItemAttr.rules
    let macRules = []
    const customRules = {
      singleMac: [{ validator: validateMac, trigger: 'blur' }],
      multipleMac: [{ validator: validateMacs, trigger: 'blur' }]
    }
    if (type === 'textarea') {
      macRules = rules
        ? customRules.multipleMac.concat(rules)
        : customRules.multipleMac
    } else {
      macRules = rules
        ? customRules.singleMac.concat(rules)
        : customRules.singleMac
    }
    let content = ''
    if (this.dataForm.readonly) {
      content = this.modelValue
    } else {
      content = h(ElInput, {
        ...this.$attrs,
         ref: 'formMac',
        modelValue: this.modelValue,
        onChange: $event => this.$emit('change', $event),
        onFocus: $event => this.$emit('focus', $event),
        onBlur: $event => this.$emit('blur', $event),
        onClear: $event => this.$emit('clear', $event),
        onInput: $event => this.$emit('input', $event),
        'onUpdate:modelValue': $event => this.$emit('update:modelValue', $event)
      })
    }
    return h(
      ElFormItem,
      {
        ref: 'macFormItem',
        class: 'textAlignLeft',
        ...this.formItemAttr,
        rules: macRules
      },
      { default: () => content }
    )
  }
})
</script>

<style></style>
