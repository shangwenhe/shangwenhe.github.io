import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.681fc4ae.js";const F=JSON.parse('{"title":"egrep","description":"","frontmatter":{},"headers":[],"relativePath":"bash/archives/commands/egrep.md","filePath":"bash/archives/commands/egrep.md"}'),p={name:"bash/archives/commands/egrep.md"},l=e(`<h1 id="egrep" tabindex="-1">egrep <a class="header-anchor" href="#egrep" aria-label="Permalink to &quot;egrep&quot;">​</a></h1><p><code>egrep</code>命令用于显示匹配正则模式的行，与<code>grep -E</code>命令等价。</p><p>下面是<code>example.txt</code>文件的内容。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Lorem ipsum</span></span>
<span class="line"><span style="color:#e1e4e8;">dolor sit amet, </span></span>
<span class="line"><span style="color:#e1e4e8;">consetetur</span></span>
<span class="line"><span style="color:#e1e4e8;">sadipscing elitr,</span></span>
<span class="line"><span style="color:#e1e4e8;">sed diam nonumy</span></span>
<span class="line"><span style="color:#e1e4e8;">eirmod tempor</span></span>
<span class="line"><span style="color:#e1e4e8;">invidunt ut labore</span></span>
<span class="line"><span style="color:#e1e4e8;">et dolore magna</span></span>
<span class="line"><span style="color:#e1e4e8;">aliquyam erat, sed</span></span>
<span class="line"><span style="color:#e1e4e8;">diam voluptua. At</span></span>
<span class="line"><span style="color:#e1e4e8;">vero eos et</span></span>
<span class="line"><span style="color:#e1e4e8;">accusam et justo</span></span>
<span class="line"><span style="color:#e1e4e8;">duo dolores et ea</span></span>
<span class="line"><span style="color:#e1e4e8;">rebum. Stet clita</span></span>
<span class="line"><span style="color:#e1e4e8;">kasd gubergren,</span></span>
<span class="line"><span style="color:#e1e4e8;">no sea takimata</span></span>
<span class="line"><span style="color:#e1e4e8;">sanctus est Lorem</span></span>
<span class="line"><span style="color:#e1e4e8;">ipsum dolor sit</span></span>
<span class="line"><span style="color:#e1e4e8;">amet.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Lorem ipsum</span></span>
<span class="line"><span style="color:#24292e;">dolor sit amet, </span></span>
<span class="line"><span style="color:#24292e;">consetetur</span></span>
<span class="line"><span style="color:#24292e;">sadipscing elitr,</span></span>
<span class="line"><span style="color:#24292e;">sed diam nonumy</span></span>
<span class="line"><span style="color:#24292e;">eirmod tempor</span></span>
<span class="line"><span style="color:#24292e;">invidunt ut labore</span></span>
<span class="line"><span style="color:#24292e;">et dolore magna</span></span>
<span class="line"><span style="color:#24292e;">aliquyam erat, sed</span></span>
<span class="line"><span style="color:#24292e;">diam voluptua. At</span></span>
<span class="line"><span style="color:#24292e;">vero eos et</span></span>
<span class="line"><span style="color:#24292e;">accusam et justo</span></span>
<span class="line"><span style="color:#24292e;">duo dolores et ea</span></span>
<span class="line"><span style="color:#24292e;">rebum. Stet clita</span></span>
<span class="line"><span style="color:#24292e;">kasd gubergren,</span></span>
<span class="line"><span style="color:#24292e;">no sea takimata</span></span>
<span class="line"><span style="color:#24292e;">sanctus est Lorem</span></span>
<span class="line"><span style="color:#24292e;">ipsum dolor sit</span></span>
<span class="line"><span style="color:#24292e;">amet.</span></span></code></pre></div><p><code>egrep</code>命令显示包括<code>Lorem</code>或<code>dolor</code>的行。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">egrep</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;(Lorem|dolor)&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">example.txt</span></span>
<span class="line"><span style="color:#6A737D;"># 或者</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">grep</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-E</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;(Lorem|dolor)&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">example.txt</span></span>
<span class="line"><span style="color:#B392F0;">Lorem</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ipsum</span></span>
<span class="line"><span style="color:#B392F0;">dolor</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">sit</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">amet,</span></span>
<span class="line"><span style="color:#B392F0;">et</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dolore</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">magna</span></span>
<span class="line"><span style="color:#B392F0;">duo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dolores</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">et</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ea</span></span>
<span class="line"><span style="color:#B392F0;">sanctus</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">est</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Lorem</span></span>
<span class="line"><span style="color:#B392F0;">ipsum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dolor</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">sit</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">egrep</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;(Lorem|dolor)&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">example.txt</span></span>
<span class="line"><span style="color:#6A737D;"># 或者</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">grep</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-E</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;(Lorem|dolor)&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">example.txt</span></span>
<span class="line"><span style="color:#6F42C1;">Lorem</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ipsum</span></span>
<span class="line"><span style="color:#6F42C1;">dolor</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sit</span><span style="color:#24292E;"> </span><span style="color:#032F62;">amet,</span></span>
<span class="line"><span style="color:#6F42C1;">et</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dolore</span><span style="color:#24292E;"> </span><span style="color:#032F62;">magna</span></span>
<span class="line"><span style="color:#6F42C1;">duo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dolores</span><span style="color:#24292E;"> </span><span style="color:#032F62;">et</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ea</span></span>
<span class="line"><span style="color:#6F42C1;">sanctus</span><span style="color:#24292E;"> </span><span style="color:#032F62;">est</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Lorem</span></span>
<span class="line"><span style="color:#6F42C1;">ipsum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dolor</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sit</span></span></code></pre></div>`,6),o=[l];function t(c,r,y,i,E,d){return a(),n("div",null,o)}const u=s(p,[["render",t]]);export{F as __pageData,u as default};
