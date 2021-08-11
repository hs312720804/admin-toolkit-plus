# Mac 数据类型

`c-form-mac`  
 只能用来输入以 a-f、A-F、0-9 组成的 12 位 MAC 地址,可以用来输入一个 MAC 地址和多个，当 type 为 textarea 时，可以用来输入多个 Mac 地址，以英文逗号隔开，反之只能输入一个 MAC 地址

## 示例

### 效果

<Demo>
  <MacDemo />
</Demo>

### 代码

```vue
<template>
  <div>
    <c-form
      label-width="120px"
      ref="ruleForm"
      :model="form"
      :readonly="isReadonly"
    >
      <c-form-mac
        type="textarea"
        :form-item-attr="formItemAttr"
        v-model="form.mac"
      />
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
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
          { required: true, message: '不能为空', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].$refs.form.validate(valid => {
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
```

## 属性

| 名称           | 类型   | 描述                        | 默认 | 例子 |
| -------------- | ------ | --------------------------- | ---- | ---- |
| form-item-attr | Object | el-form-item 组件的属性集合 |

## 事件

和 element-plus input 组件的事件一样
