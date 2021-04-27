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
      <c-form-enum-list type="checkbox" v-model="form.skill" label="语言技能" :options="langOptions" />
      <c-form-enum-list label="兴趣" v-model="form.hobbies" :options="hobbiesOptions" />
    </c-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isReadonly: false,
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
        hobbies: ['music'],
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
| type | ‘select' \| 'checkbox' | 可选，显示控件类型 | select | |  
| options | Array | 必填，可选项 | | | |  

options 里面的元素数据结构  
| 名称 | 类型 | 描述 | 默认 |  例子 |  
| ---- | ---- | ---- | ---- | ---- |
| label | String | 选项 label |  | |  
| value | String | 选项值 |  | |  
| disabled | Boolean | 是否禁用该选项 | | | |  


<Comment />
