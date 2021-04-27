<template>
  <el-collapse class="el-collapse" v-model="activeName">
    <el-form-item
      :label="label"
      class="el-collapse_item"
      :label-width="labelWidth"
    >
      <template v-for="(item, index) in inputValue" :key="index">
        <div class="items">
          <slot :item="item" :index="index"></slot>
          <a class="app-params__remove-param" @click="handleRemoveParam(index)">
            <i class="el-icon-delete"></i>
          </a>
        </div>
      </template>
      <el-button type="primary" plain @click="handleAddParam" class="add-item">
        <i class="el-icon-plus"></i>{{ $t('message.cButton.add') }}
      </el-button>
    </el-form-item>
  </el-collapse>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, PropType, watch, watchEffect } from 'vue'
export default defineComponent({
  name: 'CAddMulti',
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: Array as PropType<Object[]>,
      default: () => {
        return []
      }
    },
    labelWidth: String
  },
  emits:['handle-add-item', 'update:modelValue'],
  setup(props, { emit }) {
    const activeName = ref<number[]>([0])
    const inputValue = ref<Object[]>([])
    const handleRemoveParam = (index: number) => {
       inputValue.value.splice(index, 1)
    }
    const handleAddParam = () => {
      emit('handle-add-item')
    }
    const expandErrorItem = () => {
      let arr: number[] = []
      document.querySelectorAll('.items').forEach((e, index) => {
        if (e.querySelectorAll('.is-error').length > 0) {
          arr.push(index)
        }
      })
      activeName.value = arr
    }
    watch(() => inputValue.value.length, (count, prevCount) => {
      //emit('update:modelValue', inputValue.value)
      activeName.value = [inputValue.value.length - 1]
    }, { deep: true })
    const setInputValue = (val: Object[]) => {
      inputValue.value = val
      activeName.value = [inputValue.value.length - 1]
    }
    if (props.modelValue) {
      setInputValue(props.modelValue)
    }
    return {
      activeName,
      inputValue,
      handleRemoveParam,
      handleAddParam,
      expandErrorItem
    }
  }
})
</script>

<style scoped lang="stylus">
.el-collapse_item :deep(.el-collapse-item__header)
  padding-left 10px
.el-collapse_item :deep(.el-collapse-item)
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
  :deep(.el-form-item)
    margin-bottom 20px
  :deep(el-collapse-item__wrap)
    padding 10px
.items:last-of-type
   :deep(el-collapse-item__wrap)
     border-bottom none
.el-collapse
  border-top none
  border-bottom none
.add-item
  margin-top 20px
</style>
