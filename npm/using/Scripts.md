## 描述



`"scripts"`文件的属性支持`package.json`许多内置脚本及其预设生命周期事件以及任意脚本。这些都可以通过运行`npm run-script <stage>`或者`npm run <stage>`简短的方式来执行。*具有匹配名称的前置*和*后置*命令也将针对这些命令运行（例如`premyscript`、`myscript`、`postmyscript`）。依赖项中的脚本可以使用`npm explore <pkg> -- npm run <stage>`.

## `pre--post-scripts`

`"scripts"`要为部分中定义的任何脚本创建“pre”或“post”脚本`package.json`，只需创建另一个*具有匹配名称的*脚本并将“pre”或“post”添加到它们的开头即可。

```json
{
  "scripts": {
    "precompress": "{{ executes BEFORE the `compress` script }}",
    "compress": "{{ run command to compress files }}",
    "postcompress": "{{ executes AFTER `compress` script }}"
  }
}
```

在此示例中`npm run compress`，将按照描述执行这些脚本。

## `life-cycle-scripts`

有一些特殊的生命周期脚本仅在某些情况下发生。`pre<event>`这些脚本是在、`post<event>`、 和脚本之外发生的`<event>`。

- `prepare`, `prepublish`, `prepublishOnly`, `prepack`,`postpack`

**prepare**（自`npm@4.0.0`）

- 在包装包装之前的任何时间运行，即包装期间`npm publish`和包装期间`npm pack`
- 在打包之前运行
- 在发布包之前运行
- 在本地运行，`npm install`无需任何参数
- `prepublish`在之后但之前运行`prepublishOnly`
- 注意：如果通过 git 安装的包包含`prepare`脚本，则在打包和安装包之前，将安装其`dependencies`和`devDependencies`，并运行准备脚本。
- 这些`npm@7`脚本在后台运行。要查看输出，请运行`--foreground-scripts`：

**prepublish**（已弃用）

- 不在 期间运行，但在和`npm publish`期间运行。请参阅下文了解更多信息。`npm ci``npm install`

**prepublishOnly**

- 在准备和打包包之前运行，仅在`npm publish`.

**prepack**

- 在打包 tarball 之前运行（在“ `npm pack`”、“ `npm publish`”以及安装 git 依赖项时）。
- 注意：“ `npm run pack`”与“ ”不同`npm pack`。“ `npm run pack`”是任意用户定义的脚本名称，其中“ `npm pack`”是 CLI 定义的命令。

**postpack**

- 在生成 tarball 之后但在将其移动到最终目的地之前运行（如果有的话，发布不会在本地保存 tarball）

## `prepare-and-prepublish`

**弃用说明：预发布**

从 开始`npm@1.1.71`，npm CLI 已为和运行`prepublish`脚本，因为这是准备使用包的便捷方法（一些常见用例将在下面的部分中描述）。在实践中，它也被证明是[非常令人困惑的](https://github.com/npm/npm/issues/10074)。从 开始，引入了一个新事件 ，该事件保留了现有的行为。添加了一个*新*事件作为过渡策略，以允许用户避免现有 npm 版本的令人困惑的行为，并且只运行（例如，最后一次运行测试以确保它们处于良好状态）。`npm publish``npm install``npm@4.0.0``prepare``prepublishOnly``npm publish`

请参阅https://github.com/npm/npm/issues/10074了解此更改的更详细的理由，并进一步阅读。

**用例**

如果您需要在使用包之前以不依赖于目标系统的操作系统或体系结构的方式对其执行操作，请使用脚本`prepublish`。这包括以下任务：

- 将 CoffeeScript 源代码编译为 JavaScript。
- 创建 JavaScript 源代码的精简版本。
- 获取您的包将使用的远程资源。

一次性完成这些事情的优点`prepublish`是它们可以在一个地方一次性完成，从而降低了复杂性和可变性。此外，这意味着：

- 您可以将`coffee-script`其作为依赖`devDependency`，因此您的用户不需要安装它。
- 您不需要在包中包含缩小器，从而为用户减小大小。
- 您不需要依赖您的用户在目标计算机上拥有`curl`或或其他系统工具。`wget`

## `life-cycle-operation-order`

## `npm cache add`

- `prepare`

## `npm ci`

- `preinstall`
- `install`
- `postinstall`
- `prepublish`
- `preprepare`
- `prepare`
- `postprepare`

这些都是在模块实际安装到 后`node_modules`按顺序运行的，中间没有发生任何内部操作

## `npm diff`

- `prepare`

## `npm install`

当你跑步时这些也会运行`npm install -g <pkg-name>`

- `preinstall`
- `install`
- `postinstall`
- `prepublish`
- `preprepare`
- `prepare`
- `postprepare`

如果你的包的根目录中有一个`binding.gyp`文件，并且你没有定义自己的文件`install`或`preinstall`脚本，npm将默认`install`使用node-gyp进行编译的命令通过`node-gyp rebuild`

这些是从脚本运行的`<pkg-name>`

## `npm pack`

- `prepack`
- `prepare`
- `postpack`

## `npm publish`

- `prepublishOnly`
- `prepack`
- `prepare`
- `postpack`
- `publish`
- `postpublish`

`prepare`期间不会运行`--dry-run

## `npm rebuild`

- `preinstall`
- `install`
- `postinstall`
- `prepare`

`prepare`仅当当前目录是符号链接（例如带有链接的包）时才运行

## `npm restart`

如果`restart`定义了脚本，则运行这些事件，否则，如果存在，`stop`则`start`运行这些事件，包括它们的`pre`和`post`迭代）

- `prerestart`
- `restart`
- `postrestart`

## `npm run `

- `pre<user-defined>`
- `<user-defined>`
- `post<user-defined>`

## `npm start`

- `prestart`
- `start`
- `poststart`

如果你的包的根目录中有一个`server.js`文件，那么 npm 将默认命令`start`为`node server.js`. 在这种情况下仍然会运行`prestart`。`poststart`

## `npm stop`

- `prestop`
- `stop`
- `poststop`

## `npm test`

- `pretest`
- `test`
- `posttest`

## `npm uninstall`关于缺少脚本的说明

虽然 npm v6 有`uninstall`生命周期脚本，但 npm v7 没有。删除包的原因可能有多种，并且目前没有明确的方法可以为脚本提供足够的上下文以使其有用。

删除软件包的原因包括：

- 用户直接卸载了这个包
- 用户卸载了依赖包，因此正在卸载该依赖项
- 用户卸载了依赖包，但另一个包也依赖于该版本
- 该版本已与另一个版本合并为副本
- ETC。

由于缺乏必要的上下文，`uninstall`生命周期脚本未实现并且无法运行。

## `user`

当 npm 以 root 身份运行时，脚本始终使用工作目录所有者的有效 uid 和 gid 运行。

## `environment`

包脚本在一个环境中运行，其中提供了有关 npm 设置和进程当前状态的许多信息。

## `path`

如果您依赖于定义可执行脚本的模块（例如测试套件），那么这些可执行文件将被添加到`PATH`执行脚本中。所以，如果你的 package.json 有这个：

```json
{
  "name": "foo",
  "dependencies": {
    "bar": "0.1.x"
  },
  "scripts": {
    "start": "bar ./test"
  }
}
```

然后您可以运行`npm start`来执行该`bar`脚本，该脚本将导出到`node_modules/.bin`上的目录中`npm install`。

## `packagejson-vars`

package.json 字段附加到`npm_package_`前缀上。因此，例如，如果您`{"name":"foo", "version":"1.2.5"}`的 package.json 文件中有，那么您的包脚本会将`npm_package_name`环境变量设置为“foo”，并将环境变量设置`npm_package_version`为“1.2.5”。您可以在代码中使用`process.env.npm_package_name`和访问这些变量`process.env.npm_package_version`，对于其他字段，依此类推。

`package-json.md`有关包配置的更多信息，请参阅参考资料。

## `current-lifecycle-event`

最后，`npm_lifecycle_event`环境变量设置为正在执行的循环的哪个阶段。因此，您可以将单个脚本用于流程的不同部分，该脚本根据当前发生的情况进行切换。

对象按照这种格式进行扁平化，因此如果您`{"scripts":{"install":"foo.js"}}`的 package.json 中有这样的内容，那么您会在脚本中看到以下内容：

```bash
process.env.npm_package_scripts_install === "foo.js"
```

## `examples`

例如，如果您的 package.json 包含以下内容：

```json
{
  "scripts": {
    "install": "scripts/install.js",
    "postinstall": "scripts/install.js",
    "uninstall": "scripts/uninstall.js"
  }
}
```

then`scripts/install.js`将在生命周期的安装和安装后阶段被调用，并且`scripts/uninstall.js`将在卸载包时被调用。由于`scripts/install.js`正在运行两个不同的阶段，因此在这种情况下查看`npm_lifecycle_event`环境变量是明智的。

如果你想运行 make 命令，你可以这样做。这工作得很好：

```json
{
  "scripts": {
    "preinstall": "./configure",
    "install": "make && make install",
    "test": "make test"
  }
}
```

## `exiting`

通过将该行作为脚本参数传递给 来运行脚本`sh`。

如果脚本以 0 以外的代码退出，那么这将中止该进程。

请注意，这些脚本文件不必是 Node.js 甚至 JavaScript 程序。它们只需是某种可执行文件即可。

## `best-practices`

- *除非您确实*这么想，否则不要以非零错误代码退出。除了卸载脚本之外，这将导致 npm 操作失败，并可能被回滚。如果故障很小或者只会阻止某些可选功能，那么最好只打印一条警告并成功退出。
- 尽量不要使用脚本来做 npm 能为你做的事情。通读`package.json`以了解您可以通过简单地适当描述您的包来指定和启用的所有内容。一般来说，这将导致更稳健和一致的状态。
- 检查环境以确定将东西放在哪里。例如，如果`npm_config_binroot`环境变量设置为`/home/user/bin`，则不要尝试将可执行文件安装到`/usr/local/bin`。用户这样设置可能是有原因的。
- 不要在脚本命令前加上“sudo”前缀。如果由于某种原因需要 root 权限，那么它将因该错误而失败，并且用户将 sudo 相关的 npm 命令。
- 不要使用`install`. 使用`.gyp`文件进行编译以及`prepublish`其他任何操作。您几乎不需要显式设置预安装或安装脚本。如果您正在这样做，请考虑是否还有其他选择。`install`或脚本的唯一有效用途`preinstall`是编译，必须在目标体系结构上完成。
