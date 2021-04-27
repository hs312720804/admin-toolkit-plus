<template>
  <div>
    <c-input-thousands v-model="thousandsItem" ref="inputThousands" :isIncludeZero="true" placeholder="请输入数据">
    </c-input-thousands>
    <el-button type="primary" style="margin-top:10px" @click="handleGetValue">获取值</el-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      thousandsItem: 345666000
    }
  },
  methods: {
    /**
     * 获取输入的数据
    */
    handleGetValue () {
      alert(this.$refs.inputThousands.getPositiveInt(this.thousandsItem))
    }
  }
}
</script>
