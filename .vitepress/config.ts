import { chaters } from '../ts-chapters'

const footer = {
  message: 'Released under the MIT License.',
  copyright: 'Copyright © 2019-present Evan You'
}


const nav = [
  { text: 'Guide', link: '/guide' },
  { text: 'Config', link: '/config' },
  { text: 'Changelog', link: 'https://github.com/...' },
  {
    text: 'Dropdown Menu',
    items: [
      { text: 'Item A', link: '/item-1' },
      { text: 'Item B', link: '/item-2' },
      { text: 'Item C', link: '/item-3' }
    ]
  }
];

const sidebar = [
  {
    text: 'Guide',
    collapsed: false,
    items: chaters
  },
  {
    text: 'Guide',
    collapsed: false,
    items: [
      { text: 'Introduction', link: '/introduction' },
      { text: 'Getting Started', link: '/getting-started' },
    ]
  }
];



const srcExclude = [ 'typescript-tutorial/**']

export default {
  // app level config options
  lang: 'en-US',
  title: 'Typescript',
  description: 'Vite & Vue powered static site generator.',
  srcExclude,
  themeConfig: {
    siteTitle: 'My Custom Title',
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
