<script>
import GateSchemaForm from '../aa'
// import { Pagination } from 'element-ui'
export default {
  name: 'CContentWrapper',
  data () {
    return {
      // 与表单绑定的 filter对象
      viewFilter: {},
      // 外面传进来的 filter 对象
      inputFilter: {}
    }
  },
  props: ['filter', 'filterSchema', 'pagination'],
  computed: {
    defaultPaginationProps () {
      return {
        background: true,
        pageSizes: [5, 10, 15, 20, 50, 100],
        pageSize: 10,
        small: !(window.screen.width > 768),
        pagerCount: window.screen.width > 768 ? 7 : 5,
        layout: window.screen.width > 768 ? 'total, prev, pager, next, sizes, jumper' : 'total,sizes,pager'
      }
    }
  },
  created () {
    this.$watch('filter', this.setFilterData, {
      immediate: true
    })
  },
  methods: {
    setFilterData (filter) {
      // 如果外面传进来的 filter 与 inputFilter 不一样
      if (this.inputFilter !== filter) {
        this.inputFilter = filter
        this.viewFilter = filter ? JSON.parse(JSON.stringify(this.filter)) : {}
      }
    },
    handleFilter (err) {
      if (!err || err.length === 0) {
        this.inputFilter = JSON.parse(JSON.stringify(this.viewFilter))
        this.emitFilterChange('query', this.inputFilter)
      }
    },
    handlePageSizeChange (size) {
      this.$set(this.pagination, 'currentPage', 1)
      this.$set(this.pagination, 'pageSize', size)
      this.emitFilterChange('pagination')
    },
    handlePageChange (page) {
      this.$set(this.pagination, 'currentPage', page)
      this.emitFilterChange('pagination')
    },
    handleResetFilterForm () {
      this.$emit('filter-reset')
    },
    emitFilterChange (type, filter) {
      this.$emit('filter-change', type, filter)
    }
  },
  render (h) {
    const $slots = this.$slots
    let filterForm
    if (this.filterSchema) {
      filterForm = h(GateSchemaForm, {
        ref: 'filterForm',
        class: 'filter-form',
        props: {
          value: this.viewFilter,
          schema: this.filterSchema
        },
        on: {
          submit: this.handleFilter,
          reset: this.handleResetFilterForm
        }
      })
    } else {
      filterForm = $slots.filterForm
    }
    const {
      handlePageSizeChange,
      handlePageChange
    } = this
    const pagination = h(Pagination, {
      ref: 'pagination',
      props: {
        ...this.defaultPaginationProps,
        ...this.pagination
      },
      on: {
        'size-change': handlePageSizeChange,
        'current-change': handlePageChange
      }
    })
    return h('div', { class: ['content-list', ...(this.class || [])] }, [filterForm, this.$slots.actionList, this.$slots.default, pagination])
  }
}
</script>
<style lang="stylus" scoped>
.content-list
  margin-top 20px
  .filter-form >>> .el-form, >>> .el-pagination
    display flex
    flex-direction row
    flex-wrap wrap
    margin 0
  >>> .filter-form
    .sf-item__label
      text-align right
      width auto
    .sf-item--inline
      margin-right 0px
    .sf-footer
      margin-right 0
      width auto
    .sf-item
      margin-bottom 10px
  >>> .el-pagination
    padding 0
    margin-top 30px
    button:last-child
      margin-right 0
  >>> .el-pagination__total
    margin-right auto
  .filter-form
    >>> .el-select
      width 100%
</style>
