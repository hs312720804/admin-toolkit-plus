admin toolkit plus
基于 [vuejs 3.0](https://vue3js.cn/) 和 [element-plus](https://element-plus.gitee.io/#/zh-CN) 的管理后台组件和工具库

## 安装

私有仓库安装：[前端模块私有仓库说明](http://wiki.skyoss.com/pages/viewpage.action?pageId=35726422)

```
npm install @ccprivate/admin-toolkit-plus@版本号 --registry=http://172.20.155.102:4873
```

```
## 使用
完整引入:
```

import AdminToolkit from '@ccprivate/admin-toolkit-plus'
Vue.use(AdminToolkit)

```
单个引入:
import { CMenu, CBreadcrumb, CCard, CActionList, CTable, CCardList, CTagNav, CContentWrapper, CAppParams, CAppParamsRead, CUpload, CForm, CFormString, CFormAny } from '@ccprivate/admin-toolkit-plus'

Vue.use(CMenu)
Vue.use(CBreadcrumb)
Vue.use(CCard)
Vue.use(CActionList)
Vue.use(CTable)
Vue.use(CTable)
Vue.use(CCardList)
Vue.use(CTagNav)
Vue.use(CContentWrapper)
Vue.use(CAppParams)
Vue.use(CAppParamsRead)
Vue.use(CUpload)
Vue.use(CForm)
Vue.use(CFormString)
Vue.use(CFormAny)
```

## 工具函数

```
import { utils } from '@ccprivate/admin-toolkit-plus'
```

## 组件源代码

请查看 [源代码](http://gitlab.skysri.com/flower/admin-toolkit-plus)

## 源代码运行

```
运行代码：
npm install
npm run dev 开发环境
npm run build 生产环境
运用文档：
npm run docs:dev  开发环境
npm run docs:build  生产环境
```

## 安装 commitizen,为了规范化 git commit 方便使用 changelog

```
npm install -g commitizen
commitizen init cz-conventional-changelog --save --save-exact
具体使用见 [源代码](https://blog.csdn.net/m0_37263637/article/details/86723431)
```

## V1.0.2 修改项：

```
1、修改 <c-form> 组件；更新 vue-i18n、@vue/compiler-sfc、vite等包
2、修改一些ele图标语法；修改 icon-select 组件；安装 @element-plus/icons-vue 包；
3、修改 Menu 组件的key值，使用 route 字段
```