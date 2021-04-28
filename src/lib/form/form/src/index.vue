<script lang="ts">
import { defineComponent, h, provide } from 'vue'
import { ElForm } from 'element-plus'
export default defineComponent({
  props: ['readonly', 'labelWidth'],
  name: 'CForm',
  setup(props, ctx) {
    provide('dataForm', { readonly: props.readonly })
  },
  render() {
    return h(ElForm, {
      ref: 'form',
      class: this.readonly ? 'data-form data-form__readonly' : 'data-form',
      ...this.$props,
    }, this.$slots.default?.())
  },
})
</script>
