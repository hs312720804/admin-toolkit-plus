<template>
  <div>
    <h3>按钮列表</h3>
    <c-action-list
      :actions="actions"
      :target="this"
    />
    <h3>按钮组</h3>
    <c-action-list
      :actions="actions"
      :target="this"
      :group="true"
    />
    <h3>左对齐</h3>
    <c-action-list
      :actions="actions"
      :target="this"
      :group="true"
      align="left"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      actions: {
        handleCreate: {
          type: 'primary',
          text: '创建'
        },
        handleBatchDelete: {
          text: '批量编辑'
        },
        handleBatchEdit: {
          text: '批量删除'
        }
      }
    }
  },
  methods: {
    handleCreate () {
      this.$message('handleCreate')
    },
    handleBatchDelete () {
      this.$message('handleBatchDelete')
    },
    handleBatchEdit () {
      this.$message('handleBatchEdit')
    }
  }
}

</script>
