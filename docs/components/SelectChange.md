# 条件选择
`c-select-change`
不限条件及单个选取

## 示例
### 效果

<Demo>
  <SelectChangeDemo/>
</Demo>

### 代码
```vue
<template>
  <div>
    <c-select-change
      v-model="checkedList"
      :dataList="dataList" allText="不限" labelKey="id" valKey="name">
    </c-select-change>
  </div>
</template>
<script>
export default {
  data () {
    return {
      checkedList:[],
      dataList: [
        { name: '腾讯源', id: '1'},
        { name: '爱奇艺源', id: '2'},
        { name: '优酷源', id: '3', isShow: false},
        { name: '芒果TV源', id: '4', disabled: true}
        ]
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
| DataList | Array | 传过去的数组数据 |见上面例子 |
| allText | Array | 不限条件显示的文本，不传则不显示 |见上面例子 |
| allTextVal |  | 不限条件的label值 | 默认0 |
| labelKey | String | 选中的数据对应的属性 |见上面例子 |
| valKey | String | 展示的数值对应的属性 |见上面例子 |
| allBtnCheck | Boolean | 所传数组与选中的数值一致时是否选中为不限按钮 |true-选中，false-不选中，默认为false。如例子所示 |
| disabled | Boolean | 当前数据按钮是否禁用 |true-禁用，false-不禁用，默认为false |
<Comment />