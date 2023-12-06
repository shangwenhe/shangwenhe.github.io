### `description`

`npm-shrinkwrap.json`是由 . 创建的文件`npm shrinkwrap`。它与 相同`package-lock.json`，但有一个主要警告：与 不同`package-lock.json`，`npm-shrinkwrap.json`发布包时可能会包含 。

推荐的用例`npm-shrinkwrap.json`是通过注册表上的发布过程部署的应用程序：例如，用于全局安装或`devDependencies`. 强烈建议库作者发布此文件，因为这会阻止最终用户控制传递依赖项更新。

如果 和 都`package-lock.json`存在`npm-shrinkwrap.json`于包根目录中，`npm-shrinkwrap.json`则优先于`package-lock.json`文件。

有关文件格式的完整详细信息和说明`npm-shrinkwrap.json`，请参阅[package-lock.json](https://docs.npmjs.com/cli/v7/configuring-npm/package-lock-json)的手册页。