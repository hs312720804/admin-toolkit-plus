import { createRouter, createWebHashHistory } from 'vue-router'
import main from '../lib/components/index.vue'
import * as demos from '../examples/index'
const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: main,
    redirect: 'actionList',
    meta: {
      title: '面板',
      icon: 'iconfont el-icon-cc-file-add',
      route: 'dashboard'
    },
    children: [
      {
        path: 'actionList',
        name: 'actionList',
        component: demos.ActionListDemo,
        meta: {
          title: '按钮组',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'actionList'
        }
      },
      {
        path: 'Breadcrumb',
        name: 'Breadcrumb',
        component: demos.BreadcrumbDemo,
        meta: {
          title: '面包屑',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'Breadcrumb'
        }
      },
      {
        path: 'CellEdit',
        name: 'CellEdit',
        component: demos.CellEditDemo,
        meta: {
          title: '表格可编辑单元',
          route: 'CellEdit'
        }
      },
      {
        path: 'AppParams',
        name: 'AppParams',
        component: demos.AppParamsDemo,
        meta: {
          title: 'AppParams',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'AppParams'
        }
      },
      {
        path: 'AppParamsRead',
        name: 'AppParamsRead',
        component: demos.AppParamsReadDemo,
        meta: {
          title: 'AppParamsRead',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'AppParamsRead'
        }
      },
      {
        path: 'menu',
        name: 'menu',
        component: demos.MenuDemo,
        meta: {
          title: '菜单',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'menu'
        }
      },
      {
        path: 'contextMenu',
        name: 'contextMenu',
        component: demos.ContextMenuDemo,
        meta: {
          title: '右键菜单',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'contextMenu'
        }
      },
      {
        path: 'tagNav',
        name: 'tagNav',
        component: demos.TagNavDemo,
        meta: {
          title: 'tagNav',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'tagNav'
        }
      },
      {
        path: 'carouse',
        name: 'carouse',
        component: demos.CarouselDemo,
        meta: {
          title: '幻灯片',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'carouse'
        }
      },
      {
        path: 'ellipsis',
        name: 'ellipsis',
        component: demos.ContentEllipsisDemo,
        meta: {
          title: '省略号',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'ellipsis'
        }
      },
      {
        path: 'theIcon',
        name: 'theIcon',
        component: demos.TheIconDemoIndex,
        meta: {
          title: '图标',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'theIcon'
        }
      },
      {
        path: 'contentCard',
        name: 'contentCard',
        component: demos.CardDemo,
        meta: {
          title: '标题返回',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'contentCard'
        }
      },
      {
        path: 'fixPage',
        name: 'fixPage',
        component: demos.FixPageDemo,
        meta: {
          title: '头尾固定',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'fixPage'
        }
      },
      {
        path: 'AddMulti',
        name: 'AddMulti',
        component: demos.AddMultiDemo,
        meta: {
          title: '添加多个对象',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'AddMulti'
        }
      },
      {
        path: 'AddFormObj',
        name: 'AddFormObj',
        component: demos.AddFormObjDemo,
        meta: {
          title: '动态添加',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'AddFormObj'
        }
      },
      {
        path: 'SelectChange',
        name: 'SelectChange',
        component: demos.SelectChangeDemo,
        meta: {
          title: '条件选择',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'SelectChange'
        }
      },
      {
        path: 'SelectLimit',
        name: 'SelectLimit',
        component: demos.SelectLimitDemo,
        meta: {
          title: 'select输入长度',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'SelectLimit'
        }
      },
      {
        path: 'BoxGroup',
        name: 'BoxGroup',
        component: demos.BoxGroupDemo,
        meta: {
          title: '单项选择按钮形式',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'BoxGroup'
        }
      },
      {
        path: 'probability',
        name: 'probability',
        component: demos.InputPosibilityDemo,
        meta: {
          title: '概率输入',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'probability'
        }
      },
      // {
      //   path: 'VideoTags',
      //   name: 'VideoTags',
      //   component: demos.VideoTagsDemo,
      //   meta: {
      //     title: '标签列表',
      //     icon: 'iconfont el-icon-cc-file-add',
      //     route: 'VideoTags'
      //   }
      // },
      // {
      //   path: 'ProductList',
      //   name: 'ProductList',
      //   component: demos.ProductListDemo,
      //   meta: {
      //     title: '产品包列表',
      //     icon: 'iconfont el-icon-cc-file-add',
      //     route: 'ProductList'
      //   }
      // },
      // {
      //   path: 'VideoFilter',
      //   name: 'VideoFilter',
      //   component: demos.VideoFilterDemo,
      //   meta: {
      //     title: '影片筛选器',
      //     icon: 'iconfont el-icon-cc-file-add',
      //     route: 'VideoFilter'
      //   }
      // },
      {
        path: 'CardList',
        name: 'CardList',
        component: demos.CardListDemo,
        meta: {
          title: '卡片列表',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'CardList'
        }
      },
      {
        path: 'filterTree',
        name: 'filterTree',
        component: demos.FilterTreeDemo,
        meta: {
          title: '树形过滤',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'filterTree'
        }
      },
      {
        path: 'inputThousands',
        name: 'inputThousands',
        component: demos.InputThousandsDemo,
        meta: {
          title: '输入千分位数字',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'inputThousands'
        }
      },
      {
        path: 'inputOrder',
        name: 'inputOrder',
        component: demos.InputOrderDemo,
        meta: {
          title: '序号排序',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'inputOrder'
        }
      },
      {
        path: 'inputPositiveInt',
        name: 'inputPositiveInt',
        component: demos.InputPositiveIntDemo,
        meta: {
          title: '正整数输入',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'inputPositiveInt'
        }
      },
      // {
      //   path: 'selectDialog',
      //   name: 'selectDialog',
      //   component: demos.SelectDialogDemo,
      //   meta: {
      //     title: '基础数据选择器',
      //     icon: 'iconfont el-icon-cc-file-add',
      //     route: 'selectDialog'
      //   }
      // },
      {
        path: 'ContentWrapperDemo',
        name: 'ContentWrapperDemo',
        component: demos.ContentWrapperDemo,
        meta: {
          title: '内容包装器',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'ContentWrapperDemo'
        }
      },
      {
        path: 'treeSelect',
        name: 'treeSelect',
        component: demos.TreeSelectDemo,
        meta: {
          title: '树形下拉框',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'treeSelect'
        }
      },
      {
        path: 'searchDropdown',
        name: 'searchDropdown',
        component: demos.SearchDropdownDemo,
        meta: {
          title: '下拉框远程搜索',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'searchDropdown'
        }
      },
      {
        path: 'selectChange',
        name: 'selectChange',
        component: demos.SelectChangeDemo,
        meta: {
          title: '条件选择',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'selectChange'
        }
      },
      {
        path: 'lazyRemoteSelect',
        name: 'lazyRemoteSelect',
        component: demos.LazyRemoteSelectDemo,
        meta: {
          title: '懒加载搜索',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'lazyRemoteSelect'
        }
      },
      {
        path: 'clickEvent',
        name: 'clickEvent',
        component: demos.ClickEventSelectorDemo,
        meta: {
          title: '点击事件选择器',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'clickEvent'
        }
      }
    ]
  },
  {
    path: '/file',
    name: 'file',
    component: main,
    redirect: '/file/downloadFile',
    meta: {
      title: '文件',
      icon: 'iconfont el-icon-cc-file-add',
      route: 'dashboard'
    },
    children: [
      {
        path: 'downloadFile',
        name: 'downloadFile',
        component: demos.DownloadFileDemo,
        meta: {
          title: '文件下载',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'downloadFile'
        }
      },
      {
        path: 'uploadFile',
        name: 'uploadFile',
        component: demos.UploadDemo,
        meta: {
          title: '文件上传',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'uploadFile'
        }
      },
      {
        path: 'cascaderPanelDemo',
        name: 'cascaderPanelDemo',
        component: demos.CascaderPanelDemo,
        meta: {
          title: '级联选择器',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'cascaderPanelDemo'
        }
      }
    ]
  },
  {
    path: '/table',
    name: 'table',
    component: main,
    redirect: '/table/tableList',
    meta: {
      title: '表格',
      icon: 'iconfont el-icon-cc-file-add',
      route: 'table'
    },
    children: [
      {
        path: 'tableList',
        name: 'tableList',
        component: demos.TableDemo,
        meta: {
          title: '表格',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'tableList'
        }
      },
      {
        path: 'treeTableList',
        name: 'treeTableList',
        component: demos.TableTreeDemo,
        meta: {
          title: '树形表格',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'treeTableList'
        }
      },
      {
        path: 'ContentWrapper',
        name: 'ContentWrapper',
        component: demos.ContentWrapperDemo,
        meta: {
          title: '表格分页',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'ContentWrapper'
        }
      },
      // {
      //   path: 'GateSchemaFormDemo',
      //   name: 'GateSchemaFormDemo',
      //   component: demos.GateSchemaFormDemo,
      //   meta: {
      //     title: 'GateSchemaForm表单',
      //     icon: 'iconfont el-icon-cc-file-add',
      //     route: 'GateSchemaFormDemo'
      //   }
      // }
    ]
  },
  {
    path: '/form',
    name: 'form',
    component: main,
    redirect: '/form/formList',
    meta: {
      title: '表单',
      icon: 'iconfont el-icon-cc-file-add',
      route: 'form'
    },
    children: [
      // {
      //   path: 'formList',
      //   name: 'formList',
      //   component: demos.GateSchemaFormDemo,
      //   meta: {
      //     title: '表单验证',
      //     icon: 'iconfont el-icon-cc-file-add',
      //     route: 'formList'
      //   }
      // },
      {
        path: 'remoteSelectData',
        name: 'remoteSelectData',
        component: demos.RemoteSelectDemo,
        meta: {
          title: '远程数据',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'remoteSelectData'
        }
      },
      {
        path: 'DataForm',
        name: 'DataForm',
        component: demos.DataFormDemo,
        meta: {
          title: '表单',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'DataForm'
        }
      },
      {
        path: 'BooleanDemo',
        name: 'BooleanDemo',
        component: demos.BooleanDemo,
        meta: {
          title: '表单布尔值',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'BooleanDemo'
        }
      },
      {
        path: 'NumberDemo',
        name: 'NumberDemo',
        component: demos.NumberDemo,
        meta: {
          title: '表单数字',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'NumberDemo'
        }
      },
      {
        path: 'StringDemo',
        name: 'StringDemo',
        component: demos.StringDemo,
        meta: {
          title: '表单字符串',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'StringDemo'
        }
      },
      {
        path: 'EnumDemo',
        name: 'EnumDemo',
        component: demos.EnumDemo,
        meta: {
          title: '表单枚举',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'EnumDemo'
        }
      },
      {
        path: 'EnumListDemo',
        name: 'EnumListDemo',
        component: demos.EnumListDemo,
        meta: {
          title: '表单枚举列表',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'EnumListDemo'
        }
      },
      {
        path: 'AnyDemo',
        name: 'AnyDemo',
        component: demos.AnyDemo,
        meta: {
          title: '表单任何类型',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'AnyDemo'
        }
      },
      {
        path: 'MacDemo',
        name: 'MacDemo',
        component: demos.MacDemo,
        meta: {
          title: '表单Mac类型',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'MacDemo'
        }
      },
      {
        path: 'EffectiveTimeDemo',
        name: 'EffectiveTimeDemo',
        component: demos.EffectiveTimeDemo,
        meta: {
          title: '表单活动有效期范围',
          icon: 'iconfont el-icon-cc-file-add',
          route: 'EffectiveTimeDemo'
        }
      }
    ]
  }
]
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes // `routes: routes` 的缩写
})
export default router