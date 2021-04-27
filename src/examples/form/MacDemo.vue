<template>
  <div>
    <c-form label-width="120px"  ref="ruleForm" :model="form"  :readonly="isReadonly" >
      <c-form-mac label="MAC" v-model="form.mac" prop="mac" :rules="rules.mac"/>
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
  }
}
</script>
