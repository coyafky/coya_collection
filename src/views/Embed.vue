<template>
    <div>
      <iframe :src="websitesStore.currentWebsite.url" width="100%" height="100%"></iframe>
    </div>
  </template>
  
  <script setup>
  import { useWebsitesStore } from '@/stores/website'
  
  const websitesStore = useWebsitesStore()
  </script>