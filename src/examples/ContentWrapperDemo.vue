<template>
  <c-content-wrapper
    :pagination="pagination"
    @filter-change="handleFilterChange"
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
