<template>
  <c-input-posibility v-model="ruleForm.rate" :is-restrict-num="true"  :decimals-length = "2" placeholder="请输入概率" />
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        rate: ''
      }
    }
  }
}
</script>
