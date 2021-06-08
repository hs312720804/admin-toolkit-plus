<template>
<div>
  <el-select
    v-model="value"
    clearable
    filterable
    remote
    reserve-keyword
    placeholder="请输入关键词"
    :remote-method="remoteMethod"
    :loading-text="loadingText"
    :loading="loading">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</div>
</template>

<script>
  export default {
    name: 'CLazyRemoteSelect',
    props: {
      total: {
        type: Number
      },
      optionsData: Array,
      pageSize: {
        type: Number,
        default: 10
      }
    },
    watch: {
      'optionsData': 'initData'
    },
    data() {
      return {
        options: [],
        value: [],
        list: [],
        loading: false,
        loadingText: this.$t('message.cMessage.loading'),
        pagination: {
            currentPage: 1,
            pageSize: 10,
        }
      }
    },
    created () {
      this.pagination.pageSize = this.pageSize
      this.$emit('fetch-data', this.pagination, '')
    },
    methods: {
      initData () {
        this.options = this.optionsData
      },
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true
          setTimeout(() => {
            this.loading = false
            this.$emit('fetch-data', this.pagination, query)
          }, 200);
        } else {
          this.options = [];
        }
      }
    }
  }
</script>
