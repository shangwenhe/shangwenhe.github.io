import { chaters as tschaters } from '../ts-chapters'
import { chaters as jschaters  } from '../js-chapters'
import { chaters as eschaters  } from '../es6-chapters'
const footer = {
  message: 'Released under the MIT License.',
  copyright: 'Copyright © 2019-present Evan You'
}


const nav = [
  { text: 'TypeScript', link: '/ts/intro.html' },
  { text: 'JavaScript', link: '/js/basic/introduction.html' },
  { text: 'ES6', link: '/es6/intro.html' },
  { text: '资料来源', link: 'https://github.com/wangdoc' },
];

const sidebar = {
  '/ts': {
    text: 'TypeScript',
    collapsed: false,
    items: tschaters
  },
  '/js':{
    text: 'Javascript',
    collapsed: false,
    items: jschaters
  },
  '/es6':{
    text: 'ES6',
    collapsed: false,
    items: eschaters
  }
}


const srcExclude = [ 'typescript-tutorial/**']

export default {
  // app level config options
  lang: 'zh-CN',
  title: 'Front End',
  port: '5174',
  description: 'Vite & Vue powered static site generator.',
  srcExclude,
  themeConfig: {
    siteTitle: 'Front End',
    nav,
    sidebar,
    footer,
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  }
}
