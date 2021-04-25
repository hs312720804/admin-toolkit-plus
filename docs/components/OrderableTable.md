# 可调整顺序表格  
`c-orderable-table`
## 示例  
### 效果
<Demo>
  <OrderableTableDemo />
</Demo>

### 代码
```vue
<template>
  <div>
    <c-orderable-table 
      :header="table.header" 
      v-model="table.data">
    </c-orderable-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      table: {
        header: [],
        data: [
          {
            id: '1',
            name: 'foo'
          },
          {
            id: '2',
            name: 'bar'
          }
        ]
      }
    }
  }
}
</script>

<style>

</style>


```
## 属性
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| (value / v-model) | Array | Table组件的data属性 | ---- |
| header | Array | ---- | ---- |
| hideAction | Boolean | 是否隐藏删除动作 | ---- |
| readonly | Boolean | ---- | 预览时禁止排序 |
