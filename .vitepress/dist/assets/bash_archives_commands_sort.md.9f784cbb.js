import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.681fc4ae.js";const C=JSON.parse('{"title":"sort","description":"","frontmatter":{},"headers":[],"relativePath":"bash/archives/commands/sort.md","filePath":"bash/archives/commands/sort.md"}'),l={name:"bash/archives/commands/sort.md"},e=p(`<h1 id="sort" tabindex="-1">sort <a class="header-anchor" href="#sort" aria-label="Permalink to &quot;sort&quot;">​</a></h1><p><code>sort</code>命令用于文本文件的排序。</p><p>下面是<code>example.txt</code>文件的内容。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">f</span></span>
<span class="line"><span style="color:#B392F0;">b</span></span>
<span class="line"><span style="color:#B392F0;">c</span></span>
<span class="line"><span style="color:#B392F0;">g</span></span>
<span class="line"><span style="color:#B392F0;">a</span></span>
<span class="line"><span style="color:#B392F0;">e</span></span>
<span class="line"><span style="color:#B392F0;">d</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">f</span></span>
<span class="line"><span style="color:#6F42C1;">b</span></span>
<span class="line"><span style="color:#6F42C1;">c</span></span>
<span class="line"><span style="color:#6F42C1;">g</span></span>
<span class="line"><span style="color:#6F42C1;">a</span></span>
<span class="line"><span style="color:#6F42C1;">e</span></span>
<span class="line"><span style="color:#6F42C1;">d</span></span></code></pre></div><p>执行<code>sort</code>命令对其进行排序。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">sort</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">example.txt</span></span>
<span class="line"><span style="color:#B392F0;">a</span></span>
<span class="line"><span style="color:#B392F0;">b</span></span>
<span class="line"><span style="color:#B392F0;">c</span></span>
<span class="line"><span style="color:#B392F0;">d</span></span>
<span class="line"><span style="color:#B392F0;">e</span></span>
<span class="line"><span style="color:#B392F0;">f</span></span>
<span class="line"><span style="color:#B392F0;">g</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sort</span><span style="color:#24292E;"> </span><span style="color:#032F62;">example.txt</span></span>
<span class="line"><span style="color:#6F42C1;">a</span></span>
<span class="line"><span style="color:#6F42C1;">b</span></span>
<span class="line"><span style="color:#6F42C1;">c</span></span>
<span class="line"><span style="color:#6F42C1;">d</span></span>
<span class="line"><span style="color:#6F42C1;">e</span></span>
<span class="line"><span style="color:#6F42C1;">f</span></span>
<span class="line"><span style="color:#6F42C1;">g</span></span></code></pre></div><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h2><p><code>-R</code>参数表示随机排序。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-R</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">example.txt</span></span>
<span class="line"><span style="color:#B392F0;">b</span></span>
<span class="line"><span style="color:#B392F0;">d</span></span>
<span class="line"><span style="color:#B392F0;">a</span></span>
<span class="line"><span style="color:#B392F0;">c</span></span>
<span class="line"><span style="color:#B392F0;">g</span></span>
<span class="line"><span style="color:#B392F0;">e</span></span>
<span class="line"><span style="color:#B392F0;">f</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sort</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-R</span><span style="color:#24292E;"> </span><span style="color:#032F62;">example.txt</span></span>
<span class="line"><span style="color:#6F42C1;">b</span></span>
<span class="line"><span style="color:#6F42C1;">d</span></span>
<span class="line"><span style="color:#6F42C1;">a</span></span>
<span class="line"><span style="color:#6F42C1;">c</span></span>
<span class="line"><span style="color:#6F42C1;">g</span></span>
<span class="line"><span style="color:#6F42C1;">e</span></span>
<span class="line"><span style="color:#6F42C1;">f</span></span></code></pre></div>`,9),o=[e];function c(t,r,i,d,y,F){return a(),n("div",null,o)}const b=s(l,[["render",c]]);export{C as __pageData,b as default};
