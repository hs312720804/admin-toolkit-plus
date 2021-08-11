# 字符串

`c-form-string`
对 element ui el-input 元素进行封装，用于输入和展示字符串值，所有的属性可以参考 el-input 的属性文档

## 示例

### 效果

<Demo>
  <StringDemo />
</Demo>

### 代码

```vue
<template>
  <div>
    <c-form label-width="120px" :readonly="isReadonly">
      <c-form-string @change="handleChange" :form-item-attr="formItemAttr" placeholder="请输入内容" v-model="form.name" />
    </c-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isReadonly: false,
      formItemAttr : {
        label: "姓名"
      },
      form: {
        name: '张三'
      }
    }
  },
  methods: {
    handleOK () {
      this.isReadonly = !this.isReadonly
      console.log('this.isReadonly ', this.isReadonly )
    },
    handleChange (value) {
    },
    onValidate () {
    }
  }
}
</script>
```

## 属性

| 名称  | 类型   | 描述       | 默认 | 例子 |
| ----- | ------ | ---------- | ---- | ---- |
| form-item-attr | Object              | el-form-item 组件的属性集合    |


## 事件
和 element-plus input-number 组件的事件一样