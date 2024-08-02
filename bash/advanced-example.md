# 截取内容

## 从文件中获取指定的内容

内容如下： 需要将 `SECTION_GROUPS` 数据内的 section 提取出来。

```js


const SECTIONS: Section[] = [
  {
    name: 'Android',
    docId: 'android-imkit',
    icon: AndroidIcon,
    section: 'mobile-imkit-sdk',
  },
  {
    name: 'iOS',
    docId: 'ios-imkit',
    icon: AppleIcon,
    section: 'mobile-imkit-sdk',
  },


  ... ...
  // RTCLib Web SDKs
  {
    name: 'Web',
    docId: 'web-rtclib',
    icon: HTMLIcon,
    section: 'web-rtclib-sdk',
  },
  {
    name: 'MiniProgram',
    docId: 'miniprogram-rtclib',
    icon: miniWechatIcon,
    section: 'web-rtclib-sdk',
  },
  {
    name: 'Server API',
    docId: 'platform-chat-api',
    icon: APIIcon,
    section: 'platform-chat-api',
  },
  {
    name: 'Server API',
    docId: 'server-rtc-api',
    icon: APIIcon,
    section: 'server-rtc-api',
  },
];


const SECTION_GROUPS: SectionsGroup[][] = [
  [
    {
      name: 'IMKit',
      section: 'mobile-imkit-sdk',
      description: 'IM UI 组件库，加快构建速度',
    },
    {
      name: 'IMLib',
      section: 'mobile-imlib-sdk',
      description: '即时通讯核心能力 SDK，支持单聊 + 群聊 + 聊天室 + 超级群',
    },
  ],

  [
    {
      name: 'Global IM UIKit',
      section: 'mobile-im-uikit-sdk',
      description: '全球化的 IM UI 组件库，支持灵活配置和自定义',
    },
  ],
  ... ...
  [
    {
      name: 'Global IM UIKit',
      section: 'web-im-uikit-sdk',
      description: '全球化的 IM UI 组件库，支持灵活配置和自定义',
    },
  ],
  [
    {
      name: 'CallPlus SDK',
      section: 'web-callplus-sdk',
      description: '新一代呼叫核心能力 SDK，由服务端统一管理呼叫状态和时间',
    },
  ],

];

export { SECTIONS, SECTION_GROUPS };

```

## 设计思路

> 1. 选择定界符并获取中间的内容
> 2. 再过滤 掉无关的内容

### 选择定界符并获取中间的内容

```shell
cat sections.ts| sed -n '/SECTION_GROUPS/,/];/{//!p;}'
```

> 输出 `SECTION_GROUPS` 到 `];` 之间的内容
>
> `/SECTION_GROUPS/,/];/{//!p;}`
> 输出内容

```text
[
    {
      name: '推送',
      section: 'mobile-push-sdk',
      description: '适配所有主流手机厂商推送平台',
    },
  ],
  [
    {
      name: 'IMKit',
      section: 'mobile-imkit-sdk',
      description: 'IM UI 组件库，加快构建速度',
    },
    {
      name: 'IMLib',
      section: 'mobile-imlib-sdk',
      description: '即时通讯核心能力 SDK，支持单聊 + 群聊 + 聊天室 + 超级群',
    },
  ],
```

### 再过滤 掉无关的内容

```bash
cat sections.ts| sed -n '/SECTION_GROUPS/,/];/{//!p;}' | \
grep 'section' | sed 's/ //g;s/section:'\''\(.*\)'\'',/\1/g'
```

> 注意： `sed 's/ //g;s/section:'\''\(.*\)'\'',/\1/g'`
>
> `s/section:'`\\'`'\(.*\)'`\\'`',/\1/g`

结果 展示

```text
mobile-push-sdk
mobile-imkit-sdk
mobile-imlib-sdk
web-imkit-sdk
web-imlib-sdk
mobile-im-uikit-sdk
web-im-uikit-sdk
web-callplus-sdk
mobile-callplus-sdk
web-calllib-sdk
mobile-calllib-sdk
mobile-callkit-sdk
mobile-rtclib-sdk
web-rtclib-sdk
platform-chat-api
server-rtc-api
```
