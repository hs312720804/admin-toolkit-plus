
<script>
import { h, defineComponent } from 'vue'
import { ElFormItem } from 'element-plus'
export default defineComponent({
  name: 'CFormAny',
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
      content = this.$slots.read?.() || this.modelValue
    } else {
      content = this.$slots.edit?.()
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
