<template>
  <div class="content-list">
    <slot></slot>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagination.currentPage"
      :page-sizes="[5, 10, 15, 20, 50, 100]"
      :page-size="pagination.pageSize"
      :layout ="layout"
      :total="pagination.total">
    </el-pagination>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'CContentWrapper',
  props: {
    pagination: Object
  },
  emits: ['filter-change'],
  setup({ pagination }, { emit }) {
    const handleSizeChange = (size: number): void => {
       pagination.currentPage = 1
       pagination.pageSize = size
       emit('filter-change')
    }
    const handleCurrentChange = (page: number): void => {
      pagination.currentPage = page
      emit('filter-change')
    }
    const layout = computed(() => {
      return window.screen.width > 768 ? 'total, prev, pager, next, sizes, jumper' : 'total,sizes,pager'
    })
    return {
      handleSizeChange,
      handleCurrentChange,
      layout
    }
  },
})
</script>
<style lang="stylus" scoped>
.content-list
  margin-top 20px
  :deep(.el-pagination)
    padding 0
    margin-top 30px
    button:last-child
      margin-right 0
  :deep(.el-pagination__total)
    margin-right auto
</style>

