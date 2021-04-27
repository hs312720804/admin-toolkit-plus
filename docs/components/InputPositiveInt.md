# 整数输入    
`c-input-positive-int`
只能输入0或者正整数
## 示例  
<Demo>
  <InputPositiveIntDemo />
</Demo>

### 代码
```vue

<template>
<div>
  <c-input-positive-int placeholder="请输入整数" v-model="inputValue" :is-include-zero="true"/>
</div>

</template>

<script>
export default {
  data() {
    return {
      inputValue
    }
  }
}
</script>
```
## 属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| value | Number, String | | |  
| disabled | Boolean |  | |  
| placeholder | String |  | |
| append | String |  | |
| prepend | String |  | |
| isIncludeZero | Boolean | 默认false,是否可以输入0 |见例子 |
<Comment />