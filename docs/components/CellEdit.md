# 点击图标修改单元格

`c-cell-edit`

## 示例

### 效果

<ClientOnly>
<Demo>
  <CellEditDemo />
</Demo>
</ClientOnly>
### 代码

```vue
<template>
  <div>
    <c-table
      :data="table.data"
      ref="table"
      :props="table.props"
      :header="table.header"
    />
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
      table: {
        props: {},
        header: [
          {
            label: '姓名',
            prop: 'name',
            render: ({ row }) => {
              return h(CCellEdit, {
                modelValue: row.name,
                'onUpdate:modelValue': value => (row.name = value)
              })
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

<style lang="stylus" scoped></style>
```

## 属性

| 名称       | 类型                    | 描述                        | 例子                     |
| ---------- | ----------------------- | --------------------------- | ------------------------ |
| modelValue | String, Number, Boolean | input 关联的 v-model 初始值 | dsp 广告投放修改订单名称 |

## 事件

| 名称  | 参数  | 描述                 |
| ----- | ----- | -------------------- |
| input | value | input 的事件回调     |
| blur  | value | 输入框失焦的事件回调 |
