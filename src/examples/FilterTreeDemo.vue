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
