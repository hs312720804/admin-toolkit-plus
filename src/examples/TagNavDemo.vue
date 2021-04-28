<template>
  <div>
    <el-button type="primary" @click="handleChangelanguage('zh')">中文</el-button>
    <el-button type="primary" @click="handleChangelanguage('en')">英文</el-button>
    <c-tag-nav :init-tags="initTags" style="margin-bottom:10px;" />
    <c-tag-nav
      :init-tags="initTags"
      theme="tag-nav-two"
      style="margin-bottom:10px;"
    />
    <c-tag-nav
      :init-tags="initTags"
      theme="gray-tab"
      style="margin-bottom:10px;"
    />
    <c-tag-nav :init-tags="initTags" theme="white-tab" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      initTags: [
        {
          name: 'popuplist',
          meta: {
            tagId: 'popuplist',
            title: '弹窗列表'
          },
          fullPath: '/manage/popuplist'
        },
        {
          name: 'tagNav',
          meta: {
            tagId: 'tagNav',
            title: '新增弹窗'
          },
          fullPath: '/manage/add-popup'
        },
        {
          name: 'modelblacklist',
          meta: {
            tagId: 'modelblacklist',
            title: '机型黑名单'
          },
          fullPath: '/manage/modelblacklist'
        },
        {
          name: 'macblacklist',
          meta: {
            tagId: 'macblacklist',
            title: 'MAC黑名单'
          },
          fullPath: '/manage/macblacklist'
        },
        {
          name: 'scene',
          meta: {
            tagId: 'scene',
            title: '场景管理'
          },
          fullPath: '/pwsettings/scene'
        },
        {
          name: 'touch',
          meta: {
            tagId: 'touch',
            title: '触发管理'
          },
          fullPath: '/pwsettings/touch'
        },
        {
          name: 'global',
          meta: {
            tagId: 'global',
            title: '全局设置'
          },
          fullPath: '/pwsettings/global'
        }
      ]
    }
  },
  methods: {
    handleChangelanguage (type) {
      this.$i18n.locale = type
    }
  }
}
</script>
