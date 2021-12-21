<template>
  <div>
    <!-- <c-menu :items="menu" background-color="#282c34"
    textColor="#00ff50"/> -->
    <c-menu :items="menu" background-color="#282c34" textColor="#00ff50" />
    <!-- <c-menu :items="threeLevelMenu" mode="horizontal"/> -->
  </div>
</template>
<script lang="ts">
export default {
  data () {
    return {
      menu: [
        {
          title: '表单',
          icon: 'documentAdd',
          route: 'form',
          path: '/form',
          children: [
            {
              title: '表单',
              icon: 'documentAdd',
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
              icon: 'documentAdd',
              route: 'BooleanDemo'
            },
            {
              title: '表单数字',
              icon: 'documentAdd',
              route: 'NumberDemo'
            },
            {
              title: '表单字符串',
              icon: 'documentAdd',
              route: 'StringDemo'
            },
            {
              title: '表单枚举',
              icon: 'documentAdd',
              route: 'EnumDemo'
            },
            {
              title: '表单枚举列表',
              icon: 'documentAdd',
              route: 'EnumListDemo'
            },
            {
              title: '表单任何类型',
              icon: 'documentAdd',
              route: 'AnyDemo'
            },
            {
              title: '表单Mac类型',
              icon: 'documentAdd',
              route: 'MacDemo'
            },
            {
              title: '表单活动有效期范围',
              icon: 'documentAdd',
              route: 'EffectiveTimeDemo'
            },
            {
              title: '列表筛选器',
              icon: 'documentAdd',
              route: 'ListFilterDemo'
            }
          ]
        }
      ]
    }
  }
}
</script>
