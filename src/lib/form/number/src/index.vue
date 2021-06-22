
<script>
import { h, defineComponent } from 'vue'
import { ElFormItem, ElInputNumber } from 'element-plus'
export default defineComponent({
  name: 'CFormNumber',
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
    let content = ''
    if (this.dataForm.readonly) {
      content = this.modelValue
    } else {
      content = h(ElInputNumber, {
        ref: 'formInputNumber',
        ...this.$attrs,
        modelValue: this.modelValue,
        'onChange': $event => this.$emit('change', $event),
        'onFocus': $event => this.$emit('focus', $event),
        'onBlur': $event => this.$emit('blur', $event),
        'onUpdate:modelValue': $event => this.$emit('update:modelValue', $event)
      })
    }
    return (
      h(ElFormItem, {
        ref: 'numberFormItem',
        class: 'textAlignLeft',
        ...this.formItemAttr
      }, { default: () => content })
    )
  }
})
</script>

<style>
</style>
