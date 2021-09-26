(self.webpackChunk_ccprivate_admin_toolkit_plus=self.webpackChunk_ccprivate_admin_toolkit_plus||[]).push([[655],{1122:(n,a,s)=>{"use strict";s.r(a),s.d(a,{data:()=>t});const t={key:"v-b60110a4",path:"/components/InputThousands.html",title:"输入千分位数据",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"示例",slug:"示例",children:[{level:3,title:"效果",slug:"效果",children:[]}]},{level:2,title:"属性",slug:"属性",children:[]},{level:2,title:"事件",slug:"事件",children:[]},{level:2,title:"方法",slug:"方法",children:[]}],filePathRelative:"components/InputThousands.md",git:{updatedTime:1632567839e3,contributors:[{name:"wanghaihua",email:"wanghaihua@coocaa.com",commits:3}]}}},327:(n,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>l});var t=s(6252);const p=(0,t.uE)('<h1 id="输入千分位数据"><a class="header-anchor" href="#输入千分位数据">#</a> 输入千分位数据</h1><p><code>c-input-thousands</code> 输入千分位的数字，只能输入 0 或者正整数</p><h2 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h2><h3 id="效果"><a class="header-anchor" href="#效果">#</a> 效果</h3>',4),e=(0,t.uE)(' ### 代码 <div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>c-input-thousands</span>\n      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>thousandsItem<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inputThousands<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:isIncludeZero</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>请输入数据<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>c-input-thousands</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token style language-css"><span class="token property">margin-top</span><span class="token punctuation">:</span>10px</span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleGetValue<span class="token punctuation">&quot;</span></span>\n      <span class="token punctuation">&gt;</span></span>获取值<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span>\n    <span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      thousandsItem<span class="token operator">:</span> <span class="token number">345666000</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token doc-comment comment">/**\n     * 获取输入的数据\n     */</span>\n    <span class="token function">handleGetValue</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>inputThousands<span class="token punctuation">.</span><span class="token function">getPositiveInt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>thousandsItem<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="属性"><a class="header-anchor" href="#属性">#</a> 属性</h2><table><thead><tr><th>名称</th><th>类型</th><th>描述</th><th>例子</th><th>备注</th></tr></thead><tbody><tr><td>value</td><td>String, Number</td><td>v-model 的值</td><td>见如上例子</td><td>1.1 以后版本才有此功能</td></tr><tr><td>disabled</td><td>Boolean</td><td>true 为不可以用</td><td></td><td>1.1 以后版本才有此功能，默认值 false</td></tr><tr><td>append</td><td>String</td><td>el-input 的 append 属性</td><td>见 el-input 例子</td><td>1.1 以后版本才有此功能</td></tr><tr><td>prepend</td><td>String</td><td>el-input 的 prepend</td><td>见 el-input 例子</td><td>1.1 以后版本才有此功能</td></tr><tr><td>placeholder</td><td>String</td><td>占位符</td><td>跟原生占位符意思一样</td><td>1.1 以后版本才有此功能</td></tr><tr><td>is-include-zero</td><td>Boolean</td><td>是否可以输入 0</td><td>见如上例子</td><td>1.1 以后版本才有此功能</td></tr></tbody></table><h2 id="事件"><a class="header-anchor" href="#事件">#</a> 事件</h2><table><thead><tr><th>名称</th><th>参数</th><th>描述</th><th>备注</th></tr></thead><tbody><tr><td>blur</td><td>无</td><td>el-input 的 blur 事件</td><td>1.1 以后版本才有此功能</td></tr><tr><td>change</td><td>无</td><td>el-input 的 change 事件</td><td>1.1 以后版本才有此功能</td></tr></tbody></table><h2 id="方法"><a class="header-anchor" href="#方法">#</a> 方法</h2><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td>getPositiveInt</td><td>得到去掉千分位的数字</td></tr></tbody></table>',8),l={render:function(n,a){const s=(0,t.up)("InputThousandsDemo"),l=(0,t.up)("Demo"),c=(0,t.up)("ClientOnly");return(0,t.wg)(),(0,t.j4)(t.HY,null,[p,(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Wm)(s)])),_:1})])),_:1}),e],64)}}}}]);