<script lang="ts">
import { defineComponent, h, provide, ref } from 'vue'
import { ElForm } from 'element-plus'
export default defineComponent({
  props: {
    readonly: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
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
      ...this.$attrs
    }, 
    { default: () => this.$slots.default && this.$slots.default()}
    )
  },
})
</script>
