(self.webpackChunk_ccprivate_admin_toolkit_plus=self.webpackChunk_ccprivate_admin_toolkit_plus||[]).push([[608],{7972:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-2c164f2d",path:"/components/TableTree.html",title:"表格(支持树形结构)",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"示例",slug:"示例",children:[{level:3,title:"效果",slug:"效果",children:[]}]},{level:2,title:"属性",slug:"属性",children:[]},{level:2,title:"事件",slug:"事件",children:[]}],filePathRelative:"components/TableTree.md",git:{updatedTime:1632567839e3,contributors:[{name:"wanghaihua",email:"wanghaihua@coocaa.com",commits:3}]}}},7705:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>o});var p=a(6252);const t=(0,p.uE)('<h1 id="表格-支持树形结构"><a class="header-anchor" href="#表格-支持树形结构">#</a> 表格(支持树形结构)</h1><p><code>c-table-tree</code><br> Table 组件的功能扩展，在原始 Table 组件的功能上添加了树形功能，完全可以替代旧版本的 Table 组件</p><h2 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h2><h3 id="效果"><a class="header-anchor" href="#效果">#</a> 效果</h3>',4),e=(0,p.uE)(' ### 代码 <div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>c-table-tree</span>\n    <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>table.data<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:props</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>table.props<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>table.header<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:selection-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>table.selectionType<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:selected</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>table.selected<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:select-on-row-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@row-selection-add</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleRowSelectionAdd<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@row-selection-remove</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleRowSelectionRemove<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@row-selection-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleRowSelectionChange<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@all-row-selection-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleAllRowSelectionChange<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@row-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleRowClick<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>c-table-tree</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> createOperationRender <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../lib/utils/component&#39;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      selected<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      table<span class="token operator">:</span> <span class="token punctuation">{</span>\n        props<span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token string">&#39;default-expand-all&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n          <span class="token string">&#39;tree-props&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> <span class="token string">&#39;children&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token string">&#39;row-key&#39;</span><span class="token operator">:</span> <span class="token string">&#39;id&#39;</span>\n          <span class="token comment">//  &#39;max-height&#39;: 250</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        header<span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            label<span class="token operator">:</span> <span class="token string">&#39;ID&#39;</span><span class="token punctuation">,</span>\n            prop<span class="token operator">:</span> <span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span>\n            sortable<span class="token operator">:</span> <span class="token boolean">false</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">{</span>\n            label<span class="token operator">:</span> <span class="token string">&#39;名称&#39;</span><span class="token punctuation">,</span>\n            prop<span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>\n            sortable<span class="token operator">:</span> <span class="token boolean">true</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">{</span>\n            label<span class="token operator">:</span> <span class="token string">&#39;操作&#39;</span><span class="token punctuation">,</span>\n            render<span class="token operator">:</span> <span class="token function">createOperationRender</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n              handleRead<span class="token operator">:</span> <span class="token string">&#39;查看&#39;</span><span class="token punctuation">,</span>\n              handleEdit<span class="token operator">:</span> <span class="token string">&#39;编辑&#39;</span><span class="token punctuation">,</span>\n              handleDelete<span class="token operator">:</span> <span class="token string">&#39;删除&#39;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n        data<span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            id<span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>\n            name<span class="token operator">:</span> <span class="token string">&#39;名称1&#39;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">{</span>\n            id<span class="token operator">:</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span>\n            name<span class="token operator">:</span> <span class="token string">&#39;名称2&#39;</span><span class="token punctuation">,</span>\n            children<span class="token operator">:</span> <span class="token punctuation">[</span>\n              <span class="token punctuation">{</span>\n                id<span class="token operator">:</span> <span class="token string">&#39;21&#39;</span><span class="token punctuation">,</span>\n                name<span class="token operator">:</span> <span class="token string">&#39;名称21&#39;</span>\n              <span class="token punctuation">}</span><span class="token punctuation">,</span>\n              <span class="token punctuation">{</span>\n                id<span class="token operator">:</span> <span class="token string">&#39;22&#39;</span><span class="token punctuation">,</span>\n                name<span class="token operator">:</span> <span class="token string">&#39;名称22&#39;</span>\n              <span class="token punctuation">}</span>\n            <span class="token punctuation">]</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n        selectionType<span class="token operator">:</span> <span class="token string">&#39;multiple&#39;</span><span class="token punctuation">,</span>\n        selected<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">handleEdit</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> $index<span class="token operator">:</span> index <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">编辑第</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">条记录</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">handleRead</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> $index<span class="token operator">:</span> index <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">阅读第</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">条记录</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">handleDelete</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> $index<span class="token operator">:</span> index <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">删除第</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">条记录</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">handleRowSelectionChange</span> <span class="token punctuation">(</span><span class="token parameter">row<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>table<span class="token punctuation">.</span>selected <span class="token operator">=</span> index\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">handleRowSelectionAdd</span> <span class="token punctuation">(</span><span class="token parameter">targetItem</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>selected<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>targetItem<span class="token punctuation">)</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateTableSelected</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      <span class="token keyword">const</span> children <span class="token operator">=</span> targetItem<span class="token punctuation">.</span>children\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleRowSelectionAdd</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">handleRowSelectionRemove</span> <span class="token punctuation">(</span><span class="token parameter">targetItem</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> idField <span class="token operator">=</span> <span class="token string">&#39;id&#39;</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>selected <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>selected<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> item<span class="token punctuation">[</span>idField<span class="token punctuation">]</span> <span class="token operator">!==</span> targetItem<span class="token punctuation">[</span>idField<span class="token punctuation">]</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateTableSelected</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      <span class="token keyword">const</span> children <span class="token operator">=</span> targetItem<span class="token punctuation">.</span>children\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleRowSelectionRemove</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">handleAllRowSelectionChange</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> table <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>table\n        <span class="token keyword">const</span> allData <span class="token operator">=</span> table<span class="token punctuation">.</span>props<span class="token punctuation">[</span><span class="token string">&#39;tree-props&#39;</span><span class="token punctuation">]</span>\n          <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">recursion</span><span class="token punctuation">(</span>table<span class="token punctuation">.</span>data<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n          <span class="token operator">:</span> table<span class="token punctuation">.</span>data\n        allData<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleRowSelectionAdd<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleAllRowSelectionRemove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">handleAllRowSelectionRemove</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> idField <span class="token operator">=</span> <span class="token string">&#39;id&#39;</span>\n      <span class="token keyword">const</span> currentPageSelected <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>table<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> e<span class="token punctuation">[</span>idField<span class="token punctuation">]</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>selected <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>selected<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token operator">!</span>currentPageSelected<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>e<span class="token punctuation">[</span>idField<span class="token punctuation">]</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>table<span class="token punctuation">.</span>selected <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token comment">/*\n    包括子节点的table总数\n    */</span>\n    <span class="token function">recursion</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> init</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> data<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">r<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        r<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>c<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">recursion</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>children<span class="token punctuation">,</span> r<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> r\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> init<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">updateTableSelected</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> idField <span class="token operator">=</span> <span class="token string">&#39;id&#39;</span>\n      <span class="token keyword">const</span> table <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>table\n      <span class="token keyword">const</span> newSelectedIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>selected<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        result<span class="token punctuation">[</span>item<span class="token punctuation">[</span>idField<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>\n        <span class="token keyword">return</span> result\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token keyword">const</span> newTableData <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>table<span class="token punctuation">.</span>props<span class="token punctuation">[</span><span class="token string">&#39;tree-props&#39;</span><span class="token punctuation">]</span>\n        <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">recursion</span><span class="token punctuation">(</span>table<span class="token punctuation">.</span>data<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n        <span class="token operator">:</span> table<span class="token punctuation">.</span>data\n      table<span class="token punctuation">.</span>selected <span class="token operator">=</span> newTableData<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result<span class="token punctuation">,</span> item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>newSelectedIndex<span class="token punctuation">[</span>item<span class="token punctuation">[</span>idField<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> result\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">clearSelected</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>selected <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>table<span class="token punctuation">.</span>selected <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateTableSelected</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">handleRowClick</span> <span class="token punctuation">(</span><span class="token parameter">row<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">row-click</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br></div></div><h2 id="属性"><a class="header-anchor" href="#属性">#</a> 属性</h2><table><thead><tr><th>名称</th><th>类型</th><th>描述</th><th>例子</th></tr></thead><tbody><tr><td>props</td><td>Object</td><td>element-ui 表格属性</td><td></td></tr><tr><td>header</td><td>Array</td><td>表头</td><td></td></tr><tr><td>data</td><td>Array</td><td>表格数据</td><td></td></tr><tr><td>selectionType</td><td>&#39;none&#39; / &#39;multiple&#39; / &#39;single&#39;</td><td>none 为不使用选择功能, multiple 为多选, single 为单选</td><td></td></tr><tr><td>selected</td><td>Array 或者 Number</td><td>如果 selectionType 是 multiple, 那么 selected 需要是一个数组, 包含选中的 index; 如果 selectionType 是 single, 那么 selected 是被选中的 index</td><td></td></tr></tbody></table><h2 id="事件"><a class="header-anchor" href="#事件">#</a> 事件</h2><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>row-selection-add</td><td>(row: Object, index: Number)</td><td>只在 selectoinType 为 multiple 时触发</td></tr><tr><td>row-selection-remove</td><td>(row: Object, index: Number)</td><td>只在 selectoinType 为 multiple 时触发</td></tr><tr><td>row-selection-change</td><td>(row: Object, index: Number)</td><td>只在 selectoinType 为 single 时触发</td></tr><tr><td>all-row-selection-change</td><td>(value: Boolean)</td><td>当所有行的选中状态改变时触发, value 为选中状态</td></tr></tbody></table>',6),o={render:function(n,s){const a=(0,p.up)("TableTreeDemo"),o=(0,p.up)("Demo"),c=(0,p.up)("ClientOnly");return(0,p.wg)(),(0,p.j4)(p.HY,null,[t,(0,p.Wm)(c,null,{default:(0,p.w5)((()=>[(0,p.Wm)(o,null,{default:(0,p.w5)((()=>[(0,p.Wm)(a)])),_:1})])),_:1}),e],64)}}}}]);