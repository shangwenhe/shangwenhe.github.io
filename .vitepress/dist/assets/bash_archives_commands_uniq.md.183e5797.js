import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.681fc4ae.js";const h=JSON.parse('{"title":"uniq","description":"","frontmatter":{},"headers":[],"relativePath":"bash/archives/commands/uniq.md","filePath":"bash/archives/commands/uniq.md"}'),l={name:"bash/archives/commands/uniq.md"},o=p(`<h1 id="uniq" tabindex="-1">uniq <a class="header-anchor" href="#uniq" aria-label="Permalink to &quot;uniq&quot;">​</a></h1><p><code>uniq</code>用于过滤掉重复的行，该命令只对排序后的文件有效。</p><p>下面是<code>example.txt</code>文件的内容。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">a</span></span>
<span class="line"><span style="color:#B392F0;">a</span></span>
<span class="line"><span style="color:#B392F0;">b</span></span>
<span class="line"><span style="color:#B392F0;">a</span></span>
<span class="line"><span style="color:#B392F0;">b</span></span>
<span class="line"><span style="color:#B392F0;">c</span></span>
<span class="line"><span style="color:#B392F0;">d</span></span>
<span class="line"><span style="color:#B392F0;">c</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">a</span></span>
<span class="line"><span style="color:#6F42C1;">a</span></span>
<span class="line"><span style="color:#6F42C1;">b</span></span>
<span class="line"><span style="color:#6F42C1;">a</span></span>
<span class="line"><span style="color:#6F42C1;">b</span></span>
<span class="line"><span style="color:#6F42C1;">c</span></span>
<span class="line"><span style="color:#6F42C1;">d</span></span>
<span class="line"><span style="color:#6F42C1;">c</span></span></code></pre></div><p>对该文件进行排序后，再过滤掉重复的行。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">sort</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">example.txt</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">uniq</span></span>
<span class="line"><span style="color:#B392F0;">a</span></span>
<span class="line"><span style="color:#B392F0;">b</span></span>
<span class="line"><span style="color:#B392F0;">c</span></span>
<span class="line"><span style="color:#B392F0;">d</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sort</span><span style="color:#24292E;"> </span><span style="color:#032F62;">example.txt</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">uniq</span></span>
<span class="line"><span style="color:#6F42C1;">a</span></span>
<span class="line"><span style="color:#6F42C1;">b</span></span>
<span class="line"><span style="color:#6F42C1;">c</span></span>
<span class="line"><span style="color:#6F42C1;">d</span></span></code></pre></div><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h2><p><code>-c</code>参数会显示每行一共出现了多少次。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">example.txt</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">uniq</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-c</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">3</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">a</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">b</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">c</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">d</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sort</span><span style="color:#24292E;"> </span><span style="color:#032F62;">example.txt</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">uniq</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-c</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">3</span><span style="color:#24292E;"> </span><span style="color:#032F62;">a</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">b</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">c</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">d</span></span></code></pre></div>`,9),e=[o];function c(t,r,i,y,E,d){return a(),n("div",null,e)}const u=s(l,[["render",c]]);export{h as __pageData,u as default};
