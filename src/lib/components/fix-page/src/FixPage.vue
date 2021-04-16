<template>
    <div class="fix-header-footer" :style="{ height: height }">
        <div  class="fix-header-footer__header">
          <div class="title">
            <slot name="title">
            </slot>
          </div>
           <div class="actions">
                <slot name="actions">
                    <el-button type="text" @click="$emit('go-back')">{{$t('cButton.goBack')}}</el-button>
                </slot>
            </div>
        </div>
        <div class="fix-header-footer__main">
            <slot name="default" />
        </div>
        <div class="fix-header-footer__footer" v-if="$slots.footer">
          <slot name ="footer"/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CFixPage',
  data () {
    return {

    }
  },
  props: {
    height: {
      type: String,
      default: '100vh'
    }
  },
  created () {

  }
}
</script>
<style lang="stylus" scoped>
.fix-header-footer
  overflow auto
  height 100vh
  padding-bottom 115px
  box-sizing border-box
  display flex
  flex-direction column
  position absolute
  top 0px
  left 0px
  z-index 100
  width 100%
.fix-header-footer__main
  position relative
  padding 20px
  background #fff
  flex 1
  overflow auto
.fix-header-footer__footer
  height 50px
  line-height 50px
  background-color white
  border-top 1px solid #f0f0f0
  .sub-foot
    text-align right
    padding-right 50px
.fix-header-footer__header
  position relative
  height 50px
  text-indent 20px
  line-height 50px
  font-size 18px
  font-weight bold
  border-bottom 1px solid #f0f0f0
  background #fff
  .actions
    padding 0 20px
    float right
  .title
    padding 0 20px
    float left
</style>
