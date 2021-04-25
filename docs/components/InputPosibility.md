# 概率输入  
`c-input-posibility`
只能输入区间为 [0, 1] 的数字的输入组件

## 示例  
<Demo>
  <InputPosibilityDemo />
</Demo>

### 代码
```vue
<template>
  <c-input-posibility v-model="inputValue" placeholder="请输入概率" />
</template>

<script>
export default {
  data () {
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

<Comment />