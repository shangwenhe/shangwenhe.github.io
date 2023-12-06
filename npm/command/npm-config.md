## 概要

```bash
npm config set <key>=<value> [<key>=<value> ...]
npm config get [<key> [<key> ...]]
npm config delete <key> [<key> ...]
npm config list [--json]
npm config edit
npm set <key>=<value> [<key>=<value> ...]
npm get [<key> [<key> ...]]

alias: c
```

注意：此命令不知道工作区。

## 描述

npm 从命令行、环境变量、`npmrc`文件以及某些情况下的`package.json`文件获取其配置设置。

有关 npmrc 文件的更多信息，请参阅[npmrc 。](https://docs.npmjs.com/cli/v7/configuring-npm/npmrc)

有关所涉及机制的更全面说明以及可用配置选项的完整列表，请参阅[config(7) 。](https://docs.npmjs.com/cli/v7/using-npm/config)

该`npm config`命令可用于更新和编辑用户和全局 npmrc 文件的内容。

## `sub-commands`

Config支持以下子命令：

## `set`

```bash
npm config set key=value [key=value...]
npm set key=value [key=value...]
```

将每个配置键设置为提供的值。

如果省略 value，则将其设置为空字符串。

注意：为了向后兼容，`npm config set key value`支持将其作为`npm config set key=value`.

## `get`

```bash
npm config get [key ...]
npm get [key ...]
```

将配置值回显到标准输出。

如果提供了多个键，则值将以键名称为前缀。

如果未提供键，则此命令的行为与 相同`npm config list`。

## `list`

```bash
npm config list
```

显示所有配置设置。`-l`还用于显示默认值。用于`--json`以 json 格式显示设置。

## `delete`

```bash
npm config delete key [key ...]
```

从所有配置文件中删除指定的键。

## `edit`

```bash
npm config edit
```

在编辑器中打开配置文件。使用该`--global`标志来编辑全局配置。

## `configuration`

## `json`

- Default: false
- Type: Boolean

是否输出JSON数据，而不是正常输出。

- 它允许在`npm pkg set`将设置值保存到您的`package.json`.

并非所有 npm 命令都支持。

## `global`

- Default: false
- Type: Boolean

在“全局”模式下运行，以便将包安装到该`prefix`文件夹而不是当前工作目录中。有关行为差异的更多信息，请参阅[文件夹。](https://docs.npmjs.com/cli/v7/configuring-npm/folders)

- 软件包将安装到该`{prefix}/lib/node_modules`文件夹中，而不是当前工作目录中。
- bin 文件链接到`{prefix}/bin`
- 手册页链接到`{prefix}/share/man`

## `editor`

- 默认值：EDITOR 或 VISUAL 环境变量，或 Windows 上的“notepad.exe”，或 Unix 系统上的“vim”
- 类型：字符串

`npm edit`为和运行的命令`npm config edit`。

## `location`

- 默认值：“user”，除非`--global`传递，这也会将此值设置为“global”
- 类型：“全局”、“用户”或“项目”

当传递给`npm config`它时，它指的是要使用哪个配置文件。

## `long`

- Default: false
- Type: Boolean

显示`ls`、`search`、 和中的扩展信息`help-search`。
