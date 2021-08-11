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
    background-color="#282c34"
    activeTextColor="red"
    textColor="blue"
  />
</template>
<script>
export default {
  data () {
    return {
      menu: [
        {
          title: '表单',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'form',
          path: '/form',
          children: [
            {
              title: '表单',
              icon: 'iconfont el-icon-cc-file-add',
              children: [
                {
                  title: '选项一',
                  route: 'DataForm',
                  icon: 'el-icon-menu'
                }
              ]
            },
            {
              title: '表单布尔值',
              icon: 'iconfont el-icon-cc-file-add',
              route: 'BooleanDemo'
            },
            {
              title: '表单数字',
              icon: 'iconfont el-icon-cc-file-add',
              route: 'NumberDemo'
            },
            {
              title: '表单字符串',
              icon: 'iconfont el-icon-cc-file-add',
              route: 'StringDemo'
            },
            {
              title: '表单枚举',
              icon: 'iconfont el-icon-cc-file-add',
              route: 'EnumDemo'
            },
            {
              title: '表单枚举列表',
              icon: 'iconfont el-icon-cc-file-add',
              route: 'EnumListDemo'
            },
            {
              title: '表单任何类型',
              icon: 'iconfont el-icon-cc-file-add',
              route: 'AnyDemo'
            },
            {
              title: '表单Mac类型',
              icon: 'iconfont el-icon-cc-file-add',
              route: 'MacDemo'
            },
            {
              title: '表单活动有效期范围',
              icon: 'iconfont el-icon-cc-file-add',
              route: 'EffectiveTimeDemo'
            },
            {
              title: '列表筛选器',
              icon: 'iconfont el-icon-cc-file-add',
              route: 'ListFilterDemo'
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

| 名称            | 类型    | 描述                                                                                                   | 例子                           |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------ | ------------------------------ |
| items           | Array   | 菜单项列表                                                                                             |                                |
| defaultActive   | String  | 默认激活的菜单对应的路由名，内容参见<a href="https://element.eleme.cn/#/zh-CN/component/menu">文档</a> |                                |
| isCollapse      | Boolean |                                                                                                        | 是否水平折叠收起菜单，参见文档 |
| textColor       | String  | 菜单的文字颜色（仅支持 hex 格式）,参见文档                                                             |                                |
| activeTextColor | String  | 当前激活菜单的 index，参见文档                                                                         |                                |
| backgroundColor | String  | 菜单的背景色，参见文档                                                                                 |                                |
| mode            | String  | horizontal / vertical，参见 Element UI 文档                                                            |                                |

菜单项属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |  
| title | String | 菜单标题 | |  
| icon | String | 菜单图标 | |
| route | String | 菜单对应的路由名 | |  
| children | Array | 子菜单项列表 | |
