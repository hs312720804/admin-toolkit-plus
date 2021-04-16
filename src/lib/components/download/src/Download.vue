<template>
  <div>
    <a :href="downloadUrl" download ref="download_Url"></a>
    <el-button type="primary" class="download" @click="downloadData">
        <slot/>
    </el-button>
  </div>
</template>
<script>
export default {
  name: 'CDownload',
  props: {
    downloadUrl: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  methods: {
    downloadData () {
      this.$emit('download-data')
    }
  },
  watch: {
    downloadUrl: function (newValue, oldValue) {
      this.$nextTick(() => {
        this.$refs.download_Url.click()
      })
    }
  }
}
</script>
