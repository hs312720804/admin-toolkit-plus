# 自定义  
`c-form-any`
用于自定义DataForm控件, 需要自定义两个 slot.

## 示例  

### 效果
<Demo>
  <AnyDemo />
</Demo>

### 代码  
```vue
<template>
  <div>
    <c-form label-width="120px" :readonly="isReadonly"> 
      <c-form-any label="是否已婚">
        <el-switch slot="edit" :value="!!form.isMarried" @input="form.isMarried = $event ? 1 : 0"></el-switch>
        <span slot="read">{{ form.isMarried ? '是' : '否' }} </span>
      </c-form-any>
    </c-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isReadonly: false,
      form: {
        isMarried: 0
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

## 插槽  
| 名称 | 描述 |  例子 |  
| ---- | ---- | ---- |  
| edit | 非只读时显示的内容| 见上方例子 |  
| read | 只读状态下显示的内容 | 见上方例子 |  


<Comment />