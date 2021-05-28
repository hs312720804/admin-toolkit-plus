<template>
  <div>
    <c-table
      :data="table.data"
      ref="table"
      :props="table.props"
      :header="table.header" />
  </div>
</template>

<script>
import { h } from 'vue'
import CCellEdit from '../lib/components/cell-edit/index'
export default {
  props: {},
  components: {
    CCellEdit
  },
  data () {
    return {
      initValue: '111',
      table: {
        props: {},
        header: [
          {
            label: '姓名',
            prop: 'name',
            render: ({ row }) => {
              return h(
                CCellEdit,
                {
                  modelValue: row.name,
                  'onUpdate:modelValue': value => row.name = value
                }
              )
            }
          },
          {
            label: '性别',
            prop: 'sex'
          },
          {
            label: '年龄',
            prop: 'age'
          }
        ],
        data: [
          { name: '小红', sex: '女', age: '15' },
          { name: '小明', sex: '男', age: '17' },
          { name: '小蓝', sex: '男', age: '18' }
        ]
      }
    }
  },
  computed: {},
  methods: {},
  created () {}
}
</script>

<style lang="stylus" scoped>
</style>
