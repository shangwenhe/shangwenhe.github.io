import { chaters as tschaters } from "../chapters/ts-chapters";
import { chaters as jschaters } from "../chapters/js-chapters";
import { chaters as eschaters } from "../chapters/es6-chapters";
import { chaters as bashchaters } from "../chapters/bash-chapters";
import { chaters as bashcommandchaters } from "../chapters/bash-command-chapters";
import { chaters as blogchaters } from "../chapters/blog-chapters";
import { chaters as svgchaters } from "../chapters/svg-chapters";
import { chaters as npmchaters } from "../chapters/npm-chapters";

const friendLink = [
  {
    href: "https://www.yanlingxinrui.com",
    title: "研发解决方案",
  },
  {
    href: "https://cloud.yanlingxinrui.com",
    title: "互助平台",
  },
];

const footer = {
  message:
    "友情链接: " +
    friendLink
      .map((item) => `<a href="${item.href}" target="_blank">${item.title}</a>`)
      .join(" • "),
  copyright:
    'Released under the MIT License.<br/>Copyright © 2024 <a href="mailto:ashang.wenhe@gmail.com">ashang.wenhe@gmail.com</a>',
};

const nav = [
  { text: "TypeScript", link: "/ts/intro.html" },
  { text: "JavaScript", link: "/js/basic/introduction.html" },
  { text: "ES6", link: "/es6/intro.html" },
  { text: "Blog", link: "/blog/namespace.md" },
  {
    text: "相关资料",
    link: "https://github.com/wangdoc",
    target: "_blank",
    rel: "wangdoc",
  },
];

const sidebar = {
  "/ts": {
    text: "TypeScript",
    collapsed: false,
    items: tschaters,
  },
  "/js": {
    text: "Javascript",
    collapsed: false,
    items: jschaters,
  },
  "/es6": {
    text: "ES6",
    collapsed: false,
    items: eschaters,
  },
  "/bash/archives/commands": {
    text: "Bash",
    collapsed: false,
    items: bashcommandchaters,
  },
  "/bash": {
    text: "Bash",
    collapsed: false,
    items: bashchaters,
  },
  "/blog": {
    text: "Blog",
    collapsed: false,
    items: blogchaters,
  },
  "/svg": {
    text: "Svg",
    collapsed: false,
    items: svgchaters,
  },
  "/npm": {
    text: "NPM",
    collapsed: false,
    items: npmchaters,
  },
};

const srcExclude = ["h/*", "chapters/**"];

const socialLinks = [
  {
    icon: "github",
    link: "https://github.com/shangwenhe/shangwenhe.github.io",
  },
];

const search = {
  provider: "local",
  options: {
    locales: {
      zh: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  },
};

const head = [
  [
    "meta",
    {
      name: "baidu-site-verification",
      content: "codeva-0eF9ndfgJR",
    },
  ],
];
const sitemap = {
  hostname: "https://tech.yanlingxinrui.com",
  lastmodDateOnly: false,
};
export default {
  // app level config options
  lang: "zh-CN",
  title: "Front End",
  head,
  port: "5174",
  sitemap,
  // description: 'Vite & Vue powered static site generator.',
  srcExclude,
  themeConfig: {
    siteTitle: "Front End",
    nav,
    sidebar,
    footer,
    socialLinks,
    search,
  },
};
