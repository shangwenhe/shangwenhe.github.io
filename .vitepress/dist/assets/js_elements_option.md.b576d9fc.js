import{_ as e,o as s,c as o,Q as l}from"./chunks/framework.681fc4ae.js";const h=JSON.parse('{"title":"<option> 元素","description":"","frontmatter":{},"headers":[],"relativePath":"js/elements/option.md","filePath":"js/elements/option.md"}'),a={name:"js/elements/option.md"},n=l(`<h1 id="option-元素" tabindex="-1"><code>&lt;option&gt;</code> 元素 <a class="header-anchor" href="#option-元素" aria-label="Permalink to &quot;\`&lt;option&gt;\` 元素&quot;">​</a></h1><p><code>&lt;option&gt;</code>元素表示下拉框（<code>&lt;select&gt;</code>，<code>&lt;optgroup&gt;</code>或<code>&lt;datalist&gt;</code>）里面的一个选项。它是 HTMLOptionElement 接口的实例。</p><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><p>除了继承 HTMLElement 接口的属性和方法，HTMLOptionElement 接口具有下面的属性。</p><ul><li><code>disabled</code>：布尔值，表示该项是否可选择。</li><li><code>defaultSelected</code>：布尔值，表示该项是否默认选中。一旦设为<code>true</code>，该项的值就是<code>&lt;select&gt;</code>的默认值。</li><li><code>form</code>：返回<code>&lt;option&gt;</code>所在的表单元素。如果不属于任何表单，则返回<code>null</code>。该属性只读。</li><li><code>index</code>：整数，表示该选项在整个下拉列表里面的位置。该属性只读。</li><li><code>label</code>：字符串，表示对该选项的说明。如果该属性未设置，则返回该选项的文本内容。</li><li><code>selected</code>：布尔值，表示该选项是否选中。</li><li><code>text</code>：字符串，该选项的文本内容。</li><li><code>value</code>：字符串，该选项的值。表单提交时，上传的就是选中项的这个属性。</li></ul><h2 id="option-构造函数" tabindex="-1">Option() 构造函数 <a class="header-anchor" href="#option-构造函数" aria-label="Permalink to &quot;Option() 构造函数&quot;">​</a></h2><p>浏览器原生提供<code>Option()</code>构造函数，用来生成 HTMLOptionElement 实例。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Option</span><span style="color:#E1E4E8;">(text, value, defaultSelected, selected)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Option</span><span style="color:#24292E;">(text, value, defaultSelected, selected)</span></span></code></pre></div><p>它接受四个参数，都是可选的。</p><ul><li>text：字符串，表示该选项的文本内容。如果省略，返回空字符串。</li><li>value：字符串，表示该选项的值。如果省略，默认返回<code>text</code>属性的值。</li><li>defaultSelected：布尔值，表示该项是否默认选中，默认为<code>false</code>。注意，即使设为<code>true</code>，也不代表该项的<code>selected</code>属性为<code>true</code>。</li><li>selected：布尔值，表示该项是否选中，默认为<code>false</code>。</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> newOption </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Option</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hello&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;world&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">newOption.text </span><span style="color:#6A737D;">// &quot;hello&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">newOption.value </span><span style="color:#6A737D;">// &quot;world&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">newOption.defaultSelected </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#E1E4E8;">newOption.selected </span><span style="color:#6A737D;">// false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> newOption </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Option</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;hello&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;world&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">newOption.text </span><span style="color:#6A737D;">// &quot;hello&quot;</span></span>
<span class="line"><span style="color:#24292E;">newOption.value </span><span style="color:#6A737D;">// &quot;world&quot;</span></span>
<span class="line"><span style="color:#24292E;">newOption.defaultSelected </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#24292E;">newOption.selected </span><span style="color:#6A737D;">// false</span></span></code></pre></div><p>上面代码中，<code>newOption</code>的<code>defaultSelected</code>属性为<code>true</code>，但是它没有被选中（即<code>selected</code>属性为<code>false</code>）。</p>`,12),t=[n];function p(c,d,i,r,E,u){return s(),o("div",null,t)}const _=e(a,[["render",p]]);export{h as __pageData,_ as default};