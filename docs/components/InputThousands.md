# 输入千分位数据
`c-input-thousands`
输入千分位的数字，只能输入0或者正整数

## 示例
### 效果

<Demo>
  <InputThousandsDemo/>
</Demo>

### 代码
```vue
<template>
  <div>
    <c-input-thousands v-model="thousandsItem" ref="inputThousands" :isIncludeZero="true" placeholder="请输入数据">
    </c-input-thousands>
    <el-button type="primary" style="margin-top:10px" @click="handleGetValue">获取值</el-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      thousandsItem: 345666000
    }
  },
  methods: {
    /** 
     * 获取输入的数据
    */
    handleGetValue () {
      alert(this.$refs.inputThousands.getPositiveInt(this.thousandsItem))
    }
  }
}
</script>

```

## 属性
| 名称 | 类型 | 描述 | 例子 |备注
| ---- | ---- | ---- | ---- | ---- |
| value | String, Number | v-model的值 | 见如上例子 |1.1以后版本才有此功能|
| disabled | Boolean | true为不可以用|  |1.1以后版本才有此功能，默认值false|
| append | String | el-input 的 append属性| 见el-input例子 |1.1以后版本才有此功能|
| prepend | String | el-input 的 prepend| 见el-input例子 |1.1以后版本才有此功能|
| placeholder | String | 占位符 | 跟原生占位符意思一样 |1.1以后版本才有此功能|
| is-include-zero | Boolean | 是否可以输入0 | 见如上例子 |1.1以后版本才有此功能|
## 事件
| 名称 | 参数 | 描述 |备注|
| ---- | ---- | ---- | ---- |
| blur | 无 |el-input  的 blur事件 |1.1以后版本才有此功能|
| change | 无 |el-input  的 change事件 |1.1以后版本才有此功能|
## 方法
| 名称 | 描述 |
| ---- | ---- |
| getPositiveInt | 得到去掉千分位的数字 |
<Comment />
