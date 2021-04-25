# 点击选择包装器  
`c-select-dialog`
原先的 ClickAndSelectWrapper组件
用于点击一个按钮，图片或者别的元素，然后弹出框选择内容  

## 示例  
<Demo>
  <SelectDialogDemo />
</Demo>

## 代码  
```vue
<template>
  <div>
    <section>
    <h2>默认按钮</h2>
    <c-select-dialog 
      title="选择数据2" 
      @select-start="handleSelectStart" 
      ref="selectDialog">
      <div slot="content">
        <base-selector-demo
        @select-end="handleSelectEnd"
        @select-cancel="$refs.selectDialog.handleSelectCancel()"
        ></base-selector-demo>
      </div>
    </c-select-dialog>
    </section>
    <section>
      <h2>自定义点击元素</h2>
      <c-select-dialog 
        title="选择海报" 
        @select-start="handleSelectStart" 
        >
        <el-button type="primary">请选择</el-button>
        <div slot="title" style="color: red">
          自定义标题
        </div>
        <div slot="content" slot-scope="{isShow}">
          <template v-show="isShow">
            通过content slot 插入数据列表, 可以通过 isShow 来控制内容的渲染
          </template>
        </div>
      </c-select-dialog>
    </section>
  </div>
</template>

<script>
import BaseSelectorDemo from './BaseSelectorDemo'
export default {
  componets: {
    BaseSelectorDemo
  },
  methods: {
    handleSelectStart() {
    },
    handleSelectEnd () {

    }
  }
}
</script>

<style>

</style>

```

## 属性  
| 名称 | 类型 | 描述 | 默认值 |
| ---- | ---- | ---- | ---- |
| title | String | dialog的标题 | 选择 |
| fullscreen | Boolean | ---- | true |
| filter | Object | ---- | ---- |
| filterSchema | Object | ---- | ---- |
| pagination | Object | ---- | ---- |
| customClass | String | Dialog 的自定义类名 | ---- |
| showClose | Boolean | dialog是否显示关闭按钮 | true |

## 事件  
| 名称 | 参数 | 描述 |  
| ---- | ---- | ---- |
| select-start | ---- | dialog打开后的回调函数 |  

## slot
| 名称 | 描述 |
| ---- | ---- | 
| default | 触发dialog的点选区域 |
| title | dialog标题 |
| content | dialog内容 |
<Comment />