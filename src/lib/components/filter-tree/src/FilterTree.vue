<template>
  <div>
    <el-input
      :placeholder="placeholder"
      class="search-text"
      @input="handleSearch"
      v-model="filterText"
    >
    </el-input>
    <slot>
      <el-tree
        class="filter-tree"
        :data="treeData"
        :props="defaultProps"
        :node-key="nodeKey"
        :highlight-current="true"
        :default-expanded-keys="expandedKeys"
        @node-click="handleNodeClick"
        ref="tree"
      >
      </el-tree>
    </slot>
  </div>
</template>
<script>
import _ from 'lodash'
export default {
  name: 'CFilterTree',
  data () {
    return {
      filterText: '',
      expandedKeys: [],
      treeData: []
    }
  },
  props: {
    placeholder: {
      type: String,
      default: () => {
        return this.$t('cMessage.inputkeyWord')
      }
    },
    defaultProps: {
      type: Object,
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    },
    nodeKey: {
      type: String,
      default: 'id'
    },
    data: Array
  },
  methods: {
    handleNodeClick (data, node, self) {
      this.$emit('node-click', data, node, self)
    },
    handleSearch (searchText) {
      this.expandedKeys = []
      let fun = data => {
        const defaultProps = this.defaultProps
        return data.filter(e => {
          const condition1 = e[defaultProps.label].indexOf(searchText) > -1
          if (_.trim(searchText) !== '' && condition1) {
            this.expandedKeys.push(e[this.nodeKey])
          }
          if (e[defaultProps.children]) {
            const condition2 = fun(e[defaultProps.children]).length > 0
            return condition1 || condition2
          } else {
            return condition1
          }
        })
      }
      this.treeData = fun(this.data)
      this.$emit('search-result', this.treeData, this.expandedKeys)
    }
  },
  created () {
    this.treeData = this.data
  }
}
</script>
