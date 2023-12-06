### `概要`

```bash
npm ls [[<@scope>/]<pkg> ...]

aliases: list, la, ll
```

### `description`

`--all`此命令将以树结构的形式将已安装的所有软件包版本以及指定的依赖项打印到标准输出。

注意：要“自下而上”地了解为什么给定包包含在树中，请使用`npm explain`。

位置参数是`name@version-range`标识符，它将结果限制为仅指定包的路径。请注意，嵌套包还将*显示*指定包的路径。例如，`npm ls promzard`在 npm 的源代码树中运行将显示：



```bash
npm@7.24.2 /path/to/npm
└─┬ init-package-json@0.0.4
  └── promzard@0.1.5
```

它将打印出无关的、丢失的和无效的包。

如果项目为依赖项指定了 git url，这些依赖项将显示在 name@version 后面的括号中，以便用户更容易识别项目的潜在分支。

显示的树是逻辑依赖关系树，基于包依赖关系，而不是`node_modules`文件夹的物理布局。

当作为`ll`或运行时`la`，它默认显示扩展信息。

### `note-design-changes-pending`

当 npm 创建一个天真地嵌套每个依赖项的文件夹时，该`npm ls`命令的输出和行为变得非常*有意义*。`node_modules`在这种情况下，磁盘上包的逻辑依赖图和物理树将大致相同。

随着 npm v3 中自动安装时依赖项重复数据删除的出现，`ls`输出被修改为将逻辑依赖关系图显示为树结构，因为这对大多数用户来说更有用。然而，如果不使用，很多时候`npm ls -l`就无法显示*软件包的实际安装位置！*

随着 npm v7 自动安装的出现`peerDependencies`，这变得更加奇怪，因为`peerDependencies`逻辑上它们在依赖关系图中位于它们的依赖项“下方”，但物理上始终位于它们在磁盘上的位置或上方。

此外，自从 npm 有了`ls`命令（0.0.2 版本！）以来，依赖关系图作为一般规则已经变得更大了。因此，为了避免向终端转储过多的内容，`npm ls`现在仅显示*顶级*依赖项，除非`--all`提供。

目前正在对该命令的用例、意图、行为和输出进行彻底的重新检查。`npm ls`预计npm v8 中的默认人类可读输出至少会发生重大变化。

### `configuration`

#### `all`

- 默认值：假
- 类型：布尔值

运行`npm outdated`和时`npm ls`，设置`--all`将显示所有过时或已安装的软件包，而不仅仅是当前项目直接依赖的软件包。

#### `json`

- 默认值：假
- 类型：布尔值

是否输出JSON数据，而不是正常输出。

- 它允许在`npm pkg set`将设置值保存到您的`package.json`.

并非所有 npm 命令都支持。

#### `long`

- 默认值：假
- 类型：布尔值

显示`ls`、`search`、 和中的扩展信息`help-search`。

#### `parseable`

- 默认值：假
- 类型：布尔值

写入标准输出的命令输出可解析的结果。对于`npm search`，这将是制表符分隔的表格格式。

#### `global`

- 默认值：假
- 类型：布尔值

在“全局”模式下运行，以便将包安装到该`prefix`文件夹而不是当前工作目录中。有关行为差异的更多信息，请参阅[文件夹。](https://docs.npmjs.com/cli/v7/configuring-npm/folders)

- 软件包将安装到该`{prefix}/lib/node_modules`文件夹中，而不是当前工作目录中。
- bin 文件链接到`{prefix}/bin`
- 手册页链接到`{prefix}/share/man`

#### `depth`

- 默认值：`Infinity`如果`--all`设置，否则`1`
- 类型：空或数字

递归包时的深度`npm ls`。

如果未设置，`npm ls`将仅显示根项目的直接依赖项。如果`--all`设置了，npm 将默认显示所有依赖项。

#### `omit`

- 默认值：如果`NODE_ENV`环境变量设置为“生产”，则为“dev”，否则为空。
- 类型：“dev”、“可选”或“peer”（可以设置多次）

要从磁盘上的安装树中省略的依赖项类型。

请注意，这些依赖项*仍会被*解析并添加到`package-lock.json`或`npm-shrinkwrap.json`文件中。它们只是没有物理安装在磁盘上。

如果包类型同时出现在`--include`和`--omit`列表中，那么它将被包含在内。

如果生成的省略列表包含`'dev'`，则所有生命周期脚本的`NODE_ENV`环境变量将设置为。`'production'`

#### `link`

- 默认值：假
- 类型：布尔值

与 一起使用`npm ls`，将输出限制为仅那些链接的包。

#### `package-lock-only`

- 默认值：假
- 类型：布尔值

如果设置为 true，则当前操作将仅使用`package-lock.json`, 忽略`node_modules`.

这`update`意味着仅`package-lock.json`会更新，而不是检查`node_modules`和下载依赖项。

这意味着`list`输出将基于 描述的树`package-lock.json`，而不是 的内容`node_modules`。

#### `unicode`

- `LC_ALL`默认值：在 Windows 上为 false，在具有 unicode 语言环境的 mac/unix 系统上为 true，由、`LC_CTYPE`或环境变量定义`LANG`。
- 类型：布尔值

当设置为 true 时，npm 在树输出中使用 unicode 字符。当为 false 时，它使用 ascii 字符而不是 unicode 字形。

#### `workspace`

- 默认：
- 类型：String（可设置多次）

允许在当前项目的已配置工作区上下文中运行命令，同时通过仅运行此配置选项定义的工作区进行过滤。

配置的有效值为`workspace`：

- 工作区名称
- 工作区目录的路径
- 父工作区目录的路径（将导致选择所有嵌套工作区）

当设置该`npm init`命令时，可以将其设置为尚不存在的工作空间的文件夹，以创建该文件夹并将其设置为项目中的全新工作空间。

该值不会导出到子进程的环境中。

#### `workspaces`

- 默认值：假
- 类型：布尔值

**允许在所有**已配置工作区的上下文中运行命令。

该值不会导出到子进程的环境中。