### `概要`



```bash
npm prefix [-g]
```

注意：此命令不知道工作区。

### `description`

将本地前缀打印到标准输出。这是包含`package.json`文件或`node_modules`目录的最接近的父目录，除非`-g`也指定了。

如果`-g`指定，这将是全局前缀的值。`npm config`详情请参阅。

### `example`

```bash
npm prefix
/usr/local/projects/foo
```



```bash
npm prefix -g
/usr/local
```

### `configuration`

#### `global`

- 默认值：假
- 类型：布尔值

在“全局”模式下运行，以便将包安装到该`prefix`文件夹而不是当前工作目录中。有关行为差异的更多信息，请参阅[文件夹。](https://docs.npmjs.com/cli/v7/configuring-npm/folders)

- 软件包将安装到该`{prefix}/lib/node_modules`文件夹中，而不是当前工作目录中。
- bin 文件链接到`{prefix}/bin`
- 手册页链接到`{prefix}/share/man`



### 使用示例： 

> 在给定的工程目录下执行命令

```
npm run format --prefix=/Users/rc/Code/rongcloud.net/public-web/Arco-Design-Pro/hello-arco-pro
```

