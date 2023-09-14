import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.681fc4ae.js";const h=JSON.parse('{"title":"awk","description":"","frontmatter":{},"headers":[],"relativePath":"bash/archives/commands/awk.md","filePath":"bash/archives/commands/awk.md"}'),l={name:"bash/archives/commands/awk.md"},o=p(`<h1 id="awk" tabindex="-1">awk <a class="header-anchor" href="#awk" aria-label="Permalink to &quot;awk&quot;">​</a></h1><p><a href="https://en.wikipedia.org/wiki/AWK" target="_blank" rel="noreferrer"><code>awk</code></a>是处理文本文件的一个应用程序，几乎所有 Linux 系统都自带这个程序。</p><p>它依次处理文件的每一行，并读取里面的每一个字段。对于日志、CSV 那样的每行格式相同的文本文件，<code>awk</code>可能是最方便的工具。</p><p><img src="https://www.wangbase.com/blogimg/asset/201811/bg2018110702.jpg" alt=""></p><p><code>awk</code>其实不仅仅是工具软件，还是一种编程语言。不过，这里只介绍它的命令行用法，对于大多数场合，应该足够用了。</p><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2><p><code>awk</code>的基本用法就是下面的形式。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 格式</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">awk</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">动作</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">文件名</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 示例</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">awk</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;{print $0}&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">demo.txt</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 格式</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">awk</span><span style="color:#24292E;"> </span><span style="color:#032F62;">动作</span><span style="color:#24292E;"> </span><span style="color:#032F62;">文件名</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 示例</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">awk</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;{print $0}&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">demo.txt</span></span></code></pre></div><p>上面示例中，<code>demo.txt</code>是<code>awk</code>所要处理的文本文件。前面单引号内部有一个大括号，里面就是每一行的处理动作<code>print $0</code>。其中，<code>print</code>是打印命令，<code>$0</code>代表当前行，因此上面命令的执行结果，就是把每一行原样打印出来。</p><p>下面，我们先用标准输入（stdin）演示上面这个例子。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;this is a test&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">awk</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;{print $0}&#39;</span></span>
<span class="line"><span style="color:#B392F0;">this</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">is</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;this is a test&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">awk</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;{print $0}&#39;</span></span>
<span class="line"><span style="color:#6F42C1;">this</span><span style="color:#24292E;"> </span><span style="color:#032F62;">is</span><span style="color:#24292E;"> </span><span style="color:#032F62;">a</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span></span></code></pre></div><p>上面代码中，<code>print $0</code>就是把标准输入<code>this is a test</code>，重新打印了一遍。</p><p><code>awk</code>会根据空格和制表符，将每一行分成若干字段，依次用<code>$1</code>、<code>$2</code>、<code>$3</code>代表第一个字段、第二个字段、第三个字段等等。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;this is a test&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">awk</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;{print $3}&#39;</span></span>
<span class="line"><span style="color:#B392F0;">a</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;this is a test&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">awk</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;{print $3}&#39;</span></span>
<span class="line"><span style="color:#6F42C1;">a</span></span></code></pre></div><p>上面代码中，<code>$3</code>代表<code>this is a test</code>的第三个字段<code>a</code>。</p><p>下面，为了便于举例，我们把<code>/etc/passwd</code>文件保存成<code>demo.txt</code>。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">root:x:0:0:root:/root:/usr/bin/zsh</span></span>
<span class="line"><span style="color:#B392F0;">daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin</span></span>
<span class="line"><span style="color:#B392F0;">bin:x:2:2:bin:/bin:/usr/sbin/nologin</span></span>
<span class="line"><span style="color:#B392F0;">sys:x:3:3:sys:/dev:/usr/sbin/nologin</span></span>
<span class="line"><span style="color:#B392F0;">sync:x:4:65534:sync:/bin:/bin/sync</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">root:x:0:0:root:/root:/usr/bin/zsh</span></span>
<span class="line"><span style="color:#6F42C1;">daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin</span></span>
<span class="line"><span style="color:#6F42C1;">bin:x:2:2:bin:/bin:/usr/sbin/nologin</span></span>
<span class="line"><span style="color:#6F42C1;">sys:x:3:3:sys:/dev:/usr/sbin/nologin</span></span>
<span class="line"><span style="color:#6F42C1;">sync:x:4:65534:sync:/bin:/bin/sync</span></span></code></pre></div><p>这个文件的字段分隔符是冒号（<code>:</code>），所以要用<code>-F</code>参数指定分隔符为冒号。然后，才能提取到它的第一个字段。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">awk</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-F</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;:&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;{ print $1 }&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">demo.txt</span></span>
<span class="line"><span style="color:#B392F0;">root</span></span>
<span class="line"><span style="color:#B392F0;">daemon</span></span>
<span class="line"><span style="color:#B392F0;">bin</span></span>
<span class="line"><span style="color:#B392F0;">sys</span></span>
<span class="line"><span style="color:#B392F0;">sync</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">awk</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-F</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;:&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;{ print $1 }&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">demo.txt</span></span>
<span class="line"><span style="color:#6F42C1;">root</span></span>
<span class="line"><span style="color:#6F42C1;">daemon</span></span>
<span class="line"><span style="color:#6F42C1;">bin</span></span>
<span class="line"><span style="color:#6F42C1;">sys</span></span>
<span class="line"><span style="color:#6F42C1;">sync</span></span></code></pre></div><h2 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h2><p>除了<code>$ + 数字</code>表示某个字段，<code>awk</code>还提供其他一些变量。</p><p>变量<code>NF</code>表示当前行有多少个字段，因此<code>$NF</code>就代表最后一个字段。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;this is a test&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">awk</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;{print $NF}&#39;</span></span>
<span class="line"><span style="color:#79B8FF;">test</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;this is a test&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">awk</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;{print $NF}&#39;</span></span>
<span class="line"><span style="color:#005CC5;">test</span></span></code></pre></div><p><code>$(NF-1)</code>代表倒数第二个字段。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ awk -F &#39;:&#39; &#39;{print $1, $(NF-1)}&#39; demo.txt</span></span>
<span class="line"><span style="color:#e1e4e8;">root /root</span></span>
<span class="line"><span style="color:#e1e4e8;">daemon /usr/sbin</span></span>
<span class="line"><span style="color:#e1e4e8;">bin /bin</span></span>
<span class="line"><span style="color:#e1e4e8;">sys /dev</span></span>
<span class="line"><span style="color:#e1e4e8;">sync /bin</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ awk -F &#39;:&#39; &#39;{print $1, $(NF-1)}&#39; demo.txt</span></span>
<span class="line"><span style="color:#24292e;">root /root</span></span>
<span class="line"><span style="color:#24292e;">daemon /usr/sbin</span></span>
<span class="line"><span style="color:#24292e;">bin /bin</span></span>
<span class="line"><span style="color:#24292e;">sys /dev</span></span>
<span class="line"><span style="color:#24292e;">sync /bin</span></span></code></pre></div><p>上面代码中，<code>print</code>命令里面的逗号，表示输出的时候，两个部分之间使用空格分隔。</p><p>变量<code>NR</code>表示当前处理的是第几行。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">awk</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-F</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;:&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;{print NR &quot;) &quot; $1}&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">demo.txt</span></span>
<span class="line"><span style="color:#B392F0;">1</span><span style="color:#E1E4E8;">) root</span></span>
<span class="line"><span style="color:#B392F0;">2</span><span style="color:#E1E4E8;">) daemon</span></span>
<span class="line"><span style="color:#B392F0;">3</span><span style="color:#E1E4E8;">) bin</span></span>
<span class="line"><span style="color:#B392F0;">4</span><span style="color:#E1E4E8;">) sys</span></span>
<span class="line"><span style="color:#B392F0;">5</span><span style="color:#E1E4E8;">) sync</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">awk</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-F</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;:&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;{print NR &quot;) &quot; $1}&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">demo.txt</span></span>
<span class="line"><span style="color:#6F42C1;">1</span><span style="color:#24292E;">) root</span></span>
<span class="line"><span style="color:#6F42C1;">2</span><span style="color:#24292E;">) daemon</span></span>
<span class="line"><span style="color:#6F42C1;">3</span><span style="color:#24292E;">) bin</span></span>
<span class="line"><span style="color:#6F42C1;">4</span><span style="color:#24292E;">) sys</span></span>
<span class="line"><span style="color:#6F42C1;">5</span><span style="color:#24292E;">) sync</span></span></code></pre></div><p>上面代码中，<code>print</code>命令里面，如果原样输出字符，要放在双引号里面。</p><p><code>awk</code>的其他内置变量如下。</p><blockquote><ul><li><code>FILENAME</code>：当前文件名</li><li><code>FS</code>：字段分隔符，默认是空格和制表符。</li><li><code>RS</code>：行分隔符，用于分割每一行，默认是换行符。</li><li><code>OFS</code>：输出字段的分隔符，用于打印时分隔字段，默认为空格。</li><li><code>ORS</code>：输出记录的分隔符，用于打印时分隔记录，默认为换行符。</li><li><code>OFMT</code>：数字输出的格式，默认为<code>％.6g</code>。</li></ul></blockquote><h2 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-label="Permalink to &quot;函数&quot;">​</a></h2><p><code>awk</code>还提供了一些内置函数，方便对原始数据的处理。</p><p>函数<code>toupper()</code>用于将字符转为大写。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">awk</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-F</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;:&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;{ print toupper($1) }&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">demo.txt</span></span>
<span class="line"><span style="color:#B392F0;">ROOT</span></span>
<span class="line"><span style="color:#B392F0;">DAEMON</span></span>
<span class="line"><span style="color:#B392F0;">BIN</span></span>
<span class="line"><span style="color:#B392F0;">SYS</span></span>
<span class="line"><span style="color:#B392F0;">SYNC</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">awk</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-F</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;:&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;{ print toupper($1) }&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">demo.txt</span></span>
<span class="line"><span style="color:#6F42C1;">ROOT</span></span>
<span class="line"><span style="color:#6F42C1;">DAEMON</span></span>
<span class="line"><span style="color:#6F42C1;">BIN</span></span>
<span class="line"><span style="color:#6F42C1;">SYS</span></span>
<span class="line"><span style="color:#6F42C1;">SYNC</span></span></code></pre></div><p>上面代码中，第一个字段输出时都变成了大写。</p><p>其他常用函数如下。</p><blockquote><ul><li><code>tolower()</code>：字符转为小写。</li><li><code>length()</code>：返回字符串长度。</li><li><code>substr()</code>：返回子字符串。</li><li><code>sin()</code>：正弦。</li><li><code>cos()</code>：余弦。</li><li><code>sqrt()</code>：平方根。</li><li><code>rand()</code>：随机数。</li></ul></blockquote><p><code>awk</code>内置函数的完整列表，可以查看<a href="https://www.gnu.org/software/gawk/manual/html_node/Built_002din.html#Built_002din" target="_blank" rel="noreferrer">手册</a>。</p><h2 id="条件" tabindex="-1">条件 <a class="header-anchor" href="#条件" aria-label="Permalink to &quot;条件&quot;">​</a></h2><p><code>awk</code>允许指定输出条件，只输出符合条件的行。</p><p>输出条件要写在动作的前面。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">awk</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;条件 动作&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">文件名</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">awk</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;条件 动作&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">文件名</span></span></code></pre></div><p>请看下面的例子。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">awk</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-F</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;:&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;/usr/ {print $1}&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">demo.txt</span></span>
<span class="line"><span style="color:#B392F0;">root</span></span>
<span class="line"><span style="color:#B392F0;">daemon</span></span>
<span class="line"><span style="color:#B392F0;">bin</span></span>
<span class="line"><span style="color:#B392F0;">sys</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">awk</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-F</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;:&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;/usr/ {print $1}&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">demo.txt</span></span>
<span class="line"><span style="color:#6F42C1;">root</span></span>
<span class="line"><span style="color:#6F42C1;">daemon</span></span>
<span class="line"><span style="color:#6F42C1;">bin</span></span>
<span class="line"><span style="color:#6F42C1;">sys</span></span></code></pre></div><p>上面代码中，<code>print</code>命令前面是一个正则表达式，只输出包含<code>usr</code>的行。</p><p>下面的例子只输出奇数行，以及输出第三行以后的行。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 输出奇数行</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">awk</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-F</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;:&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;NR % 2 == 1 {print $1}&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">demo.txt</span></span>
<span class="line"><span style="color:#B392F0;">root</span></span>
<span class="line"><span style="color:#B392F0;">bin</span></span>
<span class="line"><span style="color:#B392F0;">sync</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 输出第三行以后的行</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">awk</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-F</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;:&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;NR &gt;3 {print $1}&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">demo.txt</span></span>
<span class="line"><span style="color:#B392F0;">sys</span></span>
<span class="line"><span style="color:#B392F0;">sync</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 输出奇数行</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">awk</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-F</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;:&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;NR % 2 == 1 {print $1}&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">demo.txt</span></span>
<span class="line"><span style="color:#6F42C1;">root</span></span>
<span class="line"><span style="color:#6F42C1;">bin</span></span>
<span class="line"><span style="color:#6F42C1;">sync</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 输出第三行以后的行</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">awk</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-F</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;:&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;NR &gt;3 {print $1}&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">demo.txt</span></span>
<span class="line"><span style="color:#6F42C1;">sys</span></span>
<span class="line"><span style="color:#6F42C1;">sync</span></span></code></pre></div><p>下面的例子输出第一个字段等于指定值的行。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">awk</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-F</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;:&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;$1 == &quot;root&quot; {print $1}&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">demo.txt</span></span>
<span class="line"><span style="color:#B392F0;">root</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">awk</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-F</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;:&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;$1 == &quot;root&quot; || $1 == &quot;bin&quot; {print $1}&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">demo.txt</span></span>
<span class="line"><span style="color:#B392F0;">root</span></span>
<span class="line"><span style="color:#B392F0;">bin</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">awk</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-F</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;:&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;$1 == &quot;root&quot; {print $1}&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">demo.txt</span></span>
<span class="line"><span style="color:#6F42C1;">root</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">awk</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-F</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;:&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;$1 == &quot;root&quot; || $1 == &quot;bin&quot; {print $1}&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">demo.txt</span></span>
<span class="line"><span style="color:#6F42C1;">root</span></span>
<span class="line"><span style="color:#6F42C1;">bin</span></span></code></pre></div><h2 id="if-语句" tabindex="-1">if 语句 <a class="header-anchor" href="#if-语句" aria-label="Permalink to &quot;if 语句&quot;">​</a></h2><p><code>awk</code>提供了<code>if</code>结构，用于编写复杂的条件。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">awk</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-F</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;:&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;{if ($1 &gt; &quot;m&quot;) print $1}&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">demo.txt</span></span>
<span class="line"><span style="color:#B392F0;">root</span></span>
<span class="line"><span style="color:#B392F0;">sys</span></span>
<span class="line"><span style="color:#B392F0;">sync</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">awk</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-F</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;:&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;{if ($1 &gt; &quot;m&quot;) print $1}&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">demo.txt</span></span>
<span class="line"><span style="color:#6F42C1;">root</span></span>
<span class="line"><span style="color:#6F42C1;">sys</span></span>
<span class="line"><span style="color:#6F42C1;">sync</span></span></code></pre></div><p>上面代码输出第一个字段的第一个字符大于<code>m</code>的行。</p><p><code>if</code>结构还可以指定<code>else</code>部分。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">awk</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-F</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;:&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;{if ($1 &gt; &quot;m&quot;) print $1; else print &quot;---&quot;}&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">demo.txt</span></span>
<span class="line"><span style="color:#B392F0;">root</span></span>
<span class="line"><span style="color:#B392F0;">---</span></span>
<span class="line"><span style="color:#B392F0;">---</span></span>
<span class="line"><span style="color:#B392F0;">sys</span></span>
<span class="line"><span style="color:#B392F0;">sync</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">awk</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-F</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;:&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;{if ($1 &gt; &quot;m&quot;) print $1; else print &quot;---&quot;}&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">demo.txt</span></span>
<span class="line"><span style="color:#6F42C1;">root</span></span>
<span class="line"><span style="color:#6F42C1;">---</span></span>
<span class="line"><span style="color:#6F42C1;">---</span></span>
<span class="line"><span style="color:#6F42C1;">sys</span></span>
<span class="line"><span style="color:#6F42C1;">sync</span></span></code></pre></div><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><a href="https://gregable.com/2010/09/why-you-should-know-just-little-awk.html" target="_blank" rel="noreferrer">An Awk tutorial by Example</a>, Greg Grothaus</li><li><a href="https://likegeeks.com/awk-command/" target="_blank" rel="noreferrer">30 Examples for Awk Command in Text Processing</a>, Mokhtar Ebrahim</li></ul>`,58),e=[o];function c(t,r,i,y,E,d){return a(),n("div",null,e)}const C=s(l,[["render",c]]);export{h as __pageData,C as default};
