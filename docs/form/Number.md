# 数字

`c-form-number`
用于输入和展示数值

## 示例

### 效果

<ClientOnly>
<Demo>
  <NumberDemo />
</Demo>
</ClientOnly>
### 代码

```vue
<template>
  <div>
    <c-form label-width="120px" :readonly="isReadonly">
      <c-form-number :form-item-attr="formItemAttr" v-model="form.age" />
    </c-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isReadonly: false,
      formItemAttr: {
        label: '年龄'
      },
      form: {
        age: 22
      }
    }
  }
}
</script>
```

## 属性

| 名称           | 类型   | 描述                        | 默认 | 例子 |
| -------------- | ------ | --------------------------- | ---- | ---- |
| form-item-attr | Object | el-form-item 组件的属性集合 |

## 事件

和 element-plus input-number 组件的事件一样
