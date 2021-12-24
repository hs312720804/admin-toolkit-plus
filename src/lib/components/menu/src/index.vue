<template>
  <el-menu
    class="menu"
    :background-color="backgroundColor"
    :text-color="textColor"
    :active-text-color="activeTextColor"
    :default-active="defaultActive"
    @select="handleSelect"
    :collapse="isCollapse"
    :mode="mode"
  >
    <template v-for="(item, index) in items" :key="item.route + '_menu'">
      <el-sub-menu v-if="item.children" :index="item.route">
        <template #title>
          <!-- <i v-if="item.icon" :class="item.icon"></i> -->
          <el-icon v-if="item.icon">
            <component :is="item.icon" :class="item.icon"></component>
          </el-icon>
          <span>{{ item.title }}</span>
        </template>
        <template v-for="(child, idx) in item.children" :key="child.route + '_menu_c'">
          <el-menu-item
            v-if="typeof child.children === 'undefined'"
            :index="child.route"
          >
            <template v-if="item.path" #title>
              <!-- <a
                :href="
                  '#' + item.path + (item.path === '/' ? '' : '/') + child.route
                "
                onclick="return false"
              > -->
              <!-- <i v-if="child.icon" :class="child.icon"></i> -->
              <el-icon v-if="child.icon">
                <component :is="child.icon" :class="child.icon"></component>
              </el-icon>
              <span>{{ child.title }}</span>
              <!-- </a> -->
            </template>
            <template v-else #title>
              <!-- <i v-if="child.icon" :class="child.icon"></i> -->
              <el-icon v-if="child.icon">
                <component :is="child.icon" :class="child.icon"></component>
              </el-icon>
              <span>{{ child.title }}</span>
            </template>
          </el-menu-item>
          <el-sub-menu v-else :index="index + '_' + idx">
            <template #title>
              <!-- <i v-if="child.icon" :class="child.icon"></i> -->
              <el-icon v-if="child.icon">
                <component :is="child.icon" :class="child.icon"></component>
              </el-icon>
              <span>{{ child.title }}</span>
            </template>
            <template v-for="(c, n) in child.children" :key="c.route + '_no-c'">
              <el-menu-item :index="c.route">
                <!-- <i v-if="c.icon" :class="c.icon"></i> -->
                <el-icon v-if="c.icon">
                  <component :is="c.icon" :class="c.icon"></component>
                </el-icon>
                <span>{{ c.title }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-sub-menu>
      <el-menu-item v-else :index="item.route">
        <!-- <i v-if="item.icon" :class="item.icon"></i> -->
        <el-icon v-if="item.icon">
          <component :is="item.icon" :class="item.icon"></component>
        </el-icon>
        <span>{{ item.title }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
export default {
  name: 'CMenu',
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array
    },
    defaultActive: String,
    textColor: String,
    activeTextColor: String,
    backgroundColor: String,
    mode: String
  },
  methods: {
    handleSelect (name) {
      this.$router.push({ name }).catch(() => {})
    }
  },
  created () {}
}
</script>
