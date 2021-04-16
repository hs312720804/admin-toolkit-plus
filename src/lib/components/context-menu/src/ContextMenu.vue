<template>
  <div class="context-menu">
    <div class="context-menu__menu" :style="menuStyle">
      <slot name="menu"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CContextMenu',
  data () {
    return {
      menuStyle: {
        top: 0,
        left: 0,
        display: 'none'
      }
    }
  },
  props: ['selector'],
  methods: {
    handleShowContextMenu (event) {
      event.stopPropagation()
      event.preventDefault()
      const menuStyle = this.menuStyle
      menuStyle.top = event.y + 'px'
      menuStyle.left = event.x + 'px'
      menuStyle.display = 'block'
    },
    handleHideContextmenu () {
      this.menuStyle.display = 'none'
    },
    addEventListener () {
      const $el = this.$el
      const $target = this.selector ? $el.querySelector(this.selector) : $el
      $target.addEventListener('contextmenu', this.handleShowContextMenu)
      $el.querySelector('.context-menu__menu').addEventListener('mouseleave', this.handleHideContextmenu)
    },
    removeEventListener () {
      const $el = this.$el
      const $target = this.selector ? $el.querySelector(this.selector) : $el
      $target.removeEventListener('contextmenu', this.handleShowContextMenu)
      $el.querySelector('.context-menu__menu').removeEventListener('mouseleave', this.handleHideContextmenu)
    }
  },
  mounted () {
    this.addEventListener()
  },
  destroyed () {
    this.removeEventListener()
  }
}
</script>

<style lang="scss" scoped>
.menu li:hover{
  // color: $--color-primary;
  cursor: pointer;
}
</style>

<style lang="stylus" scoped>
.context-menu
  position relative
.context-menu__menu
  position fixed
  background #fff
  border 1px solid #ccc
  font-size 14px
</style>
