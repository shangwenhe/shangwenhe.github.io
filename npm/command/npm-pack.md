### `概要`

```bash
npm pack [[<@scope>/]<pkg>...] [--dry-run] [--json]
```

### `configuration`

#### `dry-run`

- Default: false
- Type: Boolean

表示您不希望 npm 进行任何更改，并且它应该只报告它会执行的操作。这可以传递到任何修改本地安装的命令中，例如`install`、`update`、`dedupe`、`uninstall`以及`pack`和`publish`。

注意：其他网络相关命令不支持这一点，例如`dist-tags`、`owner`等。

#### `json`

- Default: false
- Type: Boolean

是否输出JSON数据，而不是正常输出。

- 它允许在`npm pkg set`将设置值保存到您的`package.json`.

并非所有 npm 命令都支持。

#### `pack-destination`

- Default: "."
- Type: String

将保存 tarball 的目录`npm pack`。

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

### `description`

对于任何可安装的内容（即包文件夹、tarball、tarball url、git url、name@tag、name@version、name 或作用域名称），此命令会将其提取到缓存，将 tarball 复制到当前工作目录为`<name>-<version>.tgz`，然后将文件名写入 stdout。

如果多次指定同一个包，则第二次将覆盖该文件。

如果未提供参数，则 npm 会打包当前包文件夹。