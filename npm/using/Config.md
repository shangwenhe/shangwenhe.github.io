
## 描述

npm 从以下来源获取其配置值，按优先级排序：

## `command-line-flags`

放在`--foo bar`命令行上将`foo`配置参数设置为`"bar"`。参数`--`告诉 cli 解析器停止读取标志。在不指定任何值的情况下使用`--flag`会将值设置为`true`。

示例：`--flag1 --flag2`将两个配置参数设置为`true`、同时`--flag1 --flag2 bar`将设置`flag1`为`true`、`flag2`和`bar`。最后，`--flag1 --flag2 -- bar`将两个配置参数设置为`true`，并将`bar`视为命令参数。

## `environment-variables`

任何以 开头的环境变量都`npm_config_`将被解释为配置参数。例如，放入`npm_config_foo=bar`您的环境中会将`foo`配置参数设置为`bar`. 任何未指定值的环境配置都将指定为 的值`true`。配置值不区分大小写，因此`NPM_CONFIG_FOO=bar`工作原理相同。但是，请注意，`scripts`。

请注意，您需要使用下划线而不是破折号，因此`--allow-same-version`将变成`npm_config_allow_same_version=true`.

## `npmrc-files`

四个相关文件是：

- 每个项目的配置文件 ( `/path/to/my/project/.npmrc`)
- 每个用户的配置文件（默认为`$HOME/.npmrc`；可通过 CLI 选项`--userconfig`或环境变量进行配置`$NPM_CONFIG_USERCONFIG`）
- 全局配置文件（默认为`$PREFIX/etc/npmrc`；可通过 CLI 选项`--globalconfig`或环境变量进行配置`$NPM_CONFIG_GLOBALCONFIG`）
- npm 的内置配置文件 ( `/path/to/npm/npmrc`)

有关更多详细信息，请参阅[npmrc 。](https://docs.npmjs.com/cli/v7/configuring-npm/npmrc)

## `default-configs`

运行`npm config ls -l`以查看 npm 内部的一组配置参数，如果未指定其他参数，则这些参数为默认值。

## `shorthands-and-other-cli-niceties`

在命令行上解析以下简写：

- `-a`：`--all`
- `--enjoy-by`：`--before`
- `-c`：`--call`
- `--desc`：`--description`
- `-f`：`--force`
- `-g`：`--global`
- `-L`：`--location`
- `-d`：`--loglevel info`
- `-s`：`--loglevel silent`
- `--silent`：`--loglevel silent`
- `--ddd`：`--loglevel silly`
- `--dd`：`--loglevel verbose`
- `--verbose`：`--loglevel verbose`
- `-q`：`--loglevel warn`
- `--quiet`：`--loglevel warn`
- `-l`：`--long`
- `-m`：`--message`
- `--local`：`--no-global`
- `-n`：`--no-yes`
- `--no`：`--no-yes`
- `-p`：`--parseable`
- `--porcelain`：`--parseable`
- `-C`：`--prefix`
- `--readonly`：`--read-only`
- `--reg`：`--registry`
- `-S`：`--save`
- `-B`：`--save-bundle`
- `-D`：`--save-dev`
- `-E`：`--save-exact`
- `-O`：`--save-optional`
- `-P`：`--save-prod`
- `-?`：`--usage`
- `-h`：`--usage`
- `-H`：`--usage`
- `--help`：`--usage`
- `-v`：`--version`
- `-w`：`--workspace`
- `--ws`：`--workspaces`
- `-y`：`--yes`

如果指定的配置参数明确解析为已知的配置参数，则它将扩展为该配置参数。例如：

```bash
npm ls --par
# same as:
npm ls --parseable
```

如果多个单字符简写串在一起，并且得到的组合明确不是其他配置参数，那么它就会扩展到其各个组成部分。例如：

```bash
npm ls -gpld
# same as:
npm ls --global --parseable --long --loglevel info
```

## `config-settings`

## `_auth`

- 默认值：空
- 类型：null 或 String

根据 npm 注册表进行身份验证时使用的基本身份验证字符串。

警告：通常不应通过命令行选项设置。通过运行 来使用存储在 ~/.npmrc 文件中的注册表提供的身份验证承载令牌更安全`npm login`。

## `access`

- 默认值：“restricted”适用于有作用域的包，“public”适用于无作用域的包
- 类型：null、“受限”或“公共”

发布作用域包时，访问级别默认为`restricted`. 如果您希望您的作用域包可供公开查看（和安装），请设置`--access=public`. 唯一有效的值为`access`和`public`。`restricted`无范围包的访问级别*始终*为`public`.

注意：在命令`--access`上使用标志`npm publish`只会在包的初始发布时设置包访问级别。使用该标志的任何后续`npm publish`命令都`--access`不会影响访问级别。要在初始发布使用后更改访问级别`npm access`。

## `all`

- 默认值：假
- 类型：布尔值

运行`npm outdated`和时`npm ls`，设置`--all`将显示所有过时或已安装的软件包，而不仅仅是当前项目直接依赖的软件包。

## `allow-same-version`

- 默认值：假
- 类型：布尔值

`npm version`防止在用于将新版本设置为与当前版本相同的值时引发错误。

## `audit`

- 默认值：true
- 类型：布尔值

当“true”时，将审核报告与当前 npm 命令一起提交到默认注册表和为范围配置的所有注册表。`npm audit`有关提交内容的详细信息，请参阅文档。

## `audit-level`

- 默认值：空
- 类型：null、“信息”、“低”、“中等”、“高”、“严重”或“无”

`npm audit`以非零退出代码退出的最低漏洞级别。

## `before`

- 默认值：空
- 类型：空或日期

如果传递给`npm install`，将重建 npm 树，以便仅安装该时间**或之前可用的版本。**`--before`如果当前的直接依赖项集没有可用的版本，则该命令将出错。

如果请求的版本是 a`dist-tag`并且给定的标签未通过`--before`过滤器，则将使用小于或等于该标签的最新版本。例如，即使是也`foo@latest`可能安装。`foo@1.2``latest``2.0`

## `bin-links`

- 默认值：true
- 类型：布尔值

告诉 npm 为包可执行文件创建符号链接（或`.cmd`Windows 上的垫片）。

设置为 false 以使其不执行此操作。这可以用来解决某些文件系统不支持符号链接的问题，即使在表面上的 Unix 系统上也是如此。

## `browser`

- 默认：OS X：`"open"`、Windows：`"start"`、其他：`"xdg-open"`
- 类型：null、布尔值或字符串

npm 命令调用的浏览器来打开网站。

设置`false`为抑制浏览器行为，而是将 URL 打印到终端。

设置`true`为使用默认系统 URL 打开程序。

## `ca`

- 默认值：空
- 类型：null或String（可设置多次）

与注册表的 SSL 连接受信任的证书颁发机构签名证书。值应采用 PEM 格式（Windows 称之为“Base-64 编码的 X.509 (.CER)”），并用字符串“\n”替换换行符。例如：

```ini
ca="-----BEGIN CERTIFICATE-----\nXXXX\nXXXX\n-----END CERTIFICATE-----"
```

设置为`null`仅允许“已知”注册商，或设置为仅信任该特定签名机构的特定 CA 证书。

通过指定证书数组可以信任多个 CA：

```ini
ca[]="..."
ca[]="..."
```

另请参阅`strict-ssl`配置。

## `cache`

- 默认：Windows：`%LocalAppData%\npm-cache`、Posix：`~/.npm`
- 类型：路径

npm 缓存目录的位置。看`npm cache`

## `cafile`

- 默认值：空
- 类型：路径

包含一个或多个证书颁发机构签名证书的文件的路径。与设置类似`ca`，但允许多个 CA，以及将 CA 信息存储在磁盘上的文件中。

## `call`

- 默认： ””
- 类型：字符串

的可选配套选项`npm exec`，`npx`允许指定与已安装的软件包一起运行的自定义命令。



```bash
npm exec --package yo --package generator-node --call "yo node"
```

## `cert`

- 默认值：空
- 类型：null 或 String

访问注册表时要传递的客户端证书。值应采用 PEM 格式（Windows 称之为“Base-64 编码的 X.509 (.CER)”），并用字符串“\n”替换换行符。例如：



```ini
cert="-----BEGIN CERTIFICATE-----\nXXXX\nXXXX\n-----END CERTIFICATE-----"
```

它不是*证书*文件的路径（并且没有“certfile”选项）。

## `ci-name`

- 默认值：当前 CI 系统的名称，或者`null`不在已知 CI 平台上时的名称。
- 类型：null 或 String

持续集成系统的名称。如果没有明确设置，npm 将使用该模块检测当前的 CI 环境`@npmcli/ci-detect`。

## `cidr`

- 默认值：空
- 类型：null或String（可设置多次）

这是使用命令配置受限访问令牌时要使用的 CIDR 地址列表`npm token create`。

## `color`

- 默认值：true，除非 NO_COLOR 环境设置为“0”以外的其他值
- 类型：“始终”或布尔值

如果为 false，则永远不会显示颜色。如果`"always"`那么总是显示颜色。如果为 true，则仅打印 tty 文件描述符的颜色代码。

## `commit-hooks`

- 默认值：true
- 类型：布尔值

使用`npm version`命令时运行 git commit hooks。

## `depth`

- 默认值：`Infinity`如果`--all`设置，否则`1`
- 类型：空或数字

递归包时的深度`npm ls`。

如果未设置，`npm ls`将仅显示根项目的直接依赖项。如果`--all`设置了，npm 将默认显示所有依赖项。

## `description-1`

- 默认值：true
- 类型：布尔值

显示描述于`npm search`

## `diff`

- 默认：
- 类型：String（可设置多次）

定义要在 中进行比较的参数`npm diff`。

## `diff-dst-prefix`

- 默认值：“b/”
- 类型：字符串

输出中使用的目标前缀`npm diff`。

## `diff-ignore-all-space`

- 默认值：假
- 类型：布尔值

比较 中的行时忽略空格`npm diff`。

## `diff-name-only`

- 默认值：假
- 类型：布尔值

使用 时仅打印文件名`npm diff`。

## `diff-no-prefix`

- 默认值：假
- 类型：布尔值

不要在`npm diff`输出中显示任何源或目标前缀。

注意：这会导致`npm diff`忽略`--diff-src-prefix`和`--diff-dst-prefix`配置。

## `diff-src-prefix`

- 默认值：“a/”
- 类型：字符串

输出中使用的源前缀`npm diff`。

## `diff-text`

- 默认值：假
- 类型：布尔值

将所有文件视为`npm diff`.

## `diff-unified`

- 默认值：3
- 类型：数字

要在 中打印的上下文行数`npm diff`。

## `dry-run`

- 默认值：假
- 类型：布尔值

表示您不希望 npm 进行任何更改，并且它应该只报告它会执行的操作。这可以传递到任何修改本地安装的命令中，例如`install`、`update`、`dedupe`、`uninstall`以及`pack`和`publish`。

注意：其他网络相关命令不支持这一点，例如`dist-tags`、`owner`等。

## `editor`

- 默认值：EDITOR 或 VISUAL 环境变量，或 Windows 上的“notepad.exe”，或 Unix 系统上的“vim”
- 类型：字符串

`npm edit`为和运行的命令`npm config edit`。

## `engine-strict`

- 默认值：假
- 类型：布尔值

如果设置为 true，那么 npm 将顽固地拒绝安装（甚至考虑安装）任何声称与当前 Node.js 版本不兼容的包。

这可以通过设置`--force`标志来覆盖。

## `fetch-retries`

- 默认值：2
- 类型：数字

`retry`从注册表获取包时要使用的模块的“重试”配置。

在网络故障或 5xx HTTP 错误的情况下，npm 将重试对注册表的幂等读取请求。

## `fetch-retry-factor`

- 默认值：10
- 类型：数字

`retry`获取包时模块使用的“因素”配置。

## `fetch-retry-maxtimeout`

- 默认值：60000（1 分钟）
- 类型：数字

`retry`获取包时模块使用的“maxTimeout”配置。

## `fetch-retry-mintimeout`

- 默认值：10000（10 秒）
- 类型：数字

`retry`获取包时模块使用的“minTimeout”配置。

## `fetch-timeout`

- 默认值：300000（5 分钟）
- 类型：数字

等待 HTTP 请求完成的最长时间。

## `force`

- 默认值：假
- 类型：布尔值

删除针对不幸的副作用、常见错误、不必要的性能下降和恶意输入的各种保护措施。

- 允许在全局安装中破坏非 npm 文件。
- 允许该`npm version`命令在不干净的 git 存储库上运行。
- 允许删除缓存文件夹`npm cache clean`。
- `engines`允许安装具有需要不同版本 npm 的声明的软件包。
- 即使已启用，也允许安装`engines`具有需要不同版本的声明的软件包。`node``--engine-strict`
- 允许`npm audit fix`安装超出指定依赖范围的模块（包括 SemVer 重大更改）。
- 允许取消发布已发布包的所有版本。
- 允许在根项目中安装冲突的peerDependency。
- `--yes`在 期间隐式设置`npm init`。
- 允许破坏现有值`npm pkg`

如果您不清楚自己要做什么，强烈建议您不要使用此选项！

## `foreground-scripts`

- 默认值：假
- 类型：布尔值

在前台进程中运行已安装软件包的所有构建脚本（即 、`preinstall`和`install`） ，与主 npm 进程共享标准输入、输出和错误。`postinstall`

请注意，这通常会使安装运行速度变慢，并且噪音更大，但对于调试很有用。

## `format-package-lock`

- 默认值：true
- 类型：布尔值

格式化`package-lock.json`或`npm-shrinkwrap.json`作为人类可读的文件。

## `fund`

- 默认值：true
- 类型：布尔值

当“true”时，会在每个消息末尾显示消息`npm install`，确认寻求资金的依赖项的数量。`npm fund`详情请参阅。

## `git`

- 默认值：“git”
- 类型：字符串

用于 git 命令的命令。如果 git 安装在计算机上，但不在 中`PATH`，则将其设置为 git 二进制文件的完整路径。

## `git-tag-version`

- 默认值：true
- 类型：布尔值

使用命令时标记提交`npm version`。

## `global`

- 默认值：假
- 类型：布尔值

在“全局”模式下运行，以便将包安装到该`prefix`文件夹而不是当前工作目录中。有关行为差异的更多信息，请参阅[文件夹。](https://docs.npmjs.com/cli/v7/configuring-npm/folders)

- 软件包将安装到该`{prefix}/lib/node_modules`文件夹中，而不是当前工作目录中。
- bin 文件链接到`{prefix}/bin`
- 手册页链接到`{prefix}/share/man`

## `global-style`

- 默认值：假
- 类型：布尔值

使 npm 将包安装到本地`node_modules`文件夹中，其布局与全局文件夹使用的布局相同`node_modules`。只有您的直接依赖项才会显示，`node_modules`并且它们依赖的所有内容都将在其`node_modules`文件夹中展平。这显然会消除一些重复数据删除。如果与 一起使用`legacy-bundling`，`legacy-bundling`将是首选。

## `globalconfig`

- 默认值：全局 --prefix 设置加上“etc/npmrc”。例如，“/usr/local/etc/npmrc”
- 类型：路径

要读取全局配置选项的配置文件。

## `heading`

- 默认值：“npm”
- 类型：字符串

启动所有调试日志输出的字符串。

## `https-proxy`

- 默认值：空
- 类型：null 或 URL

用于传出 https 请求的代理。如果设置了`HTTPS_PROXY`或`https_proxy`或`HTTP_PROXY`或`http_proxy`环境变量，底层库将遵循代理设置`make-fetch-happen`。

## `if-present`

- 默认值：假
- 类型：布尔值

`run-script`如果为 true，则当为未在`scripts`部分中定义的脚本调用npm 时，npm 将不会退出并显示错误代码`package.json`。当需要在脚本存在时选择性地运行脚本并在脚本失败时运行失败时，可以使用此选项。例如，当运行可能仅适用于其他通用 CI 设置中的某些构建的脚本时，这很有用。

## `ignore-scripts`

- 默认值：假
- 类型：布尔值

如果为 true，npm 不会运行 package.json 文件中指定的脚本。

请注意，明确旨在运行特定脚本的命令，例如`npm start`、`npm stop`、`npm restart`、`npm test`、 和如果设置了，`npm run-script`仍将运行其预期脚本，但它们*不会*运行任何前置或后置脚本。`ignore-scripts`

## `include`

- 默认：
- 类型：“prod”、“dev”、“可选”或“peer”（可以设置多次）

允许定义要安装的依赖项类型的选项。

这是 的逆`--omit=<type>`。

`--include`无论在命令行上指定省略/包含的顺序如何，都不会省略 中指定的依赖关系类型。

## `include-staged`

- 默认值：假
- 类型：布尔值

允许安装“暂存”已发布的软件包，如[npm RFC PR #92](https://github.com/npm/rfcs/pull/92)所定义。

这是实验性的，npm 公共注册表尚未实现。

## `init-author-email`

- 默认： ””
- 类型：字符串

默认情况下，该值`npm init`应用于包作者的电子邮件。

## `init-author-name`

- 默认： ””
- 类型：字符串

默认情况下，该值`npm init`应用于包作者的姓名。

## `init-author-url`

- 默认： ””
- 输入：“”或 URL

默认情况下，该值`npm init`应用于包作者的主页。

## `init-license`

- 默认值：“ISC”
- 类型：字符串

该值`npm init`应默认用于包许可证。

## `init-module`

- 默认值：“~/.npm-init.js”
- 类型：路径

将由`npm init`命令加载的模块。有关更多信息，请参阅[init-package-json](https://github.com/npm/init-package-json)模块的文档，或[npm init](https://docs.npmjs.com/cli/v7/commands/npm-init)。

## `init-version`

- 默认值：“1.0.0”
- 类型：SemVer 字符串

默认情况下应用于包版本号的值`npm init`（如果尚未在 package.json 中设置）。

## `json`

- 默认值：假
- 类型：布尔值

是否输出JSON数据，而不是正常输出。

- 它允许在`npm pkg set`将设置值保存到您的`package.json`.

并非所有 npm 命令都支持。

## `key`

- 默认值：空
- 类型：null 或 String

访问注册表时传递的客户端密钥。值应采用 PEM 格式，并用字符串“\n”替换换行符。例如：

```ini
key="-----BEGIN PRIVATE KEY-----\nXXXX\nXXXX\n-----END PRIVATE KEY-----"
```

它不是*密钥*文件的路径（并且没有“keyfile”选项）。

## `legacy-bundling`

- 默认值：假
- 类型：布尔值

使 npm 安装该软件包，以便 1.4 之前的 npm 版本（例如 Node 0.8 中包含的版本）可以安装该软件包。这消除了所有自动重复数据删除。如果与`global-style`此选项一起使用将是首选。

## `legacy-peer-deps`

- 默认值：假
- 类型：布尔值

`peerDependencies`导致 npm在构建包树时完全忽略，如 npm 版本 3 到 6 中那样。

如果某个软件包由于`peerDependencies`冲突过于严格而无法安装，它提供了一种继续解决这种情况的方法。

这与 不同`--omit=peer`，因为`--omit=peer`它将避免`peerDependencies`在磁盘上解包，但仍会设计一棵树，以便`peerDependencies` *可以*在正确的位置解包。

`legacy-peer-deps`不建议使用，因为它不会强制`peerDependencies`执行元依赖项可能依赖的契约。

## `link`

- 默认值：假
- 类型：布尔值

与 一起使用`npm ls`，将输出限制为仅那些链接的包。

## `local-address`

- 默认值：空
- 类型：IP 地址

连接到 npm 注册表时使用的本地接口的 IP 地址。在 0.12 之前的 Node 版本中必须是 IPv4。

## `location`

- 默认值：“user”，除非`--global`传递，这也会将此值设置为“global”
- 类型：“全局”、“用户”或“项目”

当传递给`npm config`它时，它指的是要使用哪个配置文件。

## `loglevel`

- 默认值：“通知”
- 类型：“silent”、“error”、“warn”、“notice”、“http”、“timing”、“info”、“verbose”或“silly”

要报告什么级别的日志。失败时，*所有*日志都会写入`npm-debug.log`当前工作目录。

显示高于设置级别的所有日志。默认为“通知”。

另请参阅`foreground-scripts`配置。

## `logs-max`

- 默认值：10
- 类型：数字

要存储的日志文件的最大数量。

## `long`

- 默认值：假
- 类型：布尔值

显示`ls`、`search`、 和中的扩展信息`help-search`。

## `maxsockets`

- 默认值：15
- 类型：数字

每个源使用的最大连接数（协议/主机/端口组合）。

## `message`

- 默认值：“%s”
- 类型：字符串

`npm version`创建版本提交时使用的提交消息。

消息中的任何“%s”都将替换为版本号。

## `node-options`

- 默认值：空
- 类型：null 或 String

通过环境变量传递到 Node.js 的选项`NODE_OPTIONS`。这不会影响 npm 本身的执行方式，但会影响生命周期脚本的调用方式。

## `node-version`

- 默认值：Node.js`process.version`值
- 类型：SemVer 字符串

检查包的`engines`设置时使用的节点版本。

## `noproxy`

- 默认值：NO_PROXY 环境变量的值
- 类型：String（可设置多次）

应绕过任何代理的域扩展。

还接受逗号分隔的字符串。

## `npm-version`

- 默认值：输出`npm --version`
- 类型：SemVer 字符串

检查包`engines`设置时使用的 npm 版本。

## `offline`

- 默认值：假
- 类型：布尔值

强制离线模式：安装期间不会执行任何网络请求。要允许 CLI 填充缺失的缓存数据，请参阅`--prefer-offline`。

## `omit`

- 默认值：如果`NODE_ENV`环境变量设置为“生产”，则为“dev”，否则为空。
- 类型：“dev”、“可选”或“peer”（可以设置多次）

要从磁盘上的安装树中省略的依赖项类型。

请注意，这些依赖项*仍会被*解析并添加到`package-lock.json`或`npm-shrinkwrap.json`文件中。它们只是没有物理安装在磁盘上。

如果包类型同时出现在`--include`和`--omit`列表中，那么它将被包含在内。

如果生成的省略列表包含`'dev'`，则所有生命周期脚本的`NODE_ENV`环境变量将设置为。`'production'`

## `otp`

- 默认值：空
- 类型：null 或 String

这是来自双因素身份验证器的一次性密码。使用 发布或更改包权限时需要它`npm access`。

如果未设置，并且注册表响应因询问一次性密码而失败，则 npm 将在命令行上提示输入密码。

## `pack-destination`

- 默认： ”。”
- 类型：字符串

将保存 tarball 的目录`npm pack`。

## `package`

- 默认：
- 类型：String（可设置多次）

要安装的包`npm exec`

## `package-lock`

- 默认值：true
- 类型：布尔值

如果设置为 false，则`package-lock.json`安装时忽略文件。这也会阻止*写入* `package-lock.json`if`save`为 true。

当包包锁被禁用时，无关模块的自动修剪也将被禁用。要删除禁用包锁的无关模块，请使用`npm prune`.

## `package-lock-only`

- 默认值：假
- 类型：布尔值

如果设置为 true，则当前操作将仅使用`package-lock.json`, 忽略`node_modules`.

这`update`意味着仅`package-lock.json`会更新，而不是检查`node_modules`和下载依赖项。

这意味着`list`输出将基于 描述的树`package-lock.json`，而不是 的内容`node_modules`。

## `parseable`

- 默认值：假
- 类型：布尔值

写入标准输出的命令输出可解析的结果。对于`npm search`，这将是制表符分隔的表格格式。

## `prefer-offline`

- 默认值：假
- 类型：布尔值

如果为 true，则将绕过缓存数据的过时检查，但将从服务器请求丢失的数据。要强制完全离线模式，请使用`--offline`.

## `prefer-online`

- 默认值：假
- 类型：布尔值

如果为 true，将强制对缓存数据进行过时检查，使 CLI 立即查找更新，即使是新的包数据也是如此。

## `prefix`

- 默认值：在全局模式下，安装节点可执行文件的文件夹。在本地模式下，包含 package.json 文件或 node_modules 文件夹的最近父文件夹。
- 类型：路径

安装全局项目的位置。如果在命令行上设置，则会强制非全局命令在指定文件夹中运行。

## `preid`

- 默认： ””
- 类型：字符串

用作 semver 的“预发布”部分前缀的“预发布标识符”。就像`rc`在`1.2.0-rc.8`.

## `progress`

- 默认值：`true`除非在已知的 CI 系统中运行
- 类型：布尔值

当设置为 时`true`，npm 将在时间密集型操作期间显示进度条（如果`process.stderr`是 TTY）。

设置`false`为抑制进度条。

## `proxy`

- 默认值：空
- 类型：null、false 或 URL

用于传出 http 请求的代理。如果设置了`HTTP_PROXY`或`http_proxy`环境变量，底层库将遵循代理设置`request`。

## `read-only`

- 默认值：假
- 类型：布尔值

这用于在使用命令配置受限访问令牌时将令牌标记为无法发布`npm token create`。

## `rebuild-bundle`

- 默认值：true
- 类型：布尔值

安装后重建捆绑的依赖项。

## `registry`

- 默认值：“ https://registry.npmjs.org/ ”
- 类型： 网址

npm 注册表的基本 URL。

## `save`

- 默认值：true
- 类型：布尔值

将已安装的包作为依赖项保存到 package.json 文件中。

与该`npm rm`命令一起使用时，从 package.json 中删除依赖项。

## `save-bundle`

- 默认值：假
- 类型：布尔值

如果在安装时使用`--save`、`--save-dev`或保存软件包`--save-optional`，则也将其放入列表中`bundleDependencies`。

如果`--save-peer`已设置，请忽略，因为无法捆绑peerDependency。

## `save-dev`

- 默认值：假
- 类型：布尔值

将已安装的包保存到 package.json 文件中，命名为`devDependencies`.

## `save-exact`

- 默认值：假
- 类型：布尔值

保存到 package.json 的依赖项将使用精确的版本进行配置，而不是使用 npm 的默认 semver 范围运算符。

## `save-optional`

- 默认值：假
- 类型：布尔值

将已安装的包保存到 package.json 文件中，命名为`optionalDependencies`.

## `save-peer`

- 默认值：假
- 类型：布尔值

保存已安装的软件包。到 package.json 文件作为`peerDependencies`

## `save-prefix`

- 默认值：“^”
- 类型：字符串

`--save`配置如何通过或`--save-dev`获取前缀将软件包版本安装到 package.json 文件。

例如，如果某个软件包具有 version `1.2.3`，则默认情况下其版本设置为`^1.2.3`允许对该软件包进行小幅升级，但之后`npm config set save-prefix='~'`将设置为`~1.2.3`仅允许补丁升级。

## `save-prod`

- 默认值：假
- 类型：布尔值

将安装的包保存到`dependencies`专门的. `devDependencies`如果或中已存在包`optionalDependencies`，但您希望将其移至非可选生产依赖项，则这非常有用。

如果为 true，则这是默认行为`--save`，并且`--save-dev`或都不`--save-optional`为 true。

## `scope`

- 默认值：当前项目的范围（如果有）或“”
- 类型：字符串

将操作与作用域注册表的作用域相关联。

登录或注销私有注册表时很有用：



```bash
# log in, linking the scope to the custom registry
npm login --scope=@mycorp --registry=https://registry.mycorp.com

# log out, removing the link and the auth token
npm logout --scope=@mycorp
```

这将导致`@mycorp`映射到注册表，以便将来安装根据模式指定的包`@mycorp/package`。

这也将导致`npm init`创建一个作用域包。



```bash
# accept all defaults, and create a package named "@foo/whatever",
# instead of just named "whatever"
npm init --scope=@foo --yes
```

## `script-shell`

- 默认值：POSIX 系统上为“/bin/sh”，Windows 上为“cmd.exe”
- 类型：null 或 String

用于通过`npm exec`,`npm run`和`npm init <pkg>`命令运行脚本的 shell。

## `searchexclude`

- 默认： ””
- 类型：字符串

以空格分隔的选项限制搜索结果。

## `searchlimit`

- 默认值：20
- 类型：数字

限制搜索结果的项目数。根本不适用于遗留搜索。

## `searchopts`

- 默认： ””
- 类型：字符串

始终传递给搜索的空格分隔选项。

## `searchstaleness`

- 默认值：900
- 类型：数字

如果使用旧版搜索端点，则在发出另一个注册表请求之前的缓存寿命（以秒为单位）。

## `shell`

- 默认值：SHELL 环境变量，或 Posix 上的“bash”，或 Windows 上的“cmd.exe”
- 类型：字符串

为命令运行的 shell `npm explore`。

## `sign-git-commit`

- 默认值：假
- 类型：布尔值

如果设置为 true，则该`npm version`命令将使用`-S`添加签名来提交新的包版本。

请注意，git 要求您在 git 配置中设置 GPG 密钥才能正常工作。

## `sign-git-tag`

- 默认值：假
- 类型：布尔值

如果设置为 true，则该`npm version`命令将使用`-s`添加签名来标记版本。

请注意，git 要求您在 git 配置中设置 GPG 密钥才能正常工作。

## `strict-peer-deps`

- 默认值：假
- 类型：布尔值

如果设置为`true`，并且`--legacy-peer-deps`未设置，则*任何*冲突`peerDependencies`都将被视为安装失败，即使 npm 可以根据非对等依赖关系合理猜测适当的解决方案。

默认情况下，`peerDependencies`依赖关系图中深层的冲突将使用最近的非对等依赖关系规范来解决，即使这样做会导致某些包接收超出其包`peerDependencies`对象中设置的范围的对等依赖关系。

当执行此类和覆盖时，会打印一条警告，解释冲突和涉及的包。如果`--strict-peer-deps`设置了，则此警告将被视为失败。

## `strict-ssl`

- 默认值：true
- 类型：布尔值

通过 https 向注册表发出请求时是否进行 SSL 密钥验证。

另请参阅`ca`配置。

## `tag`

- 默认值：“最新”
- 类型：字符串

如果你要求 npm 安装一个包并且不告诉它具体的版本，那么它会安装指定的标签。

如果没有给出显式标记，还有添加到命令指定的 package@version 的标记`npm tag`。

当由命令使用时`npm diff`，这是用于获取默认情况下将与本地文件进行比较的 tarball 的标签。

## `tag-version-prefix`

- Default: "v"
- 类型：字符串

如果设置，则在使用 执行版本增量时更改标记新版本时使用的前缀`npm-version`。要完全删除前缀，请将其设置为空字符串：`""`。

由于其他工具可能依赖于 npm 版本标记的约定`v1.0.0`，*因此仅在绝对必要时才使用此属性*。特别是，在覆盖公共包的此设置时要小心。

## `timing`

- 默认值：假
- 类型：布尔值

如果为 true，则即使命令成功完成，也会将`npm-debug`日志`_logs`和计时信息写入缓存中。是一个换行符分隔的 JSON 对象列表。`_timing.json``_timing.json`

[您可以使用以下json](https://npm.im/json)命令行快速查看它： `npm exec -- json -g < ~/.npm/_timing.json`。

## `umask`

- 默认值：0
- 类型：八进制数字字符串，范围 0000..0777 (0..511)

在文件和文件夹上设置文件创建模式时使用的“umask”值。

文件夹和可执行文件被赋予一种模式，该模式`0o777`根据该值进行屏蔽。其他文件被赋予一个根据该值屏蔽的模式`0o666`。

请注意，底层系统还会*将*自己的 umask 值应用于创建的文件和文件夹，并且 npm 不会规避这一点，而是将配置添加`--umask`到其中。

因此，大多数 POSIX 系统上的有效默认 umask 值为 0o22，这意味着文件夹和可执行文件使用 0o755 模式创建，其他文件使用 0o644 模式创建。

## `unicode`

- `LC_ALL`默认值：在 Windows 上为 false，在具有 unicode 语言环境的 mac/unix 系统上为 true，由、`LC_CTYPE`或环境变量定义`LANG`。
- 类型：布尔值

当设置为 true 时，npm 在树输出中使用 unicode 字符。当为 false 时，它使用 ascii 字符而不是 unicode 字形。

## `update-notifier`

- 默认值：true
- 类型：布尔值

设置为 false 可以在使用比最新版本更旧的 npm 时抑制更新通知。

## `usage`

- 默认值：假
- 类型：布尔值

显示有关指定命令的简短用法输出。

## `user-agent`

- 默认值：“npm/{npm-version} 节点/{node-version} {platform} {arch} 工作区/{workspaces} {ci}”
- 类型：字符串

设置用户代理请求标头。以下字段将替换为其实际对应字段：

- `{npm-version}`- 使用的npm版本
- `{node-version}`- 使用的 Node.js 版本
- `{platform}`- 的价值`process.platform`
- `{arch}`- 的价值`process.arch`
- `{workspaces}`-`true`如果设置了`workspaces`或`workspace`选项，则设置为。
- `{ci}`- 配置的值`ci-name`（如果已设置）前缀为`ci/`，如果为空则为空字符串`ci-name`。

## `userconfig`

- 默认值：“~/.npmrc”
- 类型：路径

用户级配置设置的位置。

这可能会被`npm_config_userconfig`环境变量或`--userconfig`命令行选项覆盖，但可能*不会*被`globalconfig`文件中的设置覆盖。

## `version`

- 默认值：假
- 类型：布尔值

如果为true，则输出npm版本并成功退出。

仅当在命令行上明确指定时才相关。

## `versions`

- 默认值：假
- 类型：布尔值

如果为 true，则输出 npm 版本以及节点的`process.versions`映射和当前工作目录文件中的版本`package.json`（如果存在），并成功退出。

仅当在命令行上明确指定时才相关。

## `viewer`

- 默认值：Posix 上为“man”，Windows 上为“browser”
- 类型：字符串

用于查看帮助内容的程序。

设置为`"browser"`在默认 Web 浏览器中查看 html 帮助内容。

## `which`

- 默认值：空
- 类型：空或数字

如果有多个资金来源，则打开其中1索引的来源URL。

## `workspace`

- 默认：
- 类型：String（可设置多次）

允许在当前项目的已配置工作区上下文中运行命令，同时通过仅运行此配置选项定义的工作区进行过滤。

配置的有效值为`workspace`：

- 工作区名称
- 工作区目录的路径
- 父工作区目录的路径（将导致选择所有嵌套工作区）

当设置该`npm init`命令时，可以将其设置为尚不存在的工作空间的文件夹，以创建该文件夹并将其设置为项目中的全新工作空间。

该值不会导出到子进程的环境中。

## `workspaces`

- 默认值：假
- 类型：布尔值

**允许在所有**已配置工作区的上下文中运行命令。

该值不会导出到子进程的环境中。

## `yes`

- 默认值：空
- 类型：空或布尔值

对 npm 可能在命令行上打印的任何提示自动回答“是”。

## `also`

- 默认值：空
- 类型：null、“dev”或“development”
- 已弃用：请改用 --include=dev 。

当设置为`dev`或 时`development`，这是 的别名`--include=dev`。

## `auth-type`

- 默认值：“旧版”
- 类型：“legacy”、“sso”、“saml”或“oauth”
- 已弃用：这种 SSO/SAML/OAuth 方法已弃用，并将在 npm 的未来版本中删除，以支持基于 Web 的登录。

`adduser`/使用什么身份验证策略`login`。

## `cache-max`

- 默认值：无穷大
- 类型：数字
- 已弃用：此选项已被弃用，取而代之的是`--prefer-online`

`--cache-max=0` is an alias for `--prefer-online`



## `cache-min`

- 默认值：0
- 类型：数字
- 已弃用：此选项已被弃用，取而代之的是`--prefer-offline`.

`--cache-min=9999 (or bigger)`是 的别名`--prefer-offline`。

## `dev`

- 默认值：假
- 类型：布尔值
- 已弃用：请改用 --include=dev 。

别名为`--include=dev`.

## `initauthoremail`

- 默认： ””
- 类型：字符串
- 已弃用：`--init-author-email`改为使用。

别名为`--init-author-email`

## `initauthorname`

- 默认： ””
- 类型：字符串
- 已弃用：`--init-author-name`改为使用。

别名为`--init-author-name`

## `initauthorurl`

- 默认： ””
- 输入：“”或 URL
- 已弃用：`--init-author-url`改为使用。

别名为`--init-author-url`

## `initlicense`

- 默认值：“ISC”
- 类型：字符串
- 已弃用：`--init-license`改为使用。

别名为`--init-license`

## `initmodule`

- 默认值：“~/.npm-init.js”
- 类型：路径
- 已弃用：`--init-module`改为使用。

别名为`--init-module`

## `initversion`

- 默认值：“1.0.0”
- 类型：SemVer 字符串
- 已弃用：`--init-version`改为使用。

别名为`--init-version`

## `only`

- 默认值：空
- 类型：null、“prod”或“生产”
- 已弃用：用于`--omit=dev`从安装中省略开发依赖项。

当设置为`prod`或 时`production`，这是 的别名`--omit=dev`。

## `optional`

- 默认值：空
- 类型：空或布尔值
- 已弃用：用于`--omit=optional`排除或`--include=optional`包含可选依赖项。

除非另有省略，否则默认值会安装可选的依赖项。

--include=可选 或 --omit=可选 的别名

## `production`

- 默认值：空
- 类型：空或布尔值
- 已弃用：`--omit=dev`改为使用。

别名为`--omit=dev`

## `shrinkwrap`

- 默认值：true
- 类型：布尔值
- 已弃用：请改用 --package-lock 设置。

--package-lock 的别名

## `sso-poll-frequency`

- 默认值：500
- 类型：数字
- 已弃用：SSO/SAML/OAuth 的 --auth-type 方法将在 npm 的未来版本中删除，以支持基于 Web 的登录。

当与启用 SSO 的`auth-type`s 一起使用时，配置在用户完成身份验证时轮询注册表的频率。

## `sso-type`

- 默认值：“oauth”
- 类型：null、“oauth”或“saml”
- 已弃用：SSO/SAML/OAuth 的 --auth-type 方法将在 npm 的未来版本中删除，以支持基于 Web 的登录。

如果`--auth-type=sso`，则为要使用的 SSO 类型。

## `tmp`

- `os.tmpdir()`默认值：Node.js方法返回的值https://nodejs.org/api/os.html#os_os_tmpdir
- 类型：路径
- 已弃用：不再使用此设置。npm 将临时文件存储在缓存中的特殊位置，它们由`cacache`.

从历史上看，临时文件的存储位置。不再相关。
