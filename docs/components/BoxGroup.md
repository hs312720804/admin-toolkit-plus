# 单项选择按钮形式

`c-box-group`
单项选择按钮形式

## 示例

### 效果

<ClientOnly>
<Demo>
  <BoxGroupDemo/>
</Demo>
</ClientOnly>
### 代码

```vue
<template>
  <c-box-group
    :option="option"
    :modelValue="select"
    @update:modelValue="handleInput"
    selectType="multiple"
  />
</template>
<script>
import { defineComponent, ref, reactive, getCurrentInstance } from 'vue'
export default defineComponent({
  setup () {
    const { ctx } = getCurrentInstance()
    let select = ref(1)
    let option = reactive([
      {
        label: '图片',
        value: 1
      },
      {
        label: '视频',
        value: 2
      },
      {
        label: '网页',
        value: 3
      }
    ])
    function handleInput (val) {
      ctx
        .$confirm('是否修改素材类型?', {
          type: 'warning'
        })
        .then(() => {
          select.value = val
        })
        .catch(() => {})
    }
    return {
      handleInput,
      select,
      option
    }
  }
})
</script>
```

## 属性

| 名称   | 类型  | 描述             | 例子       |
| ------ | ----- | ---------------- | ---------- |
| option | Array | 传过去的数组数据 | 见上面例子 |
