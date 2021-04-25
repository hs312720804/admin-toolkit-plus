# 点击图标修改单元格    
`c-cell-edit`  

## 示例  

### 效果

<Demo>
  <CellEditDemo />
</Demo>

### 代码  
```vue
<template>
  <div>
    <c-table
      :data="table.data"
      :props="table.props"
      :header="table.header" />
  </div>
</template>

<script>
import CTable from '../lib/components/table/index'
import CCellEdit from '../lib/components/cell-edit/index'
export default {
  components: {
    CTable
  },
  props: {},
  data () {
    return {
      table: {
        props: {},
        header: [
          {
            label: '姓名',
            prop: 'name',
            render: (h, { row }) => {
              return h(
                CCellEdit,
                {
                  props: {
                    initValue: row.name
                  },
                  on: {
                    blur: (val) => {
                      this.$message.info('传给后端的值为', val)
                    }
                  }
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
```


## 属性  

| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| init-value | String, Number, Boolean | input关联的v-model初始值 | dsp广告投放修改订单名称 |

## 事件
| 名称 | 参数 | 描述 |  
| ---- | ---- | ---- |
| input | value | input的事件回调 |
| blur | value | 输入框失焦的事件回调 |

<Comment />