<template>
  <div>
    <c-select-change
      v-model="checkedList"
      :dataList="dataList"
      allText="不限"
      labelKey="id"
      valKey="name"
    >
    </c-select-change>
  </div>
</template>
<script>
export default {
  data () {
    return {
      checkedList: [],
      dataList: [
        { name: '腾讯源', id: '1' },
        { name: '爱奇艺源', id: '2' },
        { name: '优酷源', id: '3', isShow: false },
        { name: '芒果TV源', id: '4', disabled: true }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped></style>
