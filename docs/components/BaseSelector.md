# 基础数据选择器
`c-base-selector`
用于创建数据选择器，配合 `c-select-dialog选择器` 可实现点击弹窗选择数据  

## 示例  
<Demo>
  <BaseSelectorDemo />
</Demo>

## 代码  
```vue
<template>
  <c-base-selector 
    ref="baseSelector"
    id-field="id"
    :is-live="isLive"
    :selection-type="selectionType"
    :table="table" 
    :pagination="pagination"
    :filter="filter"
    :filter-schema="filterSchema"
    @pagination-change="fetchData"
    @filter-change="fetchData"
    @filter-reset="handleFilterReset"
    @select-cancel="$emit('select-cancel')"
    @select-end="$emit('select-end')">
  </c-base-selector>
</template>
 
<script>
export default {
  data() {
    return {
      pagination: {
        currentPage: 1,
        pageSize: 15
      },
      filter: this.getDefaultFilter(),
      filterSchema: null,
      table: {
        props: {},
        header: [
          {
            label: "ID",
            prop: "id",
            width: "70"
          },
           {
            label: "名称",
            prop: "name",
          },
        ],
        data: [
          {
            id: 1,
            name: 'foo'
          },
          {
            id: 2,
            name: 'bar'
          }
        ] 
      }
    }
  },
  computed: {
    selected() {
      return this.$refs.baseSelector.selected.slice()
    }
  },
  props: ['isLive', 'selectionType'],
  methods: {
    getDefaultFilter() {
      return {
      }
    },
    getFilter() {
      const pagination = this.pagination
      const filter = Object.assign({}, this.filter)
      if (pagination) {
        filter.page = pagination.currentPage
        filter.rows = pagination.pageSize
      }
      return filter
    },
    handleFilterReset() {
      this.filter = this.getDefaultFilter()
      this.pagination.currentPage = 1
      this.fetchData()
    },
    fetchData() {
    }
  },
  created() {
    this.fetchData()
  }
}
</script>

```

## 属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| idField | String | 表格主键 | ---- |
| filter | Object | 筛选条件 | ---- |
| filterSchema | Object | 筛选主题，结合gateSchema使用 | ---- |
| table | Object | 参见Table组件 | ---- |
| pagination | Object | 分页属性 | { currentPage, pageSize } |
| selectionType | String | 表格单选/多选，参见Table组件 | ---- |

## slot
| name | 说明 |
| ---- | ---- | 
| filter | 自定义筛选表格 |
| item-list | 自定义内容 |
| pagination | 自定义分页组件 |
| actions | 自定义分页旁边的按钮组 |
| default | footer下方的空插槽 |

## 事件  
| 名称 | 参数 | 描述 |  
| ---- | ---- | ---- | 
| select-end | (value: Array) | 确定按钮 |  
| select-cancel | ---- | 取消按钮 |  
| filter-change | ---- | 查询结果改变 |  
| pagination-change | ---- | 分页条件改变 |  
| filter-reset | ---- | 重置查询条件 |  

<Comment />