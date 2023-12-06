### `description`

npm 从命令行、环境变量和`npmrc`文件获取其配置设置。

该`npm config`命令可用于更新和编辑用户和全局 npmrc 文件的内容。

有关可用配置选项的列表，请参阅[config](https://docs.npmjs.com/cli/v7/using-npm/config)。

### `files`

四个相关文件是：

- 每个项目的配置文件（/path/to/my/project/.npmrc）
- 每个用户的配置文件 (~/.npmrc)
- 全局配置文件（$PREFIX/etc/npmrc）
- npm 内置配置文件 (/path/to/npm/npmrc)

所有 npm 配置文件都是 ini 格式的`key = value`参数列表。可以使用 替换环境变量`${VARIABLE_NAME}`。例如：

```bash
prefix = ${HOME}/.npm-packages
```

每个文件都会被加载，并且配置选项会按优先级顺序解析。例如，用户配置文件中的设置将覆盖全局配置文件中的设置。

数组值通过在键名称后添加“[]”来指定。例如：

```bash
key[] = "first value"
key[] = "second value"
```

#### `comments`

文件中的行以 或字符`.npmrc`开头时被解释为注释。[文件由npm/ini](https://github.com/npm/ini)解析，它指定了此注释语法。`;``#``.npmrc`

例如：

```bash
# last modified: 01 Jan 2016
; Set a new registry for a scoped package
@myscope:registry=https://mycustomregistry.example.org
```

#### `per-project-config-file`

当在项目中本地工作时，`.npmrc`项目根目录中的文件（即 和 的同级文件`node_modules`）`package.json`将设置特定于该项目的配置值。

请注意，这仅适用于您运行 npm 的项目的根目录。当您的模块发布时，它不会产生任何影响。例如，您不能发布强制自身安装在全局或不同位置的模块。

此外，在全局模式下（例如运行时）不会读取此文件`npm install -g`。

#### `per-user-config-file`

`$HOME/.npmrc`（或`userconfig`参数，如果在环境或命令行中设置）

#### `global-config-file`

`$PREFIX/etc/npmrc`（或`globalconfig`参数，如果在上面设置）：此文件是 ini 文件格式的`key = value`参数列表。环境变量可以如上替换。

#### `built-in-config-file`

```
path/to/npm/itself/npmrc
```

这是一个不可更改的“内置”配置文件，npm 在更新中保持一致。`./configure`使用npm 附带的脚本在此处设置字段。这主要是为了让发行版维护人员以标准且一致的方式覆盖默认配置。





## 示例

```txt
sass_binary_site=http://cdn.npm.taobao.org/dist/node-sass
@rc-embed:registry=http://npm.rongcloud.net
@rongcloud:registry=http://npm.rongcloud.net
//npm.rongcloud.net/:_authToken="e/2UW5htWzBEyKzkAIQLbwmBPiZQ99sEIbYicM4Iz1k="
//registry.npmjs.com/:_authToken=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

registry=https://registry.npm.taobao.org
disturl=https://npm.taobao.org/dist
chromedriver-cdnurl=https://npm.taobao.org/mirrors/chromedriver
couchbase-binary-host-mirror=https://npm.taobao.org/mirrors/couchbase/v{version}
debug-binary-host-mirror=https://npm.taobao.org/mirrors/node-inspector
electron-mirror=https://npm.taobao.org/mirrors/electron/
flow-bin-binary-host-mirror=https://npm.taobao.org/mirrors/flow/v
fse-binary-host-mirror=https://npm.taobao.org/mirrors/fsevents
fuse-bindings-binary-host-mirror=https://npm.taobao.org/mirrors/fuse-bindings/v{version}
git4win-mirror=https://npm.taobao.org/mirrors/git-for-windows
gl-binary-host-mirror=https://npm.taobao.org/mirrors/gl/v{version}
grpc-node-binary-host-mirror=https://npm.taobao.org/mirrors
hackrf-binary-host-mirror=https://npm.taobao.org/mirrors/hackrf/v{version}
leveldown-binary-host-mirror=https://npm.taobao.org/mirrors/leveldown/v{version}
leveldown-hyper-binary-host-mirror=https://npm.taobao.org/mirrors/leveldown-hyper/v{version}
mknod-binary-host-mirror=https://npm.taobao.org/mirrors/mknod/v{version}
node-sqlite3-binary-host-mirror=https://npm.taobao.org/mirrors
node-tk5-binary-host-mirror=https://npm.taobao.org/mirrors/node-tk5/v{version}
nodegit-binary-host-mirror=https://npm.taobao.org/mirrors/nodegit/v{version}/
operadriver-cdnurl=https://npm.taobao.org/mirrors/operadriver
phantomjs-cdnurl=https://npm.taobao.org/mirrors/phantomjs
profiler-binary-host-mirror=https://npm.taobao.org/mirrors/node-inspector/
puppeteer-download-host=https://npm.taobao.org/mirrors
python-mirror=https://npm.taobao.org/mirrors/python
rabin-binary-host-mirror=https://npm.taobao.org/mirrors/rabin/v{version}
sass-binary-site=https://npm.taobao.org/mirrors/node-sass
sodium-prebuilt-binary-host-mirror=https://npm.taobao.org/mirrors/sodium-prebuilt/v{version}
sqlite3-binary-site=https://npm.taobao.org/mirrors/sqlite3
utf-8-validate-binary-host-mirror=https://npm.taobao.org/mirrors/utf-8-validate/v{version}
utp-native-binary-host-mirror=https://npm.taobao.org/mirrors/utp-native/v{version}
zmq-prebuilt-binary-host-mirror=https://npm.taobao.org/mirrors/zmq-prebuilt/v{version}
```

