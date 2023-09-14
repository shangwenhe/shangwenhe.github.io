import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.681fc4ae.js";const F=JSON.parse('{"title":"目录堆栈","description":"","frontmatter":{},"headers":[],"relativePath":"bash/stack.md","filePath":"bash/stack.md"}'),l={name:"bash/stack.md"},o=p(`<h1 id="目录堆栈" tabindex="-1">目录堆栈 <a class="header-anchor" href="#目录堆栈" aria-label="Permalink to &quot;目录堆栈&quot;">​</a></h1><p>为了方便用户在不同目录之间切换，Bash 提供了目录堆栈功能。</p><h2 id="cd" tabindex="-1">cd - <a class="header-anchor" href="#cd" aria-label="Permalink to &quot;cd -&quot;">​</a></h2><p>Bash 可以记忆用户进入过的目录。默认情况下，只记忆前一次所在的目录，<code>cd -</code>命令可以返回前一次的目录。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 当前目录是 /path/to/foo</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bar</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重新回到 /path/to/foo</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">-</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 当前目录是 /path/to/foo</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bar</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重新回到 /path/to/foo</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">-</span></span></code></pre></div><p>上面例子中，用户原来所在的目录是<code>/path/to/foo</code>，进入子目录<code>bar</code>以后，使用<code>cd -</code>可以回到原来的目录。</p><h2 id="pushd-popd" tabindex="-1">pushd，popd <a class="header-anchor" href="#pushd-popd" aria-label="Permalink to &quot;pushd，popd&quot;">​</a></h2><p>如果希望记忆多重目录，可以使用<code>pushd</code>命令和<code>popd</code>命令。它们用来操作目录堆栈。</p><p><code>pushd</code>命令的用法类似<code>cd</code>命令，可以进入指定的目录。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pushd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dirname</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pushd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dirname</span></span></code></pre></div><p>上面命令会进入目录<code>dirname</code>，并将该目录放入堆栈。</p><p>第一次使用<code>pushd</code>命令时，会将当前目录先放入堆栈，然后将所要进入的目录也放入堆栈，位置在前一个记录的上方。以后每次使用<code>pushd</code>命令，都会将所要进入的目录，放在堆栈的顶部。</p><p><code>popd</code>命令不带有参数时，会移除堆栈的顶部记录，并进入新的栈顶目录（即原来的第二条目录）。</p><p>下面是一个例子。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 当前处在主目录，堆栈为空</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pwd</span></span>
<span class="line"><span style="color:#B392F0;">/home/me</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 进入 /home/me/foo</span></span>
<span class="line"><span style="color:#6A737D;"># 当前堆栈为 /home/me/foo /home/me</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pushd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/foo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 进入 /etc</span></span>
<span class="line"><span style="color:#6A737D;"># 当前堆栈为 /etc /home/me/foo /home/me</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pushd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 进入 /home/me/foo</span></span>
<span class="line"><span style="color:#6A737D;"># 当前堆栈为 /home/me/foo /home/me</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">popd</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 进入 /home/me</span></span>
<span class="line"><span style="color:#6A737D;"># 当前堆栈为 /home/me</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">popd</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 目录不变，当前堆栈为空</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">popd</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 当前处在主目录，堆栈为空</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pwd</span></span>
<span class="line"><span style="color:#6F42C1;">/home/me</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 进入 /home/me/foo</span></span>
<span class="line"><span style="color:#6A737D;"># 当前堆栈为 /home/me/foo /home/me</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pushd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/foo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 进入 /etc</span></span>
<span class="line"><span style="color:#6A737D;"># 当前堆栈为 /etc /home/me/foo /home/me</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pushd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 进入 /home/me/foo</span></span>
<span class="line"><span style="color:#6A737D;"># 当前堆栈为 /home/me/foo /home/me</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">popd</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 进入 /home/me</span></span>
<span class="line"><span style="color:#6A737D;"># 当前堆栈为 /home/me</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">popd</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 目录不变，当前堆栈为空</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">popd</span></span></code></pre></div><p>这两个命令的参数如下。</p><p><strong>（1）-n 参数</strong></p><p><code>-n</code>的参数表示仅操作堆栈，不改变目录。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">popd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-n</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">popd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-n</span></span></code></pre></div><p>上面的命令仅删除堆栈顶部的记录，不改变目录，执行完成后还停留在当前目录。</p><p><strong>（2）整数参数</strong></p><p>这两个命令还可以接受一个整数作为参数，该整数表示堆栈中指定位置的记录（从0开始）。<code>pushd</code>命令会把这条记录移动到栈顶，同时切换到该目录；<code>popd</code>则从堆栈中删除这条记录，不会切换目录。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 将从栈顶算起的3号目录（从0开始）移动到栈顶，同时切换到该目录</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pushd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">+3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将从栈底算起的3号目录（从0开始）移动到栈顶，同时切换到该目录</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pushd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除从栈顶算起的3号目录（从0开始），不改变当前目录</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">popd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">+3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除从栈底算起的3号目录（从0开始），不改变当前目录</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">popd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 将从栈顶算起的3号目录（从0开始）移动到栈顶，同时切换到该目录</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pushd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">+3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将从栈底算起的3号目录（从0开始）移动到栈顶，同时切换到该目录</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pushd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除从栈顶算起的3号目录（从0开始），不改变当前目录</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">popd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">+3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除从栈底算起的3号目录（从0开始），不改变当前目录</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">popd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-3</span></span></code></pre></div><p>上面例子的整数编号都是从0开始计算，<code>popd +0</code>是删除第一个目录，<code>popd +1</code>是删除第二个，<code>popd -0</code>是删除最后一个目录，<code>popd -1</code>是删除倒数第二个。</p><p><strong>（3）目录参数</strong></p><p><code>pushd</code>可以接受一个目录作为参数，表示将该目录放到堆栈顶部，并进入该目录。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pushd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dir</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pushd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dir</span></span></code></pre></div><p><code>popd</code>没有这个参数。</p><h2 id="dirs-命令" tabindex="-1">dirs 命令 <a class="header-anchor" href="#dirs-命令" aria-label="Permalink to &quot;dirs 命令&quot;">​</a></h2><p><code>dirs</code>命令可以显示目录堆栈的内容，一般用来查看<code>pushd</code>和<code>popd</code>操作后的结果。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dirs</span></span>
<span class="line"><span style="color:#F97583;">~</span><span style="color:#E1E4E8;">/foo/bar </span><span style="color:#F97583;">~</span><span style="color:#E1E4E8;">/foo </span><span style="color:#F97583;">~</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dirs</span></span>
<span class="line"><span style="color:#D73A49;">~</span><span style="color:#24292E;">/foo/bar </span><span style="color:#D73A49;">~</span><span style="color:#24292E;">/foo </span><span style="color:#D73A49;">~</span></span></code></pre></div><p>该命令会输出一行文本，列出目录堆栈，目录之间使用空格分隔。栈顶（最晚入栈的目录）在最左边，栈底（最早入栈的目录）在最右边。</p><p>它有以下参数。</p><ul><li><code>-c</code>：清空目录栈。</li><li><code>-l</code>：用户主目录不显示波浪号前缀，而打印完整的目录。</li><li><code>-p</code>：每行一个条目打印目录栈，默认是打印在一行。</li><li><code>-v</code>：每行一个条目，每个条目之前显示位置编号（从0开始）。</li><li><code>+N</code>：<code>N</code>为整数，表示显示堆顶算起的第 N 个目录，从零开始。</li><li><code>-N</code>：<code>N</code>为整数，表示显示堆底算起的第 N 个目录，从零开始。</li></ul>`,34),e=[o];function c(t,r,d,i,y,h){return a(),n("div",null,e)}const u=s(l,[["render",c]]);export{F as __pageData,u as default};
