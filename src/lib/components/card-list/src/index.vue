<template>
  <div class="card-list">
    <el-row :gutter="gutter">
      <el-col
        :xs="24" :sm="12" :md="8" :lg="6" :xl="4"
        class="card-item-wrapper"
        :style="{'margin-bottom': gutter + 'px'}"
        v-for="(row, index) in data"
        :key="index"
        @click="handleClickRow(index, row)"
      >
        <slot :row="row" :index="index"></slot>
        <div class="card-item__selection">
          <el-checkbox
            v-if="selectionType === 'multiple'"
            :modelValue="selected.indexOf(index) > -1"
            @update:modelValue="handleToggleSelect(index, row)"
            @click="stopPropagation"
          >
          </el-checkbox>
          <el-radio
            v-if="selectionType === 'single'"
            class="hide-radio-label"
            :modelValue="selected"
            :label="index"
             @update:modelValue="handleToggleSelect(index, row)"
            @click="stopPropagation"
          >
          </el-radio>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'CCardList',
  props: {
    gutter: {
      type: Number,
      default: 20
    },
    data: {},
    selected: {},
    selectionType: {
      type: String,
      default () {
        return 'none' // none, multiple, single
      }
    },
    selectOnRowClick: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  methods: {
    stopPropagation (event) {
      event.stopPropagation()
    },
    handleClickRow (index, row) {
      if (this.selectOnRowClick) {
        this.handleToggleSelect(index, row)
      }
    },
    handleToggleSelect (index, row) {
      const selectionType = this.selectionType
      if (selectionType === 'multiple') {
        if (this.selected.indexOf(index) === -1) {
          this.$emit('row-selection-add', row, index)
        } else {
          this.$emit('row-selection-remove', row, index)
        }
      } else if (selectionType === 'single') {
        this.$emit('row-selection-change', row, index)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.card-item-wrapper
    position relative
.card-item__selection
    position absolute
    top 0px
    left 7px
    line-height 1
    :deep(.el-checkbox)
        vertical-align top
.hide-radio-label :deep(.el-radio__label)
  display none
</style>
