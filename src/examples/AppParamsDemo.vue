<template>
<div>
    <el-button type="primary" @click="handleChangelanguage('zh')">中文</el-button>
    <el-button type="primary" @click="handleChangelanguage('en')">英文</el-button>
  <el-form :model="form" ref="form" label-width="140px">
    <c-app-params prop-prefix="appParams." v-model="form.appParams" />
      <el-form-item>
        <el-button @click="submitBtn">保存</el-button>
      </el-form-item>
  </el-form>
</div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        appParams: {
          packagename: undefined,
          versioncode: undefined,
          dowhat: undefined,
          bywhat: undefined,
          byvalue: undefined,
          params: [],
          exception: {}
        }
      }
    }
  },
  methods: {
    submitBtn () {
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('提交')
        }
      })
    },
    handleChangelanguage (type) {
      this.$i18n.locale = type
      this.$nextTick(() => {
        window.console.log('required=' + this.$t('cRules.required'))
      })
    }
  }
}
</script>
