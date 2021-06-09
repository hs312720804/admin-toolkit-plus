<template>
    <c-lazy-remote-select
      ref="lazyRemoteSelect"
      v-model="selectedValue"
      :total="total"
      :multiple="true"
      :options-data="options"
      @fetch-data="getLazyRemoteData"
      @clear-option="handleInitOption"
    >
    </c-lazy-remote-select>
</template>
<script>
import { getLazyRemoteData } from '../service/index'
export default {
  data () {
    return {
      selectedValue: [],
      total: 0,
      options: []
    }
  },
  methods: {
    handleInitOption () {
      this.options = []
    },
    getLazyRemoteData (pagination, filters) {
      getLazyRemoteData(pagination, filters).then((data) => {
        this.total = data.total
        this.options = this.options.concat(data.rows)
      })
    }
  }
}
</script>
