<script lang="ts">
import { defineComponent, h, provide, watchEffect } from 'vue'
import { ElForm } from 'element-plus'
export default defineComponent({
  props: ['readonly', 'labelWidth'],
  name: 'CForm',
  provide () {
    return {
      dataForm: this
    }
  },
  render() {
    return h(ElForm, {
      ref: 'form',
      class: this.readonly ? 'data-form data-form__readonly' : 'data-form',
      ...this.$props,
    }, 
    { default: () => this.$slots.default?.() }
    )
  },
})
</script>
