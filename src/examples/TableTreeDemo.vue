<template>
  <c-table-tree
    :data="table.data"
    :props="table.props"
    :header="table.header"
    :selection-type="table.selectionType"
    :selected="table.selected"
    :select-on-row-click="true"
    @row-selection-add="handleRowSelectionAdd"
    @row-selection-remove="handleRowSelectionRemove"
    @row-selection-change="handleRowSelectionChange"
    @all-row-selection-change="handleAllRowSelectionChange"
    @row-click="handleRowClick"
  >
  </c-table-tree>
</template>
<script>
import { createOperationRender } from '../lib/utils/component'
export default {
  data () {
    return {
      selected: [],
      table: {
        props: {
          'default-expand-all': true,
          'tree-props': { children: 'children' },
          'row-key': 'id'
          //  'max-height': 250
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
            name: '名称2',
            children: [
              {
                id: '21',
                name: '名称21'
              },
              {
                id: '22',
                name: '名称22'
              }
            ]
          }
        ],
        selectionType: 'multiple',
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
    handleRowSelectionChange (row, index) {
      this.table.selected = index
    },
    handleRowSelectionAdd (targetItem) {
      this.selected.push(targetItem)
      this.updateTableSelected()
      const children = targetItem.children
      if (children) {
        children.forEach((e) => {
          this.handleRowSelectionAdd(e)
        })
      }
    },
    handleRowSelectionRemove (targetItem) {
      const idField = 'id'
      this.selected = this.selected.filter(item => {
        return item[idField] !== targetItem[idField]
      })
      this.updateTableSelected()
      const children = targetItem.children
      if (children) {
        children.forEach((e) => {
          this.handleRowSelectionRemove(e)
        })
      }
    },
    handleAllRowSelectionChange (value) {
      if (value) {
        const table = this.table
        table.data.forEach(this.handleRowSelectionAdd)
      } else {
        this.handleAllRowSelectionRemove()
      }
    },
    handleAllRowSelectionRemove () {
      const idField = 'id'
      const table = this.table
      const allData = table.props['tree-props'] ? this.recursion(table.data, []) : table.data
      const currentPageSelected = allData.map(e => {
        return e[idField]
      })
      this.selected = this.selected.filter(e => {
        return !currentPageSelected.includes(e[idField])
      })
      this.table.selected = []
    },
    /*
    包括子节点的table总数
    */
    recursion (data, init) {
      return data.reduce((r, c) => {
        r.push(c)
        if (c.children) {
          this.recursion(c.children, r)
        }
        return r
      }, init)
    },
    updateTableSelected () {
      const idField = 'id'
      const table = this.table
      const newSelectedIndex = this.selected.reduce((result, item) => {
        result[item[idField]] = true
        return result
      }, {})
      const newTableData = this.table.props['tree-props'] ? this.recursion(table.data, []) : table.data
      table.selected = newTableData.reduce((result, item, index) => {
        if (newSelectedIndex[item[idField]]) {
          result.push(index)
        }
        return result
      }, [])
    },
    clearSelected () {
      this.selected = []
      this.table.selected = []
      this.updateTableSelected()
    },
    handleRowClick (row, index) {
      this.$message(`row-click`)
    }
  }
}
</script>
