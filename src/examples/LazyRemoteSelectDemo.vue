<template>
  <div>
    <c-lazy-remote-select
      v-model="selectedValue"
      :total="total"
      :options-data="options"
      @fetch-data="getLazyRemoteData"
    >
    </c-lazy-remote-select>
      {{selectedValue}}
  </div>
</template>
<script>
import { getLazyRemoteData } from '../service/index'
export default {
  data () {
    return {
      selectedValue: undefined,
      total: 0,
      options: []
    }
  },
  methods: {
    getLazyRemoteData (pagination, filters) {
      getLazyRemoteData(pagination, filters).then((data) => {
        this.total = data.total
        this.options = data.rows
      })
    }
  }
}
</script>
