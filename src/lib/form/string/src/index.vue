<template>
  <el-form-item v-bind="formItemAttr">
    
    <el-input
      v-if="!isReadonly"
      v-bind="$attrs"
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      @change="$emit('change', $event)"
      @clear="$emit('clear', $event)"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
    >
    
      <!--传递插槽-->
      <template 
        v-for="(item, key, index) in $slots"
        :key="index"
        #[key]
      >
        <slot :name="key"></slot>
      </template> 
   
    </el-input>
    
    <template v-else>
      {{ modelValue }}
    </template>
  </el-form-item>
</template>
<script lang="ts">
import { defineComponent, inject } from 'vue'
export default defineComponent({
  name: 'CFormString',
  props: {
    modelValue: {
      type: [String, Number],
      default: () => ''
    },
    formItemAttr: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  emits: ['update:modelValue', 'change',  'clear', 'blur', 'focus'],
  setup() {
    const isReadonly = inject('readonly')
    return {
      isReadonly
    }
  },
})
</script>

