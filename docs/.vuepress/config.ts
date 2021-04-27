import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
export default defineUserConfig<DefaultThemeOptions>({
  base: '/admin-toolkit-plus/',
  title: 'Admin Toolkit Plus',
  description: '酷开 Vue3.0 组件库',
  themeConfig: {
    navbar: [
      {text: '文档', link: '/'},
      {text: 'Changelog', link: 'http://gitlab.skysri.com/FrontEnd/admin-toolkit/blob/master/CHANGELOG.md'},
      {text: 'GitLab', link: 'http://gitlab.skysri.com/FrontEnd/admin-toolkit'}
    ],
    locales: {
      '/': {
        lang: 'zh-CN',
        title: 'VuePress',
        description: 'Vue-powered Static Site Generator',
        sidebar: [
          {
            text: '组件',
            isGroup: true,
            children: [
              '/components/ActionList.md',
              '/components/Breadcrumb.md',
              '/components/TagNav.md',
              '/components/GateSchemaForm.md',
              '/components/Table.md',
              '/components/TableTree.md',
              '/components/CardList.md',
              '/components/ContentWrapper.md',
              '/components/RemoteSelect.md',
              '/components/Card.md',
              '/components/IconSelect.md',
              '/components/Upload.md',
              '/components/DownloadFile.md',
              '/components/FatherSonLink.md',
              '/components/ContentEllipsis.md',
              '/components/SelectDialog.md',
              '/components/BaseSelector.md',
              '/components/CellEdit.md',
              '/components/InputOrder.md',
              '/components/InputPositiveInt.md',
              '/components/InputPosibility.md',
              '/components/ContextMenu.md',
              '/components/FixPage.md',
              '/components/AddMultiObj.md',
              '/components/CascaderPanel.md',
              '/components/FilterTree.md',
              '/components/InputThousands.md',
              '/components/SearchDropdown.md',
              '/components/TreeSelect.md',
              '/components/SelectLimit.md',
              '/components/LazyRemoteSelect.md',
              '/components/BoxGroup.md'
            ]
          }
          ,
          {
            text: '业务组件',
            isGroup: true,
            children: [
              '/bizComponents/AppParams.md',
              '/bizComponents/AppParamsRead.md',
              '/bizComponents/ClickEventSelector.md',
              '/components/VideoTags.md',
              '/components/AddFormObj.md',
              '/components/SelectChange.md'
            ]
          },
          {
            text: '数据表单',
            isGroup: true,
            children: [
              '/form/DataForm.md',
              '/form/Boolean.md',
              '/form/Number.md',
              '/form/String.md',
              '/form/Enum.md',
              '/form/EnumList.md',
              '/form/Any.md',
              '/form/Mac.md',
              '/form/EffectiveTime.md'
            ]
          }
        ]
      },
    },
    // logo: 'assets/toolkit.png'
  },
})