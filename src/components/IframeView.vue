// src/views/IframeView.vue
<template>
  <iframe :src="url" frameborder="0" style="width: 100%; height: 100%;"></iframe>
</template>

<script setup>
import { defineProps } from 'vue'
import { useUrlStore } from '@/stores/index.js'

const props = defineProps({
  urlKey: {
    type: String,
    required: true
  }
})

const urlStore = useUrlStore()
const url = computed(() => urlStore.getUrl(props.urlKey))
</script>

<style scoped>
iframe {
  width: 100%;
  height: 100%;
}
</style>