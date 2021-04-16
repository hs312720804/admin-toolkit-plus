/* eslint-disable no-console */
<template>
  <div class="type-list">
    <el-tree
      class="tree-type"
      :data="lists"
      :props="defaultProps"
      :show-checkbox="defaultProps.isShowCheckBox"
      :check-strictly="true"
      :node-key="defaultProps.id"
      ref="tree"
      :render-content="renderContent"
      @node-click="handleNodeClick"
      @check="checkNodeClick"
      @node-drag-start="handleDragStart"
      @node-drag-enter="handleDragEnter"
      @node-drag-leave="handleDragLeave"
      @node-drag-over="handleDragOver"
      @node-drag-end="handleDragEnd"
      @node-drop="handleDrop"
      draggable
      :allow-drop="allowDrop"
      :allow-drag="allowDrag"
    >
    </el-tree>
  </div>
</template>

<script>
export default {
  name: 'CTypeList',
  data () {
    return {}
  },
  props: {
    lists: {
      type: Array,
      default () {
        return []
      }
    },
    defaultProps: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  watch: {},
  methods: {
    handleNodeClick (data) {
      this.$emit('currData', data)
    },
    checkNodeClick (data, node) {
      this.$refs.tree.setCheckedKeys([])
      this.$refs.tree.setCheckedKeys([data.id])
      this.$emit('currData', data)
    },
    renderContent: function (h, { node, data, store }) {
      var _this = this
      if (_this.defaultProps.isShowCheckBox) {
        return h(
          'span',
          {
            class: {
              'is-out-icon': data.status === 0,
              'is-down-icon': data.status === 1 && data.categoryFlag === 0,
              'is-show-icon':
                (data.status === 1 && data.categoryFlag === 1) ||
                (data.status === 1 && data.type == 'album'),
              'is-out': true
            }
          },
          [
            h('span', node.label),
            h('em', {
              class: 'tree-type-view',
              on: {
                click: function (event) {
                  _this.$emit('clickTypeHandler', node)
                  event.stopPropagation()
                  // 阻止该元素默认的 keyup 事件
                  event.preventDefault()
                }
              },
              attrs: {
                mark: data.id,
                title: '查看分类详情'
              }
            })
          ]
        )
      } else {
        return h(
          'span',
          {
            class: {
              'is-out-icon': data.status === 0,
              'is-down-icon': data.status === 1 && data.categoryFlag === 0,
              'is-show-icon':
                (data.status === 1 && data.categoryFlag === 1) ||
                (data.status === 1 && data.type == 'album')
            }
          },
          [
            h(
              'el-tooltip',
              {
                attrs: {
                  effect: 'dark',
                  content: 'ID: ' + data.id,
                  placement: 'top'
                }
              },
              [h('span', node.label)]
            ),
            h('em', {
              class: 'tree-type-view',
              on: {
                click: function (event) {
                  _this.$emit('clickTypeHandler', node)
                  event.stopPropagation()
                  // 阻止该元素默认的 keyup 事件
                  event.preventDefault()
                }
              },
              attrs: {
                title: '查看分类详情'
              }
            })
          ]
        )
      }
    },
    handleDragStart (node, ev) {
      // eslint-disable-next-line no-console
      console.log('drag start', node)
    },
    handleDragEnter (draggingNode, dropNode, ev) {
      // eslint-disable-next-line no-console
      console.log('tree drag enter: ', dropNode.label)
    },
    handleDragLeave (draggingNode, dropNode, ev) {
      // eslint-disable-next-line no-console
      console.log('tree drag leave: ', dropNode.label)
    },
    handleDragOver (draggingNode, dropNode, ev) {
      // eslint-disable-next-line no-console
      console.log('tree drag over: ', dropNode.label)
    },
    handleDragEnd (draggingNode, dropNode, dropType, ev) {
      // eslint-disable-next-line no-console
      console.log('tree drag end: ', dropNode && dropNode.label, dropType)
    },
    handleDrop (draggingNode, dropNode, dropType, ev) {
      // eslint-disable-next-line no-console
      console.log('tree drop: ', dropNode.label, dropType)
    },
    allowDrop (draggingNode, dropNode, type) {},
    allowDrag (draggingNode) {}
  }
}
</script>
