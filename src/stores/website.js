import { defineStore } from 'pinia';

export const useWebsitesStore = defineStore('websites', {
  state: () => ({
    websites: [
      { id: 1, url: 'https://cn.vuejs.org/', name: 'Vue' },
      { id: 2, url: 'https://leetcode.cn/', name: 'LeetCode' },
      { id: 3, url: 'https://www.bilibili.com/', name: 'Bilibili' },

      { id: 4, url: 'https://bb-bus.vercel.app/', name: 'BB-Bus' },
      {
        id: 5,
        url: 'https://lobe-chat-xi-khaki.vercel.app/chat',
        name: 'Lobe-Chat',
      },

      { id: 6, url: 'https://chat.deepseek.com/', name: 'deepseekchat' },
      {
        id: 7,
        url: 'https://www.coze.com/space/7372479476049313808/bot',
        name: 'Coze',
      },
      {
        id: 8,
        url: 'https://notion-next-pi-ebon-17.vercel.app/',
        name: 'Notion Clone',
      },
      {
        id: 9,
        url: 'https://cssreference.io/property/align-content/',
        name: 'CSS Reference',
      },
      {
        id: 10,
        url: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
        name: 'CSS Tricks',
      },
      {
        id: 11,
        url: 'https://hotkeycheatsheet.com/zh',
        name: 'Hotkey Cheatsheet',
      },
      {
        id: 12,
        url: 'https://mermaid.nodejs.cn/intro/getting-started.html/',
        name: 'Mermaid',
      },
      { id: 13, url: 'https://plantuml.com/zh/', name: 'PlantUML' },
      {
        id: 14,
        url: 'https://pythontutor.com/javascript.html#mode=edit',
        name: 'JavaScriptTutor',
      },
      {
        id: 15,
        url: 'https://tsejx.github.io/javascript-guidebook/',
        name: 'JavaScript Guidebook',
      },
      {
        id: 16,
        url: 'https://wangchujiang.com/reference/index.html',
        name: 'reference',
      },
      { id: 17, url: 'https://zh-hans.react.dev/learn', name: 'React' },
      {
        id: 18,
        url: 'https://andreasbm.github.io/web-skills/',
        name: 'webSkill',
      },
      {
        id: 19,
        url: 'https://cssgradient.io/',
        name: 'CSS Gradient',
      },
      {
        id: 20,
        url: 'https://web.dev/about?hl=zh-cn',
        name: 'webdev',
      },
      {
        id: 21,
        url: 'https://tsejx.github.io/css-guidebook/',
        name: 'CSS guidebook',
      },
      {
        id: 22,
        url: 'https://jonychen95.github.io/pintree/',
        name: 'pintree',
      },
      {
        id: 23,
        url: 'https://zq99299.github.io/note-book/',
        name: 'CSS技术笔记',
      },
      {
        id: 24,
        url: 'https://es6.ruanyifeng.com/#docs/intro',
        name: 'ECMAScript 6 ',
      },
      {
        id: 25,
        url: 'https://muyiy.cn/blog/1/1.1.html#%E5%88%9B%E5%BB%BA%E9%98%B6%E6%AE%B5',
        name: 'Javascript 进阶 ',
      },
      {
        id: 26,
        url: 'https://www.javascripttutorial.net/',
        name: 'JavascriptTurrial ',
      },
      {
        id: 27,
        url: 'https://vant-ui.github.io/vant/#/zh-CN',
        name: 'Vant UI',
      },

      {
        id: 28,
        url: 'https://www.shadcn-vue.com/',
        name: 'shadcn-vue',
      },
      {
        id: 29,
        url: 'https://jkchao.github.io/typescript-book-chinese/',
        name: '深入理解TypeScript',
      },

      {
        id: 30,
        url: 'https://xiaolincoding.com/network/',
        name: '计算机网络',
      },
      {
        id: 31,
        url: 'https://xiaolincoding.com/os/',
        name: '计算机操作系统',
      },
      {
        id: 32,
        url: 'https://www.yuque.com/cuggz/interview',
        name: '前端面试题',
      },
      {
        id: 33,
        url: 'https://z-lib.gs/',
        name: 'z-lib',
      },
      {
        id: 34,
        url: 'https://codeguide.bootcss.com/',
        name: 'Css code guide',
      },
      {
        id: 35,
        url: 'https://navnav.co/',
        name: 'Nav Nav UI',
      },
      {
        id: 36,
        url: 'https://cssbuttons.io/',
        name: 'CSS Button UI',
      },
      {
        id: 37,
        url: 'https://cubic-bezier.com/#.17,.67,.83,.67',
        name: 'CSS 动画曲线库',
      },
      {
        id: 38,
        url: 'https://www.cssportal.com/',
        name: 'ÇSSPortal',
      },
      {
        id: 39,
        url: 'https://pravatar.cc/',
        name: '图片获取网站',
      },
      {
        id: 40,
        url: 'https://mycolor.space/',
        name: '颜色渐变获取网站',
      },

      {
        id: 41,
        url: 'https://coolors.co/',
        name: 'Color 获取网站',
      },
      {
        id: 42,
        url: 'https://borderradiuscalculator.vercel.app/',
        name: 'BorderRadiusCaculator',
      },
      {
        id: 43,
        url: 'https://fakerjs.dev/',
        name: 'Faker.js',
      },
      {
        id: 44,
        url: 'https://react-icons.github.io/react-icons/',
        name: 'React Icons',
      },

      // 添加更多网站
    ],
    currentWebsite: null,
  }),
  actions: {
    setCurrentWebsite(id) {
      this.currentWebsite = this.websites.find((website) => website.id === id);
    },
  },
});
