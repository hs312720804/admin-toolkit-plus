# 字符串  
`c-form-string `
对element ui el-input元素进行封装，用于输入和展示字符串值，所有的属性可以参考el-input的属性文档

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
      <c-form-string label="姓名" v-model="form.name" />
    </c-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isReadonly: false,
      form: {
        name: '张三',
      }
    }
  }
}
</script>

```

## 属性  
| 名称 | 类型 | 描述 | 默认 |  例子 |  
| ---- | ---- | ---- | ---- | ---- |
| label | String | 控件 label |  | |  
| maxlength | Number | 最大长度 |  | |  
| minlength | Number | 最小长度 | 0 | | 
| show-word-limit | Boolean | 跟 el-input元素属性一致| false | | 
<Comment />