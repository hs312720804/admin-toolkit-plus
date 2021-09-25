# 懒加载搜索

`c-lazy-remote-select`
懒加载搜索

## 示例

### 效果

<ClientOnly>
<Demo>
  <LazyRemoteSelectDemo/>
</Demo>
</ClientOnly>
### 代码

```vue
<template>
  <c-lazy-remote-select
    ref="lazyRemoteSelect"
    v-model="selectedValue"
    :total="total"
    :multiple="true"
    :options-data="options"
    @fetch-data="getLazyRemoteData"
    @clear-option="handleInitOption"
  >
  </c-lazy-remote-select>
</template>
<script>
import { getLazyRemoteData } from '../service/index'
export default {
  data () {
    return {
      selectedValue: [],
      total: 0,
      options: []
    }
  },
  methods: {
    handleInitOption () {
      this.options = []
    },
    getLazyRemoteData (pagination, filters) {
      getLazyRemoteData(pagination, filters).then(data => {
        this.total = data.total
        this.options = this.options.concat(data.rows)
      })
    }
  }
}
</script>
```

## 属性

| 名称          | 类型   | 描述     | 例子       |
| ------------- | ------ | -------- | ---------- |
| selectedValue | String | 绑定的值 | 见上面例子 |
| total         | Number | 数据总数 | 见上面例子 |
| options       | Array  | 选项值   | 见上面例子 |

## 事件

| 名称         | 类型              | 描述                     | 例子       |
| ------------ | ----------------- | ------------------------ | ---------- |
| fetch-data   | pagination, query | 参数为分页和查询的字符串 | 见上面例子 |
| clear-option |                   | 清除数据                 | 见上面例子 |
