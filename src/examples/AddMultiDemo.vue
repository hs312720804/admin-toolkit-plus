<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
 <c-add-multi label="应用列表"
 @handle-add-item="handleAddItem"
 v-model="ruleForm.appList"
 ref="AddMultiObj">
    <template v-slot="slotProps">
        <el-collapse-item :title="slotProps.item.title" :name="slotProps.index">
          <el-form-item label="标题" :prop="'appList.' + slotProps.index + '.title'" :rules="rules.title">
            <el-input type="text" v-model="slotProps.item.title"></el-input>
          </el-form-item>
          <el-form-item label="key" :prop="'appList.' + slotProps.index + '.key'" :rules="rules.key">
            <el-input type="text" v-model="slotProps.item.key"></el-input>
          </el-form-item>
          <el-form-item label="value" :prop="'appList.' + slotProps.index + '.value'" :rules="rules.value">
            <el-input type="text" v-model="slotProps.item.value"></el-input>
          </el-form-item>
        </el-collapse-item>
    </template>
 </c-add-multi>
  <el-form-item label-width="50px">
    <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
  </el-form-item>
</el-form>
</template>
<script>
export default {
  data () {
    return {
      ruleForm: {
        appList: []
      },
      rules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ],
        key: [
          { required: true, message: '请输入关键字', trigger: 'blur' }
        ],
        value: [
          { required: true, message: '请输入关键值', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleAddItem () {
      this.ruleForm.appList.push({
        title: '',
        key: '',
        value: ''
      })
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          this.$nextTick(() => {
            this.$refs.AddMultiObj.expandErrorItem()
          })
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
