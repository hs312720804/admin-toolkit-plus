# 内容包装器    
`c-content-wrapper`  
这个组件会给内容列表加上，推荐使用admin-base中的ab-list-layout
* 过滤表单  
* 分页

内容列表可以为表格, 卡片列表或者其他自定义列表, 通过 slot 嵌入包装器

## 示例  

### 效果
<ClientOnly>
<Demo>
<ContentWrapperDemo />
</Demo>
</ClientOnly>

### 代码  
```vue
<template>
    <c-content-wrapper
      :filter="filter"
      :filterSchema="filterSchema"
      :pagination="pagination"
      @filter-change="handleFilterChange"
      @filter-reset="handleFilterReset"
    >
      <c-table 
        :props="table.props"
        :header="table.header"
        :data="table.data"
      />
    </c-content-wrapper>
</template>

<script>
import _ from 'gateschema'
export default {
  data() {
    return {
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
            item: 7,
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
            item: 5,
            label: 0,
            wrapper: 24
          },
          showSubmit: true,
          submitText: "查询",
          showReset: true,
          resetText: "重置"
        }
      }),
      tableHeader: [
      ],
      pagination: {
        currentPage: 3,
        total: 25
      },
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
        selection: 'multiple',
        selected: [],
    }
    }
  },
  methods: {
    fetchData() {
      this.$message('数据过滤条件已改变, 这时会重新拉去数据')
    },
    handleFilterChange(type) {
      if (type === 'pagination') {
        this.$message('分页数据发生改变')
      } else {
        this.$message('筛选条件发生变更')
      }
    },
    handleFilterReset() {
      this.$message('筛选条件需要重置')
    }
  }
}
</script>

```


## 属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| filterSchema | Object | 表格内容过滤表单 schema |  |
| filter | Object | 过滤表单绑定的数据对象 |  |
| pagination | Object | element-ui 分页组件属性 | |


## 事件  
| 名称 | 参数 | 描述 |  
| ---- | ---- | ---- |  
| filter-change | (type: 'pagination' \| 'query') | 筛选条件发生改变时触发，区分查询条件还是分页条件|  
| filter-reset |  | 点击 重置 的时候触发，需要手动重置筛选参数 |  

<Comment />