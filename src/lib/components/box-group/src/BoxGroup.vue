<template>
  <div class="cc-check-group">
    <span
      :class="['cc-check-btn', (index === currentIndex && index !== 0) ? 'active' : '',
      (index === 0 && index === currentIndex) ? 'active-first' : '']"
      v-for="(item, index) in option"
      :key="index"
      @click="handleClick(item, index)"
    >{{item[labelKey]}}</span>
  </div>
</template>
<script>
export default {
  name: 'CBoxGroup',
  props: {
    value: {
      type: Number,
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
  data () {
    return {
      currentIndex: undefined,
      value1: undefined
    }
  },
  watch: {
    value: {
      handler (newVal) {
        console.log(newVal, this.option)
        this.currentIndex = this.option.findIndex(item => item[this.valueKey] === newVal)
      },
      immediate: true
    }
  },
  methods: {
    handleClick (item, index) {
      this.$emit('input', item[this.valueKey])
    }
  },
  mounted () {
    // this.currentIndex = this.option.findIndex(item => item[this.valueKey] === this.value)
  }
}
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
