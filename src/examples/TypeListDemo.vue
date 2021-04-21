<template>
  <div>
    <div>
      <el-button type="primary" icon="el-icon-edit" @click="clickEdit">{{
        eidtText
      }}</el-button>
    </div>
    <c-type-list
      :lists="datas"
      :defaultProps="defaultProps"
      @currData="getNodeData"
      @clickTypeHandler="clickTypeHandler"
    />
  </div>
</template>
<script>
export default {
  data () {
    return {
      eidtText: '编辑',
      datas: [
        {
          id: 1,
          label: '一级 1',
          status: 1,
          categoryFlag: 0,
          children: [
            {
              id: 4,
              label: '二级 1-1',
              status: 1,
              categoryFlag: 0,
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1',
                  status: 1,
                  categoryFlag: 0
                },
                {
                  id: 10,
                  label: '三级 1-1-2',
                  status: 1,
                  categoryFlag: 0
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: '一级 2',
          status: 1,
          categoryFlag: 0,
          children: [
            {
              id: 5,
              label: '二级 2-1',
              status: 1,
              categoryFlag: 0
            },
            {
              id: 6,
              label: '二级 2-2',
              status: 1,
              categoryFlag: 0
            }
          ]
        },
        {
          id: 3,
          label: '一级 3',
          status: 1,
          categoryFlag: 0,
          children: [
            {
              id: 7,
              label: '二级 3-1',
              status: 1,
              categoryFlag: 0
            },
            {
              id: 8,
              label: '二级 3-2',
              status: 1,
              categoryFlag: 0,
              children: [
                {
                  id: 11,
                  label: '三级 3-2-1',
                  status: 1,
                  categoryFlag: 0
                },
                {
                  id: 12,
                  label: '三级 3-2-2',
                  status: 1,
                  categoryFlag: 0
                },
                {
                  id: 13,
                  label: '三级 3-2-3',
                  status: 1,
                  categoryFlag: 0
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label',
        id: 'id',
        isShowCheckBox: false
      }
    }
  },
  methods: {
    clickEdit () {
      this.defaultProps.isShowCheckBox = !this.defaultProps.isShowCheckBox
      if (this.defaultProps.isShowCheckBox) this.eidtText = '退出'
      else this.eidtText = '编辑'
    },
    getNodeData (data) {
      console.log(data)
    },
    clickTypeHandler (node) {
      console.log(node)
    }
  }
}
</script>

<style lang="stylus">
// .tree-type div.is-current > .el-tree-node__content
//   color #fff
//   background #57b0f7

.tree-type .is-out-icon, .tree-type .is-down-icon, .tree-type .is-show-icon
    display  inline-block
    text-indent 24px
    width  20px
    height  20px
    line-height  20px
    vertical-align  middle
    background-image  url(../assets/imgs/folder-closed-grey.png)
    background-size  cover

.tree-type .is-down-icon
    background-image url(../assets/imgs/folder-closed-blue.png)
.tree-type .is-show-icon
    background-image url(../assets/imgs/folder-closed-green.png)
</style>
