### description

本文档是您需要了解的有关 package.json 文件中所需内容的全部内容。它必须是实际的 JSON，而不仅仅是 JavaScript 对象文字。

本文档中描述的许多行为都受到 中描述的配置设置的影响`config`。

### name

如果您计划发布包，则package.json 中*最重要的内容是名称和版本字段，因为它们是必需的。*名称和版本一起形成一个标识符，假定该标识符是完全唯一的。对包的更改应该伴随着对版本的更改。如果您不打算发布包，则名称和版本字段是可选的。

名字就是你的东西的名字。

一些规则：

- 名称必须小于或等于 214 个字符。这包括范围包的范围。
- 作用域包的名称可以以点或下划线开头。如果没有范围，这是不允许的。
- 新包的名称中不得包含大写字母。
- 该名称最终成为 URL、命令行参数和文件夹名称的一部分。因此，名称不能包含任何非 URL 安全字符。

一些技巧：

- 不要使用与核心 Node 模块相同的名称。
- 不要在名称中添加“js”或“node”。假设它是 js，因为您正在编写 package.json 文件，并且可以使用“engines”字段指定引擎。（见下文。）
- 该名称可能会作为参数传递给 require()，因此它应该很短，但也具有合理的描述性。
- 在你过于依赖它之前，你可能需要检查一下 npm 注册表，看看是否已经有同名的东西了。https://www.npmjs.com/

名称可以选择以范围为前缀，例如`@myorg/mypackage`。`scope`详情请参阅。

### version

如果您计划发布包，则package.json 中*最重要的内容是名称和版本字段，因为它们是必需的。*名称和版本一起形成一个标识符，假定该标识符是完全唯一的。对包的更改应该伴随着对版本的更改。如果您不打算发布包，则名称和版本字段是可选的。

版本必须可由[node-semver](https://github.com/npm/node-semver)解析，它作为依赖项与 npm 捆绑在一起。（`npm install semver`自己使用它。）

### description-1

在其中添加描述。这是一个字符串。这可以帮助人们发现您的软件包，如 中所列`npm search`。

### keywords

把关键词放进去。它是一个字符串数组。这可以帮助人们发现您的包裹，因为它在 中列出`npm search`。

### homepage

项目主页的 url。

例子：

```json
"homepage": "https://github.com/owner/project#readme"
```

### bugs

项目问题跟踪器的 URL 和/或应向其报告问题的电子邮件地址。这些对于遇到包裹问题的人很有帮助。

它应该看起来像这样：

```json
{
  "url": "https://github.com/owner/project/issues",
  "email": "project@hostname.com"
}
```

您可以指定一个或两个值。如果您只想提供 url，则可以将“bugs”的值指定为简单字符串而不是对象。

如果提供了 url，命令将使用它`npm bugs`。

### license

您应该为您的软件包指定一个许可证，以便人们知道如何允许他们使用它，以及您对其施加的任何限制。

如果您使用的是 BSD-2-Clause 或 MIT 等通用许可证，请为您正在使用的许可证添加当前的 SPDX 许可证标识符，如下所示：

```json
{
  "license": "BSD-3-Clause"
}
```

您可以查看[SPDX 许可证 ID 的完整列表](https://spdx.org/licenses/)。理想情况下，您应该选择一个经过[OSI](https://opensource.org/licenses/alphabetical)批准的产品。

如果您的软件包已获得多个通用许可证的许可，请使用[SPDX 许可证表达式语法版本 2.0 string](https://www.npmjs.com/package/spdx)，如下所示：

```json
{
  "license": "(ISC OR GPL-3.0)"
}
```

如果您使用的许可证尚未分配 SPDX 标识符，或者您使用的是自定义许可证，请使用如下字符串值：

```json
{
  "license": "SEE LICENSE IN <filename>"
}
```

`<filename>`然后包含一个在包的顶层命名的文件。

一些旧包使用许可证对象或包含许可证对象数组的“许可证”属性：



```json
// Not valid metadata
{
  "license" : {
    "type" : "ISC",
    "url" : "https://opensource.org/licenses/ISC"
  }
}

// Not valid metadata
{
  "licenses" : [
    {
      "type": "MIT",
      "url": "https://www.opensource.org/licenses/mit-license.php"
    },
    {
      "type": "Apache-2.0",
      "url": "https://opensource.org/licenses/apache2.0.php"
    }
  ]
}
```

这些样式现已弃用。相反，使用 SPDX 表达式，如下所示：

```json
{
  "license": "ISC"
}
```



```json
{
  "license": "(MIT OR Apache-2.0)"
}
```

最后，如果您不希望根据任何条款授予其他人使用私人或未发布的软件包的权利：



```json
{
  "license": "UNLICENSED"
}
```

还要考虑设置`"private": true`以防止意外发布。

### people fields: author, contributors

“作者”是一个人。“贡献者”是一群人。“person”是一个带有“name”字段以及可选的“url”和“email”的对象，如下所示：



```json
{
  "name": "Barney Rubble",
  "email": "b@rubble.com",
  "url": "http://barnyrubble.tumblr.com/"
}
```

或者您可以将其全部缩短为单个字符串，npm 将为您解析它：



```json
{
  "author": "Barney Rubble <b@rubble.com> (http://barnyrubble.tumblr.com/)"
}
```

电子邮件和网址都是可选的。

npm 还使用您的 npm 用户信息设置顶级“维护者”字段。

### funding

您可以指定一个包含 URL 的对象，该 URL 提供有关帮助资助包开发的方法的最新信息、字符串 URL 或以下数组：



```json
{
  "funding": {
    "type": "individual",
    "url": "http://example.com/donate"
  },

  "funding": {
    "type": "patreon",
    "url": "https://www.patreon.com/my-account"
  },

  "funding": "http://example.com/donate",

  "funding": [
    {
      "type": "individual",
      "url": "http://example.com/donate"
    },
    "http://example.com/donateAlso",
    {
      "type": "patreon",
      "url": "https://www.patreon.com/my-account"
    }
  ]
}
```

用户可以使用`npm fund`子命令列出`funding`其项目的所有依赖项的 URL（直接和间接）。提供项目名称时还可以使用访问每个融资网址的快捷方式，例如：（`npm fund <projectname>`当有多个网址时，将访问第一个）

### files

可选`files`字段是一个文件模式数组，描述当您的包作为依赖项安装时要包含的条目。文件模式遵循与 类似的语法`.gitignore`，但相反：包含文件、目录或 glob 模式（`*`、`**/*`等）将使文件在打包时包含在 tarball 中。省略该字段将使其默认为`["*"]`，这意味着它将包含所有文件。

一些特殊的文件和目录也会被包含或排除，无论它们是否存在于数组中`files`（见下文）。

您还可以`.npmignore`在包的根目录或子目录中提供一个文件，这将防止包含文件。在包的根目录中，它不会覆盖“文件”字段，但在子目录中它会覆盖。该`.npmignore`文件的工作方式就像`.gitignore`. 如果存在`.gitignore`文件但`.npmignore`丢失，`.gitignore`则将使用 的内容。

*无法*`.npmignore`通过或排除“package.json#files”字段中包含的文件`.gitignore`。

无论设置如何，始终包含某些文件：

- `package.json`
- `README`
- `LICENSE`/`LICENCE`
- “主”字段中的文件

`README`&`LICENSE`可以有任何情况和扩展。

相反，有些文件总是被忽略：

- `.git`
- `CVS`
- `.svn`
- `.hg`
- `.lock-wscript`
- `.wafpickle-N`
- `.*.swp`
- `.DS_Store`
- `._*`
- `npm-debug.log`
- `.npmrc`
- `node_modules`
- `config.gypi`
- `*.orig`
- `package-lock.json`（`npm-shrinkwrap.json`如果您希望发布，请使用）

### main

main 字段是模块 ID，它是程序的主要入口点。也就是说，如果您的包名为`foo`，并且用户安装了它，然后执行`require("foo")`，则将返回主模块的导出对象。

这应该是相对于包文件夹根目录的模块。

对于大多数模块来说，拥有一个主脚本是最有意义的，通常没有太多其他内容。

如果`main`未设置，则默认位于`index.js`包根文件夹中。

### browser

如果您的模块打算在客户端使用，则应使用浏览器字段而不是主字段。这有助于提示用户它可能依赖于 Node.js 模块中不可用的原语。（例如`window`）

### bin

许多软件包都有一个或多个可执行文件，它们希望将其安装到 PATH 中。npm 使这变得非常简单（事实上，它使用此功能来安装“npm”可执行文件。）

要使用此功能，请`bin`在 package.json 中提供一个字段，该字段是命令名到本地文件名的映射。当此软件包全局安装时，该文件将链接到全局 bin 所在的位置，以便可以按名称运行它。当此包作为另一个包中的依赖项安装时，该文件将被链接到该包可以直接通过`npm exec`或通过其他脚本调用它们时通过名称来使用该文件`npm run-script`。

例如，myapp 可以有这样的：



```json
{
  "bin": {
    "myapp": "./cli.js"
  }
}
```

因此，当您安装 myapp 时，它将创建一个从`cli.js`脚本到`/usr/local/bin/myapp`.

如果您有一个可执行文件，并且其名称应该是包的名称，那么您可以将其作为字符串提供。例如：

```json
{
  "name": "my-program",
  "version": "1.2.5",
  "bin": "./path/to/program"
}
```

会是这样的：

```json
{
  "name": "my-program",
  "version": "1.2.5",
  "bin": {
    "my-program": "./path/to/program"
  }
}
```

请确保您在 中引用的文件以`bin`开头`#!/usr/bin/env node`，否则脚本将在没有节点可执行文件的情况下启动！

directoriesbin设置可执行文件。

有关可执行文件的更多信息，请参阅executables

### man

指定要放置的单个文件或文件名数组以供`man`程序查找。

如果仅提供一个文件，则安装该文件时，它是 的结果`man <pkgname>`，无论其实际文件名如何。例如：



```json
{
  "name": "foo",
  "version": "1.2.3",
  "description": "A packaged foo fooer for fooing foos",
  "main": "foo.js",
  "man": "./man/doc.1"
}
```

将链接该`./man/doc.1`文件，使其成为目标`man foo`

如果文件名不以包名开头，则会添加前缀。所以这：

```json
{
  "name": "foo",
  "version": "1.2.3",
  "description": "A packaged foo fooer for fooing foos",
  "main": "foo.js",
  "man": ["./man/foo.1", "./man/bar.1"]
}
```

将创建文件来执行`man foo`和`man foo-bar`.

Man 文件必须以数字结尾，`.gz`如果被压缩，还可以选择后缀。该数字指示文件安装到哪个 man 部分。

```json
{
  "name": "foo",
  "version": "1.2.3",
  "description": "A packaged foo fooer for fooing foos",
  "main": "foo.js",
  "man": ["./man/foo.1", "./man/foo.2"]
}
```

将为`man foo`和创建条目`man 2 foo`

### directories

CommonJS [Packages](http://wiki.commonjs.org/wiki/Packages/1.0)规范详细介绍了几种使用对象指示包结构的方法`directories`。如果你查看[npm 的 package.json](https://registry.npmjs.org/npm/latest)，你会发现它有 doc、lib 和 man 目录。

将来，这些信息可能会以其他创造性的方式使用。

#### directoriesbin

`bin`如果您在 中指定目录`directories.bin`，则将添加该文件夹中的所有文件。

由于该`bin`指令的工作方式，同时指定`bin`路径和设置`directories.bin`是错误的。如果要指定单个文件，请使用`bin`，对于现有目录中的所有文件`bin`，请使用`directories.bin`。

#### directoriesman

一个充满手册页的文件夹。Sugar 通过遍历文件夹来生成“man”数组。

### repository

指定您的代码所在的位置。这对于想要做出贡献的人很有帮助。如果 git 存储库位于 GitHub 上，那么该`npm docs`命令将能够找到您。

像这样做：



```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/npm/cli.git"
  }
}
```

该 URL 应该是一个公开可用的（可能是只读的）URL，可以直接传递给 VCS 程序而无需任何修改。它不应该是您放入浏览器中的 html 项目页面的 URL。是给电脑用的。

对于 GitHub、GitHub gist、Bitbucket 或 GitLab 存储库，您可以使用与以下内容相同的快捷语法`npm install`：



```json
{
  "repository": "npm/npm",

  "repository": "github:user/repo",

  "repository": "gist:11081aaa281",

  "repository": "bitbucket:user/repo",

  "repository": "gitlab:user/repo"
}
```

如果`package.json`您的包不在根目录中（例如，如果它是 monorepo 的一部分），您可以指定它所在的目录：



```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/facebook/react.git",
    "directory": "packages/react-dom"
  }
}
```

### scripts

“scripts”属性是一个字典，其中包含在包生命周期中不同时间运行的脚本命令。键是生命周期事件，值是在该点运行的命令。

请参阅`scripts`参考资料 了解有关编写包脚本的更多信息。

### config

“config”对象可用于设置在升级过程中持续存在的包脚本中使用的配置参数。例如，如果一个包具有以下内容：



```json
{
  "name": "foo",
  "config": {
    "port": "8080"
  }
}
```

它还可以有一个引用`npm_package_config_port`环境变量的“启动”命令。

### dependencies

依赖关系在一个简单的对象中指定，该对象将包名称映射到版本范围。版本范围是一个字符串，具有一个或多个以空格分隔的描述符。还可以使用 tarball 或 git URL 来标识依赖关系。

**请不要将测试工具或转译器或其他“开发”时间工具放入您的`dependencies`对象中。**见`devDependencies`下文。

有关指定版本范围的更多详细信息，请参阅versions

- `version`必须`version`完全匹配
- `>version`必须大于`version`
- `>=version`ETC
- `<version`
- `<=version`
- `~version`“大约相当于版本”参见versions
- `^version`“兼容版本”参见versions
- `1.2.x`1.2.0、1.2.1 等，但不是 1.3.0
- `http://...`请参阅下面的“作为依赖项的 URL”
- `*`匹配任何版本
- `""`（只是一个空字符串）与`*`
- `version1 - version2`与...一样`>=version1 <=version2`。
- `range1 || range2`如果 range1 或 range2 满足，则通过。
- `git...`请参阅下面的“Git URL 作为依赖项”
- `user/repo`请参阅下面的“GitHub URL”
- `tag``tag`标记并发布为“参见”的特定版本`npm dist-tag`
- `path/path/path`请参阅下面的local-paths

例如，这些都是有效的：



```json
{
  "dependencies": {
    "foo": "1.0.0 - 2.9999.9999",
    "bar": ">=1.0.2 <2.1.2",
    "baz": ">1.0.2 <=2.3.4",
    "boo": "2.0.1",
    "qux": "<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0",
    "asd": "http://asdf.com/asdf.tar.gz",
    "til": "~1.2",
    "elf": "~1.2.3",
    "two": "2.x",
    "thr": "3.3.x",
    "lat": "latest",
    "dyl": "file:../dyl"
  }
}
```

#### urls-as-dependencies

您可以指定 tarball URL 来代替版本范围。

该 tarball 将在安装时下载并本地安装到您的软件包中。

#### git-urls-as-dependencies

Git url 的形式如下：

```bash
<protocol>://[<user>[:<password>]@]<hostname>[:<port>][:][/]<path>[#<commit-ish> | #semver:<semver>]
```

`<protocol>``git`是、`git+ssh`、`git+http`、`git+https`、 或之一`git+file`。

如果`#<commit-ish>`提供，它将用于准确克隆该提交。如果 commit-ish 的格式为`#semver:<semver>`，`<semver>`可以是任何有效的 semver 范围或精确版本，npm 将在远程存储库中查找与该范围匹配的任何标签或引用，就像注册表依赖项一样。如果`#<commit-ish>`或均未`#semver:<semver>`指定，则`master`使用 then。

例子：

```bash
git+ssh://git@github.com:npm/cli.git #v1.0.27
git+ssh://git@github.com:npm/cli #semver:^5.0
git+https://isaacs@github.com/npm/cli.git
git://github.com/npm/cli.git #v1.0.27
```

#### github-urls

从版本 1.1.65 开始，您可以将 GitHub url 引用为“foo”：“user/foo-project”。就像 git URL 一样，`commit-ish`可以包含后缀。例如：



```json
{
  "name": "foo",
  "version": "0.0.0",
  "dependencies": {
    "express": "expressjs/express",
    "mocha": "mochajs/mocha#4727d357ea",
    "module": "user/repo#feature/branch"
  }
}
```

#### local-paths

从版本 2.0.0 开始，您可以提供包含包的本地目录的路径。可以使用`npm install -S`或来保存本地路径`npm install --save`，使用以下任意形式：



```bash
../foo/bar
~/foo/bar
./foo/bar
/foo/bar
```

在这种情况下，它们将被标准化为相对路径并添加到您的`package.json`. 例如：



```json
{
  "name": "baz",
  "dependencies": {
    "bar": "file:../foo/bar"
  }
}
```

此功能对于本地离线开发和创建需要 npm 安装（您不想访问外部服务器）的测试很有帮助，但在将包发布到公共注册表时不应使用。

### devdependencies

如果有人计划在他们的程序中下载和使用您的模块，那么他们可能不想或不需要下载和构建您使用的外部测试或文档框架。

在这种情况下，最好将这些附加项目映射到一个`devDependencies`对象中。

`npm link`这些东西将在执行时安装或`npm install`从包的根目录安装，并且可以像任何其他 npm 配置参数一样进行管理。`config`有关该主题的更多信息，请参阅参考资料。

对于非特定于平台的构建步骤，例如将 CoffeeScript 或其他语言编译为 JavaScript，请使用脚本`prepare`来执行此操作，并使所需的包成为 devDependency。

例如：



```json
{
  "name": "ethopia-waza",
  "description": "a delightfully fruity coffee varietal",
  "version": "1.2.3",
  "devDependencies": {
    "coffee-script": "~1.6.3"
  },
  "scripts": {
    "prepare": "coffee -o lib/ -c src/waza.coffee"
  },
  "main": "lib/waza.js"
}
```

该`prepare`脚本将在发布之前运行，以便用户可以使用该功能，而无需自己编译。在开发模式（即本地运行`npm install`）下，它也会运行此脚本，以便您可以轻松测试它。

### peerdependencies

在某些情况下，您希望表达包与主机工具或库的兼容性，但不一定要对此`require`主机进行操作。这通常称为*插件*。值得注意的是，您的模块可能会公开主机文档预期和指定的特定接口。

例如：



```json
{
  "name": "tea-latte",
  "version": "1.3.5",
  "peerDependencies": {
    "tea": "2.x"
  }
}
```

这可确保您的软件包只能与主机软件包的第二个主要版本*一起*`tea-latte`安装。可能会产生以下依赖图：`tea``npm install tea-latte`



```bash
├── tea-latte@1.3.5
└── tea@2.2.0
```

在 npm 版本 3 到 6 中，`peerDependencies`不会自动安装，并且如果在树中发现对等依赖项的无效版本，则会发出警告。从 npm v7 开始，默认安装*peerDependency 。*

如果无法正确解析树，尝试安装另一个具有冲突要求的插件可能会导致错误。因此，请确保您的插件要求尽可能广泛，而不是将其锁定到特定的补丁版本。

假设主机符合[semver](https://semver.org/)，只有主机包的主要版本的更改才会破坏您的插件。因此，如果您使用过主机包的每个 1.x 版本，请使用`"^1.0"`或`"1.x"`来表达这一点。如果您依赖 1.5.2 中引入的功能，请使用`"^1.5.2"`.

### peerDependenciesMeta

当用户安装您的软件包时，如果`peerDependencies`尚未安装中指定的软件包，npm 将发出警告。该`peerDependenciesMeta`字段用于向 npm 提供有关如何使用对等依赖项的更多信息。具体来说，它允许将对等依赖关系标记为可选。

例如：



```json
{
  "name": "tea-latte",
  "version": "1.3.5",
  "peerDependencies": {
    "tea": "2.x",
    "soy-milk": "1.2"
  },
  "peerDependenciesMeta": {
    "soy-milk": {
      "optional": true
    }
  }
}
```

`soy-milk`将对等依赖项标记为可选可确保如果主机上未安装软件包，npm 不会发出警告。这允许您集成各种主机包并与之交互，而无需安装所有这些包。

### bundledDependencies

这定义了发布包时将捆绑的包名称数组。

如果您需要在本地保留 npm 包或通过单个文件下载获得它们，您可以通过在数组中指定包名称`bundledDependencies`并执行`npm pack`.

例如：

如果我们像这样定义一个package.json：



```json
{
  "name": "awesome-web-framework",
  "version": "1.0.0",
  "bundledDependencies": ["renderized", "super-streams"]
}
```

我们可以`awesome-web-framework-1.0.0.tgz`通过运行来获取文件`npm pack`。该文件包含依赖项`renderized`，`super-streams`可以通过执行将其安装在新项目中`npm install awesome-web-framework-1.0.0.tgz`。请注意，包名称不包含任何版本，因为该信息在 中指定`dependencies`。

如果这是拼写的话`"bundleDependencies"`，那也是荣幸的。

### optionalDependencies

如果可以使用依赖项，但您希望 npm 在找不到或安装失败时继续进行，那么您可以将其放入对象中`optionalDependencies`。这是包名称到版本或 url 的映射，就像`dependencies`对象一样。不同之处在于构建失败不会导致安装失败。运行`npm install --no-optional`将阻止安装这些依赖项。

处理依赖关系的缺乏仍然是您的程序的责任。例如，这样的事情：



```js
try {
  var foo = require("foo");
  var fooVersion = require("foo/package.json").version;
} catch (er) {
  foo = null;
}
if (notGoodFooVersion(fooVersion)) {
  foo = null;
}

// .. then later in your program ..

if (foo) {
  foo.doFooThings();
}
```

中的条目`optionalDependencies`将覆盖 中的同名条目`dependencies`，因此通常最好只放在一个位置。

### engines

您可以指定您的东西适用的节点版本：

```json
{
  "engines": {
    "node": ">=0.10.3 <15"
  }
}
```

而且，与依赖项一样，如果您不指定版本（或者指定“*”作为版本），则任何版本的节点都可以。

您还可以使用“引擎”字段来指定哪些版本的 npm 能够正确安装您的程序。例如：

```json
{
  "engines": {
    "npm": "~1.0.20"
  }
}
```

除非用户设置了`engine-strict`配置标志，否则此字段仅供参考，并且仅在您的软件包作为依赖项安装时才会产生警告。

### os

您可以指定您的模块将在哪些操作系统上运行：

```json
{
  "os": ["darwin", "linux"]
}
```

您还可以阻止而不是允许操作系统，只需在被阻止的操作系统前面加上“!”：

```json
{
  "os": ["!win32"]
}
```

主机操作系统由以下因素决定`process.platform`

允许阻止和允许某个项目，尽管没有任何充分的理由这样做。

### cpu

如果您的代码仅在某些 cpu 架构上运行，您可以指定哪些架构。

```json
{
  "cpu": ["x64", "ia32"]
}
```

与该`os`选项一样，您也可以阻止架构：



```json
{
  "cpu": ["!arm", "!mips"]
}
```

主机架构由以下因素决定`process.arch`

### private

如果你`"private": true`在 package.json 中设置，那么 npm 将拒绝发布它。

这是防止意外发布私人存储库的一种方法。如果您想确保给定的包仅发布到特定注册表（例如内部注册表），请使用下面描述的字典在发布时`publishConfig`覆盖配置参数。`registry`

### publishconfig

这是一组将在发布时使用的配置值。如果您想要设置标签、注册表或访问权限，那么它特别方便，这样您就可以确保给定的包没有被标记为“最新”、发布到全局公共注册表或默认情况下范围模块是私有的。

请`config`参阅查看可以覆盖的配置选项列表。

### workspaces

可选`workspaces`字段是一个文件模式数组，用于描述安装客户端应查找的本地文件系统中的位置，以找到需要符号链接到顶级文件夹的每个[工作区](https://docs.npmjs.com/cli/v7/using-npm/workspaces)`node_modules`。

它可以描述用作工作区的文件夹的直接路径，也可以定义将解析为这些相同文件夹的全局变量。

在以下示例中，`./packages`只要其中包含有效`package.json`文件，位于该文件夹内的所有文件夹都将被视为工作区：



```json
{
  "name": "workspace-example",
  "workspaces": ["./packages/*"]
}
```

请参阅`workspaces`参考资料 获取更多示例。

### default-values

npm 将根据包内容默认一些值。

- `"scripts": {"start": "node server.js"}`

  如果你的包的根目录中有一个`server.js`文件，那么 npm 将默认命令`start`为`node server.js`.

- `"scripts":{"install": "node-gyp rebuild"}`

  如果你的包的根目录中有一个`binding.gyp`文件，并且你没有定义`install`or`preinstall`脚本，npm 将默认`install`使用 node-gyp 进行编译的命令。

- `"contributors": [...]`

  如果你的包的根目录中有一个`AUTHORS`文件，npm 会将每一行视为一种`Name <email> (url)`格式，其中 email 和 url 是可选的。以 a`#`或空白开头的行将被忽略。
