<template>
  <el-form label-width="140px">
    <c-app-params-read :value="appParams" />
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      appParams: {
        packagename: 'test',
        versioncode: '1.2.0',
        dowhat: 'dowhat',
        bywhat: 'bywhat',
        byvalue: 'byvalue',
        params: [
          {
            key: 'key1',
            value: 'value1'
          },
          {
            key: 'key2',
            value: 'value2'
          }
        ]
      }
    }
  }
}
</script>
