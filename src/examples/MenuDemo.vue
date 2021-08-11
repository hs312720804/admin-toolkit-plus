<template>
  <div>
    <c-menu :items="menu" background-color="#282c34"
    textColor="#00ff50"/>
    <!-- <c-menu :items="threeLevelMenu" mode="horizontal"/> -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      menu: [
        {
          title: '表单',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'form',
          path: '/form',
          children: [
            {
              title: '表单',
              icon: 'iconfont el-icon-cc-file-add',
              children: [
                {
                  title: '选项一',
                  route: 'DataForm',
                  icon: 'el-icon-menu'
                }
              ]
            },
            {
              title: '表单布尔值',
              icon: 'iconfont el-icon-cc-file-add',
              route: 'BooleanDemo'
            },
            {
              title: '表单数字',
              icon: 'iconfont el-icon-cc-file-add',
              route: 'NumberDemo'
            },
            {
              title: '表单字符串',
              icon: 'iconfont el-icon-cc-file-add',
              route: 'StringDemo'
            },
            {
              title: '表单枚举',
              icon: 'iconfont el-icon-cc-file-add',
              route: 'EnumDemo'
            },
            {
              title: '表单枚举列表',
              icon: 'iconfont el-icon-cc-file-add',
              route: 'EnumListDemo'
            },
            {
              title: '表单任何类型',
              icon: 'iconfont el-icon-cc-file-add',
              route: 'AnyDemo'
            },
            {
              title: '表单Mac类型',
              icon: 'iconfont el-icon-cc-file-add',
              route: 'MacDemo'
            },
            {
              title: '表单活动有效期范围',
              icon: 'iconfont el-icon-cc-file-add',
              route: 'EffectiveTimeDemo'
            },
            {
              title: '列表筛选器',
              icon: 'iconfont el-icon-cc-file-add',
              route: 'ListFilterDemo'
            }
          ]
        }
      ]
    }
  }
}
</script>
