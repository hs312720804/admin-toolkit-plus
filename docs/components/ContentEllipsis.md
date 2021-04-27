# 文本省略
`c-ellipsis`   
## 示例  
### 效果  

<Demo>
  <ContentEllipsisDemo/>
</Demo>

### 代码  
```vue
<template>
  <c-ellipsis :content='ellipsisContent' width="100" height="100" ></c-ellipsis>
</template>
<script>
export default {
  data () {
    return {
      ellipsisContent: `Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. `
    }
  }
}
</script>

```

## 属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| content | String | 文本内容 |见上面例子 |
| width | Number | 宽度 |见上面例子 |
| height | Number | 高度 |见上面例子 |
<Comment />