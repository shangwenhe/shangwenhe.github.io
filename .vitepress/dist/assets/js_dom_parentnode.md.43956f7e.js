import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.681fc4ae.js";const u=JSON.parse('{"title":"ParentNode 接口，ChildNode 接口","description":"","frontmatter":{},"headers":[],"relativePath":"js/dom/parentnode.md","filePath":"js/dom/parentnode.md"}'),p={name:"js/dom/parentnode.md"},l=e(`<h1 id="parentnode-接口-childnode-接口" tabindex="-1">ParentNode 接口，ChildNode 接口 <a class="header-anchor" href="#parentnode-接口-childnode-接口" aria-label="Permalink to &quot;ParentNode 接口，ChildNode 接口&quot;">​</a></h1><p>节点对象除了继承 Node 接口以外，还拥有其他接口。<code>ParentNode</code>接口表示当前节点是一个父节点，提供一些处理子节点的方法。<code>ChildNode</code>接口表示当前节点是一个子节点，提供一些相关方法。</p><h2 id="parentnode-接口" tabindex="-1">ParentNode 接口 <a class="header-anchor" href="#parentnode-接口" aria-label="Permalink to &quot;ParentNode 接口&quot;">​</a></h2><p>如果当前节点是父节点，就会混入了（mixin）<code>ParentNode</code>接口。由于只有元素节点（element）、文档节点（document）和文档片段节点（documentFragment）拥有子节点，因此只有这三类节点会拥有<code>ParentNode</code>接口。</p><h3 id="parentnode-children" tabindex="-1">ParentNode.children <a class="header-anchor" href="#parentnode-children" aria-label="Permalink to &quot;ParentNode.children&quot;">​</a></h3><p><code>children</code>属性返回一个<code>HTMLCollection</code>实例，成员是当前节点的所有元素子节点。该属性只读。</p><p>下面是遍历某个节点的所有元素子节点的示例。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> el.children.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> el.children.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>注意，<code>children</code>属性只包括元素子节点，不包括其他类型的子节点（比如文本子节点）。如果没有元素类型的子节点，返回值<code>HTMLCollection</code>实例的<code>length</code>属性为<code>0</code>。</p><p>另外，<code>HTMLCollection</code>是动态集合，会实时反映 DOM 的任何变化。</p><h3 id="parentnode-firstelementchild" tabindex="-1">ParentNode.firstElementChild <a class="header-anchor" href="#parentnode-firstelementchild" aria-label="Permalink to &quot;ParentNode.firstElementChild&quot;">​</a></h3><p><code>firstElementChild</code>属性返回当前节点的第一个元素子节点。如果没有任何元素子节点，则返回<code>null</code>。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">document.firstElementChild.nodeName</span></span>
<span class="line"><span style="color:#6A737D;">// &quot;HTML&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">document.firstElementChild.nodeName</span></span>
<span class="line"><span style="color:#6A737D;">// &quot;HTML&quot;</span></span></code></pre></div><p>上面代码中，<code>document</code>节点的第一个元素子节点是<code>&lt;HTML&gt;</code>。</p><h3 id="parentnode-lastelementchild" tabindex="-1">ParentNode.lastElementChild <a class="header-anchor" href="#parentnode-lastelementchild" aria-label="Permalink to &quot;ParentNode.lastElementChild&quot;">​</a></h3><p><code>lastElementChild</code>属性返回当前节点的最后一个元素子节点，如果不存在任何元素子节点，则返回<code>null</code>。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">document.lastElementChild.nodeName</span></span>
<span class="line"><span style="color:#6A737D;">// &quot;HTML&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">document.lastElementChild.nodeName</span></span>
<span class="line"><span style="color:#6A737D;">// &quot;HTML&quot;</span></span></code></pre></div><p>上面代码中，<code>document</code>节点的最后一个元素子节点是<code>&lt;HTML&gt;</code>（因为<code>document</code>只包含这一个元素子节点）。</p><h3 id="parentnode-childelementcount" tabindex="-1">ParentNode.childElementCount <a class="header-anchor" href="#parentnode-childelementcount" aria-label="Permalink to &quot;ParentNode.childElementCount&quot;">​</a></h3><p><code>childElementCount</code>属性返回一个整数，表示当前节点的所有元素子节点的数目。如果不包含任何元素子节点，则返回<code>0</code>。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">document.body.childElementCount </span><span style="color:#6A737D;">// 13</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">document.body.childElementCount </span><span style="color:#6A737D;">// 13</span></span></code></pre></div><h3 id="parentnode-append-parentnode-prepend" tabindex="-1">ParentNode.append()，ParentNode.prepend() <a class="header-anchor" href="#parentnode-append-parentnode-prepend" aria-label="Permalink to &quot;ParentNode.append()，ParentNode.prepend()&quot;">​</a></h3><p><strong>（1）ParentNode.append()</strong></p><p><code>append()</code>方法为当前节点追加一个或多个子节点，位置是最后一个元素子节点的后面。</p><p>该方法不仅可以添加元素子节点（参数为元素节点），还可以添加文本子节点（参数为字符串）。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> parent </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.body;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 添加元素子节点</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;p&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">parent.</span><span style="color:#B392F0;">append</span><span style="color:#E1E4E8;">(p);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 添加文本子节点</span></span>
<span class="line"><span style="color:#E1E4E8;">parent.</span><span style="color:#B392F0;">append</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Hello&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 添加多个元素子节点</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> p1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;p&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> p2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;p&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">parent.</span><span style="color:#B392F0;">append</span><span style="color:#E1E4E8;">(p1, p2);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 添加元素子节点和文本子节点</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;p&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">parent.</span><span style="color:#B392F0;">append</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Hello&#39;</span><span style="color:#E1E4E8;">, p);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> parent </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.body;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 添加元素子节点</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;p&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">parent.</span><span style="color:#6F42C1;">append</span><span style="color:#24292E;">(p);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 添加文本子节点</span></span>
<span class="line"><span style="color:#24292E;">parent.</span><span style="color:#6F42C1;">append</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Hello&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 添加多个元素子节点</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> p1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;p&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> p2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;p&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">parent.</span><span style="color:#6F42C1;">append</span><span style="color:#24292E;">(p1, p2);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 添加元素子节点和文本子节点</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;p&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">parent.</span><span style="color:#6F42C1;">append</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Hello&#39;</span><span style="color:#24292E;">, p);</span></span></code></pre></div><p>该方法没有返回值。</p><p>注意，该方法与<code>Node.prototype.appendChild()</code>方法有三点不同。</p><ul><li><code>append()</code>允许字符串作为参数，<code>appendChild()</code>只允许子节点作为参数。</li><li><code>append()</code>没有返回值，而<code>appendChild()</code>返回添加的子节点。</li><li><code>append()</code>可以添加多个子节点和字符串（即允许多个参数），<code>appendChild()</code>只能添加一个节点（即只允许一个参数）。</li></ul><p><strong>（2）ParentNode.prepend()</strong></p><p><code>prepend()</code>方法为当前节点追加一个或多个子节点，位置是第一个元素子节点的前面。它的用法与<code>append()</code>方法完全一致，也是没有返回值。</p><h2 id="childnode-接口" tabindex="-1">ChildNode 接口 <a class="header-anchor" href="#childnode-接口" aria-label="Permalink to &quot;ChildNode 接口&quot;">​</a></h2><p>如果一个节点有父节点，那么该节点就拥有了<code>ChildNode</code>接口。</p><h3 id="childnode-remove" tabindex="-1">ChildNode.remove() <a class="header-anchor" href="#childnode-remove" aria-label="Permalink to &quot;ChildNode.remove()&quot;">​</a></h3><p><code>remove()</code>方法用于从父节点移除当前节点。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">el.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">el.</span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">()</span></span></code></pre></div><p>上面代码在 DOM 里面移除了<code>el</code>节点。</p><h3 id="childnode-before-childnode-after" tabindex="-1">ChildNode.before()，ChildNode.after() <a class="header-anchor" href="#childnode-before-childnode-after" aria-label="Permalink to &quot;ChildNode.before()，ChildNode.after()&quot;">​</a></h3><p><strong>（1）ChildNode.before()</strong></p><p><code>before()</code>方法用于在当前节点的前面，插入一个或多个同级节点。两者拥有相同的父节点。</p><p>注意，该方法不仅可以插入元素节点，还可以插入文本节点。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;p&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> p1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;p&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 插入元素节点</span></span>
<span class="line"><span style="color:#E1E4E8;">el.</span><span style="color:#B392F0;">before</span><span style="color:#E1E4E8;">(p);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 插入文本节点</span></span>
<span class="line"><span style="color:#E1E4E8;">el.</span><span style="color:#B392F0;">before</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Hello&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 插入多个元素节点</span></span>
<span class="line"><span style="color:#E1E4E8;">el.</span><span style="color:#B392F0;">before</span><span style="color:#E1E4E8;">(p, p1);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 插入元素节点和文本节点</span></span>
<span class="line"><span style="color:#E1E4E8;">el.</span><span style="color:#B392F0;">before</span><span style="color:#E1E4E8;">(p, </span><span style="color:#9ECBFF;">&#39;Hello&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;p&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> p1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;p&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 插入元素节点</span></span>
<span class="line"><span style="color:#24292E;">el.</span><span style="color:#6F42C1;">before</span><span style="color:#24292E;">(p);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 插入文本节点</span></span>
<span class="line"><span style="color:#24292E;">el.</span><span style="color:#6F42C1;">before</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Hello&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 插入多个元素节点</span></span>
<span class="line"><span style="color:#24292E;">el.</span><span style="color:#6F42C1;">before</span><span style="color:#24292E;">(p, p1);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 插入元素节点和文本节点</span></span>
<span class="line"><span style="color:#24292E;">el.</span><span style="color:#6F42C1;">before</span><span style="color:#24292E;">(p, </span><span style="color:#032F62;">&#39;Hello&#39;</span><span style="color:#24292E;">);</span></span></code></pre></div><p><strong>（2）ChildNode.after()</strong></p><p><code>after()</code>方法用于在当前节点的后面，插入一个或多个同级节点，两者拥有相同的父节点。用法与<code>before</code>方法完全相同。</p><h3 id="childnode-replacewith" tabindex="-1">ChildNode.replaceWith() <a class="header-anchor" href="#childnode-replacewith" aria-label="Permalink to &quot;ChildNode.replaceWith()&quot;">​</a></h3><p><code>replaceWith()</code>方法使用参数节点，替换当前节点。参数可以是元素节点，也可以是文本节点。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> span </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;span&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">el.</span><span style="color:#B392F0;">replaceWith</span><span style="color:#E1E4E8;">(span);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> span </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;span&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">el.</span><span style="color:#6F42C1;">replaceWith</span><span style="color:#24292E;">(span);</span></span></code></pre></div><p>上面代码中，<code>el</code>节点将被<code>span</code>节点替换。</p>`,48),o=[l];function c(t,r,d,i,E,y){return a(),n("div",null,o)}const m=s(p,[["render",c]]);export{u as __pageData,m as default};