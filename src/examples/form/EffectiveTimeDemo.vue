<template>
  <div>
    <c-form label-width="120px" :model="form" ref="ruleForm"  :readonly="isReadonly">
      <c-form-effective-time  @change="handleChange" :form-item-attr="formItemAttr" start-placeholder="开始日期" end-placeholder="结束日期" :clearable="true" v-model="form.effectiveTime"/>
       <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
      </el-form-item>
    </c-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formItemAttr: {
        label: '有效期',
        prop: 'effectiveTime',
        rules: undefined
      },
      isReadonly: false,
      form: {
        effectiveTime: ''
        //[new Date(), new Date()]
      },
      rules: {
        // 表单规则
        noEmpty: [
          { required: true, message: '不能为空', trigger: ['blur'] } ]
      }
    }
  },
  methods: {
    handleChange (value) {
    },
    submitForm(formName) {
      debugger
      this.$refs.ruleForm.$refs.form.validate((valid) => {
        debugger
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    }
  },
  created () {
    this.formItemAttr.rules = this.rules.noEmpty
  }
}
</script>
