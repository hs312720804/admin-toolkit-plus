(self.webpackChunk_ccprivate_admin_toolkit_plus=self.webpackChunk_ccprivate_admin_toolkit_plus||[]).push([[2509],{2422:(e,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>s});const s={key:"v-8daa1a0e",path:"/",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"安装",slug:"安装",children:[]},{level:2,title:"工具函数",slug:"工具函数",children:[]},{level:2,title:"组件源代码",slug:"组件源代码",children:[]},{level:2,title:"源代码运行",slug:"源代码运行",children:[]},{level:2,title:"安装 commitizen,为了规范化 git commit 方便使用 changelog",slug:"安装-commitizen-为了规范化-git-commit-方便使用-changelog",children:[]}],filePathRelative:"README.md",git:{updatedTime:1632567839e3,contributors:[{name:"wanghaihua",email:"wanghaihua@coocaa.com",commits:2}]}}},5314:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>x});var s=a(6252);const l=(0,s.Uk)("admin toolkit plus 基于 "),r={href:"https://vue3js.cn/",target:"_blank",rel:"noopener noreferrer"},i=(0,s.Uk)("vuejs 3.0"),t=(0,s.Uk)(" 和 "),p={href:"https://element-plus.gitee.io/#/zh-CN",target:"_blank",rel:"noopener noreferrer"},u=(0,s.Uk)("element-plus"),c=(0,s.Uk)(" 的管理后台组件和工具库"),m=(0,s.Wm)("h2",{id:"安装"},[(0,s.Wm)("a",{class:"header-anchor",href:"#安装"},"#"),(0,s.Uk)(" 安装")],-1),o=(0,s.Uk)("私有仓库安装："),d={href:"http://wiki.skyoss.com/pages/viewpage.action?pageId=35726422",target:"_blank",rel:"noopener noreferrer"},b=(0,s.Uk)("前端模块私有仓库说明"),g=(0,s.uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install @ccprivate/admin-toolkit-plus@版本号 --registry=http://172.20.155.102:4873\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>## 使用\n完整引入:\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>import AdminToolkit from &#39;@ccprivate/admin-toolkit-plus&#39; Vue.use(AdminToolkit)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>单个引入:\nimport { CMenu, CBreadcrumb, CCard, CActionList, CTable, CCardList, CTagNav, CContentWrapper, CAppParams, CAppParamsRead, CUpload, CForm, CFormString, CFormAny } from &#39;@ccprivate/admin-toolkit-plus&#39;\n\nVue.use(CMenu)\nVue.use(CBreadcrumb)\nVue.use(CCard)\nVue.use(CActionList)\nVue.use(CTable)\nVue.use(CTable)\nVue.use(CCardList)\nVue.use(CTagNav)\nVue.use(CContentWrapper)\nVue.use(CAppParams)\nVue.use(CAppParamsRead)\nVue.use(CUpload)\nVue.use(CForm)\nVue.use(CFormString)\nVue.use(CFormAny)\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="工具函数"><a class="header-anchor" href="#工具函数">#</a> 工具函数</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { utils } from &#39;@ccprivate/admin-toolkit-plus&#39;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="组件源代码"><a class="header-anchor" href="#组件源代码">#</a> 组件源代码</h2>',7),h=(0,s.Uk)("请查看 "),v={href:"http://gitlab.skysri.com/flower/admin-toolkit-plus",target:"_blank",rel:"noopener noreferrer"},C=(0,s.Uk)("源代码"),k=(0,s.uE)('<h2 id="源代码运行"><a class="header-anchor" href="#源代码运行">#</a> 源代码运行</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>运行代码：\nnpm install\nnpm run dev 开发环境\nnpm run build 生产环境\n运用文档：\nnpm run docs:dev  开发环境\nnpm run docs:build  生产环境\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="安装-commitizen-为了规范化-git-commit-方便使用-changelog"><a class="header-anchor" href="#安装-commitizen-为了规范化-git-commit-方便使用-changelog">#</a> 安装 commitizen,为了规范化 git commit 方便使用 changelog</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install -g commitizen\ncommitizen init cz-conventional-changelog --save --save-exact\n具体使用见 [源代码](https://blog.csdn.net/m0_37263637/article/details/86723431)\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',4),x={render:function(e,n){const a=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.j4)(s.HY,null,[(0,s.Wm)("p",null,[l,(0,s.Wm)("a",r,[i,(0,s.Wm)(a)]),t,(0,s.Wm)("a",p,[u,(0,s.Wm)(a)]),c]),m,(0,s.Wm)("p",null,[o,(0,s.Wm)("a",d,[b,(0,s.Wm)(a)])]),g,(0,s.Wm)("p",null,[h,(0,s.Wm)("a",v,[C,(0,s.Wm)(a)])]),k],64)}}}}]);