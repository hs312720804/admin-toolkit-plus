# 列表筛选器

`c-list-filter`  
列表筛选器，可与 c-table 共用 header 数据

## 示例

### 效果

<ClientOnly>
<Demo>
  <ListFilterDemo />
</Demo>
</ClientOnly>
### 代码

```vue
<template>
  <div id="app">
    <c-list-filter
      ref="expandForm"
      :options="shortHeader"
      :form-data="form"
      :is-expand="filterExpand"
      :show-label="true"
      v-if="!filterExpand"
      @filter="handleSearch"
      @reset="handleResetSearch"
      @filter-expand="handlefilterExpand"
    >
      <template #outloop>
        <c-form-any :prop="customColumn.prop">
          <!-- <div slot="edit" style="color:#777; margin-right:10px"> -->
          <template #edit>
            <div style="color:#777; margin-right:10px">
              超
              <el-input
                style="width: 60px"
                v-model="form[customColumn.prop]"
                placeholder="天数"
              ></el-input>
              天跟进未开单，默认180天
            </div>
          </template>
        </c-form-any>
      </template>
    </c-list-filter>
    <c-list-filter
      ref="expandForm"
      :options="header"
      :form-data="form"
      :is-expand="filterExpand"
      :show-label="true"
      label-width="120px"
      v-if="filterExpand"
      @filter="handleSearch"
      @reset="handleResetSearch"
      @filter-expand="handlefilterExpand"
    >
      <template #outloop>
        <c-form-any :prop="customColumn.prop">
          <template #edit>
            <div style="color:#777; margin-right:10px">
              超
              <el-input
                style="width: 60px"
                v-model="form[customColumn.prop]"
                placeholder="天数"
              ></el-input>
              天跟进未开单，默认180天
            </div>
          </template>
        </c-form-any>
      </template>
    </c-list-filter>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      form: {},
      filterExpand: false,
      shortHeader: [
        {
          label: '客户名称',
          prop: 'cusName',
          sortable: false,
          placePrefix: '请输入'
        },
        {
          label: '客户大区',
          prop: 'dqName',
          sortable: false,
          inputType: 'enum',
          options: [
            {
              label: '全国',
              value: 'QG'
            },
            {
              label: '华东',
              value: 'HD'
            },
            {
              label: '华南',
              value: 'HN'
            },
            {
              label: '华北',
              value: 'HB'
            }
          ]
        }
      ],
      customColumn: {
        label: '超',
        prop: 'day',
        sortable: false,
        show: false,
        inputType: 'custom'
      },
      table: {
        props: {
          border: false
        },
        header: [
          {
            label: '序号',
            prop: 'rowNo',
            width: '50px',
            sortable: false,
            queryExclude: true
          },
          {
            label: '客户名称',
            prop: 'cusName',
            sortable: false
          },
          {
            label: '客户大区',
            prop: 'dqName',
            sortable: false,
            inputType: 'enum',
            options: [
              {
                label: '全国',
                value: 'QG'
              },
              {
                label: '华东',
                value: 'HD'
              },
              {
                label: '华南',
                value: 'HN'
              },
              {
                label: '华北',
                value: 'HB'
              }
            ]
          },
          {
            label: '客户等级',
            prop: 'levelName',
            sortable: false,
            inputType: 'enum',
            options: [
              {
                label: '全部客户等级',
                value: ''
              },
              {
                label: 'S',
                value: 'S'
              },
              {
                label: 'A',
                value: 'A'
              },
              {
                label: 'B',
                value: 'B'
              },
              {
                label: 'C',
                value: 'C'
              }
            ]
          },
          {
            label: '员工名称',
            prop: 'userName',
            sortable: false
          },
          {
            label: '最早跟进时间',
            prop: 'followTime',
            sortable: false,
            inputType: 'date'
          },
          {
            label: '竞选状态',
            prop: 'runStatus',
            sortable: false,
            inputType: 'enum',
            options: [
              {
                label: '待竞选',
                value: 0
              },
              {
                label: '竞选中',
                value: 1
              },
              {
                label: '竞选结束',
                value: 2
              }
            ]
          },
          {
            label: '是否上线',
            prop: 'onlineStatus',
            sortable: false,
            inputType: 'enum',
            options: [
              {
                label: '是',
                value: 1
              },
              {
                label: '否',
                value: 0
              }
            ]
          },
          {
            label: '操作',
            width: '60px',
            queryExclude: true,
            render: (h, { row }) => {
              return h('div', [
                h(
                  'el-button',
                  {
                    props: { type: 'text' },
                    on: {
                      click: event => {
                        event.stopPropagation()
                        this.handleRowStatusSetting(row)
                      }
                    }
                  },
                  row.onlineStatus === '是' ? '下线' : '上线'
                )
              ])
            }
          }
        ],
        data: []
      }
    }
  },
  methods: {
    handleSearch () {
      console.log('123456789')
      let reg = /^[1-9]\d*$/
      if (this.form.day) {
        if (!reg.test(this.form.day) || this.form.day === '0') {
          this.$message.error('请正确输入天数')
          return
        }
      }
      this.currentpage = 1
      this.filter.pageRequest.pageNum = 1
      this.filter = { ...this.filter, ...this.form }
      this.fetchData()
    },
    handlefilterExpand (msg) {
      console.log('msg==>', msg)
      this.filterExpand = msg
    },
    handleResetSearch () {
      Object.keys(this.form).forEach(key => {
        this.form[key] = ''
      })
      // this.handleSearch()
    }
  },
  created () {
    // this.loadData()
    let th = JSON.parse(JSON.stringify(this.table.header))
    th.splice(th.length - 1, 0, this.customColumn)
    this.header = th
    this.shortHeader.push(this.customColumn)
  }
}
</script>
```

## 属性

| 名称                 | 类型    | 描述                                                                    | 例子                                                           |
| -------------------- | ------- | ----------------------------------------------------------------------- | -------------------------------------------------------------- |
| options              | Array   | 生成表单的数据，请看 Options 说明                                       | ----                                                           |
| form-data            | Object  | 用于表单 v-model                                                        | ----                                                           |
| is-expand            | Boolean | 设置当前是'展开'、'收起'按钮                                            | false                                                          |
| length               | Number  | 截取 options 的长度,null/0 为不限长度                                   | null/0                                                         |
| hidden-expand-button | Boolean | 隐藏'展开'、'收起'按钮                                                  | ----                                                           |
| is-button            | Boolean | 操作按钮的样式类型，true 是按钮，false 是文字按钮                       | true                                                           |
| show-label           | Boolean | 是否显示 label                                                          | false                                                          |
| label-width          | String  | show-label 为 true 时生效                                               | 80px                                                           |
| buttonText           | Object  | '查询',重置', '展开', '收起' 按钮的文字，需要修改时保持默认值字段传入。 | {query: '查询', reset: '重置', expand: '展开', packUp: '收起'} |

## 事件

| 名称          | 参数 | 描述                                 |
| ------------- | ---- | ------------------------------------ |
| filter        | ---- | 查询按钮事件                         |
| reset         | ---- | 重置按钮事件                         |
| filter-expand | msg  | 展开收起按钮切换，返回值：true/false |

## Slot

| 名称    | 说明                                                             |
| ------- | ---------------------------------------------------------------- |
| loop    | options 循环内使用，需要 inputType 类型的判断，请参考示例三      |
| outloop | options 循环外使用，不需要 inputType，脱离 options，请参考示例三 |
