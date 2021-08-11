# 有效范围时间组件

`c-form-effective-time`
有效期范围表单组件，有效时间范围开始时间不能小于当前时间，时间范围是当天之前的日期不可选择

## 示例

### 效果

<Demo>
  <EffectiveTimeDemo/>
</Demo>

### 代码

```vue
<template>
  <div>
    <c-form
      label-width="120px"
      :model="form"
      ref="ruleForm"
      :readonly="isReadonly"
    >
      <c-form-effective-time
        @change="handleChange"
        :form-item-attr="formItemAttr"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :delay-time="20"
        :valid-day="7"
        :clearable="true"
        v-model="form.effectiveTime"
      />
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >保存</el-button
        >
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
      },
      rules: {
        // 表单规则
        noEmpty: [{ required: true, message: '不能为空', trigger: ['blur'] }]
      }
    }
  },
  methods: {
    handleChange (value) {},
    submitForm (formName) {
      this.$refs.ruleForm.$refs.form.validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  created () {
    this.formItemAttr.rules = this.rules.noEmpty
  }
}
</script>
```

## 属性

| 名称           | 类型   | 描述                                                           | 默认 | 例子 |
| -------------- | ------ | -------------------------------------------------------------- | ---- | ---- |
| delayTime      | Number | 有效期范围开始时间比当前时间延迟的分钟数，单位为分钟           |      |      |
| validDay       | Number | 有效的天数，今天以后的天数，比如 7 天，那有效期为未来 7 天有效 |      |      |
| form-item-attr | Object | el-form-item 组件的属性集合                                    |

## 事件

和 element-plus DateTimePicker 组件事件一样
