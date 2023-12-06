## 概要



```bash
npm publish [<tarball>|<folder>] [--tag <tag>] [--access <public|restricted>] [--otp otpcode] [--dry-run]

Publishes '.' if no argument supplied
Sets tag 'latest' if no --tag specified
```

## 描述

将软件包发布到注册表，以便可以按名称安装。

默认情况下，npm 将发布到公共注册表。这可以通过指定不同的默认注册表或`scope`](https://docs.npmjs.com/cli/v7/using-npm/scope)在名称中使用 来覆盖（请参阅参考资料[`package.json`）。

- `<folder>`：包含 package.json 文件的文件夹
- `<tarball>`：gzip 压缩的 tar 存档的 url 或文件路径，其中包含单个文件夹，其中包含 package.json 文件。
- `[--tag <tag>]`：使用给定标签注册已发布的包，以便`npm install <name>@<tag>`安装此版本。默认情况下，`npm publish`更新并`npm install`安装`latest`标签。`npm-dist-tag`有关标签的详细信息，请参阅。
- `[--access <public|restricted>]`：告诉注册表该软件包应该作为公共发布还是受限制发布。仅适用于作用域包，默认为`restricted`. 如果您没有付费帐户，则必须通过发布`--access public`来发布范围内的包。
- `[--otp <otpcode>]`：如果您在模式下启用了双因素身份验证，`auth-and-writes`那么您可以使用身份验证器提供一个代码。如果您不包含此内容并且您是从 TTY 运行，那么系统会提示您。
- `[--dry-run]`：截至`npm@6`，除了实际发布到注册表之外，是否所有发布都会执行。报告将要发布的内容的详细信息。
- `[--workspaces]`：发布时启用工作区上下文。所有工作区包都将被发布。
- `[--workspace]`：启用工作区上下文并将结果限制为仅此配置项指定的结果。仅发布给定工作区中的包。

如果包名称和版本组合已存在于指定的注册表中，则发布将失败。

一旦使用给定名称和版本发布了包，该特定名称和版本组合就永远不能再次使用，即使使用`npm unpublish`.

从 开始`npm@5`，tarball 的 sha1sum 和带有 sha512sum 的完整性字段都将在发布期间提交给注册表。后续安装将使用最强大的支持算法来验证下载。

与`--dry-run`see类似`npm pack`，它会找出要包含的文件并将它们打包到 tarball 中以上传到注册表。

## `files-included-in-package`

要查看包中将包含哪些内容，请运行`npx npm-packlist`. 默认情况下包含所有文件，但以下情况除外：

- 始终包含与软件包安装和分发相关的某些文件。例如，`package.json`、`README.md`、`LICENSE`、 等等。

- 如果 中有“文件”列表`package.json`，则仅包含指定的文件。（如果指定了目录，那么将递归地遍历它们并包含它们的内容，遵循相同的忽略规则。）

- 如果存在`.gitignore`或`.npmignore`文件，则该文件中被忽略的文件和所有子目录将从包中排除。如果*两个*文件都存在，则`.gitignore`忽略 ，仅`.npmignore`使用 。

  `.npmignore`文件遵循与文件`_ignoring``.gitignore`

- 如果文件与某些模式匹配，则*永远*不会包含该文件，除非显式添加到`"files"`中的列表，或者使用 或文件中的规则`package.json`未忽略。`!``.npmignore``.gitignore`

- 符号链接永远不会包含在 npm 包中。

`developers`有关已发布的包中包含的内容的完整详细信息，以及有关如何构建该包的详细信息，请参阅参考资料。

## `configuration`

## `tag`

- Default: "latest"
- Type: String

如果你要求 npm 安装一个包并且不告诉它具体的版本，那么它会安装指定的标签。

如果没有给出显式标记，还有添加到命令指定的 package@version 的标记`npm tag`。

当由命令使用时`npm diff`，这是用于获取默认情况下将与本地文件进行比较的 tarball 的标签。

## `access`

- 默认值：  'restricted' for scoped packages, 'public' for unscoped packages “restricted”适用于有作用域的包，“public”适用于无作用域的包
- 类型：null、“受限”或“公共”

发布作用域包时，访问级别默认为`restricted`. 如果您希望您的作用域包可供公开查看（和安装），请设置`--access=public`. 唯一有效的值为`access`和`public`。`restricted`无范围包的访问级别*始终*为`public`.

注意：在命令`--access`上使用标志`npm publish`只会在包的初始发布时设置包访问级别。使用该标志的任何后续`npm publish`命令都`--access`不会影响访问级别。要在初始发布使用后更改访问级别`npm access`。

## `dry-run`

- 默认值：假
- 类型：布尔值

表示您不希望 npm 进行任何更改，并且它应该只报告它会执行的操作。这可以传递到任何修改本地安装的命令中，例如`install`、`update`、`dedupe`、`uninstall`以及`pack`和`publish`。

注意：其他网络相关命令不支持这一点，例如`dist-tags`、`owner`等。

## `otp`

- Default: null
- Type: null or String

这是来自双因素身份验证器的一次性密码。使用 发布或更改包权限时需要它`npm access`。

如果未设置，并且注册表响应因询问一次性密码而失败，则 npm 将在命令行上提示输入密码。

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
