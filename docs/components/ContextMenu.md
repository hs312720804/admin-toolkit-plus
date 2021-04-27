# 右键菜单
`c-context-menu`
右键菜单功能

## 示例  
<Demo>
  <ContextMenuDemo />
</Demo>

## 代码  
```vue
<template>
  <c-context-menu>
    <div class="menu" slot="menu">
      <li>新建</li> 
      <li>编辑</li> 
    </div>
    <div>
      右键我
    </div>
  </c-context-menu>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.menu
  padding 10px
</style>


```

## 属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| selector | String | 可以指定特定元素右键时显示菜单， 默认整个 ContextMenu 包裹的区域| .table-header |

## slot
| 名称 | 描述 |
| ---- | ---- |
| default | 触发的内容区域 |
| menu | 右键菜单内容 |

<Comment />