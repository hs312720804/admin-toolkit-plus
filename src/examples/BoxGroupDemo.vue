<template>
  <c-box-group :option="option" :modelValue="select"  @update:modelValue="handleInput" selectType="multiple"/>
</template>
<script>
import { defineComponent, ref, reactive, getCurrentInstance } from "vue"
export default defineComponent( {
  setup () {
    const { ctx } = getCurrentInstance()
    let select = ref(1)
    let option = reactive([
      {
          label: '图片',
          value: 1
        },
        {
          label: '视频',
          value: 2
        },
        {
          label: '网页',
          value: 3
        }]
    )
    function handleInput (val) {
      ctx.$confirm('是否修改素材类型?', {
        type: 'warning'
      }).then(() => {
        select.value  = val
      }).catch(() => {})
    }
    return {
      handleInput,
      select,
      option
    }
  }
})
</script>