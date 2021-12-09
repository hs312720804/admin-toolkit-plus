<template>
  <div>
    {{isReadonly}}
    <c-form label-width="120px" :readonly="isReadonly">
      <c-form-enum :form-item-attr="formItemAttr" type="radio" confirm="是否更改性别"  v-model="form.gender" :options="genderOptions" />
      <c-form-enum :form-item-attr="formItemAttr1" v-model="form.job" :options="jobOptions" />
    </c-form>
    <el-button @click="handleSet">修改</el-button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    let isReadonly = ref(false)
    const formItemAttr = ref({ label: '性别'})
    const formItemAttr1 = ref({ label: '岗位'})
    const form = ref({ 
      gender: 'male',
      job: 'frontend'
    })
    const genderOptions = ref(
      [
        {
          label: '男',
          value: 'male'
        },
        {
          label: '女',
          value: 'female'
        },
        {
          label: '保密',
          value: 'unknown',
          disabled: true
        }
      ],
    )
    const jobOptions = ref(
      [{
        label: '前端工程师',
        value: 'frontend'
      },
      {
        label: '后端工程师',
        value: 'backend'
      }]
    )
    const handleSet = () => {
      debugger
      isReadonly.value = true
    }
    return {
      isReadonly,
      formItemAttr,
      formItemAttr1,
      jobOptions,
      genderOptions,
      form,
      handleSet
    }
  },
})
</script>

