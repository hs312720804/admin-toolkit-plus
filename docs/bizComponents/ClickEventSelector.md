# 点击事件选择器  
`c-click-event-selector`  

## 示例  
<Demo>
  <ClickEventSelectorDemo />
</Demo>

## 代码  
```vue  
<template>
  <div>
    <c-click-event-selector 
      title="快速填充" 
      :fullscreen="false"
      :data="data" 
      :pagination="pagination"
      @select-end="handleSelectEnd"
    >
    </c-click-event-selector>
    <span v-if="selected">
      {{ selected }}
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: '',
      data: [
          {
              label: '奇异果vip',
              value: {
                  "packageName": "com.tianci.movieplatform",
                  "versionCode": "1",
                  "dowhat": "startActivity",
                  "bywhat": "action",
                  "byvalue": "coocaa.intent.vip.center",
                  "params": [
                      {
                          key: "source_id",
                          value: "1"
                      },
                      {
                          key: "business_type",
                          value: "0"
                      }
                  ]
              }
          },
          {
              label: '影视VIP',
              value: {
                  "packagename": "com.tianci.movieplatform",
                  "versionCode": "1",
                  "dowhat": "startActivity",
                  "bywhat": "action",
                  "byvalue": "coocaa.intent.vip.center",
                  "params": [
                      {
                          key: "source_id",
                          value: "5"
                      },
                      {
                          key: "business_type",
                          value: "0"
                      }
                  ]
              }
          },
          {
              label: '鼎级剧场',
              value: {
                  "packagename": "com.tianci.movieplatform",
                  "versionCode": "1",
                  "dowhat": "startActivity",
                  "bywhat": "action",
                  "byvalue": "coocaa.intent.vip.center",
                  "params": [
                      {
                          key: "source_id",
                          value : "3"
                      }
                  ]
              }
          },
          {
              label: '腾讯体育',
              value:{
                  "packagename": "com.tianci.movieplatform",
                  "versionCode": "1",
                  "dowhat": "startActivity",
                  "bywhat": "action",
                  "byvalue": "coocaa.intent.vip.center",
                  "params": [
                      {
                          key: "source_id",
                          value: "10",
                      }
                  ]
              } 
          },

          {
              label: '4k花园',
              value: {
                  "packagename": "com.tianci.movieplatform",
                  "versionCode": "1",
                  "dowhat": "startActivity",
                  "bywhat": "action",
                  "byvalue": "coocaa.intent.vip.center",
                  "params": [
                      {
                          key: "source_id",
                          value: "46"
                      }
                  ]
              }
          },

          {
              label: '教育产品包',
              value: {
                  "packagename": "com.tianci.movieplatform",
                  "versionCode": "1",
                  "dowhat": "startActivity",
                  "bywhat": "action",
                  "byvalue": "coocaa.intent.vip.center",
                  "params": [
                      {
                          key: "source_id",
                          value : "57"
                      }
                  ]
              }
          },

          {
              label: '购物专题页',
              value: {
                  "packagename": "com.coocaa.mall",
                  "versionCode": "1",
                  "dowhat": "startActivity",
                  "bywhat": "action",
                  "byvalue": "coocaa.intent.action.MALL_LIST_ZONE",
                  "params": [
                      {
                          key: "pageId",
                          value: ""
                      }
                  ]
              }
          },
          {
              label: '会员中心任务列表页',
              value: {
                  "packagename": "com.tianci.movieplatform",
                  "versionCode": "7000000",
                  "dowhat": "startActivity",
                  "bywhat": "action",
                  "byvalue": "coocaa.intent.action.my_center.activity.task"
              }
          }
      ],
      pagination: {}
    }
  },
  methods: {
    handleSelectEnd(row) {
      this.selected = row.label
    }
  }
}
</script>

```

## 参数  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |   
| title | String | 标题 | |  
| data | Array<{ label: String, value: any}> | 数据列表| |  
| pagination | Object | element-ui 分页组件属性| |  

## 事件  
| 名称 | 参数 | 描述 |  
| ---- | ---- | ---- |  
| select-end | (value: Object) | 用户选中时触发  |  

## 插槽  
| 名称 | 描述 | 
| ---- | ---- |
| filter | 用户自定义数据筛选器 |  
