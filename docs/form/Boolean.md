# 布尔 
`c-form-boolean `
用于输入和展示布尔值

## 示例  

### 效果
<Demo>
  <BooleanDemo />
</Demo>

### 代码  
```vue
<template>
  <div>
    <c-form label-width="120px" :readonly="isReadonly"> 
      <c-form-boolean type="switch" label="是否正式员工" v-model="form.isRegular" />
      <c-form-boolean label="" v-model="form.isIn">
        参加活动
      </c-form-boolean>
    </c-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isReadonly: false,
      form: {
        isRegular: 1,
        isIn: 0
      }
    }
  }

}
</script>

```

## 属性  
| 名称 | 类型 | 描述 | 默认 |  例子 |  
| ---- | ---- | ---- | ---- | ---- |
| label | String | 可选，控件 label |  | |  
| type | ‘switch' \| 'checkbox' | 可选，显示控件类型 | checkbox | |  


<Comment />