<template>
  <div class="cc-check-group">
    <span
      :class="['cc-check-btn', (index === currentIndex && index !== 0) ? 'active' : '',
      (index === 0 && index === currentIndex) ? 'active-first' : '']"
      v-for="(item, index) in option"
      :key="index"
      @click="handleClick(item, valueKey)"
    >{{item[labelKey]}}</span>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref, toRefs, watchEffect } from 'vue'
export default defineComponent({
  name: 'CBoxGroup',
  props: {
    modelValue: {
      type: [Number, String],
      default: undefined
    },
    option: {
      type: Array,
      default: () => {
        return []
      }
    },
    labelKey: {
      type: String,
      default: 'label'
    },
    valueKey: {
      type: String,
      default: 'value'
    }
  },
  emits: ['update:modelValue'],
  setup (props, { emit }) {
    let currentIndex = ref(0)
    const { modelValue } = toRefs(props)
    const { valueKey } = toRefs(props)
    watchEffect(() => {
      currentIndex.value = props.option.findIndex((item: any): boolean => item[valueKey.value] === modelValue.value)
    })
    function handleClick (item: object, valueKey: keyof typeof item): void {
      emit('update:modelValue', item[valueKey])
    }
    return {
      currentIndex,
      handleClick,
      valueKey,
    }
  }
})
</script>
<style lang="stylus" scoped>
.cc-check-group
  .cc-check-btn
    padding 11px 22px
    border 1px solid #ccc
    font-size 12px
    line-height 12px
    font-weight 500
    color #615e5e
    min-width 53px
    text-align center
    display inline-block
    cursor pointer
    border-left none
    &:first-child
      border-top-left-radius 4px
      border-bottom-left-radius 4px
      border-left 1px solid #ccc
      &:first-child .active::before
        content none
    &:last-child
      border-top-right-radius 4px
      border-bottom-right-radius 4px
    input
      position absolute
      opacity 0
  .active
    border-color #fc4c01 !important
    background #ffdbcb
    color #fc4c01
    position relative
    &::before
      content ''
      width 1px
      height 100%
      background #fc4c01
      position absolute
      left -1px
      top 0
  .active-first
    border 1px solid #fc4c01 !important
    background #ffdbcb
    color #fc4c01
    position relative
</style>
