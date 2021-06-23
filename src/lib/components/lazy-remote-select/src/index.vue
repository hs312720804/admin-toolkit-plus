<template>
    <el-select
      v-model="inputValue"
      clearable
      filterable
      remote
      :multiple="multiple"
      reserve-keyword
      :placeholder="placeholder"
      :remote-method="remoteMethod"
      :loading-text="loadingText"
      :loading="loading"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
</template>
<script>
export default {
  name: 'CLazyRemoteSelect',
  props: {
    placeholder: {},
    modelValue: {},
    total: {
      type: Number
    },
    optionsData: Array,
    pageSize: {
      type: Number,
      default: 10
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    optionsData: 'initData',
    modelValue: 'setInputValue'
  },
  data () {
    return {
      options: [],
      inputValue: undefined,
      loading: false,
      loadingText: this.$t('message.cMessage.loading'),
      searchText: '',
      pagination: {
        currentPage: 1,
        pageSize: 10
      }
    }
  },
  created () {
    this.pagination.pageSize = this.pageSize
    if (!!this.modelValue) {
      this.setInputValue()
      this.$emit('fetch-data', this.pagination, this.modelValue)
    } else {
      this.$emit('fetch-data', this.pagination, '')
    }
    this.$watch('inputValue', this.emitInputValue, {
      deep: true
    })
  },
  mounted () {
    const SELECTWRAP_DOM = document.querySelector(
      '.el-select-dropdown .el-select-dropdown__wrap'
    )
    SELECTWRAP_DOM.addEventListener('scroll', this.handleScroll)
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    emitInputValue (val) {
      this.$emit('update:modelValue', this.inputValue)
    },
    setInputValue () {
      this.inputValue = this.modelValue
    },
    handleScroll (event) {
      const el = event.target
      const isReachBottom = el.scrollHeight <= el.clientHeight + el.scrollTop + 10
      if (isReachBottom) {
        if (this.getDataStatus() === 'HAS_MORE') {
          this.loadMore()
        } else {
          this.showNoMore()
        }
      }
    },
    getDataStatus () {
      return this.options.length < this.total ? 'HAS_MORE' : 'NO_MORE'
    },
    showLoading () {
      this.$nextTick(() => {
        this.appendTips()
        document.getElementById('appendId').innerText = this.$t('message.cMessage.loading')
      })
    },
    showNoMore () {
      this.$nextTick(() => {
        this.appendTips()
        document.getElementById('appendId').innerText = this.$t('message.cMessage.noData')
      })
    },
    showMore () {
      this.$nextTick(() => {
        this.appendTips()
        document.getElementById('appendId').innerText = this.$t('message.cMessage.more')
      })
    },
    loadMore () {
      this.showLoading()
      this.pagination.currentPage++
      this.$emit('fetch-data', this.pagination, this.searchText)
    },
    appendTips () {
      if (!document.getElementById('appendId')) {
        const appendHTML = document.createElement('div')
        appendHTML.id = 'appendId'
        appendHTML.style.textAlign = 'center'
        appendHTML.style.color = '#999'
        appendHTML.style.paddingBottom = '40px'
        appendHTML.style.fontSize = '14px'
        document.querySelector('.el-scrollbar__wrap').appendChild(appendHTML)
      }
    },
    removeTips () {
      if (document.getElementById('appendId')) {
        document.getElementById('appendId').remove()
      }
    },
    initData () {
      this.options = this.optionsData
      if (this.options.length < this.total) {
        this.showMore()
      }
    },
    remoteMethod (query) {
      this.$emit('clear-option')
      this.pagination.currentPage = 1
      if (query !== '') {
        this.searchText = query
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.$emit('fetch-data', this.pagination, query)
        }, 200)
      } else {
        this.options = []
      }
    }
  }
}
</script>
