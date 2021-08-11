# 内容包装器

`c-content-wrapper`  
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
    :pagination="pagination"
    @filter-change="handleFilterChange"
  >
    <table>
      <tr v-for="(item, index) in data" :key="index">
        <td>{{ item.name }}</td>
      </tr>
    </table>
  </c-content-wrapper>
</template>
<script lang="ts">
import { pageFakeData } from '../service/index'
export default {
  data () {
    return {
      data: [],
      pagination: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  methods: {
    fetchData () {
      pageFakeData(this.pagination).then((data: any): void => {
        this.data = data.rows
        this.pagination.total = data.total
      })
    },
    handleFilterChange () {
      this.fetchData()
    }
  },
  created () {
    this.fetchData()
  }
}
</script>
```

## 属性

| 名称       | 类型   | 描述                    | 例子 |
| ---------- | ------ | ----------------------- | ---- |
| pagination | Object | element-ui 分页组件属性 |      |

## 事件

| 名称          | 参数 | 描述                                             |
| ------------- | ---- | ------------------------------------------------ |
| filter-change |      | 筛选条件发生改变时触发，区分查询条件还是分页条件 |
