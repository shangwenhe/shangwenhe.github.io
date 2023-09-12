import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.b2e9bf53.js";const u=JSON.parse('{"title":"File 对象，FileList 对象，FileReader 对象","description":"","frontmatter":{},"headers":[],"relativePath":"js/bom/file.md","filePath":"js/bom/file.md"}'),e={name:"js/bom/file.md"},p=l(`<h1 id="file-对象-filelist-对象-filereader-对象" tabindex="-1">File 对象，FileList 对象，FileReader 对象 <a class="header-anchor" href="#file-对象-filelist-对象-filereader-对象" aria-label="Permalink to &quot;File 对象，FileList 对象，FileReader 对象&quot;">​</a></h1><h2 id="file-对象" tabindex="-1">File 对象 <a class="header-anchor" href="#file-对象" aria-label="Permalink to &quot;File 对象&quot;">​</a></h2><p>File 对象代表一个文件，用来读写文件信息。它继承了 Blob 对象，或者说是一种特殊的 Blob 对象，所有可以使用 Blob 对象的场合都可以使用它。</p><p>最常见的使用场合是表单的文件上传控件（<code>&lt;input type=&quot;file&quot;&gt;</code>），用户选中文件以后，浏览器就会生成一个数组，里面是每一个用户选中的文件，它们都是 File 实例对象。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// HTML 代码如下</span></span>
<span class="line"><span style="color:#6A737D;">// &lt;input id=&quot;fileItem&quot; type=&quot;file&quot;&gt;</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> file </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fileItem&#39;</span><span style="color:#E1E4E8;">).files[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">file </span><span style="color:#F97583;">instanceof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">File</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// HTML 代码如下</span></span>
<span class="line"><span style="color:#6A737D;">// &lt;input id=&quot;fileItem&quot; type=&quot;file&quot;&gt;</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> file </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fileItem&#39;</span><span style="color:#24292E;">).files[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">file </span><span style="color:#D73A49;">instanceof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">File</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// true</span></span></code></pre></div><p>上面代码中，<code>file</code>是用户选中的第一个文件，它是 File 的实例。</p><h3 id="构造函数" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数" aria-label="Permalink to &quot;构造函数&quot;">​</a></h3><p>浏览器原生提供一个<code>File()</code>构造函数，用来生成 File 实例对象。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">File</span><span style="color:#E1E4E8;">(array, name [, options])</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">File</span><span style="color:#24292E;">(array, name [, options])</span></span></code></pre></div><p><code>File()</code>构造函数接受三个参数。</p><ul><li>array：一个数组，成员可以是二进制对象或字符串，表示文件的内容。</li><li>name：字符串，表示文件名或文件路径。</li><li>options：配置对象，设置实例的属性。该参数可选。</li></ul><p>第三个参数配置对象，可以设置两个属性。</p><ul><li>type：字符串，表示实例对象的 MIME 类型，默认值为空字符串。</li><li>lastModified：时间戳，表示上次修改的时间，默认为<code>Date.now()</code>。</li></ul><p>下面是一个例子。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> file </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">File</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;foo&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;foo.txt&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;text/plain&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> file </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">File</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;foo&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;foo.txt&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#032F62;">&#39;text/plain&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre></div><h3 id="实例属性和实例方法" tabindex="-1">实例属性和实例方法 <a class="header-anchor" href="#实例属性和实例方法" aria-label="Permalink to &quot;实例属性和实例方法&quot;">​</a></h3><p>File 对象有以下实例属性。</p><ul><li>File.lastModified：最后修改时间</li><li>File.name：文件名或文件路径</li><li>File.size：文件大小（单位字节）</li><li>File.type：文件的 MIME 类型</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> myFile </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">File</span><span style="color:#E1E4E8;">([], </span><span style="color:#9ECBFF;">&#39;file.bin&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  lastModified: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2018</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">myFile.lastModified </span><span style="color:#6A737D;">// 1517414400000</span></span>
<span class="line"><span style="color:#E1E4E8;">myFile.name </span><span style="color:#6A737D;">// &quot;file.bin&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">myFile.size </span><span style="color:#6A737D;">// 0</span></span>
<span class="line"><span style="color:#E1E4E8;">myFile.type </span><span style="color:#6A737D;">// &quot;&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> myFile </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">File</span><span style="color:#24292E;">([], </span><span style="color:#032F62;">&#39;file.bin&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  lastModified: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2018</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">myFile.lastModified </span><span style="color:#6A737D;">// 1517414400000</span></span>
<span class="line"><span style="color:#24292E;">myFile.name </span><span style="color:#6A737D;">// &quot;file.bin&quot;</span></span>
<span class="line"><span style="color:#24292E;">myFile.size </span><span style="color:#6A737D;">// 0</span></span>
<span class="line"><span style="color:#24292E;">myFile.type </span><span style="color:#6A737D;">// &quot;&quot;</span></span></code></pre></div><p>上面代码中，由于<code>myFile</code>的内容为空，也没有设置 MIME 类型，所以<code>size</code>属性等于0，<code>type</code>属性等于空字符串。</p><p>File 对象没有自己的实例方法，由于继承了 Blob 对象，因此可以使用 Blob 的实例方法<code>slice()</code>。</p><h2 id="filelist-对象" tabindex="-1">FileList 对象 <a class="header-anchor" href="#filelist-对象" aria-label="Permalink to &quot;FileList 对象&quot;">​</a></h2><p><code>FileList</code>对象是一个类似数组的对象，代表一组选中的文件，每个成员都是一个 File 实例。它主要出现在两个场合。</p><ul><li>文件控件节点（<code>&lt;input type=&quot;file&quot;&gt;</code>）的<code>files</code>属性，返回一个 FileList 实例。</li><li>拖拉一组文件时，目标区的<code>DataTransfer.files</code>属性，返回一个 FileList 实例。</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// HTML 代码如下</span></span>
<span class="line"><span style="color:#6A737D;">// &lt;input id=&quot;fileItem&quot; type=&quot;file&quot;&gt;</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> files </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fileItem&#39;</span><span style="color:#E1E4E8;">).files;</span></span>
<span class="line"><span style="color:#E1E4E8;">files </span><span style="color:#F97583;">instanceof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">FileList</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// HTML 代码如下</span></span>
<span class="line"><span style="color:#6A737D;">// &lt;input id=&quot;fileItem&quot; type=&quot;file&quot;&gt;</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> files </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fileItem&#39;</span><span style="color:#24292E;">).files;</span></span>
<span class="line"><span style="color:#24292E;">files </span><span style="color:#D73A49;">instanceof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">FileList</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// true</span></span></code></pre></div><p>上面代码中，文件控件的<code>files</code>属性是一个 FileList 实例。</p><p>FileList 的实例属性主要是<code>length</code>，表示包含多少个文件。</p><p>FileList 的实例方法主要是<code>item()</code>，用来返回指定位置的实例。它接受一个整数作为参数，表示位置的序号（从零开始）。但是，由于 FileList 的实例是一个类似数组的对象，可以直接用方括号运算符，即<code>myFileList[0]</code>等同于<code>myFileList.item(0)</code>，所以一般用不到<code>item()</code>方法。</p><h2 id="filereader-对象" tabindex="-1">FileReader 对象 <a class="header-anchor" href="#filereader-对象" aria-label="Permalink to &quot;FileReader 对象&quot;">​</a></h2><p>FileReader 对象用于读取 File 对象或 Blob 对象所包含的文件内容。</p><p>浏览器原生提供一个<code>FileReader</code>构造函数，用来生成 FileReader 实例。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> reader </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">FileReader</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> reader </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">FileReader</span><span style="color:#24292E;">();</span></span></code></pre></div><p>FileReader 有以下的实例属性。</p><ul><li>FileReader.error：读取文件时产生的错误对象</li><li>FileReader.readyState：整数，表示读取文件时的当前状态。一共有三种可能的状态，<code>0</code>表示尚未加载任何数据，<code>1</code>表示数据正在加载，<code>2</code>表示加载完成。</li><li>FileReader.result：读取完成后的文件内容，有可能是字符串，也可能是一个 ArrayBuffer 实例。</li><li>FileReader.onabort：<code>abort</code>事件（用户终止读取操作）的监听函数。</li><li>FileReader.onerror：<code>error</code>事件（读取错误）的监听函数。</li><li>FileReader.onload：<code>load</code>事件（读取操作完成）的监听函数，通常在这个函数里面使用<code>result</code>属性，拿到文件内容。</li><li>FileReader.onloadstart：<code>loadstart</code>事件（读取操作开始）的监听函数。</li><li>FileReader.onloadend：<code>loadend</code>事件（读取操作结束）的监听函数。</li><li>FileReader.onprogress：<code>progress</code>事件（读取操作进行中）的监听函数。</li></ul><p>下面是监听<code>load</code>事件的一个例子。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// HTML 代码如下</span></span>
<span class="line"><span style="color:#6A737D;">// &lt;input type=&quot;file&quot; onchange=&quot;onChange(event)&quot;&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">onChange</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> file </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> event.target.files[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> reader </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">FileReader</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  reader.</span><span style="color:#B392F0;">onload</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(event.target.result)</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  reader.</span><span style="color:#B392F0;">readAsText</span><span style="color:#E1E4E8;">(file);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// HTML 代码如下</span></span>
<span class="line"><span style="color:#6A737D;">// &lt;input type=&quot;file&quot; onchange=&quot;onChange(event)&quot;&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">onChange</span><span style="color:#24292E;">(</span><span style="color:#E36209;">event</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> file </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> event.target.files[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> reader </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">FileReader</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  reader.</span><span style="color:#6F42C1;">onload</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">event</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(event.target.result)</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  reader.</span><span style="color:#6F42C1;">readAsText</span><span style="color:#24292E;">(file);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>上面代码中，每当文件控件发生变化，就尝试读取第一个文件。如果读取成功（<code>load</code>事件发生），就打印出文件内容。</p><p>FileReader 有以下实例方法。</p><ul><li>FileReader.abort()：终止读取操作，<code>readyState</code>属性将变成<code>2</code>。</li><li>FileReader.readAsArrayBuffer()：以 ArrayBuffer 的格式读取文件，读取完成后<code>result</code>属性将返回一个 ArrayBuffer 实例。</li><li>FileReader.readAsBinaryString()：读取完成后，<code>result</code>属性将返回原始的二进制字符串。</li><li>FileReader.readAsDataURL()：读取完成后，<code>result</code>属性将返回一个 Data URL 格式（Base64 编码）的字符串，代表文件内容。对于图片文件，这个字符串可以用于<code>&lt;img&gt;</code>元素的<code>src</code>属性。注意，这个字符串不能直接进行 Base64 解码，必须把前缀<code>data:*/*;base64,</code>从字符串里删除以后，再进行解码。</li><li>FileReader.readAsText()：读取完成后，<code>result</code>属性将返回文件内容的文本字符串。该方法的第一个参数是代表文件的 Blob 实例，第二个参数是可选的，表示文本编码，默认为 UTF-8。</li></ul><p>下面是一个例子。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/* HTML 代码如下</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;input type=&quot;file&quot; onchange=&quot;previewFile()&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;img src=&quot;&quot; height=&quot;200&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">previewFile</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> preview </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;img&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> file    </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;input[type=file]&#39;</span><span style="color:#E1E4E8;">).files[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> reader  </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">FileReader</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  reader.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;load&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    preview.src </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> reader.result;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (file) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    reader.</span><span style="color:#B392F0;">readAsDataURL</span><span style="color:#E1E4E8;">(file);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/* HTML 代码如下</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;input type=&quot;file&quot; onchange=&quot;previewFile()&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;img src=&quot;&quot; height=&quot;200&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">previewFile</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> preview </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">querySelector</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;img&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> file    </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">querySelector</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;input[type=file]&#39;</span><span style="color:#24292E;">).files[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> reader  </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">FileReader</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  reader.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;load&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    preview.src </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> reader.result;</span></span>
<span class="line"><span style="color:#24292E;">  }, </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (file) {</span></span>
<span class="line"><span style="color:#24292E;">    reader.</span><span style="color:#6F42C1;">readAsDataURL</span><span style="color:#24292E;">(file);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>上面代码中，用户选中图片文件以后，脚本会自动读取文件内容，然后作为一个 Data URL 赋值给<code>&lt;img&gt;</code>元素的<code>src</code>属性，从而把图片展示出来。</p>`,42),o=[p];function t(c,r,i,y,E,d){return a(),n("div",null,o)}const f=s(e,[["render",t]]);export{u as __pageData,f as default};
