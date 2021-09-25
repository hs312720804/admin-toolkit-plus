# 布尔

`c-form-boolean`
用于输入和展示布尔值

## 示例

### 效果

<ClientOnly>
<Demo>
  <BooleanDemo />
</Demo>
</ClientOnly>
### 代码

```vue
<template>
  <div>
    <c-form label-width="120px" :readonly="isReadonly">
      <c-form-boolean
        type="switch"
        :form-item-attr="formItemAttr"
        v-model="form.isRegular"
      />
      <c-form-boolean label="" v-model="form.isIn">
        参加活动
      </c-form-boolean>
    </c-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formItemAttr: {
        label: '是否正式员工'
      },
      isReadonly: true,
      form: {
        isRegular: 1,
        isIn: 1
      }
    }
  }
}
</script>
```

## 属性

| 名称           | 类型                   | 描述                        | 默认     | 例子 |
| -------------- | ---------------------- | --------------------------- | -------- | ---- |
| form-item-attr | Object                 | el-form-item 组件的属性集合 |          |      |
| type           | ‘switch' \| 'checkbox' | 可选，显示控件类型          | checkbox |      |
