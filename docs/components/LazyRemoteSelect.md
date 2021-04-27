# 懒加载搜索
`c-lazy-remote-select`
懒加载搜索

## 示例
### 效果

<Demo>
  <LazyRemoteSelectDemo/>
</Demo>

### 代码
```vue
<template>
 <c-lazy-remote-select
    v-model="selectedValue"
    :filter="filter"
    :primaryKey="primaryKey"
    :optionsMap="optionsMap"
    serviceName="getList"
></c-lazy-remote-select>
{{selectedValue}}
</template>
<script>
export default {
  data () {
    return {
      selectedValue: undefined,
      filter: {
        label: ''
      },
      primaryKey: {
        value: ''
      },
      optionsMap: {
        key: 'id',
        label: 'name'
      }
    }
  }
}
</script>


```

## 属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| selectedValue | String | 绑定的值 |见上面例子 |
| filter | Object | 选择框查询的条件 |见上面例子 |
| primaryKey | Object | 关键值，用于回显 |见上面例子 |
| optionsMap | Object | 映射接口 |见上面例子 |
<Comment />