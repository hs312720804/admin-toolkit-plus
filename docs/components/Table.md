# 表格  
`c-table`  

## 示例  

### 效果

<Demo>
  <TableDemo />
</Demo>

### 代码  
```vue
<template>
  <c-table
    :data="table.data"
    :props="table.props"
    :header="table.header"
    :selection-type="table.selectionType"
    :selected="table.selected"
    :select-on-row-click="true"
    :row-index-disable-selection="[0]"
    @row-selection-add="handleRowSelectionAdd"
    @row-selection-remove="handleRowSelectionRemove"
    @row-selection-change="handleRowSelectionChange"
    @all-row-selection-change="handleAllRowSelectionChange"
    @row-click="handleRowClick"
  >
  </c-table>
</template>
<script>
import { createOperationRender } from '../lib/utils/component'
export default {
  data () {
    return {
      table: {
        props: {
          border: true
        },
        header: [
          {
            label: 'ID',
            prop: 'id',
            sortable: false
          },
          {
            label: '名称',
            prop: 'name',
            sortable: true
          },
          {
            label: '操作',
            render: createOperationRender(this, {
              handleRead: '查看',
              handleEdit: '编辑',
              handleDelete: '删除'
            })
          }
        ],
        data: [
          {
            id: '1',
            name: '名称1'
          },
          {
            id: '2',
            name: '名称2'
          }
        ],
        selectionType: 'single',
        selected: []
      }
    }
  },
  methods: {
    handleEdit ({ $index: index }) {
      this.$message(`编辑第${index + 1}条记录`)
    },
    handleRead ({ $index: index }) {
      this.$message(`阅读第${index + 1}条记录`)
    },
    handleDelete ({ $index: index }) {
      this.$message(`删除第${index + 1}条记录`)
    },
    handleRowSelectionChange(row, index) {
      this.table.selected = index
    },
    handleRowSelectionAdd (item, index) {
      this.table.selected = this.table.selected.concat(index)
    },
    handleRowSelectionRemove (item, index) {
      this.table.selected = this.table.selected.filter(item => item !== index)
    },
    handleAllRowSelectionChange (value) {
      if (value) {
        this.table.selected = this.table.data.map((_, index) => index)
      } else {
        this.table.selected = []
      }
    },
    handleRowClick(row, index) {
      console.log(arguments)
      this.$message(`row-click`)
    }
  }
}
</script>

```


## 属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| props | Object | element-ui 表格属性 | |
| header | Array | 表头 | | 
| data | Array | 表格数据 | |  
| selectionType | 'none' / 'multiple' / 'single' |  none 为不使用选择功能, multiple 为多选, single 为单选| |
| selected | Array 或者 Number | 如果 selectionType 是 multiple, 那么 selected 需要是一个数组,  包含选中的 index; 如果 selectionType 是 single, 那么 selected 是被选中的 index | |  

## 事件  
| 名称 | 参数 | 描述 |  
| ---- | ---- | ---- |  
| row-selection-add | (row: Object, index: Number) | 只在 selectoinType 为 multiple 时触发 |  
| row-selection-remove | (row: Object, index: Number) | 只在 selectoinType 为 multiple 时触发 |  
| row-selection-change | (row: Object, index: Number) | 只在 selectoinType 为 single 时触发 |  
| all-row-selection-change | (value: Boolean) | 当所有行的选中状态改变时触发, value 为选中状态 |  

<Comment />