# 菜单    
`c-menu`  

## 示例  

### 效果

<Demo>
  <MenuDemo />
</Demo>

### 代码  
```vue
<template>
  <c-menu 
    :items="menu" 
  />
</template>
<script>
export default {
  data() {
    return {
     menu: [
        {
          title: '分组一',
          icon: 'el-icon-location',
          route: 'nav1'
        },
        {
          title: '分组二',
          icon: 'el-icon-menu',
          children: [
            {
              title: '导航一',
              icon: 'el-icon-menu',
              route: 'nav1'
            },
            {
              title: '导航二',
              icon: 'el-icon-menu',
              children: [
                {
                  title: '选项一',
                  route: 'nav2',
                  icon: 'el-icon-menu'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>
```


## 属性  
目前最多支持三级菜单  

| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| items | Array | 菜单项列表 | |
| defaultActive | String | 默认激活的菜单对应的路由名，内容参见<a href="https://element.eleme.cn/#/zh-CN/component/menu">文档</a> | |  
| isCollapse | Boolean | | 是否水平折叠收起菜单，参见文档 |
| textColor | String | 菜单的文字颜色（仅支持 hex 格式）,参见文档 | |
| activeTextColor | String | 当前激活菜单的 index，参见文档 | |
| backgroundColor | String | 菜单的背景色，参见文档 | |
| mode | String | horizontal / vertical，参见Element UI文档 | |

菜单项属性  
| 名称 | 类型 | 描述  | 例子 |  
| ---- | ---- | ---- | ---- |  
| title | String | 菜单标题 | |  
| icon | String | 菜单图标 | | 
| route | String | 菜单对应的路由名 | |  
| children | Array | 子菜单项列表 | |


<Comment />