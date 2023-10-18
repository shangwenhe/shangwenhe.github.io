import{_ as a,o as l,c as n,Q as o,k as s}from"./chunks/framework.681fc4ae.js";const F=JSON.parse('{"title":"SVG symbol元素","description":"","frontmatter":{},"headers":[],"relativePath":"svg/25.SVG-symbol元素.md","filePath":"svg/25.SVG-symbol元素.md"}'),p={name:"svg/25.SVG-symbol元素.md"},e=o(`<h1 id="svg-symbol元素" tabindex="-1">SVG symbol元素 <a class="header-anchor" href="#svg-symbol元素" aria-label="Permalink to &quot;SVG symbol元素&quot;">​</a></h1><hr><blockquote></blockquote><ul><li><a href="#symbol示例">symbol示例</a></li><li><a href="#preserveaspectratio和viewbox">preserveAspectRatio和viewBox</a></li></ul><p>SVG<code>&lt;symbol&gt;</code>元素用来定义可重用的标记。嵌套在<code>&lt;symbol&gt;</code>中的形状不会显示，除非其被<code>&lt;use&gt;</code>元素引用。</p><h2 id="symbol示例" tabindex="-1">symbol示例 <a class="header-anchor" href="#symbol示例" aria-label="Permalink to &quot;symbol示例&quot;">​</a></h2><p>下面是一个简单的标记示例：</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">svg</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">width</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;500&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">height</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;100&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">symbol</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;shape2&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">circle</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">cx</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;25&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">cy</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;25&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">r</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;25&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">symbol</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">xlink:href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#shape2&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">x</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;50&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">y</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;25&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">svg</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">svg</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">width</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;500&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">height</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;100&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">symbol</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;shape2&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">circle</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">cx</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;25&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">cy</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;25&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">r</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;25&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">symbol</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">use</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">xlink:href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;#shape2&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">x</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;50&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">y</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;25&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">svg</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p><code>&lt;symbol&gt;</code>元素需要一个<code>id</code>属性供后面的<code>&lt;use&gt;</code>元素引用。</p>`,9),t=s("svg",{width:"500",height:"100"},[s("symbol",{id:"shape2"},[s("circle",{cx:"25",cy:"25",r:"25"})]),s("use",{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#shape2",x:"50",y:"25"})],-1),c=o('<h2 id="preserveaspectratio和viewbox" tabindex="-1">preserveAspectRatio和viewBox <a class="header-anchor" href="#preserveaspectratio和viewbox" aria-label="Permalink to &quot;preserveAspectRatio和viewBox&quot;">​</a></h2><p><code>&lt;symbol&gt;</code>元素可以包含<code>preserveAspectRatio</code>和<code>viewBox</code>属性。然而<code>&lt;g&gt;</code>元素不能包含这两个属性。因此，相比在<code>&lt;defs&gt;</code>元素中使用<code>&lt;g&gt;</code>元素，<code>&lt;symbol&gt;</code>元素可能是生成可重用图形的更好的方式。</p>',2),r=[e,t,c];function y(E,i,d,u,h,_){return l(),n("div",null,r)}const q=a(p,[["render",y]]);export{F as __pageData,q as default};
