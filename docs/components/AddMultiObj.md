# 添加多个对象
`c-add-multi`
一次性可以添加多个对象

## 示例
### 效果

<Demo>
  <AddMultiDemo/>
</Demo>

### 代码
```vue
<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
 <c-add-multi label="应用列表"
 @handle-add-item="handleAddItem"
 v-model="ruleForm.appList"
 ref="AddMultiObj">
    <template v-slot="slotProps">
        <el-collapse-item :title="slotProps.item.title" :name="slotProps.index">
          <el-form-item label="标题" :prop="'appList.' + slotProps.index + 'title'" :rules="rules.title">
            <el-input type="text" v-model="slotProps.item.title"></el-input>
          </el-form-item>
          <el-form-item label="key" :prop="'appList.' + slotProps.index + 'key'" :rules="rules.key">
            <el-input type="text" v-model="slotProps.item.key"></el-input>
          </el-form-item>
          <el-form-item label="value" :prop="'appList.' + slotProps.index + 'value'" :rules="rules.value">
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

```

## 属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| label | String | el-form-item label |见上面例子 |
| value | Array | v-model传过来 |见上面例子 |
| labelWidth | String | el-form-item label-width |见上面例子 |
<Comment />
