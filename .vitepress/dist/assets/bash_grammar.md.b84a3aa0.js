import{_ as s,o as a,c as l,Q as n}from"./chunks/framework.681fc4ae.js";const h=JSON.parse('{"title":"Bash 的基本语法","description":"","frontmatter":{},"headers":[],"relativePath":"bash/grammar.md","filePath":"bash/grammar.md"}'),p={name:"bash/grammar.md"},o=n(`<h1 id="bash-的基本语法" tabindex="-1">Bash 的基本语法 <a class="header-anchor" href="#bash-的基本语法" aria-label="Permalink to &quot;Bash 的基本语法&quot;">​</a></h1><p>本章介绍 Bash 的最基本语法。</p><h2 id="echo-命令" tabindex="-1">echo 命令 <a class="header-anchor" href="#echo-命令" aria-label="Permalink to &quot;echo 命令&quot;">​</a></h2><p>由于后面的例子会大量用到<code>echo</code>命令，这里先介绍这个命令。</p><p><code>echo</code>命令的作用是在屏幕输出一行文本，可以将该命令的参数原样输出。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hello</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">world</span></span>
<span class="line"><span style="color:#B392F0;">hello</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">world</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hello</span><span style="color:#24292E;"> </span><span style="color:#032F62;">world</span></span>
<span class="line"><span style="color:#6F42C1;">hello</span><span style="color:#24292E;"> </span><span style="color:#032F62;">world</span></span></code></pre></div><p>上面例子中，<code>echo</code>的参数是<code>hello world</code>，可以原样输出。</p><p>如果想要输出的是多行文本，即包括换行符。这时就需要把多行文本放在引号里面。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&lt;HTML&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;HEAD&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">          &lt;TITLE&gt;Page Title&lt;/TITLE&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;/HEAD&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;BODY&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">          Page body.</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;/BODY&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">&lt;/HTML&gt;&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&lt;HTML&gt;</span></span>
<span class="line"><span style="color:#032F62;">    &lt;HEAD&gt;</span></span>
<span class="line"><span style="color:#032F62;">          &lt;TITLE&gt;Page Title&lt;/TITLE&gt;</span></span>
<span class="line"><span style="color:#032F62;">    &lt;/HEAD&gt;</span></span>
<span class="line"><span style="color:#032F62;">    &lt;BODY&gt;</span></span>
<span class="line"><span style="color:#032F62;">          Page body.</span></span>
<span class="line"><span style="color:#032F62;">    &lt;/BODY&gt;</span></span>
<span class="line"><span style="color:#032F62;">&lt;/HTML&gt;&quot;</span></span></code></pre></div><p>上面例子中，<code>echo</code>可以原样输出多行文本。</p><h3 id="n参数" tabindex="-1"><code>-n</code>参数 <a class="header-anchor" href="#n参数" aria-label="Permalink to &quot;\`-n\`参数&quot;">​</a></h3><p>默认情况下，<code>echo</code>输出的文本末尾会有一个回车符。<code>-n</code>参数可以取消末尾的回车符，使得下一个提示符紧跟在输出内容的后面。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-n</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hello</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">world</span></span>
<span class="line"><span style="color:#B392F0;">hello</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">world</span><span style="color:#E1E4E8;">$</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">echo</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-n</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hello</span><span style="color:#24292E;"> </span><span style="color:#032F62;">world</span></span>
<span class="line"><span style="color:#6F42C1;">hello</span><span style="color:#24292E;"> </span><span style="color:#032F62;">world</span><span style="color:#24292E;">$</span></span></code></pre></div><p>上面例子中，<code>world</code>后面直接就是下一行的提示符<code>$</code>。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">a</span><span style="color:#E1E4E8;">;</span><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">b</span></span>
<span class="line"><span style="color:#B392F0;">a</span></span>
<span class="line"><span style="color:#B392F0;">b</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-n</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">a</span><span style="color:#E1E4E8;">;</span><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">b</span></span>
<span class="line"><span style="color:#B392F0;">ab</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">a</span><span style="color:#24292E;">;</span><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">b</span></span>
<span class="line"><span style="color:#6F42C1;">a</span></span>
<span class="line"><span style="color:#6F42C1;">b</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">echo</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-n</span><span style="color:#24292E;"> </span><span style="color:#032F62;">a</span><span style="color:#24292E;">;</span><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">b</span></span>
<span class="line"><span style="color:#6F42C1;">ab</span></span></code></pre></div><p>上面例子中，<code>-n</code>参数可以让两个<code>echo</code>命令的输出连在一起，出现在同一行。</p><h3 id="e参数" tabindex="-1"><code>-e</code>参数 <a class="header-anchor" href="#e参数" aria-label="Permalink to &quot;\`-e\`参数&quot;">​</a></h3><p><code>-e</code>参数会解释引号（双引号和单引号）里面的特殊字符（比如换行符<code>\\n</code>）。如果不使用<code>-e</code>参数，即默认情况下，引号会让特殊字符变成普通字符，<code>echo</code>不解释它们，原样输出。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Hello\\nWorld&quot;</span></span>
<span class="line"><span style="color:#B392F0;">Hello\\nWorld</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 双引号的情况</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-e</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Hello\\nWorld&quot;</span></span>
<span class="line"><span style="color:#B392F0;">Hello</span></span>
<span class="line"><span style="color:#B392F0;">World</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 单引号的情况</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-e</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Hello\\nWorld&#39;</span></span>
<span class="line"><span style="color:#B392F0;">Hello</span></span>
<span class="line"><span style="color:#B392F0;">World</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Hello\\nWorld&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">Hello\\nWorld</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 双引号的情况</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">echo</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-e</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Hello\\nWorld&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">Hello</span></span>
<span class="line"><span style="color:#6F42C1;">World</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 单引号的情况</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">echo</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-e</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Hello\\nWorld&#39;</span></span>
<span class="line"><span style="color:#6F42C1;">Hello</span></span>
<span class="line"><span style="color:#6F42C1;">World</span></span></code></pre></div><p>上面代码中，<code>-e</code>参数使得<code>\\n</code>解释为换行符，导致输出内容里面出现换行。</p><h2 id="命令格式" tabindex="-1">命令格式 <a class="header-anchor" href="#命令格式" aria-label="Permalink to &quot;命令格式&quot;">​</a></h2><p>命令行环境中，主要通过使用 Shell 命令，进行各种操作。Shell 命令基本都是下面的格式。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">command</span><span style="color:#E1E4E8;"> [ </span><span style="color:#9ECBFF;">arg1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">...</span><span style="color:#E1E4E8;"> [ </span><span style="color:#9ECBFF;">argN</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">]]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">command</span><span style="color:#24292E;"> [ </span><span style="color:#032F62;">arg1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">...</span><span style="color:#24292E;"> [ </span><span style="color:#032F62;">argN</span><span style="color:#24292E;"> </span><span style="color:#032F62;">]]</span></span></code></pre></div><p>上面代码中，<code>command</code>是具体的命令或者一个可执行文件，<code>arg1 ... argN</code>是传递给命令的参数，它们是可选的。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-l</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-l</span></span></code></pre></div><p>上面这个命令中，<code>ls</code>是命令，<code>-l</code>是参数。</p><p>有些参数是命令的配置项，这些配置项一般都以一个连词线开头，比如上面的<code>-l</code>。同一个配置项往往有长和短两种形式，比如<code>-l</code>是短形式，<code>--list</code>是长形式，它们的作用完全相同。短形式便于手动输入，长形式一般用在脚本之中，可读性更好，利于解释自身的含义。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 短形式</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-r</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 长形式</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--reverse</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 短形式</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-r</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 长形式</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--reverse</span></span></code></pre></div><p>上面命令中，<code>-r</code>是短形式，<code>--reverse</code>是长形式，作用完全一样。前者便于输入，后者便于理解。</p><p>Bash 单个命令一般都是一行，用户按下回车键，就开始执行。有些命令比较长，写成多行会有利于阅读和编辑，这时可以在每一行的结尾加上反斜杠，Bash 就会将下一行跟当前行放在一起解释。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">foo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bar</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 等同于</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">foo</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">bar</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">foo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bar</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 等同于</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">foo</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">bar</span></span></code></pre></div><h2 id="空格" tabindex="-1">空格 <a class="header-anchor" href="#空格" aria-label="Permalink to &quot;空格&quot;">​</a></h2><p>Bash 使用空格（或 Tab 键）区分不同的参数。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">command</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">foo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bar</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">command</span><span style="color:#24292E;"> </span><span style="color:#032F62;">foo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bar</span></span></code></pre></div><p>上面命令中，<code>foo</code>和<code>bar</code>之间有一个空格，所以 Bash 认为它们是两个参数。</p><p>如果参数之间有多个空格，Bash 会自动忽略多余的空格。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">this</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">is</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">a</span><span style="color:#E1E4E8;">     </span><span style="color:#9ECBFF;">test</span></span>
<span class="line"><span style="color:#B392F0;">this</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">is</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">this</span><span style="color:#24292E;"> </span><span style="color:#032F62;">is</span><span style="color:#24292E;"> </span><span style="color:#032F62;">a</span><span style="color:#24292E;">     </span><span style="color:#032F62;">test</span></span>
<span class="line"><span style="color:#6F42C1;">this</span><span style="color:#24292E;"> </span><span style="color:#032F62;">is</span><span style="color:#24292E;"> </span><span style="color:#032F62;">a</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span></span></code></pre></div><p>上面命令中，<code>a</code>和<code>test</code>之间有多个空格，Bash 会忽略多余的空格。</p><h2 id="分号" tabindex="-1">分号 <a class="header-anchor" href="#分号" aria-label="Permalink to &quot;分号&quot;">​</a></h2><p>分号（<code>;</code>）是命令的结束符，使得一行可以放置多个命令，上一个命令执行结束后，再执行第二个命令。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clear</span><span style="color:#E1E4E8;">; </span><span style="color:#B392F0;">ls</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clear</span><span style="color:#24292E;">; </span><span style="color:#6F42C1;">ls</span></span></code></pre></div><p>上面例子中，Bash 先执行<code>clear</code>命令，执行完成后，再执行<code>ls</code>命令。</p><p>注意，使用分号时，第二个命令总是接着第一个命令执行，不管第一个命令执行成功或失败。</p><h2 id="命令的组合符-和" tabindex="-1">命令的组合符<code>&amp;&amp;</code>和<code>||</code> <a class="header-anchor" href="#命令的组合符-和" aria-label="Permalink to &quot;命令的组合符\`&amp;&amp;\`和\`||\`&quot;">​</a></h2><p>除了分号，Bash 还提供两个命令组合符<code>&amp;&amp;</code>和<code>||</code>，允许更好地控制多个命令之间的继发关系。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">Command1</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#B392F0;">Command2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">Command1</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#6F42C1;">Command2</span></span></code></pre></div><p>上面命令的意思是，如果<code>Command1</code>命令运行成功，则继续运行<code>Command2</code>命令。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">Command1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Command2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">Command1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Command2</span></span></code></pre></div><p>上面命令的意思是，如果<code>Command1</code>命令运行失败，则继续运行<code>Command2</code>命令。</p><p>下面是一些例子。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cat</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">filelist.txt</span><span style="color:#E1E4E8;"> ; </span><span style="color:#B392F0;">ls</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-l</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">filelist.txt</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cat</span><span style="color:#24292E;"> </span><span style="color:#032F62;">filelist.txt</span><span style="color:#24292E;"> ; </span><span style="color:#6F42C1;">ls</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-l</span><span style="color:#24292E;"> </span><span style="color:#032F62;">filelist.txt</span></span></code></pre></div><p>上面例子中，只要<code>cat</code>命令执行结束，不管成功或失败，都会继续执行<code>ls</code>命令。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cat</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">filelist.txt</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#B392F0;">ls</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-l</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">filelist.txt</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cat</span><span style="color:#24292E;"> </span><span style="color:#032F62;">filelist.txt</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#6F42C1;">ls</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-l</span><span style="color:#24292E;"> </span><span style="color:#032F62;">filelist.txt</span></span></code></pre></div><p>上面例子中，只有<code>cat</code>命令执行成功，才会继续执行<code>ls</code>命令。如果<code>cat</code>执行失败（比如不存在文件<code>flielist.txt</code>），那么<code>ls</code>命令就不会执行。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mkdir</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">foo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bar</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mkdir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">foo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mkdir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bar</span></span></code></pre></div><p>上面例子中，只有<code>mkdir foo</code>命令执行失败（比如<code>foo</code>目录已经存在），才会继续执行<code>mkdir bar</code>命令。如果<code>mkdir foo</code>命令执行成功，就不会创建<code>bar</code>目录了。</p><h2 id="type-命令" tabindex="-1">type 命令 <a class="header-anchor" href="#type-命令" aria-label="Permalink to &quot;type 命令&quot;">​</a></h2><p>Bash 本身内置了很多命令，同时也可以执行外部程序。怎么知道一个命令是内置命令，还是外部程序呢？</p><p><code>type</code>命令用来判断命令的来源。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">echo</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">is</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">shell</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">builtin</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span></span>
<span class="line"><span style="color:#B392F0;">ls</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">is</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hashed</span><span style="color:#E1E4E8;"> (/bin/ls)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">type</span><span style="color:#24292E;"> </span><span style="color:#032F62;">echo</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">is</span><span style="color:#24292E;"> </span><span style="color:#032F62;">a</span><span style="color:#24292E;"> </span><span style="color:#032F62;">shell</span><span style="color:#24292E;"> </span><span style="color:#032F62;">builtin</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">type</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span></span>
<span class="line"><span style="color:#6F42C1;">ls</span><span style="color:#24292E;"> </span><span style="color:#032F62;">is</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hashed</span><span style="color:#24292E;"> (/bin/ls)</span></span></code></pre></div><p>上面代码中，<code>type</code>命令告诉我们，<code>echo</code>是内部命令，<code>ls</code>是外部程序（<code>/bin/ls</code>）。</p><p><code>type</code>命令本身也是内置命令。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">type</span></span>
<span class="line"><span style="color:#79B8FF;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">is</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">shell</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">builtin</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">type</span><span style="color:#24292E;"> </span><span style="color:#032F62;">type</span></span>
<span class="line"><span style="color:#005CC5;">type</span><span style="color:#24292E;"> </span><span style="color:#032F62;">is</span><span style="color:#24292E;"> </span><span style="color:#032F62;">a</span><span style="color:#24292E;"> </span><span style="color:#032F62;">shell</span><span style="color:#24292E;"> </span><span style="color:#032F62;">builtin</span></span></code></pre></div><p>如果要查看一个命令的所有定义，可以使用<code>type</code>命令的<code>-a</code>参数。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-a</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">echo</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">is</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">shell</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">builtin</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">is</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/bin/echo</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">is</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/bin/echo</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">type</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-a</span><span style="color:#24292E;"> </span><span style="color:#032F62;">echo</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">is</span><span style="color:#24292E;"> </span><span style="color:#032F62;">shell</span><span style="color:#24292E;"> </span><span style="color:#032F62;">builtin</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">is</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/bin/echo</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">is</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/bin/echo</span></span></code></pre></div><p>上面代码表示，<code>echo</code>命令既是内置命令，也有对应的外部程序。</p><p><code>type</code>命令的<code>-t</code>参数，可以返回一个命令的类型：别名（alias），关键词（keyword），函数（function），内置命令（builtin）和文件（file）。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-t</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bash</span></span>
<span class="line"><span style="color:#B392F0;">file</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-t</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">if</span></span>
<span class="line"><span style="color:#B392F0;">keyword</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">type</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-t</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bash</span></span>
<span class="line"><span style="color:#6F42C1;">file</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">type</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-t</span><span style="color:#24292E;"> </span><span style="color:#032F62;">if</span></span>
<span class="line"><span style="color:#6F42C1;">keyword</span></span></code></pre></div><p>上面例子中，<code>bash</code>是文件，<code>if</code>是关键词。</p><h2 id="快捷键" tabindex="-1">快捷键 <a class="header-anchor" href="#快捷键" aria-label="Permalink to &quot;快捷键&quot;">​</a></h2><p>Bash 提供很多快捷键，可以大大方便操作。下面是一些最常用的快捷键，完整的介绍参见《行操作》一章。</p><ul><li><code>Ctrl + L</code>：清除屏幕并将当前行移到页面顶部。</li><li><code>Ctrl + C</code>：中止当前正在执行的命令。</li><li><code>Shift + PageUp</code>：向上滚动。</li><li><code>Shift + PageDown</code>：向下滚动。</li><li><code>Ctrl + U</code>：从光标位置删除到行首。</li><li><code>Ctrl + K</code>：从光标位置删除到行尾。</li><li><code>Ctrl + W</code>：删除光标位置前一个单词。</li><li><code>Ctrl + D</code>：关闭 Shell 会话。</li><li><code>↑</code>，<code>↓</code>：浏览已执行命令的历史记录。</li></ul><p>除了上面的快捷键，Bash 还具有自动补全功能。命令输入到一半的时候，可以按下 Tab 键，Bash 会自动完成剩下的部分。比如，输入<code>tou</code>，然后按一下 Tab 键，Bash 会自动补上<code>ch</code>。</p><p>除了命令的自动补全，Bash 还支持路径的自动补全。有时，需要输入很长的路径，这时只需要输入前面的部分，然后按下 Tab 键，就会自动补全后面的部分。如果有多个可能的选择，按两次 Tab 键，Bash 会显示所有选项，让你选择。</p>`,74),e=[o];function c(t,r,y,E,i,d){return a(),l("div",null,e)}const C=s(p,[["render",c]]);export{h as __pageData,C as default};
