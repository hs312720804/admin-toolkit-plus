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
      icon: 'documentAdd',
      route: 'dashboard'
    },
    children: [
      {
        path: 'actionList',
        name: 'actionList',
        component: demos.ActionListDemo,
        meta: {
          title: '按钮组',
          icon: 'documentAdd',
          route: 'actionList'
        }
      },
      {
        path: 'Breadcrumb',
        name: 'Breadcrumb',
        component: demos.BreadcrumbDemo,
        meta: {
          title: '面包屑',
          icon: 'documentAdd',
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
          icon: 'documentAdd',
          route: 'AppParams'
        }
      },
      {
        path: 'AppParamsRead',
        name: 'AppParamsRead',
        component: demos.AppParamsReadDemo,
        meta: {
          title: 'AppParamsRead',
          icon: 'documentAdd',
          route: 'AppParamsRead'
        }
      },
      {
        path: 'menu',
        name: 'menu',
        component: demos.MenuDemo,
        meta: {
          title: '菜单',
          icon: 'documentAdd',
          route: 'menu'
        }
      },
      {
        path: 'contextMenu',
        name: 'contextMenu',
        component: demos.ContextMenuDemo,
        meta: {
          title: '右键菜单',
          icon: 'documentAdd',
          route: 'contextMenu'
        }
      },
      {
        path: 'tagNav',
        name: 'tagNav',
        component: demos.TagNavDemo,
        meta: {
          title: 'tagNav',
          icon: 'documentAdd',
          route: 'tagNav'
        }
      },
      {
        path: 'ellipsis',
        name: 'ellipsis',
        component: demos.ContentEllipsisDemo,
        meta: {
          title: '省略号',
          icon: 'documentAdd',
          route: 'ellipsis'
        }
      },
      {
        path: 'theIcon',
        name: 'theIcon',
        component: demos.TheIconDemoIndex,
        meta: {
          title: '图标',
          icon: 'documentAdd',
          route: 'theIcon'
        }
      },
      {
        path: 'contentCard',
        name: 'contentCard',
        component: demos.CardDemo,
        meta: {
          title: '标题返回',
          icon: 'documentAdd',
          route: 'contentCard'
        }
      },
      {
        path: 'fixPage',
        name: 'fixPage',
        component: demos.FixPageDemo,
        meta: {
          title: '头尾固定',
          icon: 'documentAdd',
          route: 'fixPage'
        }
      },
      {
        path: 'AddMulti',
        name: 'AddMulti',
        component: demos.AddMultiDemo,
        meta: {
          title: '添加多个对象',
          icon: 'documentAdd',
          route: 'AddMulti'
        }
      },
      {
        path: 'AddFormObj',
        name: 'AddFormObj',
        component: demos.AddFormObjDemo,
        meta: {
          title: '动态添加',
          icon: 'documentAdd',
          route: 'AddFormObj'
        }
      },
      {
        path: 'SelectChange',
        name: 'SelectChange',
        component: demos.SelectChangeDemo,
        meta: {
          title: '条件选择',
          icon: 'documentAdd',
          route: 'SelectChange'
        }
      },
      {
        path: 'SelectLimit',
        name: 'SelectLimit',
        component: demos.SelectLimitDemo,
        meta: {
          title: 'select输入长度',
          icon: 'documentAdd',
          route: 'SelectLimit'
        }
      },
      {
        path: 'BoxGroup',
        name: 'BoxGroup',
        component: demos.BoxGroupDemo,
        meta: {
          title: '单项选择按钮形式',
          icon: 'documentAdd',
          route: 'BoxGroup'
        }
      },
      {
        path: 'probability',
        name: 'probability',
        component: demos.InputPosibilityDemo,
        meta: {
          title: '概率输入',
          icon: 'documentAdd',
          route: 'probability'
        }
      },
      // {
      //   path: 'VideoTags',
      //   name: 'VideoTags',
      //   component: demos.VideoTagsDemo,
      //   meta: {
      //     title: '标签列表',
      //     icon: 'documentAdd',
      //     route: 'VideoTags'
      //   }
      // },
      // {
      //   path: 'ProductList',
      //   name: 'ProductList',
      //   component: demos.ProductListDemo,
      //   meta: {
      //     title: '产品包列表',
      //     icon: 'documentAdd',
      //     route: 'ProductList'
      //   }
      // },
      // {
      //   path: 'VideoFilter',
      //   name: 'VideoFilter',
      //   component: demos.VideoFilterDemo,
      //   meta: {
      //     title: '影片筛选器',
      //     icon: 'documentAdd',
      //     route: 'VideoFilter'
      //   }
      // },
      {
        path: 'CardList',
        name: 'CardList',
        component: demos.CardListDemo,
        meta: {
          title: '卡片列表',
          icon: 'documentAdd',
          route: 'CardList'
        }
      },
      {
        path: 'filterTree',
        name: 'filterTree',
        component: demos.FilterTreeDemo,
        meta: {
          title: '树形过滤',
          icon: 'documentAdd',
          route: 'filterTree'
        }
      },
      {
        path: 'inputThousands',
        name: 'inputThousands',
        component: demos.InputThousandsDemo,
        meta: {
          title: '输入千分位数字',
          icon: 'documentAdd',
          route: 'inputThousands'
        }
      },
      {
        path: 'inputOrder',
        name: 'inputOrder',
        component: demos.InputOrderDemo,
        meta: {
          title: '序号排序',
          icon: 'documentAdd',
          route: 'inputOrder'
        }
      },
      {
        path: 'inputPositiveInt',
        name: 'inputPositiveInt',
        component: demos.InputPositiveIntDemo,
        meta: {
          title: '正整数输入',
          icon: 'documentAdd',
          route: 'inputPositiveInt'
        }
      },
      // {
      //   path: 'selectDialog',
      //   name: 'selectDialog',
      //   component: demos.SelectDialogDemo,
      //   meta: {
      //     title: '基础数据选择器',
      //     icon: 'documentAdd',
      //     route: 'selectDialog'
      //   }
      // },
      {
        path: 'ContentWrapperDemo',
        name: 'ContentWrapperDemo',
        component: demos.ContentWrapperDemo,
        meta: {
          title: '内容包装器',
          icon: 'documentAdd',
          route: 'ContentWrapperDemo'
        }
      },
      {
        path: 'treeSelect',
        name: 'treeSelect',
        component: demos.TreeSelectDemo,
        meta: {
          title: '树形下拉框',
          icon: 'documentAdd',
          route: 'treeSelect'
        }
      },
      {
        path: 'searchDropdown',
        name: 'searchDropdown',
        component: demos.SearchDropdownDemo,
        meta: {
          title: '下拉框远程搜索',
          icon: 'documentAdd',
          route: 'searchDropdown'
        }
      },
      {
        path: 'selectChange',
        name: 'selectChange',
        component: demos.SelectChangeDemo,
        meta: {
          title: '条件选择',
          icon: 'documentAdd',
          route: 'selectChange'
        }
      },
      {
        path: 'lazyRemoteSelect',
        name: 'lazyRemoteSelect',
        component: demos.LazyRemoteSelectDemo,
        meta: {
          title: '懒加载搜索',
          icon: 'documentAdd',
          route: 'lazyRemoteSelect'
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
      icon: 'documentAdd',
      route: 'dashboard'
    },
    children: [
      {
        path: 'downloadFile',
        name: 'downloadFile',
        component: demos.DownloadFileDemo,
        meta: {
          title: '文件下载',
          icon: 'documentAdd',
          route: 'downloadFile'
        }
      },
      {
        path: 'uploadFile',
        name: 'uploadFile',
        component: demos.UploadDemo,
        meta: {
          title: '文件上传',
          icon: 'documentAdd',
          route: 'uploadFile'
        }
      },
      {
        path: 'cascaderPanelDemo',
        name: 'cascaderPanelDemo',
        component: demos.CascaderPanelDemo,
        meta: {
          title: '级联选择器',
          icon: 'documentAdd',
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
      icon: 'documentAdd',
      route: 'table'
    },
    children: [
      {
        path: 'tableList',
        name: 'tableList',
        component: demos.TableDemo,
        meta: {
          title: '表格',
          icon: 'documentAdd',
          route: 'tableList'
        }
      },
      {
        path: 'treeTableList',
        name: 'treeTableList',
        component: demos.TableTreeDemo,
        meta: {
          title: '树形表格',
          icon: 'documentAdd',
          route: 'treeTableList'
        }
      },
      {
        path: 'ContentWrapper',
        name: 'ContentWrapper',
        component: demos.ContentWrapperDemo,
        meta: {
          title: '表格分页',
          icon: 'documentAdd',
          route: 'ContentWrapper'
        }
      },
      // {
      //   path: 'GateSchemaFormDemo',
      //   name: 'GateSchemaFormDemo',
      //   component: demos.GateSchemaFormDemo,
      //   meta: {
      //     title: 'GateSchemaForm表单',
      //     icon: 'documentAdd',
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
      icon: 'documentAdd',
      route: 'form'
    },
    children: [
      {
        path: 'DataForm',
        name: 'DataForm',
        component: demos.DataFormDemo,
        meta: {
          title: '表单',
          icon: 'documentAdd',
          route: 'DataForm'
        }
      },
      {
        path: 'BooleanDemo',
        name: 'BooleanDemo',
        component: demos.BooleanDemo,
        meta: {
          title: '表单布尔值',
          icon: 'documentAdd',
          route: 'BooleanDemo'
        }
      },
      {
        path: 'NumberDemo',
        name: 'NumberDemo',
        component: demos.NumberDemo,
        meta: {
          title: '表单数字',
          icon: 'documentAdd',
          route: 'NumberDemo'
        }
      },
      {
        path: 'StringDemo',
        name: 'StringDemo',
        component: demos.StringDemo,
        meta: {
          title: '表单字符串',
          icon: 'documentAdd',
          route: 'StringDemo'
        }
      },
      {
        path: 'EnumDemo',
        name: 'EnumDemo',
        component: demos.EnumDemo,
        meta: {
          title: '表单枚举',
          icon: 'documentAdd',
          route: 'EnumDemo'
        }
      },
      {
        path: 'EnumListDemo',
        name: 'EnumListDemo',
        component: demos.EnumListDemo,
        meta: {
          title: '表单枚举列表',
          icon: 'documentAdd',
          route: 'EnumListDemo'
        }
      },
      {
        path: 'AnyDemo',
        name: 'AnyDemo',
        component: demos.AnyDemo,
        meta: {
          title: '表单任何类型',
          icon: 'documentAdd',
          route: 'AnyDemo'
        }
      },
      {
        path: 'MacDemo',
        name: 'MacDemo',
        component: demos.MacDemo,
        meta: {
          title: '表单Mac类型',
          icon: 'documentAdd',
          route: 'MacDemo'
        }
      },
      {
        path: 'EffectiveTimeDemo',
        name: 'EffectiveTimeDemo',
        component: demos.EffectiveTimeDemo,
        meta: {
          title: '表单活动有效期范围',
          icon: 'documentAdd',
          route: 'EffectiveTimeDemo'
        }
      },
      {
        path: 'ListFilterDemo',
        name: 'ListFilterDemo',
        component: demos.ListFilterDemo,
        meta: {
          title: '列表筛选器',
          icon: 'documentAdd',
          route: 'ListFilterDemo'
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