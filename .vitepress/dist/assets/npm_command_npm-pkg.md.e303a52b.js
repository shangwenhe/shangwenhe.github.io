import{_ as s,o as a,c as p,Q as n}from"./chunks/framework.681fc4ae.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"npm/command/npm-pkg.md","filePath":"npm/command/npm-pkg.md"}'),o={name:"npm/command/npm-pkg.md"},l=n(`<h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pkg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get</span><span style="color:#E1E4E8;"> [&lt;field&gt; [.&lt;subfield&gt; </span><span style="color:#9ECBFF;">...]]</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pkg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">fiel</span><span style="color:#E1E4E8;">d</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">=</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">valu</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> [.&lt;subfield&gt;=&lt;value&gt; </span><span style="color:#9ECBFF;">...]</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pkg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">delete</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">fiel</span><span style="color:#E1E4E8;">d</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> [.&lt;subfield&gt; </span><span style="color:#9ECBFF;">...]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pkg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get</span><span style="color:#24292E;"> [&lt;field&gt; [.&lt;subfield&gt; </span><span style="color:#032F62;">...]]</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pkg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">fiel</span><span style="color:#24292E;">d</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">=</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">valu</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> [.&lt;subfield&gt;=&lt;value&gt; </span><span style="color:#032F62;">...]</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pkg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">delete</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">fiel</span><span style="color:#24292E;">d</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> [.&lt;subfield&gt; </span><span style="color:#032F62;">...]</span></span></code></pre></div><h2 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h2><p>自动管理文件的命令<code>package.json</code>。<code>npm pkg</code>提供 3 个不同的子命令，允许您修改或检索<code>package.json</code>.</p><p>检索和设置字段的语法是在您的 中找到的嵌套对象属性的点分隔表示<code>package.json</code>，它与从注册表清单中检索信息所使用的表示法相同<code>npm view</code>，您可以在下面找到有关如何使用它的更多示例。</p><p>返回值始终为<strong>json</strong>格式。</p><ul><li><p><code>npm pkg get &lt;field&gt;</code></p><p><code>key</code>检索文件中定义的值<code>package.json</code>。</p><p>例如，为了检索当前包的名称，您可以运行：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span></code></pre></div></li></ul><p>npm pkg get name</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">也可以一次检索多个值：</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`bash</span></span>
<span class="line"><span style="color:#e1e4e8;">npm pkg get name version</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">也可以一次检索多个值：</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">\`\`\`bash</span></span>
<span class="line"><span style="color:#24292e;">npm pkg get name version</span></span></code></pre></div><p>您可以通过用句点分隔来查看子字段。要检索测试值的值<code>script</code>，您可以运行以下命令：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pkg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">scripts.test</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pkg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">scripts.test</span></span></code></pre></div><p>对于数组字段，请求非数字字段将返回列表中对象的所有值。例如，要获取某个包的所有贡献者电子邮件，您可以运行：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pkg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">contributors.email</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pkg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">contributors.email</span></span></code></pre></div><p>您还可以使用方括号中的数字索引来专门选择数组字段中的项目。要获取列表中第一个贡献者的电子邮件地址，您可以运行：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pkg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">contributors[</span><span style="color:#79B8FF;">0</span><span style="color:#9ECBFF;">].email</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pkg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">contributors[</span><span style="color:#005CC5;">0</span><span style="color:#032F62;">].email</span></span></code></pre></div><ul><li><p><code>npm pkg set &lt;field&gt;=&lt;value&gt;</code></p><p>根据值设置<code>value</code>您的a 。保存到文件时，使用与文件相关的其他 cli 命令中使用的相同规则集，确保尊重现有缩进，并可能在将值保存到文件之前应用一些验证。<code>package.json\`\`field\`\`package.json\`\`npm install\`\`package.json</code></p><p>用于从包中检索值的相同语法也可用于定义新属性或覆盖现有属性，下面是如何使用点分隔语法来编辑文件的一些示例<code>package.json</code>。</p><p><code>mynewcommand</code>定义一个名为您的新 bin<code>package.json</code>并指向一个文件<code>cli.js</code>：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pkg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bin.mynewcommand=cli.js</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pkg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bin.mynewcommand=cli.js</span></span></code></pre></div><p>也可以一次设置多个字段：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pkg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">description=&#39;Awesome package&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">engines.node=&#39;&gt;=10&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pkg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">description=&#39;Awesome package&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">engines.node=&#39;&gt;=10&#39;</span></span></code></pre></div><p>还可以添加到数组值，例如添加新的贡献者条目：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pkg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">contributors[</span><span style="color:#79B8FF;">0</span><span style="color:#9ECBFF;">].name=&#39;Foo&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">contributors[</span><span style="color:#79B8FF;">0</span><span style="color:#9ECBFF;">].email=&#39;foo@bar.ca&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pkg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">contributors[</span><span style="color:#005CC5;">0</span><span style="color:#032F62;">].name=&#39;Foo&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">contributors[</span><span style="color:#005CC5;">0</span><span style="color:#032F62;">].email=&#39;foo@bar.ca&#39;</span></span></code></pre></div><p>您还可以使用特殊的空括号表示法将项目附加到数组的末尾：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pkg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">contributors[].name=&#39;Foo&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">contributors[].name=&#39;Bar&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pkg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">contributors[].name=&#39;Foo&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">contributors[].name=&#39;Bar&#39;</span></span></code></pre></div><p>还可以在将值保存到<code>package.json</code>文件之前将其解析为 json，例如为了设置<code>&quot;private&quot;: true</code>属性：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pkg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">private=</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--json</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pkg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">private=</span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--json</span></span></code></pre></div><p>它还可以将值保存为数字：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pkg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tap.timeout=</span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--json</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pkg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tap.timeout=</span><span style="color:#005CC5;">60</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--json</span></span></code></pre></div></li><li><p><code>npm pkg delete &lt;key&gt;</code></p><p>从<code>key</code>您的<code>package.json</code></p><p>用于从包中设置值的相同语法也可用于删除现有值。例如，为了删除名为 build 的脚本：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pkg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">delete</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">scripts.build</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pkg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">delete</span><span style="color:#24292E;"> </span><span style="color:#032F62;">scripts.build</span></span></code></pre></div></li></ul><h2 id="workspaces-support" tabindex="-1"><code>workspaces-support</code> <a class="header-anchor" href="#workspaces-support" aria-label="Permalink to &quot;\`workspaces-support\`&quot;">​</a></h2><p>您可以使用<code>workspace</code>或<code>workspaces</code>config 选项在配置的工作区中设置/获取/删除项目。</p><p>例如，<code>funding</code>在项目的所有已配置工作区中设置一个值：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pkg设置资金=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://example.com</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--ws</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pkg设置资金=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://example.com</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--ws</span></span></code></pre></div><p>当用于<code>npm pkg get</code>从配置的工作区检索信息时，返回的结果将采用 json 格式，其中顶级键是每个工作区的名称，这些键的值将是从每个配置的工作区返回的结果值，例如:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pkg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">version</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--ws</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">&quot;a&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">&quot;name&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;a&quot;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">&quot;version&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;1.0.0&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">&quot;b&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">&quot;name&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;b&quot;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">&quot;version&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;1.0.0&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pkg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">version</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--ws</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">&quot;a&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">&quot;name&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;a&quot;,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">&quot;version&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;1.0.0&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">&quot;b&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">&quot;name&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;b&quot;,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">&quot;version&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;1.0.0&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="configuration" tabindex="-1"><code>configuration</code> <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;\`configuration\`&quot;">​</a></h2><h2 id="force" tabindex="-1"><code>force</code> <a class="header-anchor" href="#force" aria-label="Permalink to &quot;\`force\`&quot;">​</a></h2><ul><li>默认值：假</li><li>类型：布尔值</li></ul><p>删除针对不幸的副作用、常见错误、不必要的性能下降和恶意输入的各种保护措施。</p><ul><li>允许在全局安装中破坏非 npm 文件。</li><li>允许该<code>npm version</code>命令在不干净的 git 存储库上运行。</li><li>允许删除缓存文件夹<code>npm cache clean</code>。</li><li><code>engines</code>允许安装具有需要不同版本 npm 的声明的软件包。</li><li>即使已启用，也允许安装<code>engines</code>具有需要不同版本的声明的软件包。<code>node\`\`--engine-strict</code></li><li>允许<code>npm audit fix</code>安装超出指定依赖范围的模块（包括 SemVer 重大更改）。</li><li>允许取消发布已发布包的所有版本。</li><li>允许在根项目中安装冲突的peerDependency。</li><li><code>--yes</code>在 期间隐式设置<code>npm init</code>。</li><li>允许破坏现有值<code>npm pkg</code></li></ul><p>如果您不清楚自己要做什么，强烈建议您不要使用此选项！</p><h2 id="json" tabindex="-1"><code>json</code> <a class="header-anchor" href="#json" aria-label="Permalink to &quot;\`json\`&quot;">​</a></h2><ul><li>默认值：假</li><li>类型：布尔值</li></ul><p>是否输出JSON数据，而不是正常输出。</p><ul><li>它允许在<code>npm pkg set</code>将设置值保存到您的<code>package.json</code>.</li></ul><p>并非所有 npm 命令都支持。</p><h2 id="workspace" tabindex="-1"><code>workspace</code> <a class="header-anchor" href="#workspace" aria-label="Permalink to &quot;\`workspace\`&quot;">​</a></h2><ul><li>默认：</li><li>类型：String（可设置多次）</li></ul><p>允许在当前项目的已配置工作区上下文中运行命令，同时通过仅运行此配置选项定义的工作区进行过滤。</p><p>配置的有效值为<code>workspace</code>：</p><ul><li>工作区名称</li><li>工作区目录的路径</li><li>父工作区目录的路径（将导致选择所有嵌套工作区）</li></ul><p>当设置该<code>npm init</code>命令时，可以将其设置为尚不存在的工作空间的文件夹，以创建该文件夹并将其设置为项目中的全新工作空间。</p><p>该值不会导出到子进程的环境中。</p><h2 id="workspaces" tabindex="-1"><code>workspaces</code> <a class="header-anchor" href="#workspaces" aria-label="Permalink to &quot;\`workspaces\`&quot;">​</a></h2><ul><li>默认值：假</li><li>类型：布尔值</li></ul><p><strong>允许在所有</strong>已配置工作区的上下文中运行命令。</p><p>该值不会导出到子进程的环境中。</p>`,44),e=[l];function c(t,r,i,y,E,d){return a(),p("div",null,e)}const u=s(o,[["render",c]]);export{g as __pageData,u as default};