
<template>
  <el-form-item  v-bind="formItemAttr">
    <template v-if="!isReadonly">
      <el-switch
        v-if="type === 'switch'"
        :model-value="getBoolVal(modelValue)"
        @update:modelValue="handleInputVal"
        @change="$emit('change', $event)"
        v-bind="$attrs"
      ></el-switch>
      <el-checkbox
        v-else
        :model-value="getBoolVal(modelValue)"
        @update:modelValue="handleInputVal"
        @change="$emit('change', $event)"
        v-bind="$attrs"
      >
        <slot></slot>
      </el-checkbox>
    </template>
    <template v-else>
      <span v-if="type === 'switch'">{{ getBoolVal(modelValue) ? $t('cMessage.yes') : $t('cMessage.no')  }}</span>
      <el-checkbox v-else :disabled="true" :value="getBoolVal(modelValue)"></el-checkbox>
      <slot></slot>
    </template>
  </el-form-item>
</template>
<script>
import { inject, defineComponent } from 'vue'
export default defineComponent({
  name: 'CFormBoolean',
  props: {
    modelValue: {},
    type: {},
    formItemAttr: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  emits: ['update:modelValue', 'change'],
  setup(props, ctx) {
    const getBoolVal = (val) => {
      return !!val
    }
    const handleInputVal = (val) => {
      ctx.emit('update:modelValue', !!val)
    }
    const isReadonly = inject('readonly')
    const handleChange = (val) => {
      ctx.emit('change', val)
    }
    return {
      getBoolVal,
      handleInputVal,
      isReadonly
    }
  }
})
</script>
