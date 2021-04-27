<template>
  <div>
    <ul>
      <li class="item" v-for="(item, index) in items" :key="index + Math.random().toString()">
        <c-input-order :value="index + 1" @order-data="handleOrderData" :data="items"/>
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: [
        {
          id: 'foo',
          name: 'foo'
        },
        {
          id: 'bar',
          name: 'bar'
        },
        {
          id: 'foo',
          name: 'foo2'
        },
        {
          id: 'bar',
          name: 'bar2'
        },
        {
          id: 'foo',
          name: 'foo3'
        },
        {
          id: 'bar',
          name: 'bar3'
        },
        {
          id: 'foo',
          name: 'foo4'
        },
        {
          id: 'bar',
          name: 'bar4'
        }
      ]
    }
  },
  methods: {
    handleOrderData (data) {
      this.items = data
    }
  }
}
</script>

<style lang="stylus" scoped>
.item >>> .el-input
  width 100px
  display inline-block
</style>
