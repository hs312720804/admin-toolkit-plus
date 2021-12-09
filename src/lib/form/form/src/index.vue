<script lang="ts">
import { defineComponent, h, provide } from 'vue'
import { ElForm } from 'element-plus'
export default defineComponent({
  name: 'CForm',
  props: {
    readonly: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  setup (props) {
    console.log('props', props.readonly)
    provide('readonly', props.readonly)
  },
  render () {
    return h(
      ElForm,
      {
        ref: 'form',
        class: this.readonly ? 'data-form data-form__readonly' : 'data-form',
        ...this.$attrs
      },
      { default: () => this.$slots.default?.() }
    )
  }
})
</script>
<style lang="stylus" scoped>
.data-form >>>.el-form-item__content
  text-align: left
</style>
