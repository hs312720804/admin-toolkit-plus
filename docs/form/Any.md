# 自定义

`c-form-any`
用于自定义 DataForm 控件, 需要自定义两个 slot.

## 示例

### 效果

<ClientOnly>
<Demo>
  <AnyDemo />
</Demo>
</ClientOnly>
### 代码

```vue
<template>
  <div>
    <c-form label-width="120px" :readonly="isReadonly">
      <c-form-any :form-item-attr="formItemAttr">
        <template v-slot:edit>
          <el-switch
            :value="!!form.isMarried"
            @input="form.isMarried = $event ? 1 : 0"
          ></el-switch>
        </template>
        <template v-slot:read>
          <span>{{ form.isMarried ? '是' : '否' }} </span>
        </template>
      </c-form-any>
    </c-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isReadonly: true,
      formItemAttr: {
        label: '是否已婚'
      },
      form: {
        isMarried: 0
      }
    }
  }
}
</script>
```

## 属性

| 名称           | 类型   | 描述                        | 默认 | 例子 |
| -------------- | ------ | --------------------------- | ---- | ---- |
| form-item-attr | Object | el-form-item 组件的属性集合 |      |

## 插槽

| 名称 | 描述                 | 例子       |
| ---- | -------------------- | ---------- |
| edit | 非只读时显示的内容   | 见上方例子 |
| read | 只读状态下显示的内容 | 见上方例子 |

```

```
