
export const chaters = [
  { text: '简介', link: '/ts/intro.html' },
  {
    text: '基本语法',
    collapsed: false,
    items: [
      { text: '基本用法', link: '/ts/basic.html' },
      { text: 'any 类型', link: '/ts/any.html' },
      { text: '类型系统', link: '/ts/types.html' },
      { text: '数组', link: '/ts/array.html' },
      { text: '元组', link: '/ts/tuple.html' },
      { text: 'symbol 类型', link: '/ts/symbol.html' },
      { text: '函数', link: '/ts/function.html' },
      { text: '对象', link: '/ts/object.html' },
    ]
  },
  {
    text: '类/泛型',
    collapsed: false,
    items: [
      { text: 'interface', link: '/ts/interface.html' },
      { text: '类', link: '/ts/class.html' },
      { text: '泛型', link: '/ts/generics.html' },
      { text: 'Enum 类型', link: '/ts/enum.html' },
      { text: '类型断言', link: '/ts/assert.html' },
    ]
  },

  {
    text: '模块/装饰器',
    collapsed: false,
    items: [
      { text: '模块', link: '/ts/module.html' },
      { text: 'namespace', link: '/ts/namespace.html' },
      { text: '装饰器', link: '/ts/decorator.html' },
      { text: '装饰器（旧语法）', link: '/ts/decorator-legacy.html' },
      { text: 'declare 关键字', link: '/ts/declare.html' },
      { text: 'd.ts 类型声明文件', link: '/ts/d.ts.html' },
    ]
  },

  {
    text: '类型运算',
    collapsed: false,
    items: [
      { text: '类型运算符', link: '/ts/operator.html' },
      { text: '类型映射', link: '/ts/mapping.html' },
      { text: '类型工具', link: '/ts/utility.html' },
      { text: '注释指令', link: '/ts/comment.html' },
    ]
  },

  {
    text: '其他',
    collapsed: false,
    items: [
      { text: 'tsconfig.json 文件', link: '/ts/tsconfig.json.html' },
      { text: 'tsc 命令', link: '/ts/tsc.html' }
    ]
  }
]
