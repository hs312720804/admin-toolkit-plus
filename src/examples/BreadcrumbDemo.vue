<template>
  <c-breadcrumb :items="items" />
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          name: '首页',
          to: { name: 'home' }
        },
        {
          name: '文章管理'
        },
        {
          name: '创建文章'
        }
      ]
    }
  }
}
</script>
