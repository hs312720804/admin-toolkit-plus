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
      <template
        #outloop
      >
        <c-form-any
          :prop="customColumn.prop"
        >
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
      v-else
      @filter="handleSearch"
      @reset="handleResetSearch"
      @filter-expand="handlefilterExpand"
    >
      <template
        #outloop
      >
        <c-form-any
          :prop="customColumn.prop"
        >
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
      form: {

      },
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
      },
    }
  },
  methods: {
    handleSearch () {
      alert('查询')
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
    },
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
