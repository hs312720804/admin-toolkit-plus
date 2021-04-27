# 数字  
`c-form-number`
用于输入和展示数值

## 示例  

### 效果
<Demo>
  <NumberDemo />
</Demo>

### 代码  
```vue
<template>
  <div>
    <c-form label-width="120px" :readonly="isReadonly"> 
      <c-form-number label="年龄" v-model="form.age" />
    </c-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isReadonly: false,
      form: {
        age: 22,
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


<Comment />
