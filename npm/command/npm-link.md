## 概要



```bash
npm link (in package dir)
npm link [<@scope>/]<pkg>[@<version>]

alias: npm ln
```

## 描述

这对于安装您自己的东西很方便，这样您就可以对其进行工作并进行迭代测试，而无需不断重建。

包链接是一个两步过程。

首先，`npm link`在包文件夹中，将在全局文件夹中创建一个符号链接，该符号链接链接到执行命令的`{prefix}/lib/node_modules/<package>`包。`npm link`它还会将包中的任何 bin 链接到`{prefix}/bin/{name}`. 请注意，`npm link`使用全局前缀（请参阅 参考资料 获取`npm prefix -g`其值）。

接下来，在其他位置，将创建从全局安装到当前文件夹的`npm link package-name`符号链接。`package-name``node_modules/`

请注意，`package-name`取自`package.json`，*而不是*目录名称。

包名称可以选择以范围为前缀。看`scope`。范围前面必须有 @ 符号，后面是斜杠。

为 创建 tarball 时`npm publish`，链接的包将通过解析符号链接“快照”到其当前状态（如果它们包含在`bundleDependencies`.

例如：

```bash
cd ~/projects/node-redis    # go into the package directory
npm link                    # creates global link
cd ~/projects/node-bloggy   # go into some other package directory.
npm link redis              # link-install the package
```

现在，任何更改都`~/projects/node-redis`将反映在 中`~/projects/node-bloggy/node_modules/node-redis/`。请注意，链接应该指向包名称，而不是该包的目录名称。

您也可以将这两个步骤合二为一。例如，以更短的方式执行上述用例：

```bash
cd ~/projects/node-bloggy  # go into the dir of your main project
npm link ../node-redis     # link the dir of your dependency
```

第二行相当于：



```bash
(cd ../node-redis; npm link)
npm link redis
```

也就是说，它首先创建一个全局链接，然后将全局安装目标链接到项目的`node_modules`文件夹中。

请注意，在这种情况下，您指的是目录名称，`node-redis`而不是包名称`redis`。

如果您的链接包有范围（请参阅`scope`），您的链接命令必须包含该范围，例如



```bash
npm link @myorg/privatepackage
```

## `caveat`

*请注意，默认情况下不会*保存以这种方式链接的包依赖项`package.json`，因为假设目的是用链接代替常规非链接依赖项。否则，例如，如果您依赖于`redis@^3.0.1`, 并运行`npm link redis`，它会将依赖项替换`^3.0.1`为`file:../path/to/node-redis`，这可能是您不想要的！此外，如果项目中的其他用户或开发人员的文件夹设置与您的文件夹不完全相同，他们也会遇到问题。

如果您要添加*新的*依赖项作为链接，则应通过运行将其添加到相关元数据中`npm install <dep> --package-lock-only`。

如果您*想*将参考保存`file:`在您的`package.json`文件中`package-lock.json`，您可以`npm link <dep> --save`这样做。

## `workspace-usage`

`npm link <pkg> --workspace <name>`将链接相关包作为指定工作空间的依赖项。`node_modules`请注意，如果不存在冲突的依赖项，它实际上可能链接到父项目的文件夹中。

`npm link --workspace <name>`将创建到指定工作区的全局链接。

## `configuration`

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

- 默认值：假
- 类型：布尔值

使 npm 安装该软件包，以便 1.4 之前的 npm 版本（例如 Node 0.8 中包含的版本）可以安装该软件包。这消除了所有自动重复数据删除。如果与`global-style`此选项一起使用将是首选。

## `strict-peer-deps`

- 默认值：假
- 类型：布尔值

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
