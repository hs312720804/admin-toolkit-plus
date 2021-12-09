
  <template>
  <el-form-item v-bind="formItemAttr">
    <el-input-number
      v-if="!isReadonly"
      v-bind="$attrs"
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      @change="$emit('change', $event)"
    />
    <template v-else>{{ modelValue }}</template>
    <slot></slot>
  </el-form-item>
</template>
<script>
import { inject, defineComponent } from 'vue'
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
  setup (props, ctx) {
    const isReadonly = inject('readonly')
    return {
      isReadonly
    }
  }
})
</script>

<style>
</style>
