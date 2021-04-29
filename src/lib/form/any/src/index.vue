
<template>
  <el-form-item class="textAlignLeft" :label="label" :prop="prop" :label-width="labelWidth" :rules="rules">
    <template v-if="!isReadonly">
      <slot name="edit"></slot>
    </template>
    <template v-else>
      <slot name="read">{{ modelValue }}</slot>
    </template>
  </el-form-item>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import formItemMixin from '../../formItemMixin'
export default defineComponent({
  name: 'CFormAny',
  mixins: [formItemMixin],
  setup(props, ctx) {
    // const dataForm = inject('dataForm')
    // const form =reactive({
    //   name: '王海花'
    // })
    // return {
    //   form
    // }
  },
})
</script>
