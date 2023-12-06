import{_ as a,o as e,c as s,Q as o}from"./chunks/framework.681fc4ae.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"npm/command/npm-prefix.md","filePath":"npm/command/npm-prefix.md"}'),l={name:"npm/command/npm-prefix.md"},n=o('<h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">prefix</span><span style="color:#E1E4E8;"> [-g]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">prefix</span><span style="color:#24292E;"> [-g]</span></span></code></pre></div><p>注意：此命令不知道工作区。</p><h2 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h2><p>将本地前缀打印到标准输出。这是包含<code>package.json</code>文件或<code>node_modules</code>目录的最接近的父目录，除非<code>-g</code>也指定了。</p><p>如果<code>-g</code>指定，这将是全局前缀的值。<code>npm config</code>详情请参阅。</p><h2 id="example" tabindex="-1"><code>example</code> <a class="header-anchor" href="#example" aria-label="Permalink to &quot;`example`&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">prefix</span></span>\n<span class="line"><span style="color:#B392F0;">/usr/local/projects/foo</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">prefix</span></span>\n<span class="line"><span style="color:#6F42C1;">/usr/local/projects/foo</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">prefix</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span></span>\n<span class="line"><span style="color:#B392F0;">/usr/local</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">prefix</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span></span>\n<span class="line"><span style="color:#6F42C1;">/usr/local</span></span></code></pre></div><h2 id="configuration" tabindex="-1"><code>configuration</code> <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;`configuration`&quot;">​</a></h2><h2 id="global" tabindex="-1"><code>global</code> <a class="header-anchor" href="#global" aria-label="Permalink to &quot;`global`&quot;">​</a></h2><ul><li>默认值：假</li><li>类型：布尔值</li></ul><p>在“全局”模式下运行，以便将包安装到该<code>prefix</code>文件夹而不是当前工作目录中。有关行为差异的更多信息，请参阅<a href="https://docs.npmjs.com/cli/v7/configuring-npm/folders" target="_blank" rel="noreferrer">文件夹。</a></p><ul><li>软件包将安装到该<code>{prefix}/lib/node_modules</code>文件夹中，而不是当前工作目录中。</li><li>bin 文件链接到<code>{prefix}/bin</code></li><li>手册页链接到<code>{prefix}/share/man</code></li></ul><h2 id="使用示例" tabindex="-1">使用示例： <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例：&quot;">​</a></h2><blockquote><p>在给定的工程目录下执行命令</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm run format --prefix=/Users/rc/Code/rongcloud.net/public-web/Arco-Design-Pro/hello-arco-pro</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm run format --prefix=/Users/rc/Code/rongcloud.net/public-web/Arco-Design-Pro/hello-arco-pro</span></span></code></pre></div>',17),p=[n];function c(r,t,i,d,h,u){return e(),s("div",null,p)}const b=a(l,[["render",c]]);export{g as __pageData,b as default};
