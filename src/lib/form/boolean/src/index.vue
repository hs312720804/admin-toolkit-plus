
<script>
import { h, defineComponent } from 'vue'
import { ElFormItem, ElSwitch, ElCheckbox } from 'element-plus'
export default defineComponent({
  name: 'CFormBoolean',
  props: {
    modelValue: {},
    type: {},
    formItemAttr: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  inject: ['dataForm'],
  render () {
    let content = ''
    var getBoolVal = (val) => {
      return !!val
    }
    let handleInputVal = (val) => {
      this.$emit('update:modelValue', !!val)
    }
    if (this.dataForm.readonly) {
      if (this.type === 'switch') {
        content = getBoolVal(this.modelValue) ? this.$t('message.cMessage.yes') : this.$t('message.cMessage.no') 
      } else {
        content = h(ElCheckbox, {
          disabled: true,
          modelValue: getBoolVal(this.modelValue)
        }, { default: () => {
          return this.$slots.default && this.$slots.default()
        }
        })
      }
    } else {
      if (this.type === 'switch') {
        content = h(ElSwitch, {
          ref: 'formBoolean',
          ...this.$attrs,
          modelValue: this.modelValue,
          'onChange': $event => this.$emit('change', $event),
          'onUpdate:modelValue': $event => handleInputVal($event)
        })
      } else {
        content = h(ElCheckbox, {
          ...this.$attrs,
          ref: 'formBoolean',
          modelValue: this.modelValue,
          'onChange': $event => this.$emit('change', $event),
          'onUpdate:modelValue': $event => handleInputVal($event)
        }, { default: () => {
          return this.$slots.default && this.$slots.default()
        }
        })
      }
    }
    return (
      h(ElFormItem, {
        ref: 'booleanFormItem',
        class: 'textAlignLeft',
        ...this.formItemAttr
      }, { default: () => content })
    )
  }
})
</script>
