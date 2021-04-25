# 操作按钮组    
`c-action-list`  
用于快速创建一组操作按钮  

## 示例  

### 效果

<Demo>
  <ActionListDemo />
</Demo>

### 代码  
```vue
<template>
    <c-action-list 
      :actions="actions"
    />
    <c-action-list
      :group="true"
      :actions="actions"
    />
    <c-action-list
      :group="true"
      align="left"
      :actions="actions"
    />
</template>

<script>
export default {
  data() {
    return {
      actions: {
        handleCreate: {
          type: 'primary',
          text: '创建'
        }, 
        handleBatchDelete: {
          text: '批量编辑'
        },
        handleBatchEdit: {
          text: '批量删除'
        }
      }
    }
  },
  methods: {
    handleCreate() {
      this.$message('handleCreate')
    },
    handleBatchDelete() {
      this.$message('handleBatchDelete')
    },
    handleBatchEdit() {
      this.$message('handleBatchEdit')
    }
  }
}

</script>

```


## 属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| actions | Object | key 为点击按钮时执行的方法, value 为按钮属性| 见上面例子 |
| target | Vue 组件实例 | 执行 actions 里面的方法的组件, 当组件放在一个子组件的 slot 时用到| |
| group | boolean | 是否为按钮组，默认值为 false | :group="true" |
| align | String | left为左对齐，righ为右对齐，默认值为right | align="left" |

按钮属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| type | String | primary / success / warning / danger / info / text | primary |
| text | String | 按钮文字 |  |

<Comment />
