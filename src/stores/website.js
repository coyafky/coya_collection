import { defineStore } from "pinia";

export const useWebsitesStore = defineStore("websites", {
  state: () => ({
    websites: [
      { id: 1, url: "https://algorithm-visualizer.org/",name: "Algorithm Visualizer" },
      { id: 2, url: "https://leetcode.cn/", name: "LeetCode" },
      { id: 3, url: "https://www.bilibili.com/", name: "Bilibili" },
      
      { id: 4, url: "https://bb-bus.vercel.app/" ,name: "BB-Bus"},
      { id: 5, url: "https://lobe-chat-xi-khaki.vercel.app/chat" ,name: "Lobe-Chat"},

      {id:6 ,url:"https://chat.deepseek.com/" ,name:"deepseekchat"},
      {id:7 ,url:"https://www.coze.com/space/7372479476049313808/bot" ,name:"Coze"},
      {id:8 ,url:"https://notion-next-pi-ebon-17.vercel.app/" ,name:"Notion Clone"},
      {id:9 ,url:"https://cssreference.io/property/align-content/" ,name:"CSS Reference"},
      {id:10 ,url:"https://css-tricks.com/snippets/css/complete-guide-grid/" ,name:"CSS Tricks"},
      {id:11 ,url:"https://hotkeycheatsheet.com/zh" ,name:"Hotkey Cheatsheet"},
      {id:12 ,url:"https://mermaid.nodejs.cn/intro/getting-started.html/" ,name:"Mermaid"},
      {id:13 ,url:"https://plantuml.com/zh/" ,name:"PlantUML"},
      {id:14 ,url:"https://pythontutor.com/javascript.html#mode=edit" ,name:"JavaScriptTutor"},
      {id:15 ,url:"https://tsejx.github.io/javascript-guidebook/" ,name:"JavaScript Guidebook"},
      {id:16 ,url:"https://wangchujiang.com/reference/index.html" ,name:"reference"},
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
