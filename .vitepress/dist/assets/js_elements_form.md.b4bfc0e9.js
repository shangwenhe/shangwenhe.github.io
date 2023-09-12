import{_ as e,o as s,c as o,Q as a}from"./chunks/framework.b2e9bf53.js";const f=JSON.parse('{"title":"<form> 元素","description":"","frontmatter":{},"headers":[],"relativePath":"js/elements/form.md","filePath":"js/elements/form.md"}'),l={name:"js/elements/form.md"},n=a(`<h1 id="form-元素" tabindex="-1"><code>&lt;form&gt;</code> 元素 <a class="header-anchor" href="#form-元素" aria-label="Permalink to &quot;\`&lt;form&gt;\` 元素&quot;">​</a></h1><p><code>&lt;form&gt;</code>元素代表了表单，继承了 HTMLFormElement 接口。</p><h2 id="htmlformelement-的实例属性" tabindex="-1">HTMLFormElement 的实例属性 <a class="header-anchor" href="#htmlformelement-的实例属性" aria-label="Permalink to &quot;HTMLFormElement 的实例属性&quot;">​</a></h2><ul><li><code>elements</code>：返回一个类似数组的对象，成员是属于该表单的所有控件元素。该属性只读。</li><li><code>length</code>：返回一个整数，表示属于该表单的控件数量。该属性只读。</li><li><code>name</code>：字符串，表示该表单的名称。</li><li><code>method</code>：字符串，表示提交给服务器时所使用的 HTTP 方法。</li><li><code>target</code>：字符串，表示表单提交后，服务器返回的数据的展示位置。</li><li><code>action</code>：字符串，表示表单提交数据的 URL。</li><li><code>enctype</code>（或<code>encoding</code>）：字符串，表示表单提交数据的编码方法，可能的值有<code>application/x-www-form-urlencoded</code>、<code>multipart/form-data</code>和<code>text/plain</code>。</li><li><code>acceptCharset</code>：字符串，表示服务器所能接受的字符编码，多个编码格式之间使用逗号或空格分隔。</li><li><code>autocomplete</code>：字符串<code>on</code>或<code>off</code>，表示浏览器是否要对<code>&lt;input&gt;</code>控件提供自动补全。</li><li><code>noValidate</code>：布尔值，表示是否关闭表单的自动校验。</li></ul><h2 id="htmlformelement-的实例方法" tabindex="-1">HTMLFormElement 的实例方法 <a class="header-anchor" href="#htmlformelement-的实例方法" aria-label="Permalink to &quot;HTMLFormElement 的实例方法&quot;">​</a></h2><ul><li><code>submit()</code>：提交表单，但是不会触发<code>submit</code>事件和表单的自动校验。</li><li><code>reset()</code>：重置表单控件的值为默认值。</li><li><code>checkValidity()</code>：如果控件能够通过自动校验，返回<code>true</code>，否则返回<code>false</code>，同时触发<code>invalid</code>事件。</li></ul><p>下面是一个创建表单并提交的例子。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> f </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;form&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">document.body.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(f);</span></span>
<span class="line"><span style="color:#E1E4E8;">f.action </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;/cgi-bin/some.cgi&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">f.method </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;POST&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">f.</span><span style="color:#B392F0;">submit</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> f </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;form&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">document.body.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(f);</span></span>
<span class="line"><span style="color:#24292E;">f.action </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;/cgi-bin/some.cgi&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">f.method </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;POST&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">f.</span><span style="color:#6F42C1;">submit</span><span style="color:#24292E;">();</span></span></code></pre></div>`,8),c=[n];function t(p,r,d,i,m,E){return s(),o("div",null,c)}const h=e(l,[["render",t]]);export{f as __pageData,h as default};