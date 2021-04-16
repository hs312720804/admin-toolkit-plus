<template>
  <el-select
    ref="select"
    :value="value"
    :placeholder="$t('cPlaceholder.select')"
    filterable
    remote
    clearable
    :remote-method="remoteMethod"
    reserve-keyword
    @input="handleInputValue"
    :no-data-text="$t('cMessage.noData')"
    :loading="loading"
    :loading-text="loadingText"
    :disabled="disabled"
  >
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
  </el-select>
</template>
<script>
export default {
  name: 'CLazyRemoteSelect',
  props: ['filter', 'optionsMap', 'serviceName', 'value', 'primaryKey', 'disabled', 'isNoLableClean'],
  data () {
    return {
      loading: false,
      loadingText: this.$t('cMessage.loading'),
      options: [],
      total: 0,
      inputValue: this.value,
      pageObj: {
        pageNo: 1,
        pageSize: 10,
        tvbOperator: 'like'
      }
    }
  },
  mounted () {
    const filter = { ...this.pageObj, ...this.filter, ...this.primaryKey }
    this.getList(filter)
    const SELECTWRAP_DOM = this.$el.querySelector('.el-select-dropdown .el-select-dropdown__wrap')
    SELECTWRAP_DOM.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll (event) {
      const el = event.target
      const isReachBottom = el.scrollHeight - el.scrollTop <= el.clientHeight
      if (isReachBottom && this.getDataStatus() === 'HAS_MORE') {
        this.loadMore()
      }
    },
    loadMore () {
      this.showLoading()
      this.pageObj.pageNo++
      const filter = { ...this.pageObj, ...this.filter }
      this.getList(filter).then(() => {
        const status = this.getDataStatus()
        if (status === 'NO_MORE') {
          this.showNoMore()
        }
        if (status === 'HAS_MORE') {
          this.removeTips()
        }
      })
    },
    getDataStatus () {
      return this.options.length < this.total
        ? 'HAS_MORE'
        : 'NO_MORE'
    },
    showNoMore () {
      this.$nextTick(() => {
        this.appendTips()
        document.getElementById('appendId').innerText = this.$t('cMessage.noData')
      })
    },
    showLoading () {
      this.$nextTick(() => {
        this.appendTips()
        document.getElementById('appendId').innerText = this.$t('cMessage.loading')
      })
    },
    appendTips () {
      if (!document.getElementById('appendId')) {
        const appendHTML = document.createElement('div')
        appendHTML.id = 'appendId'
        appendHTML.style.textAlign = 'center'
        appendHTML.style.color = '#999'
        appendHTML.style.fontSize = '14px'
        document.querySelector('body>.el-select-dropdown.el-popper .el-scrollbar__wrap').appendChild(appendHTML)
      }
    },
    removeTips () {
      if (document.getElementById('appendId')) {
        document.getElementById('appendId').remove()
      }
    },
    getList (formData) {
      this.removeTips()
      // 这里是接口请求数据, 带分页条件
      return this.$adminService[this.serviceName](formData).then(data => {
        const labelMap = this.optionsMap.label.split('.')
        const result = data.rows.map(item => {
          return {
            label: labelMap.length > 1 ? item[labelMap[0]][labelMap[1]] : item[labelMap[0]],
            value: item[this.optionsMap.key]
          }
        })
        this.options = [...this.options, ...result]
        this.total = data.total
        if (this.options.length === 0) {
          this.loading = true
          this.loadingText = this.$t('cMessage.noData')
        } else {
          this.loading = false
          this.loadingText = this.$t('cMessage.loading')
        }
      })
    },
    remoteMethod (query) {
      this.pageObj.pageSize = 10
      this.pageObj.pageNo = 1
      this.handleSearchParams(query, this.filter)
      if (query !== '') {
        setTimeout(() => {
          this.loading = true
          const filter = { ...this.pageObj, ...this.filter }
          this.options = []
          this.getList(filter)
        }, 200)
      } else {
        setTimeout(() => {
          this.options = []
          const filter = { ...this.pageObj, ...this.filter }
          this.getList(filter)
          if (document.getElementById('appendId')) {
            document.getElementById('appendId').remove()
          }
        }, 200)
      }
    },
    handleInputValue (val) {
      if (!val) {
        this.pageObj.pageNo = 1
        this.handleSearchParams(val, this.filter)
        const filter = { ...this.pageObj, ...this.filter }
        this.options = []
        this.getList(filter)
      }
      this.$emit('input', val)
    },
    handleSearchParams (query, obj) {
      for (let i in obj) {
        if (typeof (obj[i]) === 'object') {
          this.handleSearchParams(query, obj[i])
        } else {
          obj[i] = query // 这里只能查询第一个参数的值
          return true
        }
      }
    },
    handleCleanLabel (value) {
      if (!this.options.some(item => item.value === value) && this.isNoLableClean) {
        this.$emit('input', '')
      }
    }
  },
  created () {

  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll, true)
  }
}
</script>
