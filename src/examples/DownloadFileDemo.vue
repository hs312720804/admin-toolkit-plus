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
