# 文件下载
`c-download`
通过接口请求数据，然后触发下载

## 示例
### 效果

<Demo>
  <DownloadFileDemo/>
</Demo>

### 代码
```vue
<template>
  <div>
    <c-download @download-data="downloadData" :downloadUrl="downloadUrl">下载远程文件</c-download>
  </div>
</template>
<script>
// import axios from 'axios'
export default {
  data () {
    return {
      downloadUrl: null
      // publicPath: process.env.BASE_URL
    }
  },
  methods: {
    downloadData () {
      /**
        * 下载地址为远程的地址时
      */
      this.downloadUrl = 'notdataCollect.xls?_r=' + Math.random()
      /**
        * 下载地址为本地的某个文件时，把该文件放到该项目public目录下，然后加上文件名
      */
      // this.downloadUrl = this.publicPath + 'notdataCollect.xls'
      /**
        * 注释的代码是接口请求的例子
       */
      // this.$service.downloadRareData(this.filterForRare).then(data => {
      //   this.downloadUrl = "admin-api/remember/export?sign=" + data.sign;
      // });
    }
  }
}
</script>
```
## 属性
| 名称 | 类型 | 描述 | 例子 |
| ---- | ---- | ---- | ---- |
| downloadUrl | String | 下载地址 |见上面例子 |
## 事件
| 名称 | 参数 | 描述 |
| ---- | ---- | ---- |
| download-data | 无 |当用户点击按钮触发 |
## slot
| 名称 | 描述 |
| ---- | ---- |
| default | button包裹的内容 |
<Comment />
