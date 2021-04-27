<template>
  <div>
  <c-lazy-remote-select
    v-model="selectedValue"
    :filter="filter"
    :primaryKey="primaryKey"
    :optionsMap="optionsMap"
    serviceName="getList"
></c-lazy-remote-select>
{{selectedValue}}
  </div>
</template>
<script>
export default {
  data () {
    return {
      selectedValue: 3,
      filter: {
        label: ''
      },
      primaryKey: {
        value: ''
      },
      optionsMap: {
        key: 'id',
        label: 'name'
      }
    }
  }
}
</script>
