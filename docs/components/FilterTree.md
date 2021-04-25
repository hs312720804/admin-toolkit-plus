# 树形过滤
`c-filter-tree`
由于element ui 的树形搜索不能满足业务需求，才开发此插件，element ui 的树形搜索只能返回模糊搜索的结果，但是相应的父子关系树形结构不存在，此插件解决了此问题

## 示例
### 效果

<Demo>
  <FilterTreeDemo/>
</Demo>

### 代码
```vue
<template>
  <div>
    <h2>例子1-树形使用默认的配置</h2>
    <c-filter-tree :default-props="defaultProps" :data="data" node-key="id">
    </c-filter-tree>
    <h2>例子2-自定义树形</h2>
    <c-filter-tree :default-props="defaultProps" :data="data" node-key="id" ref="filterTree" @search-result='handleSetTree'>
      <el-tree
        class="filter-tree"
        :data="treeData"
        :default-expanded-keys="expandedKeys"
        :props="defaultProps"
         node-key="id"
        show-checkbox
        :highlight-current="true"
        ref="tree"
      >
      </el-tree>
    </c-filter-tree>
  </div>
</template>
<script>
export default {
  data () {
    return {
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      treeData: [], // 自定义el-tree的数据
      expandedKeys: [], // 自定义el-tree的选中项聚合
      data: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1'
                },
                {
                  id: 10,
                  label: '三级 1-1-2'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1'
            },
            {
              id: 6,
              label: '二级 2-2'
            }
          ]
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1'
            },
            {
              id: 8,
              label: '二级 3-2'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleSetTree (searchData, expandedKeys) {
      this.treeData = searchData
      this.expandedKeys = expandedKeys
    }
  },
  created () {
    this.treeData = this.data
  }
}
</script>


```

## 属性
| 名称 | 类型 | 描述 | 例子 |备注|
| ---- | ---- | ---- | ---- |  ---- |
| placeholder | String | 占位符 | 跟原生占位符意思一样 |1.1以后版本才有此功能|
| defaultProps | Object | el-tree 的 props属性| 见如上例子 |1.1以后版本才有此功能|
| nodeKey | String | el-tree 的 node-key属性| 见如上例子 |1.1以后版本才有此功能|
| data | Array | el-tree 的 data属性| 见如上例子 |1.1以后版本才有此功能|
## 事件
| 名称 | 参数 | 描述 |备注|
| ---- | ---- | ---- | ---- |
| node-click | 无 |el-tree 的 node-click事件 |1.1以后版本才有此功能|
## slot
| 名称 | 描述 |
| ---- | ---- |
| default | 本插件支持自定义el-tree组件参数，见如上例子 |
<Comment />
