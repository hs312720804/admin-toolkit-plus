# 限制select输入字符长度
`c-select-limit`
限制select输入框输入字符长度

## 示例
### 效果

<Demo>
  <SelectLimitDemo/>
</Demo>

### 代码
```vue
<template>
  <div>
    <c-select-limit
    :options="options"
    v-model="demo"
    :filterable="true"
    :multiple="true"
    :allow-create="true"
    :clearable='true'
    :limits='4'
    @inputChange="inputChange"
    @change="handleChange">
    </c-select-limit>
  </div>
</template>
<script>
export default {
  data () {
    return {
      options: [
        {value: 0, label: '天天'},
        {value: 1, label: '张宏'},
        {value: 2, label: '李四'},
        {value: 3, label: '张三'}
      ],
      demo:[]
    }
  },
  methods: {
    inputChange(val) {
      console.log ('当前输入值：', val)
    },
    handleChange(){
      console.log('当前demo值为：', this.demo)
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>


```

## 属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| options | Array | 传过去的数组数据 |见上面例子 |
| limits | Number | 可输入字符长度 |见上面例子 |

## 事件
| 名称 | 类型 | 描述 | 回调参数 |  
| ---- | ---- | ---- | ---- |
| inputChange | - | 在输入字符变化时触发 | (value) |
<Comment />