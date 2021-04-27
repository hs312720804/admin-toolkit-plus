# 标签列表    
`c-video-filter`  

## 示例  

### 效果

<Demo>
<ClientOnly>
  <VideoFilterDemo />
</ClientOnly>
</Demo>

### 代码  
```vue
<template>
  <div class="cc-video-tag">
    <el-select v-model="addForm.businessType" @change="businessTypeChange">
        <el-option label="影视" :value="0"></el-option>
        <el-option label="教育" :value="1"></el-option>
    </el-select>
    <c-video-filter ref="proList" :proData="proData" :setProductAttr="setProductAttr"></c-video-filter>
  </div>
</template>
<script>
  data () {
    return {
      urls: {
        getProductListUrl: '/ccVideoPermissionRls/dataList.html' // 产品包列表
      },
      proData: [],
      proDataMovie: [
        {
          sourceId: 120,
          sourceName: '腾讯产品包',
          sourceSign: 'tencent',
          partnerName: 'tencent',
          company: 'tencent_yst'
        },
        {
          sourceId: 121,
          sourceName: '爱奇艺产品包',
          sourceSign: 'yinhe',
          partnerName: 'yinhe',
          company: 'yinhe_mix_voole'
        }
      ],
      proDataTeach: [
        {
          sourceId: 123,
          sourceName: '教育产品包',
          sourceSign: 'teach',
          partnerName: 'teach',
          company: 'teach'
        }
      ],
      setProductAttr: {
        businessType: 0,
        partnerArr: [],
        productCurrList: []
      }
    }
  },
  created: function () {
    this.proData = this.proDataMovie
  },
  methods: {
    businessTypeChange (val) {
      this.setProductAttr.businessType = val
      if (val === 0) {
        this.proData = this.proDataMovie
      } else if (val === 1) {
        this.proData = this.proDataTeach
      }
    }
  }
}
</script>

```


## 属性  
支持业务线之间的切换 

| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| ref | Array | 标签组件名称 | |  
| proData | Array | 产品包数据列表 | |  
| setProductAttr | Array | 产品包初始状态数据 | |  

标签列表属性  
| 名称 | 类型 | 描述  | 例子 |  
| ---- | ---- | ---- | ---- |  
| sourceId | int | 产品包id | |  
| sourceName | String | 产品包名称 | | 
| sourceSign | string | 产品包来源 | |  
| partnerName | string | 渠道名称 | |
| company | int | 供应商 | | 

## 事件
| 名称 | 参数 | 描述 |  
| ---- | ---- | ---- |
| businessTypeChange | | 切换业务类型出不同的产品包列表 |

<Comment />