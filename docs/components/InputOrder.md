# 序号输入  
`c-input-order`
用于输入序号然后调整数据的顺序， 只能输入大于0的正整数

## 示例  
<Demo>
  <InputOrderDemo />
</Demo>

### 代码
``` vue
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
  data() {
    return {
      items: [
        {
          id: 'foo',
          name: 'foo',
        },
        {
          id: 'bar',
          name: 'bar'
        },
        {
          id: 'foo',
          name: 'foo2',
        },
        {
          id: 'bar',
          name: 'bar2'
        },
        {
          id: 'foo',
          name: 'foo3',
        },
        {
          id: 'bar',
          name: 'bar3'
        },
        {
          id: 'foo',
          name: 'foo4',
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



```

## 属性  
| 名称 | 类型 | 描述 | 例子 |
| ---- | ---- | ---- | ---- |
| value | String, Number | 输入的排序值 | ---- |
| data | Array | 要排序的数组| ---- |
## 方法 
| 名称 | 参数 |描述| 例子 |  
| ---- | ---- | ---- | ---- |
| order-data | 要排序的数组 | 见例子 | ---- |

<Comment />