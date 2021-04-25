<template>
  <c-content-wrapper
    :filter="filter"
    :pagination="pagination"
    @filter-change="handleFilterChange"
    @filter-reset="handleFilterReset"
  >
  <table>
    <tr v-for="(item, index) in data" :key="index">
      <td>{{item.name}}</td>
    </tr>
  </table>
  </c-content-wrapper>
</template>
<script lang="ts">
import { pageFakeData } from '../service/index'
export default {
  data () {
    return {
      filter: {},
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
        debugger
        this.data = data.rows
        this.pagination.total = data.total
        debugger
      })
    },
    handleFilterChange (type: string, filter: object) {
      if (type === 'pagination') {
        this.$message('分页数据发生改变')
      } else {
        this.filter = filter
        this.$message('筛选条件发生变更')
      }
    },
    handleFilterReset () {
      this.filter = {}
      this.$message('筛选条件需要重置')
    }
  },
  created () {
    this.fetchData()
  }
}
</script>
