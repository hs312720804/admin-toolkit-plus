# 标签导航  
`c-tag-nav`  
自动获取路由历史生成一个标签导航

## 示例  

### 效果
<Demo>
  <TagNavDemo />
</Demo>

### 代码  
```vue
<template>
  <c-tag-nav />
</template>
```

## 属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |  
| init-tags | Array | 初始 tags | |  
| theme | String | 可选值'tag-nav', 'tag-nav-two', 'gray-tab', 'white-tab', 默认为‘tag-nav’，可以自定义 | theme='gray-tab' |
每个 tag 应包含 
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |  
| name | String | | |  
| meta | String | | |  
| fullPath | String | | |  

需要跟 vue-router 配合使用, 每个 route 需要有一个唯一的 `name` 属性, 同时需要有 meta 属性, meta 里应该包含下面属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |  
| tagId | String | 标签标识，同一个标识的 route 将在同一个 tag 打开 | |  
| title | String | 标签导航里该标签显示的内容 | |  

<Comment />