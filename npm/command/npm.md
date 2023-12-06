## 概要



```bash
npm <command> [args]
```

## `version`

7.24.2

## 描述

npm 是 Node JavaScript 平台的包管理器。它将模块放置到位，以便节点可以找到它们，并智能地管理依赖冲突。

它的可配置性极强，可以支持各种用例。最常见的是，您使用它来发布、发现、安装和开发节点程序。

运行`npm help`以获取可用命令的列表。

## `important`

[默认情况下，npm 已预先配置为使用https://registry.npmjs.org](https://registry.npmjs.org/)上的 npm 公共注册表。使用 npm 公共注册表须遵守https://docs.npmjs.com/policies/terms上提供的使用条款。

您可以将 npm 配置为使用您喜欢的任何兼容注册表，甚至运行您自己的注册表。使用他人的注册表受其使用条款的约束。

## `introduction`

你可能因为想要安装东西而使用了 npm。

您最有可能想要在任何节点程序中运行的第一件事就是`npm install`安装其依赖项。

您还可以运行`npm install blerg`安装最新版本的“blerg”。查看`npm install`更多信息。它可以做很多事情。

使用该`npm search`命令显示公共注册表中可用的所有内容。用于`npm ls`显示您已安装的所有内容。

## `dependencies`

如果包使用 git URL 列出依赖项，npm 将使用该`git`命令安装该依赖项，如果未安装，则会生成错误。

如果 npm 尝试安装的包之一是本机节点模块并且需要编译 C++ 代码，则 npm 将使用[node-gyp](https://github.com/nodejs/node-gyp)来完成该任务。对于 Unix 系统，[node-gyp](https://github.com/nodejs/node-gyp)需要 Python、make 和像 GCC 这样的构建链。在 Windows 上，需要 Python 和 Microsoft Visual Studio C++。有关更多信息，请访问[node-gyp 存储库](https://github.com/nodejs/node-gyp)和[node-gyp Wiki](https://github.com/nodejs/node-gyp/wiki)。

## `directories`

请参阅`folders`以了解 npm 将内容放在哪里。

特别地，npm 有两种运行模式：

- 本地模式：npm 将包安装到当前项目目录中，默认为当前工作目录。软件包安装到`./node_modules`，垃圾箱安装到`./node_modules/.bin`。
- 全局模式：npm 将软件包安装到安装前缀 at`$npm_config_prefix/lib/node_modules`和 bin 中`$npm_config_prefix/bin`。

本地模式是默认模式。在任何命令上使用`-g`或`--global`即可改为在全局模式下运行。

## `developer-usage`

如果您使用 npm 开发和发布代码，请查看以下帮助主题：

- json：创建一个 package.json 文件。看`package.json`。
- link：将当前工作代码链接到 Node 的路径中，这样您就不必每次进行更改时都重新安装。用于`npm link`执行此操作。
- 安装：如果不需要符号链接，最好安装一些东西。特别是，从注册表安装其他人的代码是通过`npm install`
- adduser：创建帐户或登录。当您执行此操作时，npm 会将凭据存储在用户配置文件中。
- 发布：使用该`npm publish`命令将代码上传到注册表。

## `configuration`

npm 的可配置性非常强。它从 5 个位置读取其配置选项。

- 命令行开关：使用`--key val`. 所有键都带有一个值，即使它们是布尔值（配置解析器在解析时不知道选项是什么）。如果您不提供值 ( `--key`)，则该选项将设置为布尔值`true`。
- 环境变量：通过在环境变量中的名称前加上 . 来设置任何配置`npm_config_`。例如，`export npm_config_key=val`。
- 用户配置：该文件`$HOME/.npmrc`是 ini 格式的配置列表。如果存在，则对其进行解析。如果`userconfig`在 cli 或 env 中设置了该选项，则将使用该文件。
- 全局配置：找到的文件`./etc/npmrc`（相对于全局前缀，如果找到的话将被解析。`npm prefix`有关全局前缀的更多信息，请参阅 参考资料。如果`globalconfig`在 cli、env 或用户配置中设置了该选项，则解析该文件反而。
- 默认值：npm 的默认配置选项在 lib/utils/config-defs.js 中定义。这些不得更改。

请参阅`config`参考资料 了解更多信息。

## `contributions`

欢迎补丁！

如果您想提供帮助，但不知道该做什么，请阅读[贡献指南](https://github.com/npm/cli/blob/latest/CONTRIBUTING.md)并检查问题列表。

## `bugs`

当您发现问题时，请报告它们：https://github.com/npm/cli/issues

请务必遵循模板和错误报告指南。
