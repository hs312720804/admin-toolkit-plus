# 卡片列表

`c-card-list`  
卡片列表，可用于展示图片或图文列表，带有选择功能，与 `Table` 组件的事件基本一致，可无缝切换

## 示例

### 效果

<Demo>
  <CardListDemo />
</Demo>

### 代码

```vue
<template>
  <c-card-list
    :gutter="14"
    :data="table.data"
    :selection-type="table.selectionType"
    :selected="table.selected"
    @row-selection-add="handleRowSelectionAdd"
    @row-selection-remove="handleRowSelectionRemove"
    @row-selection-change="handleRowSelectionChange"
    :select-on-row-click="true"
  >
    <template v-slot:default="slotProps">
      <div class="card-content">id: {{ slotProps.row.id }}</div>
    </template>
  </c-card-list>
</template>
<script>
export default {
  data () {
    return {
      table: {
        data: [
          {
            id: '1',
            name: '名称1'
          },
          {
            id: '2',
            name: '名称2'
          },
          {
            id: '3',
            name: '名称3'
          },
          {
            id: '4',
            name: '名称4'
          },
          {
            id: '5',
            name: '名称5'
          },
          {
            id: '6',
            name: '名称6'
          },
          {
            id: '7',
            name: '名称7'
          }
        ],
        selectionType: 'multiple',
        selected: []
      }
    }
  },
  methods: {
    handleRowSelectionAdd (item, index) {
      this.table.selected = this.table.selected.concat(index)
    },
    handleRowSelectionRemove (item, index) {
      this.table.selected = this.table.selected.filter(item => item !== index)
    },
    handleRowSelectionChange (item, index) {
      this.table.selected = index
    }
  }
}
</script>

<style lang="stylus" scoped>
.card-content
  border 1px solid #ccc
  padding 10px
</style>
```

## 属性

| 名称             | 类型                           | 描述                                                                                                                                   | 例子       |
| ---------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| data             | Array                          | 数据来源                                                                                                                               | 见上面例子 |
| selectionType    | 'none' / 'multiple' / 'single' | none 为不使用选择功能, multiple 为多选 single 为单选                                                                                   | 见上面例子 |
| selected         | Array 或者 Number              | 如果 selectionType 是 multiple, 那么 selected 需要是一个数组, 包含选中的 index; 如果 selectionType 是 single, 那么 selected 是被选中的 | 见上面例子 |
| gutter           | Number                         | 栅格间隔（同 el-row），默认 20                                                                                                         | 见上面例子 |
| selectOnRowClick | Boolean                        | 是否可以通过单击当前行选中数据                                                                                                         | 见上面例子 |

## 事件

| 名称                     | 参数                         | 描述                                           |
| ------------------------ | ---------------------------- | ---------------------------------------------- |
| row-selection-add        | (row: Object, index: Number) | 只在 selectoinType 为 multiple 时触发          |
| row-selection-remove     | (row: Object, index: Number) | 只在 selectoinType 为 multiple 时触发          |
| row-selection-change     | (row: Object, index: Number) | 只在 selectoinType 为 single 时触发            |
| all-row-selection-change | (value: Boolean)             | 当所有行的选中状态改变时触发, value 为选中状态 |
