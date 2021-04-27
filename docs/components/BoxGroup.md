# 单项选择按钮形式
`c-box-group`
单项选择按钮形式

## 示例
### 效果

<Demo>
  <BoxGroupDemo/>
</Demo>

### 代码
```vue
<template>
  <c-box-group :value="select" @input="handleInput"/>
</template>
<script>
export default {
  data () {
    return {
      select: 1,
      option: [
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
      ]
    }
  },
  methods: {
    handleInput (val) {
      this.$confirm('是否修改素材类型?', {
        type: 'warning'
      }).then(() => {
        this.select  = val
      }).catch(() => {})
    }
  }
}
</script>

```

## 属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| option | Array | 传过去的数组数据 |见上面例子 |

## 事件
| 名称 | 类型 | 描述 | 回调参数 |  
| ---- | ---- | ---- | ---- |
| inputChange | - | 在输入字符变化时触发 | (value) |
<Comment />