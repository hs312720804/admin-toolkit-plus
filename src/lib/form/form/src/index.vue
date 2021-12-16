<script lang="ts">
import { defineComponent, h, provide, watch, ref, resolveComponent } from 'vue'
// import { ElForm } from 'element-plus'
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
  setup (props, { attrs, slots }) {
    const readonly = ref(props.readonly)
    watch(
      () => props.readonly,
      (count, prevCount) => {
        readonly.value = count
      }
    )
    provide('readonly', readonly)
    const ElForm = resolveComponent('el-form')

    return () => h(
      ElForm,
      {
        ref: 'form',
        class: readonly ? 'data-form data-form__readonly' : 'data-form',
        ...attrs
      },
      { default: () => slots.default?.() }
    )
  },
  // render () {
  //   return h(
  //     ElForm,
  //     {
  //       ref: 'form',
  //       class: this.readonly ? 'data-form data-form__readonly' : 'data-form',
  //       ...this.$attrs
  //     },
  //     { default: () => this.$slots.default?.() }
  //   )
  // }
})
</script>
<style lang="stylus" scoped>
.data-form >>>.el-form-item__content
  text-align: left
</style>
