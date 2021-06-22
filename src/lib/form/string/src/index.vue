
<script>
import { h, defineComponent } from 'vue'
import { ElFormItem, ElInput } from 'element-plus'
export default defineComponent({
  name: 'CFormString',
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
      content = h(ElInput, {
        ref: 'formInput',
        ...this.$attrs,
        modelValue: this.modelValue,
        'onChange': $event => this.$emit('change', $event),
        'onFocus': $event => this.$emit('focus', $event),
        'onInput': $event => this.$emit('input', $event),
        'onBlur': $event => this.$emit('blur', $event),
        'onClear': $event => this.$emit('clear', $event),
        'onUpdate:modelValue': $event => this.$emit('update:modelValue', $event)
      })
    }
    return (
      h(ElFormItem, {
        ref: 'stringFormItem',
        class: 'textAlignLeft',
        ...this.formItemAttr
      }, { default: () => content })
    )
  }
})
</script>

<style>
</style>
