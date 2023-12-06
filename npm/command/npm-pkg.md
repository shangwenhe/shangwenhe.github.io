## 概要



```bash
npm pkg get [<field> [.<subfield> ...]]
npm pkg set <field>=<value> [.<subfield>=<value> ...]
npm pkg delete <field> [.<subfield> ...]
```

## 描述

自动管理文件的命令`package.json`。`npm pkg`提供 3 个不同的子命令，允许您修改或检索`package.json`.

检索和设置字段的语法是在您的 中找到的嵌套对象属性的点分隔表示`package.json`，它与从注册表清单中检索信息所使用的表示法相同`npm view`，您可以在下面找到有关如何使用它的更多示例。

返回值始终为**json**格式。

- `npm pkg get <field>`

  `key`检索文件中定义的值`package.json`。

  例如，为了检索当前包的名称，您可以运行：

  ```bash
npm pkg get name
  ```
  
  也可以一次检索多个值：

  ```bash
npm pkg get name version
  ```
  
  您可以通过用句点分隔来查看子字段。要检索测试值的值`script`，您可以运行以下命令：

  ```bash
npm pkg get scripts.test
  ```

  对于数组字段，请求非数字字段将返回列表中对象的所有值。例如，要获取某个包的所有贡献者电子邮件，您可以运行：
  
  ```bash
npm pkg get contributors.email
  ```

  您还可以使用方括号中的数字索引来专门选择数组字段中的项目。要获取列表中第一个贡献者的电子邮件地址，您可以运行：
  
  ```bash
  npm pkg get contributors[0].email
  ```

- `npm pkg set <field>=<value>`

  根据值设置`value`您的a 。保存到文件时，使用与文件相关的其他 cli 命令中使用的相同规则集，确保尊重现有缩进，并可能在将值保存到文件之前应用一些验证。`package.json``field``package.json``npm install``package.json`

  用于从包中检索值的相同语法也可用于定义新属性或覆盖现有属性，下面是如何使用点分隔语法来编辑文件的一些示例`package.json`。

  `mynewcommand`定义一个名为您的新 bin`package.json`并指向一个文件`cli.js`：

  ```bash
  npm pkg set bin.mynewcommand=cli.js
  ```

  也可以一次设置多个字段：

  ```bash
  npm pkg set description='Awesome package' engines.node='>=10'
  ```

  还可以添加到数组值，例如添加新的贡献者条目：

  ```bash
  npm pkg set contributors[0].name='Foo' contributors[0].email='foo@bar.ca'
  ```

  您还可以使用特殊的空括号表示法将项目附加到数组的末尾：

  ```bash
  npm pkg set contributors[].name='Foo' contributors[].name='Bar'
  ```

  还可以在将值保存到`package.json`文件之前将其解析为 json，例如为了设置`"private": true`属性：
  ```bash
  npm pkg set private=true --json
  ```

  它还可以将值保存为数字：
  ```bash
  npm pkg set tap.timeout=60 --json
  ```

- `npm pkg delete <key>`

  从`key`您的`package.json`

  用于从包中设置值的相同语法也可用于删除现有值。例如，为了删除名为 build 的脚本：

  ```bash
  npm pkg delete scripts.build
  ```

## `workspaces-support`

您可以使用`workspace`或`workspaces`config 选项在配置的工作区中设置/获取/删除项目。

例如，`funding`在项目的所有已配置工作区中设置一个值：

```bash
npm pkg设置资金= https://example.com --ws 
```

当用于`npm pkg get`从配置的工作区检索信息时，返回的结果将采用 json 格式，其中顶级键是每个工作区的名称，这些键的值将是从每个配置的工作区返回的结果值，例如:



```bash
npm pkg get name version --ws
{
  "a": {
    "name": "a",
    "version": "1.0.0"
  },
  "b": {
    "name": "b",
    "version": "1.0.0"
  }
}
```

## `configuration`

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

## `json`

- 默认值：假
- 类型：布尔值

是否输出JSON数据，而不是正常输出。

- 它允许在`npm pkg set`将设置值保存到您的`package.json`.

并非所有 npm 命令都支持。

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
