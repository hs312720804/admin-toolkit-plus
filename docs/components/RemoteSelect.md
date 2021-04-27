# 远程数据选择      
`c-remote-select`  
用于在表单中选择远程数据记录  

## 示例  

### 效果

<ClientOnly>
<Demo>
  <RemoteSelectDemo />
</Demo>
</ClientOnly>

### 代码  
```vue
<template>
  <c-remote-select
    :title="remoteSelect.title" 
    :selected="remoteSelect.selected"
    @selection-remove="handleTableRowSelectionRemove"
    @selection-clear="handleRemoteSelectClear"
  >
    <c-content-wrapper
      :filter="remoteSelect.filter"
      :filter-schema="remoteSelect.filterSchema"
      :pagination="remoteSelect.pagination"
      @filter-change="fetchData"
    >
      <Table 
        :data="remoteSelect.table.data" 
        :props="remoteSelect.table.props"
        :header="remoteSelect.table.header"
        :selected="remoteSelect.table.selected"
        :selection-type="remoteSelect.table.selectionType"
        @row-selection-add="handleTableRowSelectionAdd"
        @row-selection-remove="handleTableRowSelectionRemove"
        @all-row-selection-change="handleTableAllRowSelectionChange"
      />
    </c-content-wrapper>
  </c-remote-select>
</template>
<script>
import _ from 'gateschema'
export default {
  data() {
    return {
      remoteSelect: {
        title: '选择数据',
        filter: {},
        filterSchema: _.map({
          id: _.o.string.other("form", {
            placeholder: "请输入 id",
            cols: {
              item: 5,
              label: 6,
              wrapper: 16,
              xsLabel: 0,
              xsWrapper: 24
            }
          }),
          name: _.o.string.other("form", {
            placeholder: "请输入 name",
            cols: {
              item: 5,
              label: 8,
              wrapper: 16,
              xsLabel: 0,
              xsWrapper: {
                offset: 2,
                span: 22
              }
            }
          })
        }).other("form", {
          layout: "inline",
          footer: {
            cols: {
              label: 0,
              wrapper: 24
            },
            showSubmit: true,
            submitText: "查询"
          }
        }),
        selected: [],
        table: {
          props: {
            border: true,
          },
          header: [
            {
              label: "ID",
              prop: "id",
              sortable: false
            },
            {
              label: "名称",
              prop: "name",
              sortable: true
            }
          ],
          data: [
            {
              id: "1",
              name: "名称1"
            },
            {
              id: "2",
              name: "名称2"
            }
          ],
          selected: [],
          selectionType: 'multiple'
        },
        pagination: {
          currentPage: 3,
          total: 200
        }
      }
    }
  },
  methods: {
    fetchData() {
      this.$message('数据过滤条件已改变, 这时会重新拉去数据'
      )
    },
    handleTableRowSelectionAdd(targetItem) {
      const remoteSelect = this.remoteSelect
      remoteSelect.selected = remoteSelect.selected.concat({
        id: targetItem.id,
        label: targetItem.name
      })
      this.updateTableSelected()
    },
    handleTableRowSelectionRemove(targetItem) {
      const remoteSelect = this.remoteSelect
      remoteSelect.selected = remoteSelect.selected.filter((item) => {
        return item.id !== targetItem.id
      })        
      this.updateTableSelected()
    },
    updateTableSelected() {
      const remoteSelect = this.remoteSelect
      const table = remoteSelect.table
      const newSelectedIndex = remoteSelect.selected.map(item => item.id)
      table.selected = table.data.reduce((result, item, index)=> {
        if (newSelectedIndex.indexOf(item.id) > -1) {
          result.push(index)
        }
        return result
      }, [])
    },
    handleRemoteSelectClear() {
      this.remoteSelect.selected = []
      this.remoteSelect.table.selected = []
    },
    handleTableAllRowSelectionChange(value) {
      if (value) {
        this.remoteSelect.table.data.forEach(this.handleTableRowSelectionAdd)
      } else {
        this.handleRemoteSelectClear()
      }
    }
  }  
}
</script>
```


## 属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |  
| title | String | 按钮和弹窗标题 | |  
| selected | Array | 已选择的数据 | | 

已选择的数据结构  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |  
| id | String/Number | 数据唯一标识 | |  
| label |  String | 显示标签 | | 

## 事件  
| 名称 | 描述 | 参数 | 例子 |  
| ---- | ---- | ---- | ---- |  
| selection-remove | 某个所选数据被移除 | (item: Object) | |  
| selection-clear |  清除所有已选数据 | | | 

<Comment />