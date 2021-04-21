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
<style>
</style>
