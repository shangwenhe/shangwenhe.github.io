## 概要

```bash
npm install (with no args, in package dir)
npm install [<@scope>/]<name>
npm install [<@scope>/]<name>@<tag>
npm install [<@scope>/]<name>@<version>
npm install [<@scope>/]<name>@<version range>
npm install <alias>@npm:<name>
npm install <git-host>:<git-user>/<repo-name>
npm install <git repo url>
npm install <tarball file>
npm install <tarball url>
npm install <folder>

aliases: npm i, npm add
common options: [-P|--save-prod|-D|--save-dev|-O|--save-optional|--save-peer] [-E|--save-exact] [-B|--save-bundle] [--no-save] [--dry-run]
```

## 描述

此命令安装一个包及其依赖的任何包。如果包具有package-lock、 npm shrinkwrap 文件或yarn lock 文件，则依赖项的安装将由其驱动，并遵循以下优先顺序：

- `npm-shrinkwrap.json`
- `package-lock.json`
- `yarn.lock`

请参阅[package-lock.json](https://docs.npmjs.com/cli/v7/configuring-npm/package-lock-json)和`npm shrinkwrap`。

A`package`是：

- `package.json` 包含由文件描述的程序的文件夹
- b) 一个 gzip 压缩包，包含 (a)
- c) 解析为 (b) 的 url
- d)`<name>@<version>`在注册表中发布的 a（参见`registry`
- e) a `<name>@<tag>`（参见`npm dist-tag`
- f)`<name>`具有满足 (e) 的“最新”标签的a
- g) a`<git remote url>`解析为 (a)

即使您从未发布过您的包，如果您只想编写一个节点程序（a），并且也许您还希望在打包后能够轻松地将其安装在其他地方，那么您仍然可以从使用 npm 中获得很多好处进入 tarball (b)。

- `npm install`（在包目录中，无参数）：

  在本地`node_modules`文件夹中安装依赖项。

  在全局模式下（即，使用`-g`或`--global`附加到命令），它将当前包上下文（即当前工作目录）安装为全局包。

  默认情况下，`npm install`将安装 中作为依赖项列出的所有模块`package.json`。

  使用该`--production`标志（或当`NODE_ENV`环境变量设置为`production`）时，npm 将不会安装 中列出的模块`devDependencies`。要安装两者中列出的所有模块，`dependencies`并且`devDependencies`当`NODE_ENV`环境变量设置为时`production`，您可以使用`--production=false`.

  > 注意：`--production`向项目添加依赖项时，该标志没有特殊含义。

- `npm install <folder>`:

  将包作为当前项目中的符号链接安装在目录中。它的依赖项将在链接之前安装。如果位于项目的根目录内，则其依赖项可能会像其他类型的依赖项一样`<folder>`提升到顶层。`node_modules`

- `npm install <tarball file>`:

  安装位于文件系统上的软件包。注意：如果您只想将 dev 目录链接到 npm 根目录，则可以使用`npm link`.

  压缩包要求：

  - 文件名*必须*使用`.tar`、`.tar.gz`、 或`.tgz`作为扩展名。
  - 包内容应位于 tarball 内的子文件夹中（通常称为`package/`）。npm 在安装包时剥离一层目录（相当于`tar x --strip-components=1`运行）。
  - 该包必须包含`package.json`具有`name`和`version`属性的文件。

  例子：

  

  ```bash
  npm install ./package.tgz
  ```

- `npm install <tarball url>`:

  获取 tarball url，然后安装它。为了区分此选项和其他选项，参数必须以“http://”或“https://”开头

  例子：

  

  ```bash
  npm install https://github.com/indexzero/forever/tarball/v0.5.6
  ```

- `npm install [<@scope>/]<name>`:

  进行`<name>@<tag>`安装，`<tag>`“标签”配置在哪里。（请参阅`config`。配置的默认值为`latest`。）

  `latest`在大多数情况下，这将安装npm 注册表上标记为 的模块版本。

  例子：

  

  ```bash
  npm install sax
  ```

  `npm install`默认情况下将任何指定的包保存到其中`dependencies`。此外，您可以使用一些附加标志来控制它们的保存位置和方式：

  - `-P, --save-prod`：包将出现在您的`dependencies`. 这是默认值，除非`-D`或`-O`存在。
  - `-D, --save-dev`：包将出现在您的`devDependencies`.
  - `-O, --save-optional`：包将出现在您的`optionalDependencies`.
  - `--no-save`：防止保存到`dependencies`.

  当使用上述任何选项将依赖项保存到 package.json 时，有两个附加的可选标志：

  - `-E, --save-exact`：保存的依赖项将配置为精确的版本，而不是使用 npm 的默认 semver 范围运算符。
  - `-B, --save-bundle`：保存的依赖项也会添加到您的`bundleDependencies`列表中。

  此外，如果您有`npm-shrinkwrap.json`或`package-lock.json`，那么它也会更新。

  `<scope>`是可选的。该软件包将从与指定范围关联的注册表中下载。如果没有注册表与给定范围关联，则假定为默认注册表。看`scope`。

  注意：如果您的范围名称中不包含 @ 符号，npm 会将其解释为 GitHub 存储库，请参见下文。范围名称后面还必须跟有斜杠。

  例子：

  

  ```bash
  npm install sax
  npm install githubname/reponame
  npm install @myorg/privatepackage
  npm install node-tap --save-dev
  npm install dtrace-provider --save-optional
  npm install readable-stream --save-exact
  npm install ansi-regex --save-bundle
  ```

  **注意**：如果当前工作目录中有一个指定的文件或文件夹`<name>`，那么它将尝试安装该文件或文件夹，并且仅在无效时尝试按名称获取包。

- `npm install <alias>@npm:<name>`:

  使用自定义别名安装包。允许并排使用同名包的多个版本，为具有较长包的包提供更方便的导入名称，并使用 git forks 替换或分叉 npm 包作为替换。别名仅适用于您的项目，不会重命名传递依赖项中的包。别名应遵循 中规定的命名约定`naming-rules`。

  例子：

  

  ```bash
  npm install my-react@npm:react
  npm install jquery2@npm:jquery@2
  npm install jquery3@npm:jquery@3
  npm install npa@npm:npm-package-arg
  ```

- `npm install [<@scope>/]<name>@<tag>`:

  安装指定标签引用的包的版本。如果该包的注册表数据中不存在该标签，则此操作将失败。

  例子：

  

  ```bash
  npm install sax@latest
  npm install @myorg/mypackage@latest
  ```

- `npm install [<@scope>/]<name>@<version>`:

  安装指定版本的软件包。如果版本尚未发布到注册表，此操作将会失败。

  例子：

  

  ```bash
  npm install sax@0.1.1
  npm install @myorg/privatepackage@1.5.0
  ```

- `npm install [<@scope>/]<name>@<version range>`:

  安装与指定版本范围匹配的软件包版本。这将遵循与 中描述的解决依赖关系相同的规则`package.json`。

  请注意，大多数版本范围必须用引号引起来，以便您的 shell 将其视为单个参数。

  例子：

  ```bash
  npm install sax@">=0.1.0 <0.2.0"
  npm install @myorg/privatepackage@"16 - 17"
  ```

- `npm install <git remote url>`:

  从托管 git 提供商安装包，并使用`git`. 对于完整的 git 远程 url，只会尝试该 URL。

  ```bash
  <protocol>://[<user>[:<password>]@]<hostname>[:<port>][:][/]<path>[#<commit-ish> | #semver:<semver>]
  ```

  `<protocol>``git`是、`git+ssh`、`git+http`、`git+https`、 或之一`git+file`。

  如果`#<commit-ish>`提供，它将用于准确克隆该提交。如果 commit-ish 的格式为`#semver:<semver>`，`<semver>`可以是任何有效的 semver 范围或精确版本，npm 将在远程存储库中查找与该范围匹配的任何标签或引用，就像注册表依赖项一样。如果`#<commit-ish>`或均未`#semver:<semver>`指定，则使用存储库的默认分支。

  如果存储库使用子模块，这些子模块也将被克隆。

  如果正在安装的软件包包含`prepare`脚本，`dependencies`则`devDependencies`在打包和安装软件包之前，将安装该脚本，并运行准备脚本。

  以下 git 环境变量可以被 npm 识别，并在运行 git 时添加到环境中：

  - `GIT_ASKPASS`
  - `GIT_EXEC_PATH`
  - `GIT_PROXY_COMMAND`
  - `GIT_SSH`
  - `GIT_SSH_COMMAND`
  - `GIT_SSL_CAINFO`
  - `GIT_SSL_NO_VERIFY`

  有关详细信息，请参阅 git 手册页。

  例子：

  

  ```bash
  npm install git+ssh://git@github.com:npm/cli.git#v1.0.27
  npm install git+ssh://git@github.com:npm/cli#pull/273
  npm install git+ssh://git@github.com:npm/cli#semver:^5.0
  npm install git+https://isaacs@github.com/npm/cli.git
  npm install git://github.com/npm/cli.git#v1.0.27
  GIT_SSH_COMMAND='ssh -i ~/.ssh/custom_ident' npm install git+ssh://git@github.com:npm/cli.git
  ```

- `npm install <githubname>/<githubrepo>[#<commit-ish>]`:

- `npm install github:<githubname>/<githubrepo>[#<commit-ish>]`:

  `https://github.com/githubname/githubrepo`通过尝试使用克隆来安装包`git`。

  如果`#<commit-ish>`提供，它将用于准确克隆该提交。如果 commit-ish 的格式为`#semver:<semver>`，`<semver>`可以是任何有效的 semver 范围或精确版本，npm 将在远程存储库中查找与该范围匹配的任何标签或引用，就像注册表依赖项一样。如果`#<commit-ish>`或均未`#semver:<semver>`指定，则`master`使用 then。

  与常规 git 依赖项一样，如果包在安装完成之前有脚本，则将安装 和`dependencies`。`devDependencies``prepare`

  例子：

  

  ```bash
  npm install mygithubuser/myproject
  npm install github:mygithubuser/myproject
  ```

- `npm install gist:[<githubname>/]<gistID>[#<commit-ish>|#semver:<semver>]`:

  `https://gist.github.com/gistID`通过尝试使用克隆来安装包`git`。与要点关联的 GitHub 用户名是可选的，并且不会保存在`package.json`.

  与常规 git 依赖项一样，如果包在安装完成之前有脚本，则将安装 和`dependencies`。`devDependencies``prepare`

  例子：

  

  ```bash
  npm install gist:101a11beef
  ```

- `npm install bitbucket:<bitbucketname>/<bitbucketrepo>[#<commit-ish>]`:

  `https://bitbucket.org/bitbucketname/bitbucketrepo`通过尝试使用克隆来安装包`git`。

  如果`#<commit-ish>`提供，它将用于准确克隆该提交。如果 commit-ish 的格式为`#semver:<semver>`，`<semver>`可以是任何有效的 semver 范围或精确版本，npm 将在远程存储库中查找与该范围匹配的任何标签或引用，就像注册表依赖项一样。如果`#<commit-ish>`或均未`#semver:<semver>`指定，则`master`使用 then。

  与常规 git 依赖项一样，如果包在安装完成之前有脚本，则将安装 和`dependencies`。`devDependencies``prepare`

  例子：

  ```bash
  npm install bitbucket:mybitbucketuser/myproject
  ```

  

- `npm install gitlab:<gitlabname>/<gitlabrepo>[#<commit-ish>]`:

  `https://gitlab.com/gitlabname/gitlabrepo`通过尝试使用克隆来安装包`git`。

  如果`#<commit-ish>`提供，它将用于准确克隆该提交。如果 commit-ish 的格式为`#semver:<semver>`，`<semver>`可以是任何有效的 semver 范围或精确版本，npm 将在远程存储库中查找与该范围匹配的任何标签或引用，就像注册表依赖项一样。如果`#<commit-ish>`或均未`#semver:<semver>`指定，则`master`使用 then。

  与常规 git 依赖项一样，如果包在安装完成之前有脚本，则将安装 和`dependencies`。`devDependencies``prepare`

  例子：

  ```bash
  npm install gitlab:mygitlabuser/myproject
  npm install gitlab:myusr/myproj#semver:^5.0
  ```

您可以组合多个参数，甚至多种类型的参数。例如：



```bash
npm install sax@">=0.1.0 <0.2.0" bench supervisor
```

该`--tag`参数将应用于所有指定的安装目标。如果存在给定名称的标记，则标记的版本优先于较新的版本。

该`--dry-run`参数将以通常的方式报告安装在没有实际安装任何东西的情况下会做什么。

该`--package-lock-only`参数只会更新`package-lock.json`, 而不会检查`node_modules`和下载依赖项。

or参数将强制 npm 获取远程资源，即使磁盘上存在本地副本也是如此`-f`。`--force`



```bash
npm install sax --force
```

## `configuration`

请参阅`config`帮助文档。许多配置参数对安装有一定影响，因为这是 npm 的大部分工作。

这些是与安装相关的一些最常见的选项。

## `save`

- Default: true
- Type: Boolean

将已安装的包作为依赖项保存到 package.json 文件中。

与该`npm rm`命令一起使用时，从 package.json 中删除依赖项。

## `save-exact`

- Default: false
- Type: Boolean

保存到 package.json 的依赖项将使用精确的版本进行配置，而不是使用 npm 的默认 semver 范围运算符。

## `global`

- Default: false
- Type: Boolean

在“全局”模式下运行，以便将包安装到该`prefix`文件夹而不是当前工作目录中。有关行为差异的更多信息，请参阅[文件夹。](https://docs.npmjs.com/cli/v7/configuring-npm/folders)

- 软件包将安装到该`{prefix}/lib/node_modules`文件夹中，而不是当前工作目录中。
- bin 文件链接到`{prefix}/bin`
- 手册页链接到`{prefix}/share/man`

## `global-style`

- Default: false
- Type: Boolean

使 npm 将包安装到本地`node_modules`文件夹中，其布局与全局文件夹使用的布局相同`node_modules`。只有您的直接依赖项才会显示，`node_modules`并且它们依赖的所有内容都将在其`node_modules`文件夹中展平。这显然会消除一些重复数据删除。如果与 一起使用`legacy-bundling`，`legacy-bundling`将是首选。

## `legacy-bundling`

- Default: false
- Type: Boolean

使 npm 安装该软件包，以便 1.4 之前的 npm 版本（例如 Node 0.8 中包含的版本）可以安装该软件包。这消除了所有自动重复数据删除。如果与`global-style`此选项一起使用将是首选。

## `strict-peer-deps`

- Default: false
- Type: Boolean

如果设置为`true`，并且`--legacy-peer-deps`未设置，则*任何*冲突`peerDependencies`都将被视为安装失败，即使 npm 可以根据非对等依赖关系合理猜测适当的解决方案。

默认情况下，`peerDependencies`依赖关系图中深层的冲突将使用最近的非对等依赖关系规范来解决，即使这样做会导致某些包接收超出其包`peerDependencies`对象中设置的范围的对等依赖关系。

当执行此类和覆盖时，会打印一条警告，解释冲突和涉及的包。如果`--strict-peer-deps`设置了，则此警告将被视为失败。

## `package-lock`

- Default: true
- Type: Boolean

如果设置为 false，则`package-lock.json`安装时忽略文件。这也会阻止*写入* `package-lock.json`if`save`为 true。

当包包锁被禁用时，无关模块的自动修剪也将被禁用。要删除禁用包锁的无关模块，请使用`npm prune`.

## `omit`

- 默认值：如果`NODE_ENV`环境变量设置为“生产”，则为“dev”，否则为空。
- 类型：“dev”、“可选”或“peer”（可以设置多次）

要从磁盘上的安装树中省略的依赖项类型。

请注意，这些依赖项*仍会被*解析并添加到`package-lock.json`或`npm-shrinkwrap.json`文件中。它们只是没有物理安装在磁盘上。

如果包类型同时出现在`--include`和`--omit`列表中，那么它将被包含在内。

如果生成的省略列表包含`'dev'`，则所有生命周期脚本的`NODE_ENV`环境变量将设置为。`'production'`

## `ignore-scripts`

- 默认值：假
- 类型：布尔值

如果为 true，npm 不会运行 package.json 文件中指定的脚本。

请注意，明确旨在运行特定脚本的命令，例如`npm start`、`npm stop`、`npm restart`、`npm test`、 和如果设置了，`npm run-script`仍将运行其预期脚本，但它们*不会*运行任何前置或后置脚本。`ignore-scripts`

## `audit`

- 默认值：true
- 类型：布尔值

当“true”时，将审核报告与当前 npm 命令一起提交到默认注册表和为范围配置的所有注册表。`npm audit`有关提交内容的详细信息，请参阅文档。

## `bin-links`

- 默认值：true
- 类型：布尔值

告诉 npm 为包可执行文件创建符号链接（或`.cmd`Windows 上的垫片）。

设置为 false 以使其不执行此操作。这可以用来解决某些文件系统不支持符号链接的问题，即使在表面上的 Unix 系统上也是如此。

## `fund`

- 默认值：true
- 类型：布尔值

当“true”时，会在每个消息末尾显示消息`npm install`，确认寻求资金的依赖项的数量。`npm fund`详情请参阅。

## `dry-run`

- 默认值：假
- 类型：布尔值

表示您不希望 npm 进行任何更改，并且它应该只报告它会执行的操作。这可以传递到任何修改本地安装的命令中，例如`install`、`update`、`dedupe`、`uninstall`以及`pack`和`publish`。

注意：其他网络相关命令不支持这一点，例如`dist-tags`、`owner`等。

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

## `algorithm`

给定一个`package{dep}`结构：`A{B,C}, B{C}, C{D}`， npm install 算法会生成：



```bash
A
+-- B
+-- C
+-- D
```

也就是说，从 B 到 C 的依赖性是通过 A 已经导致 C 在更高级别安装的事实来满足的。D 仍然安装在顶层，因为与它没有任何冲突。

对于`A{B,C}, B{C,D@1}, C{D@2}`，该算法产生：



```bash
A
+-- B
+-- C
   `--D@2
+-- D@1
```

因为B的D@1将安装在顶层，所以C现在必须为自己私人安装D@2。该算法是确定性的，但如果请求以不同的顺序安装两个依赖项，则可能会生成不同的树。

有关 npm 创建的特定文件夹结构的更详细说明，请参阅[文件夹。](https://docs.npmjs.com/cli/v7/configuring-npm/folders)
