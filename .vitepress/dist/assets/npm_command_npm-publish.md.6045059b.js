import{_ as e,o as s,c as o,Q as a}from"./chunks/framework.681fc4ae.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"npm/command/npm-publish.md","filePath":"npm/command/npm-publish.md"}'),l={name:"npm/command/npm-publish.md"},c=a('<h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">publish</span><span style="color:#E1E4E8;"> [&lt;tarball&gt;</span><span style="color:#F97583;">|&lt;</span><span style="color:#E1E4E8;">folder</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">] [--tag </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">tag</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">] [--access </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">public</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">restricted</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">] [--otp otpcode] [--dry-run]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#B392F0;">Publishes</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;.&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">no</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">argument</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">supplied</span></span>\n<span class="line"><span style="color:#B392F0;">Sets</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tag</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;latest&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">no</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--tag</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">specified</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">publish</span><span style="color:#24292E;"> [&lt;tarball&gt;</span><span style="color:#D73A49;">|&lt;</span><span style="color:#24292E;">folder</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">] [--tag </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">tag</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">] [--access </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">public</span><span style="color:#D73A49;">|</span><span style="color:#24292E;">restricted</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">] [--otp otpcode] [--dry-run]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6F42C1;">Publishes</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;.&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">if</span><span style="color:#24292E;"> </span><span style="color:#032F62;">no</span><span style="color:#24292E;"> </span><span style="color:#032F62;">argument</span><span style="color:#24292E;"> </span><span style="color:#032F62;">supplied</span></span>\n<span class="line"><span style="color:#6F42C1;">Sets</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tag</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;latest&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">if</span><span style="color:#24292E;"> </span><span style="color:#032F62;">no</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--tag</span><span style="color:#24292E;"> </span><span style="color:#032F62;">specified</span></span></code></pre></div><h2 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h2><p>将软件包发布到注册表，以便可以按名称安装。</p><p>默认情况下，npm 将发布到公共注册表。这可以通过指定不同的默认注册表或<code>scope</code>](<a href="https://docs.npmjs.com/cli/v7/using-npm/scope" target="_blank" rel="noreferrer">https://docs.npmjs.com/cli/v7/using-npm/scope</a>)在名称中使用 来覆盖（请参阅参考资料[<code>package.json</code>）。</p><ul><li><code>&lt;folder&gt;</code>：包含 package.json 文件的文件夹</li><li><code>&lt;tarball&gt;</code>：gzip 压缩的 tar 存档的 url 或文件路径，其中包含单个文件夹，其中包含 package.json 文件。</li><li><code>[--tag &lt;tag&gt;]</code>：使用给定标签注册已发布的包，以便<code>npm install &lt;name&gt;@&lt;tag&gt;</code>安装此版本。默认情况下，<code>npm publish</code>更新并<code>npm install</code>安装<code>latest</code>标签。<code>npm-dist-tag</code>有关标签的详细信息，请参阅。</li><li><code>[--access &lt;public|restricted&gt;]</code>：告诉注册表该软件包应该作为公共发布还是受限制发布。仅适用于作用域包，默认为<code>restricted</code>. 如果您没有付费帐户，则必须通过发布<code>--access public</code>来发布范围内的包。</li><li><code>[--otp &lt;otpcode&gt;]</code>：如果您在模式下启用了双因素身份验证，<code>auth-and-writes</code>那么您可以使用身份验证器提供一个代码。如果您不包含此内容并且您是从 TTY 运行，那么系统会提示您。</li><li><code>[--dry-run]</code>：截至<code>npm@6</code>，除了实际发布到注册表之外，是否所有发布都会执行。报告将要发布的内容的详细信息。</li><li><code>[--workspaces]</code>：发布时启用工作区上下文。所有工作区包都将被发布。</li><li><code>[--workspace]</code>：启用工作区上下文并将结果限制为仅此配置项指定的结果。仅发布给定工作区中的包。</li></ul><p>如果包名称和版本组合已存在于指定的注册表中，则发布将失败。</p><p>一旦使用给定名称和版本发布了包，该特定名称和版本组合就永远不能再次使用，即使使用<code>npm unpublish</code>.</p><p>从 开始<code>npm@5</code>，tarball 的 sha1sum 和带有 sha512sum 的完整性字段都将在发布期间提交给注册表。后续安装将使用最强大的支持算法来验证下载。</p><p>与<code>--dry-run</code>see类似<code>npm pack</code>，它会找出要包含的文件并将它们打包到 tarball 中以上传到注册表。</p><h2 id="files-included-in-package" tabindex="-1"><code>files-included-in-package</code> <a class="header-anchor" href="#files-included-in-package" aria-label="Permalink to &quot;`files-included-in-package`&quot;">​</a></h2><p>要查看包中将包含哪些内容，请运行<code>npx npm-packlist</code>. 默认情况下包含所有文件，但以下情况除外：</p><ul><li><p>始终包含与软件包安装和分发相关的某些文件。例如，<code>package.json</code>、<code>README.md</code>、<code>LICENSE</code>、 等等。</p></li><li><p>如果 中有“文件”列表<code>package.json</code>，则仅包含指定的文件。（如果指定了目录，那么将递归地遍历它们并包含它们的内容，遵循相同的忽略规则。）</p></li><li><p>如果存在<code>.gitignore</code>或<code>.npmignore</code>文件，则该文件中被忽略的文件和所有子目录将从包中排除。如果<em>两个</em>文件都存在，则<code>.gitignore</code>忽略 ，仅<code>.npmignore</code>使用 。</p><p><code>.npmignore</code>文件遵循与文件<code>_ignoring``.gitignore</code></p></li><li><p>如果文件与某些模式匹配，则<em>永远</em>不会包含该文件，除非显式添加到<code>&quot;files&quot;</code>中的列表，或者使用 或文件中的规则<code>package.json</code>未忽略。<code>!``.npmignore``.gitignore</code></p></li><li><p>符号链接永远不会包含在 npm 包中。</p></li></ul><p><code>developers</code>有关已发布的包中包含的内容的完整详细信息，以及有关如何构建该包的详细信息，请参阅参考资料。</p><h2 id="configuration" tabindex="-1"><code>configuration</code> <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;`configuration`&quot;">​</a></h2><h2 id="tag" tabindex="-1"><code>tag</code> <a class="header-anchor" href="#tag" aria-label="Permalink to &quot;`tag`&quot;">​</a></h2><ul><li>Default: &quot;latest&quot;</li><li>Type: String</li></ul><p>如果你要求 npm 安装一个包并且不告诉它具体的版本，那么它会安装指定的标签。</p><p>如果没有给出显式标记，还有添加到命令指定的 package@version 的标记<code>npm tag</code>。</p><p>当由命令使用时<code>npm diff</code>，这是用于获取默认情况下将与本地文件进行比较的 tarball 的标签。</p><h2 id="access" tabindex="-1"><code>access</code> <a class="header-anchor" href="#access" aria-label="Permalink to &quot;`access`&quot;">​</a></h2><ul><li>默认值： &#39;restricted&#39; for scoped packages, &#39;public&#39; for unscoped packages “restricted”适用于有作用域的包，“public”适用于无作用域的包</li><li>类型：null、“受限”或“公共”</li></ul><p>发布作用域包时，访问级别默认为<code>restricted</code>. 如果您希望您的作用域包可供公开查看（和安装），请设置<code>--access=public</code>. 唯一有效的值为<code>access</code>和<code>public</code>。<code>restricted</code>无范围包的访问级别<em>始终</em>为<code>public</code>.</p><p>注意：在命令<code>--access</code>上使用标志<code>npm publish</code>只会在包的初始发布时设置包访问级别。使用该标志的任何后续<code>npm publish</code>命令都<code>--access</code>不会影响访问级别。要在初始发布使用后更改访问级别<code>npm access</code>。</p><h2 id="dry-run" tabindex="-1"><code>dry-run</code> <a class="header-anchor" href="#dry-run" aria-label="Permalink to &quot;`dry-run`&quot;">​</a></h2><ul><li>默认值：假</li><li>类型：布尔值</li></ul><p>表示您不希望 npm 进行任何更改，并且它应该只报告它会执行的操作。这可以传递到任何修改本地安装的命令中，例如<code>install</code>、<code>update</code>、<code>dedupe</code>、<code>uninstall</code>以及<code>pack</code>和<code>publish</code>。</p><p>注意：其他网络相关命令不支持这一点，例如<code>dist-tags</code>、<code>owner</code>等。</p><h2 id="otp" tabindex="-1"><code>otp</code> <a class="header-anchor" href="#otp" aria-label="Permalink to &quot;`otp`&quot;">​</a></h2><ul><li>Default: null</li><li>Type: null or String</li></ul><p>这是来自双因素身份验证器的一次性密码。使用 发布或更改包权限时需要它<code>npm access</code>。</p><p>如果未设置，并且注册表响应因询问一次性密码而失败，则 npm 将在命令行上提示输入密码。</p><h2 id="workspace" tabindex="-1"><code>workspace</code> <a class="header-anchor" href="#workspace" aria-label="Permalink to &quot;`workspace`&quot;">​</a></h2><ul><li>默认：</li><li>类型：String（可设置多次）</li></ul><p>允许在当前项目的已配置工作区上下文中运行命令，同时通过仅运行此配置选项定义的工作区进行过滤。</p><p>配置的有效值为<code>workspace</code>：</p><ul><li>工作区名称</li><li>工作区目录的路径</li><li>父工作区目录的路径（将导致选择所有嵌套工作区）</li></ul><p>当设置该<code>npm init</code>命令时，可以将其设置为尚不存在的工作空间的文件夹，以创建该文件夹并将其设置为项目中的全新工作空间。</p><p>该值不会导出到子进程的环境中。</p><h2 id="workspaces" tabindex="-1"><code>workspaces</code> <a class="header-anchor" href="#workspaces" aria-label="Permalink to &quot;`workspaces`&quot;">​</a></h2><ul><li>默认值：假</li><li>类型：布尔值</li></ul><p><strong>允许在所有</strong>已配置工作区的上下文中运行命令。</p><p>该值不会导出到子进程的环境中。</p>',43),p=[c];function n(t,r,d,i,u,E){return s(),o("div",null,p)}const g=e(l,[["render",n]]);export{h as __pageData,g as default};
