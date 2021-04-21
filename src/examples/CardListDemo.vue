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
    <div class="card-content" slot="row" slot-scope="{row}">
        id: {{ row.id }}
    </div>
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
