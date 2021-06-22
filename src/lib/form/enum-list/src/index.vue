
<script>
import { h, defineComponent } from 'vue'
import { ElFormItem, ElCheckboxGroup, ElCheckbox, ElSelect, ElOption } from 'element-plus'
export default defineComponent({
  name: 'CFormEnumList',
  props: {
    modelValue: {},
    confirm: {},
    options: {
      type: Array,
      default: () => {
        return []
      }
    },
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
    var getLabel = (val) => {
      const options = this.options || []
      const selected = options.filter(({ value }) => val.indexOf(value) > -1)
      if (selected.length > 0) {
        return selected.map(({ label }) => label).join(', ')
      }
    }
    var handleInputVal = (val) => {
      const confirm = this.confirm
      if (confirm) {
        let title
        let content
        if (typeof confirm === 'string') {
          title = this.$t('message.cMessage.tip')
          content = confirm
        } else {
          title = confirm.title
          content = confirm.content
        }
        this.$confirm(content, title).then(() => {
          this.$emit('update:modelValue', val)
        }).catch(() => { })
      } else {
        this.$emit('update:modelValue', val)
      }
    }
    if (this.dataForm.readonly) {
      content = getLabel(this.modelValue)
    } else {
      if (this.type === 'checkbox') {
        const checkboxs = this.options.map((e, i) => {
          return h(ElCheckbox, {
            key: i,
            label: e.value,
            disabled: e.disabled
          }, { defalut: () => e.label })
        })
        content = h(ElCheckboxGroup, {
          ref: 'formMultipleSelect',
          ...this.$attrs,
          modelValue: this.modelValue,
          'onChange': $event => this.$emit('change', $event),
          'onUpdate:modelValue': $event => handleInputVal($event)
        }, { default: () => checkboxs })
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
          ref: 'formMultipleSelect',
          multiple: true,
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
        ref: 'multipleSelectFormItem',
        class: 'textAlignLeft',
        ...this.formItemAttr
      }, { default: () => content })
    )
  }
})
</script>

<style>
</style>
