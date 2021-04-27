<template>
  <div>
    <c-menu :items="threeLevelMenu"/>
    <c-menu :items="threeLevelMenu" mode="horizontal"/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      menu: [
        {
          title: '导航一',
          icon: 'el-icon-location',
          route: 'nav1'
        },
        {
          title: '分组一',
          icon: 'el-icon-menu',
          children: [
            {
              title: '导航二',
              route: 'nav2',
              icon: 'el-icon-menu'
            }
          ]
        }
      ],
      threeLevelMenu:
      [
        {
          title: '分组一',
          icon: 'el-icon-location',
          route: 'nav1'
        },
        {
          title: '分组二',
          icon: 'el-icon-menu',
          children: [
            {
              title: '导航一',
              icon: 'el-icon-menu',
              route: 'nav1'
            },
            {
              title: '导航二',
              icon: 'el-icon-menu',
              children: [
                {
                  title: '选项一',
                  route: 'nav2',
                  icon: 'el-icon-menu'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>
