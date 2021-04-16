<template>
 <el-collapse class="el-collapse" v-model="activeName">
    <el-form-item :label="label" class="el-collapse_item" :label-width="labelWidth">
      <template v-for="(item, index) in inputValue">
        <div class="items" :key="index">
          <slot :item="item"  :index="index"></slot>
          <a class="app-params__remove-param" @click="handleRemoveParam(index)">
            <i class="el-icon-delete"></i>
          </a>
        </div>
      </template>
      <el-button type="primary" plain @click="handleAddParam" class="add-item">
        <i class="el-icon-plus"></i>{{$t('cButton.add')}}
      </el-button>
    </el-form-item>
 </el-collapse>
</template>
<script>
export default {
  name: 'CAddMulti',
  data () {
    return {
      inputValue: [],
      activeName: [0]
    }
  },
  props: {
    label: String,
    value: Array,
    labelWidth: String
  },
  watch: {
    value: 'setInputValue'
  },
  methods: {
    handleAddParam () {
      this.$emit('handle-add-item')
    },
    expandErrorItem () {
      let arr = []
      document.querySelectorAll('.items').forEach((e, index) => {
        if (e.querySelectorAll('.is-error').length > 0) {
          arr.push(index)
        }
      })
      this.activeName = arr
    },
    setInputValue (val) {
      this.inputValue = val
      this.activeName = [this.inputValue.length - 1]
    },
    emitInputValue (val) {
      this.$emit('input', this.inputValue)
    },
    handleRemoveParam (index) {
      this.inputValue.splice(index, 1)
    }
  },
  created () {
    if (this.value) {
      this.setInputValue(this.value)
    }
    this.$watch('inputValue', this.emitInputValue, {
      deep: true
    })
  }
}
</script>
<style scoped  lang="stylus">
.el-collapse_item >>> .el-collapse-item__header
  padding-left 10px
.el-collapse_item >>> .el-collapse-item
  display inline-block
  width 100%
  margin-right 10px
.el-icon-remove-outline
  width 20px
  height 20px
.app-params__remove-param
  display inline-block
  cursor pointer
  width 26px
  height 26px
  line-height 26px
  text-align center
  color #999
  margin-left 5px
.items
  display flex
  align-items center
  >>> .el-form-item
    margin-bottom 20px
  >>>.el-collapse-item__wrap
    padding 10px
.items:last-of-type
   >>>.el-collapse-item__wrap
     border-bottom none
.el-collapse
  border-top none
  border-bottom none
.add-item
  margin-top 20px
</style>
