## 概要

```bash
npm exec -- <pkg>[@<version>] [args...]
npm exec --package=<pkg>[@<version>] -- <cmd> [args...]
npm exec -c '<cmd> [args...]'
npm exec --package=foo -c '<cmd> [args...]'

npx <pkg>[@<specifier>] [args...]
npx -p <pkg>[@<specifier>] <cmd> [args...]
npx -c '<cmd> [args...]'
npx -p <pkg>[@<specifier>] -c '<cmd> [args...]'

alias: npm x, npx

--package=<pkg> (may be specified multiple times)
-p is a shorthand for --package only when using npx executable
-c <cmd> --call=<cmd> (may not be mixed with positional arguments)

```

## 描述

此命令允许您从 npm 包（本地安装或远程获取）运行任意命令，其上下文与通过`npm run`.

该选项指定的任何包都`--package`将在执行的命令中提供`PATH`，以及任何本地安装的包可执行文件。`--package`可以多次指定该选项，以便在所有指定的包都可用的环境中执行提供的命令。

如果本地项目依赖项中不存在任何请求的包，则它们将安装到 npm 缓存中的文件夹中，该文件夹将添加到`PATH`执行过程中的环境变量中。打印提示（可以通过提供 或 来抑制`--yes`）`--no`。

不带说明符提供的包名称将与本地项目中存在的任何版本相匹配。仅当带有说明符的包名称与本地依赖项具有完全相同的名称和版本时，才会被视为匹配。

如果未提供`-c`或`--call`选项，则使用位置参数来生成命令字符串。如果未`--package`提供选项，则 npm 将尝试根据以下启发式从作为第一个位置参数提供的包说明符确定可执行文件名称：

- `bin`如果包的字段中有单个条目`package.json`，或者所有条目都是同一命令的别名，则将使用该命令。
- 如果包有多个`bin`条目，并且其中之一与`name`字段的无范围部分匹配，则将使用该命令。
- 如果这没有导致恰好一个选项（或者因为没有 bin 条目，或者没有一个`name`与包的条目匹配），则`npm exec`退出并出现错误。

要运行指定二进制文件*以外的*二进制文件，请指定一个或多个`--package`选项，这将阻止 npm 从第一个命令参数推断包。

## `npx-vs-npm-exec`

当通过`npx`二进制文件运行时，所有标志和选项*必须*在任何位置参数之前设置。当通过 运行时`npm exec`，双连字符`--`标志可用于抑制 npm 对应发送到执行命令的开关和选项的解析。

例如：

```
$ npx foo@latest bar --package=@npmcli/foo
```

在这种情况下，npm 将解析`foo`包名称，并运行以下命令：

```
$ foo bar --package=@npmcli/foo
```

由于`--package`选项位于位置参数*之后*，因此它被视为执行命令的参数。

相反，由于 npm 的参数解析逻辑，运行此命令是不同的：

```
$ npm exec foo@latest bar --package=@npmcli/foo
```

`--package`在这种情况下，npm 将首先解析选项，解析`@npmcli/foo`包。然后，它将在该上下文中执行以下命令：

```
$ foo@latest bar
```

建议使用双连字符来明确告诉 npm 停止解析命令行选项和开关。因此，以下命令与上面的命令等效`npx`：

```
$ npm exec -- foo@latest bar --package=@npmcli/foo
```

## `examples`

`tap`使用提供的参数运行本地依赖项中的版本：

```bash
$ npm exec --tap --bail test/foo.js 
$ npx tap --bail test/foo.js
```

通过指定选项来运行名称与包名称匹配的命令*以外的*命令`--package`：

```bash
$ npm exec --package = foo -- bar --bar-argument  
# ~ 或 ~
$ npx --package = foo bar --bar-argument
```

在当前项目的上下文中运行任意 shell 脚本：

```bash
$ npm x -c 'eslint && say "hooray, lint passed"'
$ npx -c 'eslint && say "hooray, lint passed"'
```

## `compatibility-with-older-npx-versions`

该`npx`二进制文件在 npm v7.0.0 中被重写，并且独立`npx`包当时已被弃用。`npx`使用该`npm exec`命令而不是单独的参数解析器和安装过程，并提供一些功能来保持与其在先前版本中接受的参数的向后兼容性。

这导致其功能发生一些变化：

- `npm`可以提供任何配置值。
- 为了防止因错误输入软件包名称而导致安全和用户体验问题，`npx`请在安装任何内容之前进行提示。使用`-y`或`--yes`选项禁止出现此提示。
- 该`--no-install`选项已弃用，并将转换为`--no`.
- Shell 后备功能已被删除，因为这是不可取的。
- 该`-p`参数是 in npm 的简写`--parseable`，但也是`--package`in npx 的简写。这是被维护的，但仅限于`npx`可执行文件。
- 该`--ignore-existing`选项已删除。本地安装的 bin 始终存在于执行的进程中`PATH`。
- 该`--npm`选项已删除。`npx`将始终使用`npm`它附带的。
- 和`--node-arg`选项`-n`被删除。
- 该`--always-spawn`选项是多余的，因此被删除。
- 该`--shell`选项被替换为`--script-shell`，但保留在`npx`可执行文件中以实现向后兼容性。
