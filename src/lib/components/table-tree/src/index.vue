<script>
import { ElTable, ElTableColumn, ElCheckbox, ElRadio } from 'element-plus'
import TableWrapper from '../../table-wrapper/src/Index.vue'
import { h } from 'vue'
const defaultTableProps = {
  border: true,
  'highlight-current-row': false
}
export default {
  name: 'CTableTree',
  props: {
    props: {
      type: Object, //类型
      default: {} //默认值
    },
    data: {
      type: Array, //类型
      default: [] //默认值
    },
    header: {
      type: Array, //类型
      default: [] //默认值
    },
    selectionType: {
      type: String,
      default () {
        return 'none' // none, multiple, single
      }
    },
    selected: {
      type: Array, //类型
      default: [] //默认值
    },
    selectOnRowClick: {
      type: Boolean,
      default () {
        return false
      }
    },
    fixSelection: {
      type: Boolean,
      default () {
        return true
      }
    },
    rowIndexDisableSelection: {
      type: Array,
      default () {
        return []
      }
    },
    useContextMenu: {
      type: Boolean,
      default () {
        return true
      }
    }
  },
  data () {
    return {
      hiddenColumns: []
    }
  },
  computed: {
    selectStatus () {
      let dataCount
      if (this.props['tree-props']) {
        dataCount = this.getTableDataLength(this.data)
      } else {
        dataCount = this.data.length
      }
      const count = this.selected.length
      if (dataCount === 0 || count === 0) {
        return 'none'
      }
      if (dataCount === count) {
        return 'all'
      }
      return 'indeterminate'
    }
  },
  methods: {
        /*
    add by wanghaihua 2020/6/3
    */
    getTableDataLength (data) {
      let fun = (data, init) => {
        return data.reduce((r, c) => {
          r = r + 1
          const children = this.props['tree-props'].children
          if (children && c.children && c.children.length > 0) {
            r = fun(c.children, r)
          }
          return r
        }, init)
      }
      return fun(data, 0)
    },
    toggleColumn (index) {
      const hiddenColumns = this.hiddenColumns
      const idx = hiddenColumns.indexOf(index)
      if (idx === -1) {
        this.hiddenColumns.push(index)
      } else {
        this.hiddenColumns.splice(idx, 1)
      }
    },
    handleSortChange () {
      this.$emit('sort-change', ...arguments)
    },
    handleRowClick (row) {
      const index = this.data.indexOf(row)
      const disabled = this.rowIndexDisableSelection.includes(index)
      if (this.selectOnRowClick && !disabled) {
        const selectionType = this.selectionType
        let isSelected
        if (selectionType === 'multiple') {
          isSelected = this.selected.indexOf(index) > -1
          this.$emit(isSelected ? 'row-selection-remove' : 'row-selection-add', row, index)
        } else {
          this.$emit('row-selection-change', row, index)
        }
      }
      this.$emit('row-click', ...arguments)
    },
    createEmitter (eventName) {
      return function proxy () {
        this.$emit(eventName, ...arguments)
      }.bind(this)
    }
  },
  render () {
    // console.log('props==>', this.props)
    const fixSelection = this.fixSelection
    const rowIndexDisableSelection = this.rowIndexDisableSelection
    const useContextMenu = this.useContextMenu
    const hiddenColumns = this.hiddenColumns

    const selectionType = this.selectionType

    const elementUITableEvents = [
      'onCellMouseEnter',
      'onCellMouseLeave',
      'onCellClick',
      'onCellDblclick',
      // 'onRowClick',
      'onRowContextmenu',
      'onRowDblclick',
      'onHeaderClick',
      'onHeaderContextmenu',
      // 'onSortChange',
      'onCurrentChange',
      'onHeaderDragend',
      'onExpandChange'
    ].reduce((result, item) => {
      result[item] = this.createEmitter(item)
      // debugger
      return result
    }, {})
    let options = {}

    const getHeader = () => {
      // console.log('88888888<==header==>', this.header)
      const header = this.header.reduce((result, item, index) => {
        if (hiddenColumns.indexOf(index) === -1) {
          let slots
          if (item.render) {
            slots = {
              default: props => {
                return item.render(props)
              }
              // default: (props) => h('span', '123')
            }
            // slots = item.render
          }
          // console.log('result===>', index)
          let a = h(ElTableColumn, {
            key: index,
            ...item
          },
          slots)
          // debugger
          // let a = 1
          result.push(a)
        }
        // console.log('result===>', result)
        return result
      }, [])

      // const a = this.header.reduce((re, obj, i) => {
      //   re.push(obj)
      //   return re
      // }, [])
      if (selectionType !== 'none') {
        options = {
        // props: {
          width: 55,
          align: 'center',
          // },
          slots: {}
        }
        if (fixSelection) {
          options.fixed = 'left'
        }
        if (selectionType === 'multiple') {
        // options.type = 'selection'
          // options.renderHeader = () => {
          options.scopedSlot = () => { // modify by wanghaihua
            return h(ElCheckbox, {
            // props: {
            // value: this.selectStatus === 'all',
              disabled: this.disabled,
              modelValue: this.selectStatus === 'all',
              'onUpdate:modelValue': value => this.$emit('update:modelValue', value),
              indeterminate: this.selectStatus === 'indeterminate',
              // },
              // on: {
              onChange: () => {
                const selectStatus = this.selectStatus
                const status = selectStatus === 'all' || selectStatus === 'indeterminate'
                this.$emit('all-row-selection-change', !status)
              }
            // }
            })
          }
          options.slots.default = ({ $index: index, row }) => {
            const disabled = rowIndexDisableSelection.includes(index)
            return h(ElCheckbox, {
            // props: {
            // value: this.selected.indexOf(index) > -1,
              modelValue: this.selected.indexOf(index) > -1,
              // 'onUpdate:modelValue': value => this.$emit('update:modelValue', value),
              disabled,
              // },
              // nativeOn: {
              onClick: event => event.stopPropagation(),
              // },
              // on: {
              onChange: (value, $event) => {
                if (value) {
                  this.$emit('row-selection-add', row, index)
                } else {
                  this.$emit('row-selection-remove', row, index)
                }
                $event.stopPropagation()
                $event.preventDefault()
              }
            // }
            })
          }
        }

        if (selectionType === 'single') {
          options.slots.default = ({ $index: index, row }) => {
          // debugger
            const disabled = rowIndexDisableSelection.includes(index)
            return h(ElRadio, {
              class: 'hide-radio-label',
              // props: {
              modelValue: this.selected,
              'onUpdate:modelValue': value => this.$emit('update:modelValue', value),
              label: index,
              disabled,
              // },
              // nativeOn: {
              onChange: ($event) => {
              // debugger
                if (!disabled) {
                  this.$emit('row-selection-change', row, index)
                }
                $event.stopPropagation()
                $event.preventDefault()
              }
            // }
            })
          }
        }
        const selectionColumn = h(ElTableColumn, options, options.slots)
        header.unshift(selectionColumn)
      }

      return header
    }

    // console.log('getHeader===>', getHeader)
    const table = h(
      ElTable,
      {
        ref: 'table',
        class: 'cc-table',
        // props: {
        ...defaultTableProps,
        // },
        ...this.props,
        data: this.data,
        // directives: this.$directives,
        // on: {
        ...elementUITableEvents,
        'onSortChange': this.handleSortChange,
        'onRowClick':  this.handleRowClick
        // }
      },
      // header
      {
        default: getHeader
      }
    )
    // console.log('table==>', table)
    if (!useContextMenu) {
      return table
    }

    const tableWrapper = h(TableWrapper, {
      // props: {
      columns: this.header.map(item => item.label),
      hiddenColumns: this.hiddenColumns,
      // },
      // on: {
      'onToggleColumn': this.toggleColumn
      // }
    }, { default: () => { return  [table] }} )
    return tableWrapper
  }
}

</script>
<style lang="stylus" scoped>
.cc-table
  &:deep(.hidden)
    display none
.hide-radio-label &:deep(.el-radio__label)
  display none
</style>
