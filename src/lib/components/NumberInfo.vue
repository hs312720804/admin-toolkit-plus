<!--add by wanghaihua 2018-11-1-->
<template>
  <div class="numberInfo">
    <div class="title">{{ title }}</div>
    <div class="subTitle">{{subTitle}}</div>
    <div class="content">
      <span class="total">{{ total }}</span>
      <span class="subTotal"
        >{{ subTotal }}<i v-html="i_content" :class="i_class"></i
      ></span>
    </div>
  </div>
</template>
<script>
export default {
  props: ['title', 'subTitle', 'total', 'subTotal', 'status', 'gap'],
  data () {
    return {
      i_content: '',
      i_class: 'up'
    }
  },
  mounted () {
    document.querySelector('.content').style.marginTop = this.gap + 'px'
    if (this.status === 'up') {
      this.i_class = 'up'
      this.i_content =
        '<svg viewBox="0 0 1024 1024" class="" data-icon="caret-up" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path></svg>'
    }
    if (this.status === 'down') {
      this.i_class = 'down'
      this.i_content =
        '<svg viewBox="0 0 1024 1024" class="" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg>'
    }
  }
}
</script>
<style lang="stylus" scoped>
.title
    color rgba(0, 0, 0, 0.65)
    font-size 16px
    margin-bottom 16px
    -webkit-transition all 0.3s
    transition all 0.3s
.subTitle
    color rgba(0, 0, 0, 0.45)
    font-size 14px
    height 22px
    line-height 22px
    overflow hidden
    text-overflow ellipsis
    word-break break-all
    white-space nowrap
.content .total
    color rgba(0, 0, 0, 0.85)
    display inline-block
    line-height 32px
    height 32px
    font-size 24px
    margin-right 32px
.subTotal
     color rgba(0, 0, 0, 0.45)
    font-size 16px
    vertical-align top
    margin-right 0
.subTotal i
    font-size 12px
    transform scale(0.82)
    margin-left 4px
.subTotal i.dowm
      color #52c41a
.subTotal i.up
   color #f5222d
</style>
