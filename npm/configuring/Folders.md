### `description`

npm 将各种东西放在你的计算机上。这就是它的工作。

该文档将告诉您它把什么放在哪里。

#### `tldr`

- 本地安装（默认）：将内容放入`./node_modules`当前包根目录中。
- 全局安装（使用`-g`）：将内容放入 /usr/local 或安装节点的任何位置。
- 如果要的话，请**在本地**安装`require()`。
- 如果要在命令行上运行它，请**全局**安装它。
- 如果您需要两者，则将其安装在两个位置，或使用`npm link`.

#### `prefix-configuration`

该`prefix`配置默认为安装节点的位置。在大多数系统上，这是`/usr/local`. 在 Windows 上，它是`%AppData%\npm`. 在 Unix 系统上，它是上一级，因为节点通常安装在`{prefix}/bin/node`而不是`{prefix}/node.exe`.

设置该`global`标志后，npm 会将内容安装到此前缀中。如果未设置，它将使用当前包的根目录，或者当前工作目录（如果不在包中）。

#### `node-modules`

`node_modules`包被放入`prefix`. 当本地安装时，这意味着您可以`require("packagename")`加载其主模块，或`require("packagename/lib/path/to/sub/module")`加载其他模块。

Unix 系统上的全局安装转到`{prefix}/lib/node_modules`. Windows 上的全局安装转到`{prefix}/node_modules`（即没有`lib`文件夹。）

作用域包的安装方式相同，只不过它们被分组到相关`node_modules`文件夹的子文件夹中，并使用 @ 符号来命名该作用域前缀，例如`npm install @myorg/package`将包放在`{prefix}/node_modules/@myorg/package`. 请参阅`scope`了解更多详情。

如果您想要`require()`一个软件包，请在本地安装它。

#### `executables`

`{prefix}/bin`在全局模式下，可执行文件在 Unix 上链接到，或`{prefix}`在 Windows 上直接链接到。确保该路径位于您的终端`PATH`环境中才能运行它们。

在本地模式下，可执行文件被链接到`./node_modules/.bin`，以便它们可以供通过 npm 运行的脚本使用。（例如，这样当您运行时，测试运行程序将位于路径中`npm test`。）

#### `man-pages`

在全局模式下，手册页链接到`{prefix}/share/man`.

在本地模式下，不会安装手册页。

Windows 系统上未安装手册页。

#### `cache`

看`npm cache`。缓存文件存储`~/.npm`在 Posix 或`%AppData%/npm-cache`Windows 上。

这是由`cache`配置参数控制的。

#### `temp-files`

临时文件默认存储在`tmp`配置指定的文件夹中，默认为 TMPDIR、TMP 或 TEMP 环境变量，或者`/tmp`在 Unix 和`c:\windows\temp`Windows 上。

每次运行程序时，临时文件都会在此根目录下获得一个唯一的文件夹，并在成功退出后被删除。

### `more-information`

在本地安装时，npm 首先尝试找到合适的`prefix`文件夹。这样`npm install foo@1.2.3`即使您碰巧已经进入`cd`了其他文件夹，它也会安装到软件包的合理根目录中。

从 $PWD 开始，npm 将沿着文件夹树向上查找包含`package.json`文件或`node_modules`文件夹的文件夹。如果找到这样的东西，那么它将被视为有效的“当前目录”，以便运行 npm 命令。（此行为受到并类似于在工作目录中运行 git 命令时 git 的 .git-folder 搜索逻辑的启发。）

如果未找到包根目录，则使用当前文件夹。

当您运行时`npm install foo@1.2.3`，包将加载到缓存中，然后解压到`./node_modules/foo`. 然后，任何 foo 的依赖项都会类似地解压到`./node_modules/foo/node_modules/...`.

任何 bin 文件都符号链接到`./node_modules/.bin/`，以便 npm 脚本在必要时可以找到它们。

#### `global-installation`

如果`global`配置设置为 true，则 npm 将“全局”安装软件包。

对于全局安装，软件包的安装方式大致相同，但使用上述文件夹。

#### `cycles-conflicts-and-folder-parsimony`

循环是使用节点模块系统的属性来处理的，它会在目录中查找`node_modules`文件夹。因此，在每个阶段，如果包已安装在祖先`node_modules`文件夹中，则它不会安装在当前位置。

考虑上面的情况，其中`foo -> bar -> baz`. 想象一下，除此之外，baz 还依赖于 bar，那么你就会有：`foo -> bar -> baz -> bar -> baz ...`。但是，由于文件夹结构是：`foo/node_modules/bar/node_modules/baz`，因此无需将 bar 的另一个副本放入`.../baz/node_modules`，因为当它调用 require("bar") 时，它将获取安装在 中的副本`foo/node_modules/bar`。

仅当完全相同的版本安装在多个嵌套`node_modules`文件夹中时才使用此快捷方式。`a/node_modules/b/node_modules/a`如果两个“a”包是不同版本，仍然有可能。然而，如果不多次重复完全相同的包，总是可以防止无限倒退。

另一种优化可以通过在本地化的“目标”文件夹下方的尽可能最高级别安装依赖项来进行。

#### `example`

考虑这个依赖图：



```bash
foo
+-- blerg@1.2.5
+-- bar@1.2.3
|   +-- blerg@1.x (latest=1.3.7)
|   +-- baz@2.x
|   |   `-- quux@3.x
|   |       `-- bar@1.2.3 (cycle)
|   `-- asdf@*
`-- baz@1.2.3
    `-- quux@3.x
        `-- bar
```

在这种情况下，我们可能期望这样的文件夹结构：



```bash
foo
+-- node_modules
    +-- blerg (1.2.5) <---[A]
    +-- bar (1.2.3) <---[B]
    |   `-- node_modules
    |       +-- baz (2.0.2) <---[C]
    |       |   `-- node_modules
    |       |       `-- quux (3.2.0)
    |       `-- asdf (2.3.4)
    `-- baz (1.2.3) <---[D]
        `-- node_modules
            `-- quux (3.2.0) <---[E]
```

由于 foo 直接依赖于`bar@1.2.3`和`baz@1.2.3`，因此它们安装在 foo 的`node_modules`文件夹中。

尽管 blerg 的最新副本是 1.3.7，但 foo 对版本 1.2.5 有特定的依赖性。因此，它被安装在[A]。由于 blerg 的父安装满足 bar 对 的依赖性`blerg@1.x`，因此它不会在 [B] 下安装另一个副本。

Bar [B] 还依赖于 baz 和 asdf，因此它们安装在 bar 的`node_modules`文件夹中。因为它依赖于`baz@2.x`，所以它不能重新使用`baz@1.2.3`父`node_modules`文件夹 [D] 中安装的，而必须安装它自己的副本 [C]。

在条形图下方，`baz -> quux -> bar`依赖关系创建了一个循环。然而，因为 bar 已经在 quux 的祖先 [B] 中，所以它不会将 bar 的另一个副本解压到该文件夹中。

在 [D]下`foo -> baz`，quux 的 [E] 文件夹树是空的，因为它对 bar 的依赖性由安装在 [B] 的父文件夹副本满足。

要以图形方式显示安装内容的位置，请使用`npm ls`。

#### `publishing`

发布后，npm 将在文件夹中查找`node_modules`。如果数组中没有任何项目`bundledDependencies`，那么它们将不会包含在包 tarball 中。

这允许包维护者在本地安装所有依赖项（和开发依赖项），但仅重新发布那些在其他地方找不到的项目。请参阅`package.json`获取更多信息。