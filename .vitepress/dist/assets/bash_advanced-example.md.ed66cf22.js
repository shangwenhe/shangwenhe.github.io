import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.681fc4ae.js";const b=JSON.parse('{"title":"截取内容","description":"","frontmatter":{},"headers":[],"relativePath":"bash/advanced-example.md","filePath":"bash/advanced-example.md"}'),p={name:"bash/advanced-example.md"},o=l(`<h1 id="截取内容" tabindex="-1">截取内容 <a class="header-anchor" href="#截取内容" aria-label="Permalink to &quot;截取内容&quot;">​</a></h1><h2 id="从文件中获取指定的内容" tabindex="-1">从文件中获取指定的内容 <a class="header-anchor" href="#从文件中获取指定的内容" aria-label="Permalink to &quot;从文件中获取指定的内容&quot;">​</a></h2><p>内容如下： 需要将 <code>SECTION_GROUPS</code> 数据内的 section 提取出来。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">SECTIONS</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Section</span><span style="color:#E1E4E8;">[] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;Android&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    docId: </span><span style="color:#9ECBFF;">&#39;android-imkit&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    icon: AndroidIcon,</span></span>
<span class="line"><span style="color:#E1E4E8;">    section: </span><span style="color:#9ECBFF;">&#39;mobile-imkit-sdk&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;iOS&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    docId: </span><span style="color:#9ECBFF;">&#39;ios-imkit&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    icon: AppleIcon,</span></span>
<span class="line"><span style="color:#E1E4E8;">    section: </span><span style="color:#9ECBFF;">&#39;mobile-imkit-sdk&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// RTCLib Web SDKs</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;Web&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    docId: </span><span style="color:#9ECBFF;">&#39;web-rtclib&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    icon: HTMLIcon,</span></span>
<span class="line"><span style="color:#E1E4E8;">    section: </span><span style="color:#9ECBFF;">&#39;web-rtclib-sdk&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;MiniProgram&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    docId: </span><span style="color:#9ECBFF;">&#39;miniprogram-rtclib&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    icon: miniWechatIcon,</span></span>
<span class="line"><span style="color:#E1E4E8;">    section: </span><span style="color:#9ECBFF;">&#39;web-rtclib-sdk&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;Server API&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    docId: </span><span style="color:#9ECBFF;">&#39;platform-chat-api&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    icon: APIIcon,</span></span>
<span class="line"><span style="color:#E1E4E8;">    section: </span><span style="color:#9ECBFF;">&#39;platform-chat-api&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;Server API&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    docId: </span><span style="color:#9ECBFF;">&#39;server-rtc-api&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    icon: APIIcon,</span></span>
<span class="line"><span style="color:#E1E4E8;">    section: </span><span style="color:#9ECBFF;">&#39;server-rtc-api&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">SECTION_GROUPS</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">SectionsGroup</span><span style="color:#E1E4E8;">[][] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;IMKit&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      section: </span><span style="color:#9ECBFF;">&#39;mobile-imkit-sdk&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      description: </span><span style="color:#9ECBFF;">&#39;IM UI 组件库，加快构建速度&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;IMLib&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      section: </span><span style="color:#9ECBFF;">&#39;mobile-imlib-sdk&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      description: </span><span style="color:#9ECBFF;">&#39;即时通讯核心能力 SDK，支持单聊 + 群聊 + 聊天室 + 超级群&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;Global IM UIKit&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      section: </span><span style="color:#9ECBFF;">&#39;mobile-im-uikit-sdk&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      description: </span><span style="color:#9ECBFF;">&#39;全球化的 IM UI 组件库，支持灵活配置和自定义&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;Global IM UIKit&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      section: </span><span style="color:#9ECBFF;">&#39;web-im-uikit-sdk&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      description: </span><span style="color:#9ECBFF;">&#39;全球化的 IM UI 组件库，支持灵活配置和自定义&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;CallPlus SDK&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      section: </span><span style="color:#9ECBFF;">&#39;web-callplus-sdk&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      description: </span><span style="color:#9ECBFF;">&#39;新一代呼叫核心能力 SDK，由服务端统一管理呼叫状态和时间&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> { SECTIONS, SECTION_GROUPS };</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">SECTIONS</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Section</span><span style="color:#24292E;">[] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;Android&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    docId: </span><span style="color:#032F62;">&#39;android-imkit&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    icon: AndroidIcon,</span></span>
<span class="line"><span style="color:#24292E;">    section: </span><span style="color:#032F62;">&#39;mobile-imkit-sdk&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;iOS&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    docId: </span><span style="color:#032F62;">&#39;ios-imkit&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    icon: AppleIcon,</span></span>
<span class="line"><span style="color:#24292E;">    section: </span><span style="color:#032F62;">&#39;mobile-imkit-sdk&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// RTCLib Web SDKs</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;Web&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    docId: </span><span style="color:#032F62;">&#39;web-rtclib&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    icon: HTMLIcon,</span></span>
<span class="line"><span style="color:#24292E;">    section: </span><span style="color:#032F62;">&#39;web-rtclib-sdk&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;MiniProgram&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    docId: </span><span style="color:#032F62;">&#39;miniprogram-rtclib&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    icon: miniWechatIcon,</span></span>
<span class="line"><span style="color:#24292E;">    section: </span><span style="color:#032F62;">&#39;web-rtclib-sdk&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;Server API&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    docId: </span><span style="color:#032F62;">&#39;platform-chat-api&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    icon: APIIcon,</span></span>
<span class="line"><span style="color:#24292E;">    section: </span><span style="color:#032F62;">&#39;platform-chat-api&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;Server API&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    docId: </span><span style="color:#032F62;">&#39;server-rtc-api&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    icon: APIIcon,</span></span>
<span class="line"><span style="color:#24292E;">    section: </span><span style="color:#032F62;">&#39;server-rtc-api&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">SECTION_GROUPS</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SectionsGroup</span><span style="color:#24292E;">[][] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;IMKit&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      section: </span><span style="color:#032F62;">&#39;mobile-imkit-sdk&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      description: </span><span style="color:#032F62;">&#39;IM UI 组件库，加快构建速度&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;IMLib&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      section: </span><span style="color:#032F62;">&#39;mobile-imlib-sdk&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      description: </span><span style="color:#032F62;">&#39;即时通讯核心能力 SDK，支持单聊 + 群聊 + 聊天室 + 超级群&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;Global IM UIKit&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      section: </span><span style="color:#032F62;">&#39;mobile-im-uikit-sdk&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      description: </span><span style="color:#032F62;">&#39;全球化的 IM UI 组件库，支持灵活配置和自定义&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">  [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;Global IM UIKit&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      section: </span><span style="color:#032F62;">&#39;web-im-uikit-sdk&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      description: </span><span style="color:#032F62;">&#39;全球化的 IM UI 组件库，支持灵活配置和自定义&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;CallPlus SDK&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      section: </span><span style="color:#032F62;">&#39;web-callplus-sdk&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      description: </span><span style="color:#032F62;">&#39;新一代呼叫核心能力 SDK，由服务端统一管理呼叫状态和时间&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> { SECTIONS, SECTION_GROUPS };</span></span></code></pre></div><h2 id="设计思路" tabindex="-1">设计思路 <a class="header-anchor" href="#设计思路" aria-label="Permalink to &quot;设计思路&quot;">​</a></h2><blockquote><ol><li>选择定界符并获取中间的内容</li><li>再过滤 掉无关的内容</li></ol></blockquote><h3 id="选择定界符并获取中间的内容" tabindex="-1">选择定界符并获取中间的内容 <a class="header-anchor" href="#选择定界符并获取中间的内容" aria-label="Permalink to &quot;选择定界符并获取中间的内容&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cat</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">sections.ts</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sed</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-n</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;/SECTION_GROUPS/,/];/{//!p;}&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cat</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sections.ts</span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sed</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-n</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;/SECTION_GROUPS/,/];/{//!p;}&#39;</span></span></code></pre></div><blockquote><p>输出 <code>SECTION_GROUPS</code> 到 <code>];</code> 之间的内容</p><p><code>/SECTION_GROUPS/,/];/{//!p;}</code> 输出内容</p></blockquote><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[</span></span>
<span class="line"><span style="color:#e1e4e8;">    {</span></span>
<span class="line"><span style="color:#e1e4e8;">      name: &#39;推送&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      section: &#39;mobile-push-sdk&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      description: &#39;适配所有主流手机厂商推送平台&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">  ],</span></span>
<span class="line"><span style="color:#e1e4e8;">  [</span></span>
<span class="line"><span style="color:#e1e4e8;">    {</span></span>
<span class="line"><span style="color:#e1e4e8;">      name: &#39;IMKit&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      section: &#39;mobile-imkit-sdk&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      description: &#39;IM UI 组件库，加快构建速度&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">    {</span></span>
<span class="line"><span style="color:#e1e4e8;">      name: &#39;IMLib&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      section: &#39;mobile-imlib-sdk&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      description: &#39;即时通讯核心能力 SDK，支持单聊 + 群聊 + 聊天室 + 超级群&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">  ],</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[</span></span>
<span class="line"><span style="color:#24292e;">    {</span></span>
<span class="line"><span style="color:#24292e;">      name: &#39;推送&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      section: &#39;mobile-push-sdk&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      description: &#39;适配所有主流手机厂商推送平台&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">  ],</span></span>
<span class="line"><span style="color:#24292e;">  [</span></span>
<span class="line"><span style="color:#24292e;">    {</span></span>
<span class="line"><span style="color:#24292e;">      name: &#39;IMKit&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      section: &#39;mobile-imkit-sdk&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      description: &#39;IM UI 组件库，加快构建速度&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">    {</span></span>
<span class="line"><span style="color:#24292e;">      name: &#39;IMLib&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      section: &#39;mobile-imlib-sdk&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      description: &#39;即时通讯核心能力 SDK，支持单聊 + 群聊 + 聊天室 + 超级群&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">  ],</span></span></code></pre></div><h3 id="再过滤-掉无关的内容" tabindex="-1">再过滤 掉无关的内容 <a class="header-anchor" href="#再过滤-掉无关的内容" aria-label="Permalink to &quot;再过滤 掉无关的内容&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cat</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">sections.ts</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sed</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-n</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;/SECTION_GROUPS/,/];/{//!p;}&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#B392F0;">grep</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;section&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sed</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;s/ //g;s/section:&#39;</span><span style="color:#79B8FF;">\\&#39;</span><span style="color:#9ECBFF;">&#39;\\(.*\\)&#39;</span><span style="color:#79B8FF;">\\&#39;</span><span style="color:#9ECBFF;">&#39;,/\\1/g&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cat</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sections.ts</span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sed</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-n</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;/SECTION_GROUPS/,/];/{//!p;}&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#6F42C1;">grep</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;section&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sed</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;s/ //g;s/section:&#39;</span><span style="color:#005CC5;">\\&#39;</span><span style="color:#032F62;">&#39;\\(.*\\)&#39;</span><span style="color:#005CC5;">\\&#39;</span><span style="color:#032F62;">&#39;,/\\1/g&#39;</span></span></code></pre></div><blockquote><p>注意： <code>sed &#39;s/ //g;s/section:&#39;\\&#39;&#39;\\(.*\\)&#39;\\&#39;&#39;,/\\1/g&#39;</code></p><p><code>s/section:&#39;</code>\\&#39;<code>&#39;\\(.*\\)&#39;</code>\\&#39;<code>&#39;,/\\1/g</code></p></blockquote><p>结果 展示</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">mobile-push-sdk</span></span>
<span class="line"><span style="color:#e1e4e8;">mobile-imkit-sdk</span></span>
<span class="line"><span style="color:#e1e4e8;">mobile-imlib-sdk</span></span>
<span class="line"><span style="color:#e1e4e8;">web-imkit-sdk</span></span>
<span class="line"><span style="color:#e1e4e8;">web-imlib-sdk</span></span>
<span class="line"><span style="color:#e1e4e8;">mobile-im-uikit-sdk</span></span>
<span class="line"><span style="color:#e1e4e8;">web-im-uikit-sdk</span></span>
<span class="line"><span style="color:#e1e4e8;">web-callplus-sdk</span></span>
<span class="line"><span style="color:#e1e4e8;">mobile-callplus-sdk</span></span>
<span class="line"><span style="color:#e1e4e8;">web-calllib-sdk</span></span>
<span class="line"><span style="color:#e1e4e8;">mobile-calllib-sdk</span></span>
<span class="line"><span style="color:#e1e4e8;">mobile-callkit-sdk</span></span>
<span class="line"><span style="color:#e1e4e8;">mobile-rtclib-sdk</span></span>
<span class="line"><span style="color:#e1e4e8;">web-rtclib-sdk</span></span>
<span class="line"><span style="color:#e1e4e8;">platform-chat-api</span></span>
<span class="line"><span style="color:#e1e4e8;">server-rtc-api</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">mobile-push-sdk</span></span>
<span class="line"><span style="color:#24292e;">mobile-imkit-sdk</span></span>
<span class="line"><span style="color:#24292e;">mobile-imlib-sdk</span></span>
<span class="line"><span style="color:#24292e;">web-imkit-sdk</span></span>
<span class="line"><span style="color:#24292e;">web-imlib-sdk</span></span>
<span class="line"><span style="color:#24292e;">mobile-im-uikit-sdk</span></span>
<span class="line"><span style="color:#24292e;">web-im-uikit-sdk</span></span>
<span class="line"><span style="color:#24292e;">web-callplus-sdk</span></span>
<span class="line"><span style="color:#24292e;">mobile-callplus-sdk</span></span>
<span class="line"><span style="color:#24292e;">web-calllib-sdk</span></span>
<span class="line"><span style="color:#24292e;">mobile-calllib-sdk</span></span>
<span class="line"><span style="color:#24292e;">mobile-callkit-sdk</span></span>
<span class="line"><span style="color:#24292e;">mobile-rtclib-sdk</span></span>
<span class="line"><span style="color:#24292e;">web-rtclib-sdk</span></span>
<span class="line"><span style="color:#24292e;">platform-chat-api</span></span>
<span class="line"><span style="color:#24292e;">server-rtc-api</span></span></code></pre></div>`,15),e=[o];function c(t,r,i,E,y,d){return n(),a("div",null,e)}const m=s(p,[["render",c]]);export{b as __pageData,m as default};
