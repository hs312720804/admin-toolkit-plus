(self.webpackChunk_ccprivate_admin_toolkit_plus=self.webpackChunk_ccprivate_admin_toolkit_plus||[]).push([[6478],{1740:(n,a,s)=>{"use strict";s.r(a),s.d(a,{data:()=>t});const t={key:"v-173be9d5",path:"/components/DownloadFile.html",title:"文件下载",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"示例",slug:"示例",children:[{level:3,title:"效果",slug:"效果",children:[]}]},{level:2,title:"属性",slug:"属性",children:[]},{level:2,title:"事件",slug:"事件",children:[]},{level:2,title:"slot",slug:"slot",children:[]}],filePathRelative:"components/DownloadFile.md",git:{updatedTime:1632567839e3,contributors:[{name:"wanghaihua",email:"wanghaihua@coocaa.com",commits:3}]}}},6552:(n,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>l});var t=s(6252);const p=(0,t.uE)('<h1 id="文件下载"><a class="header-anchor" href="#文件下载">#</a> 文件下载</h1><p><code>c-download</code> 通过接口请求数据，然后触发下载</p><h2 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h2><h3 id="效果"><a class="header-anchor" href="#效果">#</a> 效果</h3>',4),e=(0,t.uE)(' ### 代码 <div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>c-download</span> <span class="token attr-name">@download-data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>downloadData<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:downloadUrl</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>downloadUrl<span class="token punctuation">&quot;</span></span>\n      <span class="token punctuation">&gt;</span></span>下载远程文件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>c-download</span>\n    <span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token comment">// import axios from &#39;axios&#39;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      downloadUrl<span class="token operator">:</span> <span class="token keyword">null</span>\n      <span class="token comment">// publicPath: process.env.BASE_URL</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">downloadData</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token doc-comment comment">/**\n       * 下载地址为远程的地址时\n       */</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>downloadUrl <span class="token operator">=</span> <span class="token string">&#39;notdataCollect.xls?_r=&#39;</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      <span class="token doc-comment comment">/**\n       * 下载地址为本地的某个文件时，把该文件放到该项目public目录下，然后加上文件名\n       */</span>\n      <span class="token comment">// this.downloadUrl = this.publicPath + &#39;notdataCollect.xls&#39;</span>\n      <span class="token doc-comment comment">/**\n       * 注释的代码是接口请求的例子\n       */</span>\n      <span class="token comment">// this.$service.downloadRareData(this.filterForRare).then(data =&gt; {</span>\n      <span class="token comment">//   this.downloadUrl = &quot;admin-api/remember/export?sign=&quot; + data.sign;</span>\n      <span class="token comment">// });</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h2 id="属性"><a class="header-anchor" href="#属性">#</a> 属性</h2><table><thead><tr><th>名称</th><th>类型</th><th>描述</th><th>例子</th></tr></thead><tbody><tr><td>downloadUrl</td><td>String</td><td>下载地址</td><td>见上面例子</td></tr></tbody></table><h2 id="事件"><a class="header-anchor" href="#事件">#</a> 事件</h2><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>download-data</td><td>无</td><td>当用户点击按钮触发</td></tr></tbody></table><h2 id="slot"><a class="header-anchor" href="#slot">#</a> slot</h2><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td>default</td><td>button 包裹的内容</td></tr></tbody></table>',8),l={render:function(n,a){const s=(0,t.up)("DownloadFileDemo"),l=(0,t.up)("Demo"),o=(0,t.up)("ClientOnly");return(0,t.wg)(),(0,t.j4)(t.HY,null,[p,(0,t.Wm)(o,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Wm)(s)])),_:1})])),_:1}),e],64)}}}}]);