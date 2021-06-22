
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
    if (this.dataForm.readonly) {
      content = getLabel(this.modelValue)
    } else {
      if (this.type === 'radio') {
        const radioOptions = this.options.map((e, i) => {
          return h(ElRadio, {
            key: i,
            label: e.value,
            disabled: e.disabled
          }, { defalut: () => e.label })
        })
        content = h(ElRadioGroup, {
          ref: 'formSingleSelect',
          ...this.$attrs,
          modelValue: this.modelValue,
          'onChange': $event => this.$emit('change', $event),
          'onUpdate:modelValue': $event => handleInputVal($event)
        }, { default: () => radioOptions })
      } else {
        const selectOptions = this.options.map((e, i) => {
          return h(ElOption, {
            key: i,
            label: e.label,
            value: e.value,
            disabled: e.disabled
          })
        })
        content = h(ElSelect, {
          ...this.$attrs,
          ref: 'formSingleSelect',
          multiple: false,
          modelValue: this.modelValue,
          'onChange': $event => this.$emit('change', $event),
          'onVisibleChange': $event => this.$emit('visible-change', $event),
          'onRemoveTag': $event => this.$emit('remove-tag', $event),
          'onClear': $event => this.$emit('clear', $event),
          'onBlur': $event => this.$emit('blur', $event),
          'onFocus': $event => this.$emit('focus', $event),
          'onUpdate:modelValue': $event => handleInputVal($event)
        }, { default: () => selectOptions })
      }
    }
    return (
      h(ElFormItem, {
        ref: 'singleSelectFormItem',
        class: 'textAlignLeft',
        ...this.formItemAttr
      }, { default: () => content })
    )
  }
})
</script>

<style>
</style>
