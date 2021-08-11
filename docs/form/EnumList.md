# 枚举列表

`c-form-enum-list`
用于输入和展示多选值

## 示例

### 效果

<Demo>
  <EnumListDemo />
</Demo>

### 代码

```vue
<template>
  <div>
    <c-form label-width="120px" :readonly="isReadonly">
      <c-form-enum-list
        type="checkbox"
        v-model="form.skill"
        :formItemAttr="formItemAttr1"
        :options="langOptions"
      />
      <c-form-enum-list
        :formItemAttr="formItemAttr"
        v-model="form.hobbies"
        :options="hobbiesOptions"
      />
    </c-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isReadonly: false,
      formItemAttr: {
        label: '兴趣'
      },
      formItemAttr1: {
        label: '语言技能'
      },
      langOptions: [
        {
          label: 'javascript',
          value: 'javascript'
        },
        {
          label: 'java',
          value: 'java'
        },
        {
          label: 'haskell',
          value: 'haskell',
          disabled: true
        }
      ],
      hobbiesOptions: [
        {
          label: '足球',
          value: 'football'
        },
        {
          label: '音乐',
          value: 'music'
        },
        {
          label: '网球',
          value: 'tennis'
        }
      ],
      form: {
        skill: [],
        hobbies: ['music']
      }
    }
  }
}
</script>
```

## 属性

| 名称           | 类型                | 描述                           | 默认   | 例子 |
| -------------- | ------------------- | ------------------------------ | ------ | ---- |
| form-item-attr | Object              | el-form-item 组件的属性集合    |
| type           | ‘radio' \| 'select' | 可选，显示控件类型             | select |      |
| confirm        | String              | 可选，确认提示, 在修改前的确认 |        |      |
| options        | Array               | 必填，可选项                   |        |      |  |

options 里面的元素数据结构  
| 名称 | 类型 | 描述 | 默认 | 例子 |  
| ---- | ---- | ---- | ---- | ---- |
| label | String | 选项 label | | |  
| value | String | 选项值 | | |  
| disabled | Boolean | 是否禁用该选项 | | | |
