<template>
    <div class="home">
      <h1>欢迎来到主页</h1>
      <p>这里是主页的内容区域。</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // 示例：使用 ref 创建响应式数据
  const welcomeMessage = ref('欢迎使用 Vue 3 和 Element Plus');
  </script>
  
  <style scoped>
  .home {
    padding: 20px;
    text-align: center;
  }
  
  h1 {
    color: #333;
  }
  
  p {
    color: #666;
    margin-top: 20px;
  }
  </style>