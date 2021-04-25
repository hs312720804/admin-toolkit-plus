# 中国地区选择    
`c-cn-region-picker`  
用于中国地区城市选择，地区码是酷开的  

## 示例

### 效果

<Demo>
  <CnRegionPickerDemo
    :showCloseBtn="true"
   />
</Demo>

### 代码  
```vue
<template>
    <c-cn-region-picker
      :pickedCity="pickedCity"
      @on-pick-city="pickedCity = $event"
      :showCloseBtn="true"
    ></c-cn-region-picker>
</template>

<script>
export default {
  data() {
    return {
      pickedCity: []
    }
  }
}

</script>

```

### 属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| placeholder | String | 文本输入表单提示，描述输入字段预期值的提示信息，默认“选择城市” | 见上面例子 |
| showCloseBtn | Boolean | 是否显示清空表单的“X” | |
| inputClass | String | 自定义表单样式 | |
| width | Number | 选择框宽度，默认200 | |
| pickedCity | Array | 选择的地区数据，对象数组 | |

### 方法
| 名称 | 参数 | 描述 |
| ---- | ---- | ---- | 
| on-pick-city | ---- | 确定后，对话框关闭前的回调 |
<Comment />
