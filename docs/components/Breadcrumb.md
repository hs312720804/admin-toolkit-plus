# 面包屑导航  
`c-breadcrumb`      

## 示例  
### 效果  

<Demo>
  <BreadcrumbDemo />
</Demo>

### 代码  
```vue
<template>
  <c-breadcrumb :items="items" />
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: '首页',
          to: {name: 'home'}
        },
        {
          name: '文章管理',
        },
        {
          name: '创建文章',
        }
      ]
    }
  } 
}
</script>
```

## 属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| items | Array | 导航链接列表 |见上面例子 |

### 链接属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| name | String | 链接文字 | primary |
| to | String | vue-router 路由对象| /  |

<Comment />