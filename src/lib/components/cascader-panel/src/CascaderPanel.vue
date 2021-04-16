<template>
  <div @click.stop="" class="search-selector">
      <div class="search-selector-tags--top search-selector-tags" v-if="position === 'top'">
        <el-tag v-for="(item, index) in selectedItem" :key="index" closable  @close="handleClose(item)">
          {{ item.label}}
        </el-tag>
     </div>
    <div class="search-selector-body">
      <el-input :placeholder="placeholder" ref="search-input" @focus="isShowPanel=true" suffix-icon="el-icon-search" v-model="searchText" @input="handleSearch"></el-input>
      <div v-show="isShowPanel">
        <el-cascader-panel v-if="panelOptions.length > 0"  ref="panel" v-model="inputValue"  :options="panelOptions" :props="props"></el-cascader-panel>
        <div v-else class="coocaa-cascader-panel--empty">
          {{$t('cMessage.noData')}}
        </div>
      </div>
     </div>
      <div class="search-selector-tags--bottom search-selector-tags" v-if="position === 'bottom'">
        <el-tag v-for="(item, index) in selectedItem" :key="index" closable  @close="handleClose(item)">
          {{ item.label}}
        </el-tag>
     </div>
  </div>
</template>
<script>
export default {
  name: 'CCascaderPanel',
  data () {
    return {
      inputValue: [],
      searchText: undefined,
      isShowPanel: false,
      panelOptions: [],
      selectedAllNodes: [],
      selectedItem: []
    }
  },
  props: {
    props: Object,
    options: Array,
    isRemote: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    value: Array,
    selectedValue: Array,
    isExpand: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'bottom'
    }
  },
  methods: {
    handleClose (item) {
      this.selectedItem = this.selectedItem.filter((e) => {
        return e.value !== item.value
      })
      const ids = this.selectedItem.reduce((r, c) => {
        r.push(c.value)
        return r
      }, [])
      this.setInputValue(this.setLeaf(ids, this.options))
    },
    handleSearch (searchText) {
      this.isShowPanel = true
      if (this.isRemote) {
        this.$emit('remote-method', searchText)
      } else {
        let fun = (data) => {
          return data.filter((e) => {
            const condition1 = e.label.indexOf(searchText) > -1
            if (e.children) {
              const condition2 = fun(e.children).length > 0
              return condition1 || condition2
            } else {
              return condition1
            }
          })
        }
        this.panelOptions = fun(this.options)
      }
    },
    handleHidePopUp () {
      this.isShowPanel = this.isExpand
    },
    setSelectedNodes () {
      const options = this.transformOptions(this.options)
      this.selectedItem = options.reduce((result, current) => {
        if (this.selectedValue.includes(current.value)) {
          result.push(current)
        }
        return result
      }, [])
      this.$emit('get-selected-list', this.selectedItem)
      this.$nextTick(() => {
        if (this.$refs.panel) {
          this.selectedAllNodes = this.$refs.panel && this.$refs.panel.getCheckedNodes(false) // 获取所有选中节点
        }
      })
    },
    /*
    得到选中的节点，如果有父节点在，其选中的子节点去掉
    */
    getSelectedNodes (callbackText) {
      const selectedAllNodes = this.selectedAllNodes
      const selectedNodes = selectedAllNodes.filter((e) => {
        if (e.isLeaf) {
          const index = selectedAllNodes.findIndex((ele) => {
            return ele.value === e.parent.value
          })
          return index === -1
        } else {
          if (e.parent === null) {
            return true
          } else {
            const index = selectedAllNodes.findIndex((ele) => {
              return ele.value === e.parent.value
            })
            return index === -1
          }
        }
      })
      if (callbackText) {
        return selectedNodes
      } else {
        return selectedNodes.reduce((r, c) => {
          r.push(c.value)
          return r
        }, [])
      }
    },
    transformOptions (options) {
      let fun = (data, init, parentIds) => {
        return data.reduce((r, c) => {
          if (!c.parentIds) {
            c.parentIds = []
          }
          c.parentIds = c.parentIds.concat(parentIds)
          r.push(c)
          if (c.children) {
            let parentIds = [c.value]
            parentIds = parentIds.concat(c.parentIds)
            fun(c.children, r, parentIds)
          }
          return r
        }, init)
      }
      return fun(options, [], [0])
    },
    /*
      编辑和查看时候设置组件选中的子节点
     */
    setLeaf (parentIdArr) {
      const data = this.transformOptions(this.options)
      let fun = (value, init) => {
        for (let i = 0; i < data.length; i++) {
          if (value === data[i].value) {
            if (data[i].children) {
              const children = data.filter((e) => {
                return e.parentIds.includes(value)
              })
              init = init.concat(children.reduce((result, current) => {
                if (!current.children) {
                  result.push(current.value)
                }
                return result
              }, []))
            } else {
              init.push(value)
            }
          }
        }
        return init
      }
      return parentIdArr.reduce((result, current) => {
        result = result.concat(fun(current, []))
        return result
      }, [])
    },
    emitInputValue () {
      this.$nextTick(() => {
        if (this.$refs.panel) {
          this.selectedAllNodes = this.$refs.panel && this.$refs.panel.getCheckedNodes(false) // 获取所有选中节点
          this.selectedItem = this.getSelectedNodes(true)
          this.$emit('input', this.inputValue)
          this.$emit('get-selected-list', this.selectedItem)
        }
      })
    },
    setInputValue (val) {
      this.inputValue = val
    }
  },
  mounted () {
    this.setSelectedNodes()
    document.addEventListener('click', this.handleHidePopUp)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.handleHidePopUp)
  },
  created () {
    this.isShowPanel = this.isExpand
    this.panelOptions = this.options
    this.$watch('inputValue', this.emitInputValue, {
      deep: true
    })
    this.$watch('value', this.setInputValue, {
      deep: true
    })
    this.setInputValue(this.value)
  }
}
</script>
<style lang="stylus" scoped>
.search-selector-tags >>> .el-tag
  margin 10px
.coocaa-cascader-panel--empty
  border 1px solid #E4E7ED
  border-radius 4px
  height 189px
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ccc;
</style>
