<template>
  <el-menu
    class="menu"
    :background-color="backgroundColor"
    :text-color="textColor"
    :active-text-color="activeTextColor"
    :defaultActive="defaultActive"
    @select="handleSelect"
    :collapse="isCollapse"
    :mode="mode"
  >
    <template v-for="(item, index) in items">
      <el-submenu v-if="item.children" :key="index"  :index="index + ''">
        <template slot="title">
          <i v-if="item.icon" :class="item.icon"></i>
          <span>{{ item.title }}</span>
        </template>
        <template v-for="(child, idx) in item.children">
          <el-menu-item
            v-if="typeof(child.children) === 'undefined'"
            :key="idx"
            :index="child.route"
          >
            <template v-if="item.path">
              <a :href="'#' + item.path + (item.path === '/' ? '' : '/') + child.route" onclick="return false">
                <i v-if="child.icon" :class="child.icon"></i>
                <span slot="title">{{ child.title }}</span>
              </a>
            </template>
            <template v-else>
              <i v-if="child.icon" :class="child.icon"></i>
              <span slot="title">{{ child.title }}</span>
            </template>
          </el-menu-item>
          <el-submenu v-else :key="idx" :index="index +'_'+idx">
            <template slot="title">
              <i v-if="child.icon" :class="child.icon"></i>
              <span>{{ child.title }}</span>
            </template>
            <template v-for="(c,n) in child.children">
              <el-menu-item :key="n" :index="c.route">
                <i v-if="c.icon" :class="c.icon"></i>
                <span slot="title">{{c.title}}</span>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
      </el-submenu>
      <el-menu-item v-else :key="index" :index="item.route">
        <i v-if="item.icon" :class="item.icon"></i>
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
export default {
  name: 'CMenu',
  props: [
    'isCollapse',
    'items',
    'defaultActive',
    'textColor',
    'activeTextColor',
    'backgroundColor',
    'mode'
  ],
  methods: {
    handleSelect (name) {
      this.$router.push({ name }).catch(() => {})
    }
  },
  created () {
    // console.log(this.items)
  }
}
</script>
<style lang="stylus">
.el-submenu .el-menu-item
  padding 0
.el-submenu .el-menu-item a
  display block
  color rgba(255,255,255,0.7)
  text-decoration none
</style>
