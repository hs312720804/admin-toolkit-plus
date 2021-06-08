<!--add by wanghaihua 序号排序 2020/8/7-->
<template>
  <c-input-positive-int v-model="inputValue" @change="handleInputValue">
  </c-input-positive-int>
</template>
<script>
import _ from 'lodash'
export default {
  name: 'CInputOrder',
  data () {
    return {
      inputValue: undefined
    }
  },
  props: {
    value: [String, Number],
    data: Array
  },
  methods: {
    handleInputValue () {
      const val = this.inputValue
      if (_.trim(val) === '') {
        this.$message({
          type: 'error',
          message: this.$t('message.cMessage.inputPositiveInteger')
        })
        return
      }
      if (/^[1-9]\d*$/.test(val)) {
        this.handleInputOrder(this.value, val)
      }
    },
    handleInputOrder (index, order) {
      const dataList = JSON.parse(JSON.stringify(this.data))
      if (order > dataList.length) {
        order = dataList.length
      }
      const newIndex = order - 1
      const oldIndex = index - 1
      const item = dataList[oldIndex]
      dataList.splice(oldIndex, 1)
      const data = [].concat(dataList.slice(0, newIndex), item, dataList.slice(newIndex))
      this.$emit('order-data', data)
    }
  },
  created () {
    this.$watch('value', (val) => {
      if (this.inputValue !== val) {
        this.inputValue = val
      }
    }, {
      immediate: true
    })
  }
}
</script>
