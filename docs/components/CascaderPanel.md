# 级联选择器
`c-cascader-panel`

## 示例
### 效果

<Demo>
  <CascaderPanelDemo/>
</Demo>

### 代码
```vue
<template>
<div>
 <c-cascader-panel
  ref="panel"
  v-model="leafValue"
  :props="{  multiple: true, emitPath: false }"
  :options="options"
  :selected-value="selectedValue"
  @get-selected-list="handleSelectedList"
  ></c-cascader-panel>
  <el-button type="primary" style="margin-top: 10px"  @click="handleSave">得到选中的节点值</el-button>
</div>
</template>
<script>
export default {
  data () {
    return {
      leafValue: [], // 叶子节点
      selectedValue: [], // 如果选中了全部，只返回父节点的节点
      selectedAllNodes: [], // 选中的所有节点
      options: [
        {
          value: 1,
          label: '策略1',
          children: [
            {
              value: 3,
              label: '人群1',
              children: [
                {
                  value: 31,
                  label: '人群111'
                },
                {
                  value: 32,
                  label: '人群122'
                }
              ]
            },
            {
              value: 4,
              label: '人群2'
            },
            {
              value: 5,
              label: '人群3'
            }
          ]
        },
        {
          value: 2,
          label: '策略2',
          children: [
            {
              value: 6,
              label: '人群4'
            },
            {
              value: 7,
              label: '人群5'
            },
            {
              value: 8,
              label: '人群6'
            }
          ]
        }
      ]
    }
  },
  methods: {
    /*
     所有的选中的父节点、子节点，父节点和子节点不存在父子关系
    */
    handleSelectedList (selected) {

    },
    handleSave () {
      this.selectedValue = this.$refs.panel.getSelectedNodes()
      this.$message({
        type: 'success',
        message: '选中的节点为：' + this.selectedValue.join('和')
      })
    }
  },
  mounted () {
    this.leafValue = this.$refs.panel.setLeaf(this.selectedValue) // 子节点赋值
  },
  created () {
    this.selectedValue = [3, 2]
  }
}
</script>
```

## 属性
| 名称 | 类型 | 描述 | 例子 |
| ---- | ---- | ---- | ---- |
| props | Object | element ui CascaderPanel组件的props属性,emitPath必须为false,不然无效，这也是element ui CascaderPanel 组件的一个BUG |见上面例子 |
| options | Array | 父子关系的数据 |见上面例子 |
| isRemote | Boolean | 是否动态获取options数据，如果为true，则发射一个remote-method事件，方法参数为搜索的内容 |见上面例子 |
| placeholder | String | 默认提示语 | |
| selectedValue |Array|  查看或者编辑时候，赋给组件的值，有父节点和子节点，父节点不是该子节点的父节点  |见上面例子 |
| isExpand | Boolean | 是否展开，默认false |见上面例子 |
| position | String | 位置，默认'bottom',目前只有'top', 'bottom','custom',为'custom'时，需要自定义选中列表，get-selected-list事件返回选中列表|见上面例子 |
## 事件
| 名称 | 参数 | 描述 |
| ---- | ---- | ---- |
| get-selected-list | 所有的选中的父节点、子节点，父节点和子节点不存在父子关系| position为'custom'有效|
| remote-method | 搜索的文本|动态加载数据时触发|
## 方法
| 名称 | 参数 | 描述 |
| ---- | ---- | ---- |
|setLeaf|选中的节点数组，所有的选中的父节点、子节点，父节点和子节点不存在父子关系|CoocaaCascaderPanel组件需要的value|
|getSelectedNodes|得到所有的选中的父节点、子节点，父节点和子节点不存在父子关系|保存时候需要用到|
|handleClose|节点对象，包括value,label字段|关闭节点的方法|
<Comment />
