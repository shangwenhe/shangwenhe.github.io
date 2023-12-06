### `概要`

```bash
npm logout [--registry=<url>] [--scope=<@scope>]
```

注意：此命令不知道工作区。

### `description`

当登录到支持基于令牌的身份验证的注册表时，告诉服务器结束此令牌的会话。这将使令牌在您使用的任何地方都无效，而不仅仅是当前环境。

当登录到使用用户名和密码身份验证的旧注册表时，这将清除用户配置中的凭据。这种情况下，只会*影响*当前的环境。

如果`--scope`提供，这将查找连接到该范围的注册表的凭据（如果设置）。

### `configuration`

#### `registry`

- 默认值：“ https://registry.npmjs.org/ ”
- 类型： 网址

npm 注册表的基本 URL。

#### `scope`

- 默认值：当前项目的范围（如果有）或“”
- 类型：字符串

将操作与作用域注册表的作用域相关联。

登录或注销私有注册表时很有用：

```bash
# log in, linking the scope to the custom registry
npm login --scope=@mycorp --registry=https://registry.mycorp.com

# log out, removing the link and the auth token
npm logout --scope=@mycorp
```

这将导致`@mycorp`映射到注册表，以便将来安装根据模式指定的包`@mycorp/package`。

这也将导致`npm init`创建一个作用域包。

```bash
# accept all defaults, and create a package named "@foo/whatever",
# instead of just named "whatever"
npm init --scope=@foo --yes
```