# 枚举

`c-form-enum`
用于输入和展示布尔值

## 示例

### 效果

<Demo>
  <EnumDemo />
</Demo>

### 代码

```vue
<template>
  <div>
    <c-form label-width="120px" :readonly="isReadonly">
      <c-form-enum
        :form-item-attr="formItemAttr"
        type="radio"
        confirm="是否更改性别"
        v-model="form.gender"
        :options="genderOptions"
      />
      <c-form-enum
        :form-item-attr="formItemAttr1"
        v-model="form.job"
        :options="jobOptions"
      />
    </c-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isReadonly: false,
      formItemAttr: {
        label: '性别'
      },
      formItemAttr1: {
        label: '岗位'
      },
      genderOptions: [
        {
          label: '男',
          value: 'male'
        },
        {
          label: '女',
          value: 'female'
        },
        {
          label: '保密',
          value: 'unknown',
          disabled: true
        }
      ],
      jobOptions: [
        {
          label: '前端工程师',
          value: 'frontend'
        },
        {
          label: '后端工程师',
          value: 'backend'
        }
      ],
      form: {
        gender: 'male',
        job: 'frontend'
      }
    }
  }
}
</script>
```

## 属性

| 名称           | 类型                | 描述                           | 默认   | 例子 |
| -------------- | ------------------- | ------------------------------ | ------ | ---- |
| form-item-attr | Object              | el-form-item 组件的属性集合    |
| type           | ‘radio' \| 'select' | 可选，显示控件类型             | select |      |
| confirm        | String              | 可选，确认提示, 在修改前的确认 |        |      |
| options        | Array               | 必填，可选项                   |        |      |  |

options 里面的元素数据结构  
| 名称 | 类型 | 描述 | 默认 | 例子 |  
| ---- | ---- | ---- | ---- | ---- |
| label | String | 选项 label | | |  
| value | String | 选项值 | | |  
| disabled | Boolean | 是否禁用该选项 | | | |
