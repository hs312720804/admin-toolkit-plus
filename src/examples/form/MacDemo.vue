<template>
  <div>
    <c-form label-width="120px"  ref="ruleForm" :model="form"  :readonly="isReadonly" >
      <c-form-mac type="textarea" :form-item-attr="formItemAttr" v-model="form.mac"/>
       <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      </el-form-item>
    </c-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isReadonly: false,
      formItemAttr: {
        label: 'MAC',
        prop: 'mac',
        rules: undefined
      },
      form: {
        mac: ''
      },
      rules: {
        // 表单规则
        mac: [
          { required: true, message: '不能为空', trigger: ['blur', 'change'] } ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].$refs.form.validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          window.console.log('error submit!!')
          return false
        }
      })
    }
  },
  created () {
    this.formItemAttr.rules = this.rules.mac
  }
}
</script>
