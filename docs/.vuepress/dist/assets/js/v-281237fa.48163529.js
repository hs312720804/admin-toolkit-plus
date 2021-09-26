(self.webpackChunk_ccprivate_admin_toolkit_plus=self.webpackChunk_ccprivate_admin_toolkit_plus||[]).push([[7924],{753:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-281237fa",path:"/components/FilterTree.html",title:"树形过滤",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"示例",slug:"示例",children:[{level:3,title:"效果",slug:"效果",children:[]}]},{level:2,title:"属性",slug:"属性",children:[]},{level:2,title:"事件",slug:"事件",children:[]},{level:2,title:"slot",slug:"slot",children:[]}],filePathRelative:"components/FilterTree.md",git:{updatedTime:1632567839e3,contributors:[{name:"wanghaihua",email:"wanghaihua@coocaa.com",commits:3}]}}},3130:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>l});var t=a(6252);const p=(0,t.uE)('<h1 id="树形过滤"><a class="header-anchor" href="#树形过滤">#</a> 树形过滤</h1><p><code>c-filter-tree</code> 由于 element ui 的树形搜索不能满足业务需求，才开发此插件，element ui 的树形搜索只能返回模糊搜索的结果，但是相应的父子关系树形结构不存在，此插件解决了此问题</p><h2 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h2><h3 id="效果"><a class="header-anchor" href="#效果">#</a> 效果</h3>',4),e=(0,t.uE)(' ### 代码 <div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>例子1-树形使用默认的配置<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>c-filter-tree</span> <span class="token attr-name">:default-props</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>defaultProps<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span> <span class="token attr-name">node-key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>c-filter-tree</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>例子2-自定义树形<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>c-filter-tree</span>\n      <span class="token attr-name">:default-props</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>defaultProps<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">node-key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>filterTree<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">@search-result</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleSetTree<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tree</span>\n        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>filter-tree<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>treeData<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">:default-expanded-keys</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>expandedKeys<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">:props</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>defaultProps<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">node-key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">show-checkbox</span>\n        <span class="token attr-name">:highlight-current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tree<span class="token punctuation">&quot;</span></span>\n      <span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tree</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>c-filter-tree</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      defaultProps<span class="token operator">:</span> <span class="token punctuation">{</span>\n        children<span class="token operator">:</span> <span class="token string">&#39;children&#39;</span><span class="token punctuation">,</span>\n        label<span class="token operator">:</span> <span class="token string">&#39;label&#39;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      treeData<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 自定义el-tree的数据</span>\n      expandedKeys<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 自定义el-tree的选中项聚合</span>\n      data<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n          label<span class="token operator">:</span> <span class="token string">&#39;一级 1&#39;</span><span class="token punctuation">,</span>\n          children<span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n              id<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>\n              label<span class="token operator">:</span> <span class="token string">&#39;二级 1-1&#39;</span><span class="token punctuation">,</span>\n              children<span class="token operator">:</span> <span class="token punctuation">[</span>\n                <span class="token punctuation">{</span>\n                  id<span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>\n                  label<span class="token operator">:</span> <span class="token string">&#39;三级 1-1-1&#39;</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token punctuation">{</span>\n                  id<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>\n                  label<span class="token operator">:</span> <span class="token string">&#39;三级 1-1-2&#39;</span>\n                <span class="token punctuation">}</span>\n              <span class="token punctuation">]</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          id<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n          label<span class="token operator">:</span> <span class="token string">&#39;一级 2&#39;</span><span class="token punctuation">,</span>\n          children<span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n              id<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>\n              label<span class="token operator">:</span> <span class="token string">&#39;二级 2-1&#39;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n              id<span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>\n              label<span class="token operator">:</span> <span class="token string">&#39;二级 2-2&#39;</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          id<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n          label<span class="token operator">:</span> <span class="token string">&#39;一级 3&#39;</span><span class="token punctuation">,</span>\n          children<span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n              id<span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>\n              label<span class="token operator">:</span> <span class="token string">&#39;二级 3-1&#39;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n              id<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>\n              label<span class="token operator">:</span> <span class="token string">&#39;二级 3-2&#39;</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">handleSetTree</span> <span class="token punctuation">(</span><span class="token parameter">searchData<span class="token punctuation">,</span> expandedKeys</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>treeData <span class="token operator">=</span> searchData\n      <span class="token keyword">this</span><span class="token punctuation">.</span>expandedKeys <span class="token operator">=</span> expandedKeys\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">created</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>treeData <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br></div></div><h2 id="属性"><a class="header-anchor" href="#属性">#</a> 属性</h2><table><thead><tr><th>名称</th><th>类型</th><th>描述</th><th>例子</th><th>备注</th></tr></thead><tbody><tr><td>placeholder</td><td>String</td><td>占位符</td><td>跟原生占位符意思一样</td><td>1.1 以后版本才有此功能</td></tr><tr><td>defaultProps</td><td>Object</td><td>el-tree 的 props 属性</td><td>见如上例子</td><td>1.1 以后版本才有此功能</td></tr><tr><td>nodeKey</td><td>String</td><td>el-tree 的 node-key 属性</td><td>见如上例子</td><td>1.1 以后版本才有此功能</td></tr><tr><td>data</td><td>Array</td><td>el-tree 的 data 属性</td><td>见如上例子</td><td>1.1 以后版本才有此功能</td></tr></tbody></table><h2 id="事件"><a class="header-anchor" href="#事件">#</a> 事件</h2><table><thead><tr><th>名称</th><th>参数</th><th>描述</th><th>备注</th></tr></thead><tbody><tr><td>node-click</td><td>无</td><td>el-tree 的 node-click 事件</td><td>1.1 以后版本才有此功能</td></tr></tbody></table><h2 id="slot"><a class="header-anchor" href="#slot">#</a> slot</h2><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td>default</td><td>本插件支持自定义 el-tree 组件参数，见如上例子</td></tr></tbody></table>',8),l={render:function(n,s){const a=(0,t.up)("FilterTreeDemo"),l=(0,t.up)("Demo"),c=(0,t.up)("ClientOnly");return(0,t.wg)(),(0,t.j4)(t.HY,null,[p,(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Wm)(a)])),_:1})])),_:1}),e],64)}}}}]);