<template>
  <el-container>
    <div
      :class="isCollapseMenu ? 'aside_menu aside__menu_collapse' : 'aside_menu'"
    >
      <div class="log">
        {{ isCollapseMenu ? 'toolkit' : 'admin-toolkit-plus' }}
      </div>
      <c-menu
        :isCollapse="isCollapseMenu"
        :items="items"
        class="main_menu"
        :default-active="$route.name"
      ></c-menu>
    </div>
    <el-container class="aside-right">
      <el-header class="header">
        <el-button
          class="collpase-btn"
          type="text"
          @click="toggleMenu"
        ></el-button>
        <c-breadcrumb class="breadcrumb" :items="breadcrumb" />
        <!-- <div>
            <span class="v-top" style="line-height: 30px">Change theme color to: </span>
            <change-color></change-color>
            <el-button @click="reset" size="small" style="float: right;">Reset</el-button>
        </div> -->
      </el-header>
      <el-main class="content">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data () {
    return {
      isCollapseMenu: false,
      items: [],
      breadcrumb: []
    }
  },
  methods: {
    // 重置主题色
    reset () {
      localStorage.removeItem('theme_color')
      location.reload()
    },
    getMenu () {
      let item = {}
      this.$router.options.routes.forEach(element => {
        item = element.meta
        item.path = element.path || element.path === '/' ? element.path : ''
        item.children = []
        element.children.forEach(e => {
          item.children.push(e.meta)
        })
        this.items.push(item)
      })
    },
    toggleMenu () {
      this.isCollapseMenu = !this.isCollapseMenu
      localStorage.setItem('isCollapseMenu', this.isCollapseMenu)
      // this.$appState.$set('isCollapseMenu', this.isCollapseMenu)
    }
  },
  created () {
    this.getMenu()
    this.isCollapseMenu = localStorage.getItem('isCollapseMenu')
    // !!this.$appState.$get('isCollapseMenu')
    this.breadcrumb = this.$route.matched.map((v, i) => {
      return {
        to: v.path,
        name: v.meta.title
      }
    })
  },
  watch: {
    $route: function (newV) {
      this.breadcrumb = newV.matched.map((v, i) => {
        return {
          to: v.path,
          name: v.meta.title
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.el-container
  height: 100vh
  overflow hidden
  display: flex
.aside_menu
  width: 230px
  background: #001529
  overflow auto
.log
  height: 40px
  width: 100%
  text-align: center
  padding: 10px 0
  line-height: 40px
  color: white
.main_menu .el-sub-menu__item
  color: #c2c5cc
.main_menu
  background-color: transparent
  border-right: none
  :deep(.el-sub-menu__title)
    color: hsla(0, 0%, 100%, 0.7)
  :deep(.el-sub-menu__title:hover)
    background: transparent
    color: hsla(0, 0%, 100%, 0.9)
  :deep(.el-menu)
    background: black
    color: hsla(0, 0%, 100%, 0.7)
    .el-menu-item
      color: hsla(0, 0%, 100%, 0.7)
    .el-menu-item:hover
      background: #5a6e84
    .el-menu-item.is-active
      background: #333948
.aside-right
  flex-direction: column
  width 100%
  display block
  .nav
    height: 40px
    line-height: 40px
    padding: 10px 0px
.header
  background: #1d1616
  align-items: center
  display: flex
.aside__menu_collapse
  width: 60px
.header :deep(.el-button--text)
  color: white
.header :deep(.el-breadcrumb__inner)
  color: white
.content
  position relative
  height 100vh
  box-sizing border-box
</style>
