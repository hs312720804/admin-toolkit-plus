# 概率输入

`c-input-posibility`
只能输入区间为 [0, 1] 的数字的输入组件

## 示例

<ClientOnly>
<Demo>
  <InputPosibilityDemo />
</Demo>
</ClientOnly>
### 代码

```vue
<template>
  <c-input-posibility
    v-model="ruleForm.rate"
    :is-restrict-num="true"
    :decimals-length="2"
    placeholder="请输入概率"
  />
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        rate: ''
      }
    }
  }
}
</script>
```

## 属性

| 名称            | 类型           | 描述                                                   | 例子 |
| --------------- | -------------- | ------------------------------------------------------ | ---- |
| value           | Number, String |                                                        |      |
| disabled        | Boolean        |                                                        |      |
| placeholder     | String         |                                                        |      |
| append          | String         |                                                        |      |
| prepend         | String         |                                                        |      |
| is-restrict-num | Boolean        | 是否为准确的小数位，如果为 true， decimals-length 必填 |      |
| decimals-length | Number         | 几位小数                                               |      |
