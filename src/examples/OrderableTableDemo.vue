<template>
  <div>
    <c-orderable-table
      :header="table.header"
      v-model="table.data">
    </c-orderable-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      table: {
        header: [{
          label: '名称',
          prop: 'name'
        }],
        data: [
          {
            id: '1',
            name: 'foo1'
          },
          {
            id: '2',
            name: 'bar2'
          },
          {
            id: '1',
            name: 'foo3'
          },
          {
            id: '3',
            name: 'bar4'
          },
          {
            id: '4',
            name: 'foo5'
          },
          {
            id: '6',
            name: 'bar6'
          }
        ]
      }
    }
  }
}
</script>

<style>
</style>
