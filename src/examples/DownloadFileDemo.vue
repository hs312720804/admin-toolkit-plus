<template>
  <div>
    <c-download :downloadUrl="downloadUrl">下载远程文件</c-download>
  </div>
</template>
<script>
export default {
  data () {
    return {
      downloadUrl: 'download.xlsx'
    }
  }
}
</script>
