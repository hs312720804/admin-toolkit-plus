(self.webpackChunk_ccprivate_admin_toolkit_plus=self.webpackChunk_ccprivate_admin_toolkit_plus||[]).push([[71],{3947:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-fd36f4ae",path:"/components/BaseSelector.html",title:"基础数据选择器",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"示例",slug:"示例",children:[]},{level:2,title:"属性",slug:"属性",children:[]},{level:2,title:"slot",slug:"slot",children:[]},{level:2,title:"事件",slug:"事件",children:[]}],filePathRelative:"components/BaseSelector.md",git:{updatedTime:1632567839e3,contributors:[{name:"wanghaihua",email:"wanghaihua@coocaa.com",commits:3}]}}},8048:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>l});var t=a(6252);const p=(0,t.Wm)("h1",{id:"基础数据选择器"},[(0,t.Wm)("a",{class:"header-anchor",href:"#基础数据选择器"},"#"),(0,t.Uk)(" 基础数据选择器")],-1),e=(0,t.Wm)("p",null,[(0,t.Wm)("code",null,"c-base-selector"),(0,t.Uk)(" 用于创建数据选择器，配合 "),(0,t.Wm)("code",null,"c-select-dialog选择器"),(0,t.Uk)(" 可实现点击弹窗选择数据")],-1),c=(0,t.Wm)("h2",{id:"示例"},[(0,t.Wm)("a",{class:"header-anchor",href:"#示例"},"#"),(0,t.Uk)(" 示例")],-1),o=(0,t.uE)(' ## 代码 <div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>c-base-selector</span>\n    <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>baseSelector<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">id-field</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:is-live</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isLive<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:selection-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectionType<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:table</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>table<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:pagination</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pagination<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:filter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>filter<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:filter-schema</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>filterSchema<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@pagination-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fetchData<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@filter-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fetchData<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@filter-reset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleFilterReset<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@select-cancel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$emit(<span class="token punctuation">&#39;</span>select-cancel<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@select-end</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$emit(<span class="token punctuation">&#39;</span>select-end<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>c-base-selector</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      pagination<span class="token operator">:</span> <span class="token punctuation">{</span>\n        currentPage<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n        pageSize<span class="token operator">:</span> <span class="token number">15</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      filter<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getDefaultFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      filterSchema<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n      table<span class="token operator">:</span> <span class="token punctuation">{</span>\n        props<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n        header<span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            label<span class="token operator">:</span> <span class="token string">&#39;ID&#39;</span><span class="token punctuation">,</span>\n            prop<span class="token operator">:</span> <span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span>\n            width<span class="token operator">:</span> <span class="token string">&#39;70&#39;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">{</span>\n            label<span class="token operator">:</span> <span class="token string">&#39;名称&#39;</span><span class="token punctuation">,</span>\n            prop<span class="token operator">:</span> <span class="token string">&#39;name&#39;</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n        data<span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n            name<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">{</span>\n            id<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n            name<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  computed<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">selected</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>baseSelector<span class="token punctuation">.</span>selected<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  props<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;isLive&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;selectionType&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">getDefaultFilter</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">getFilter</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> pagination <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>pagination\n      <span class="token keyword">const</span> filter <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>filter<span class="token punctuation">)</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>pagination<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        filter<span class="token punctuation">.</span>page <span class="token operator">=</span> pagination<span class="token punctuation">.</span>currentPage\n        filter<span class="token punctuation">.</span>rows <span class="token operator">=</span> pagination<span class="token punctuation">.</span>pageSize\n      <span class="token punctuation">}</span>\n      <span class="token keyword">return</span> filter\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">handleFilterReset</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>filter <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getDefaultFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>pagination<span class="token punctuation">.</span>currentPage <span class="token operator">=</span> <span class="token number">1</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">fetchData</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">created</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br></div></div><h2 id="属性"><a class="header-anchor" href="#属性">#</a> 属性</h2><table><thead><tr><th>名称</th><th>类型</th><th>描述</th><th>例子</th></tr></thead><tbody><tr><td>idField</td><td>String</td><td>表格主键</td><td>----</td></tr><tr><td>filter</td><td>Object</td><td>筛选条件</td><td>----</td></tr><tr><td>filterSchema</td><td>Object</td><td>筛选主题，结合 gateSchema 使用</td><td>----</td></tr><tr><td>table</td><td>Object</td><td>参见 Table 组件</td><td>----</td></tr><tr><td>pagination</td><td>Object</td><td>分页属性</td><td>{ currentPage, pageSize }</td></tr><tr><td>selectionType</td><td>String</td><td>表格单选/多选，参见 Table 组件</td><td>----</td></tr></tbody></table><h2 id="slot"><a class="header-anchor" href="#slot">#</a> slot</h2><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>filter</td><td>自定义筛选表格</td></tr><tr><td>item-list</td><td>自定义内容</td></tr><tr><td>pagination</td><td>自定义分页组件</td></tr><tr><td>actions</td><td>自定义分页旁边的按钮组</td></tr><tr><td>default</td><td>footer 下方的空插槽</td></tr></tbody></table><h2 id="事件"><a class="header-anchor" href="#事件">#</a> 事件</h2><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>select-end</td><td>(value: Array)</td><td>确定按钮</td></tr><tr><td>select-cancel</td><td>----</td><td>取消按钮</td></tr><tr><td>filter-change</td><td>----</td><td>查询结果改变</td></tr><tr><td>pagination-change</td><td>----</td><td>分页条件改变</td></tr><tr><td>filter-reset</td><td>----</td><td>重置查询条件</td></tr></tbody></table>',8),l={render:function(n,s){const a=(0,t.up)("BaseSelectorDemo"),l=(0,t.up)("Demo"),u=(0,t.up)("ClientOnly");return(0,t.wg)(),(0,t.j4)(t.HY,null,[p,e,c,(0,t.Wm)(u,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Wm)(a)])),_:1})])),_:1}),o],64)}}}}]);