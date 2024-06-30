<template>
    <el-container :class="{ dark: isDark }" style="height: 100vh">
        <el-aside width="200px" v-show="isSidebarOpen">
            <el-scrollbar>
                <el-menu :default-openeds="['1', '3']">
                    <el-sub-menu index="1">
                        <template #title>
                            <el-icon>
                                <message />
                            </el-icon>
                            Coya的工作集合
                        </template>
                        <el-menu-item-group>
                            <template #title>常用的网站</template>
                            <el-menu-item index="1-1" @click="navigateTo(1)">AlgoVisual</el-menu-item>
                            <el-menu-item index="1-2" @click="navigateTo(2)">Leetcode</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="CoyaWebsite">
                            <el-menu-item index="1-3" @click="navigateTo(4)">
                                BBbus项目
                            </el-menu-item>
                            <el-menu-item index="1-4" @click="navigateTo(5)">
                                LLchat
                            </el-menu-item>
                            <el-menu-item index="1-5" @click="navigateTo(8)">
                                Coyablog
                            </el-menu-item>
                        </el-menu-item-group>

                    </el-sub-menu>
                    <el-sub-menu index="2">
                        <template #title>
                            <el-icon><icon-menu /></el-icon>AI Bot Webiste
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1" @click="navigateTo(6)">deepseekchat</el-menu-item>
                            <el-menu-item index="2-2" @click="navigateTo(7)">Coze</el-menu-item>
                        </el-menu-item-group>

                    </el-sub-menu>
                    <el-sub-menu index="3">
                        <template #title>
                            <el-icon>
                                <setting />
                            </el-icon>分类集合
                        </template>
                        <el-menu-item-group>
                            <template #title>CSS</template>
                            <el-menu-item index="3-1" @click="navigateTo(9)">
                                CSS 指南
                            </el-menu-item>
                            <el-menu-item index="3-2" @click="navigateTo(10)">
                                CSS Tricks
                            </el-menu-item>
                            <el-menu-item index="3-1">Option 1</el-menu-item>
                            <el-menu-item index="3-2">Option 2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="Vue3UICollection">
                            <el-menu-item index="3-3">Option 3</el-menu-item>
                        </el-menu-item-group>

                        <el-menu-item-group title="ReactUICollection">
                            <el-menu-item index="3-3">Option 3</el-menu-item>
                        </el-menu-item-group>

                        <el-menu-item-group title="Javascript">
                            <el-menu-item index="3-7" @click="navigateTo(14)">
                                Javascript editer
                            </el-menu-item>
                            <el-menu-item index="3-3" @click="navigateTo(15)">现代javascript教程</el-menu-item>
                            <el-menu-item index="3-3">Morden_javascript</el-menu-item>
                        </el-menu-item-group>

                    </el-sub-menu>
                    <el-sub-menu index="4">
                        <template #title>
                            工具使用
                        </template>
                        <el-menu-item index="4-1" @click="navigateTo(11)">Hotkeycheetsheet</el-menu-item>
                        <el-menu-item index="4-2" @click="navigateTo(12)">mermaid</el-menu-item>
                        <el-menu-item index="4-3" @click="navigateTo(13)">PlantUml</el-menu-item>
                        <el-menu-item index="4-4" @click="navigateTo(16)">quickReference</el-menu-item>
                    </el-sub-menu>
                </el-menu>

            </el-scrollbar>
        </el-aside>

        <el-container>
            <el-header class="layout_header" style="text-align: left ;  ">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item v-if="currentWebsite" :to="{path:`/embed/${currentWebsite.id}`}">{{ currentWebsite.name }}</el-breadcrumb-item>
                </el-breadcrumb>
                <div class="item_sidebar">
                    <el-icon @click="toggleSidebar">
                        <IconMenu v-if="isSidebarOpen" />
                        <IconMenu v-else />
                    </el-icon>
                </div>
                <div class="item_user">
                    <h1 class="text-6xl font-bold bg-red-500 underline">{{ currentWebsiteName }}</h1>
                </div>
                <div class="item_darkmode">
                    <el-icon @click="toggleDark()">
                        <Sunny v-if="!isDark" />
                        <Moon v-else />
                    </el-icon>
                </div>
            </el-header>

            <el-main>


                <router-view v-if="websitesStore.currentWebsite">
                    <iframe :src="websitesStore.currentWebsite.url" width="100%" height="100%" >
                    </iframe>
                </router-view>
                
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import { RouterView } from 'vue-router';
import { ref, computed, watch } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
import { useRouter, useRoute } from 'vue-router'
import { useWebsitesStore } from '@/stores/website';
import { useDark, useToggle } from "@vueuse/core";
import { Sunny, Moon } from '@element-plus/icons-vue';
const router = useRouter()


const isDark = useDark()
const toggleDark = useToggle(isDark)
const isSidebarOpen = ref(true); // 默认侧边栏是展开的
const websitesStore = useWebsitesStore()
const navigateTo = (id) => {
    websitesStore.setCurrentWebsite(id)
    router.push(`/embed/${id}`)
}
const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
};


const route = useRoute();
const currentWebsiteName = ref(''); // 使用 ref 来定义响应式数据
watch(() => route.params.id, (newId) => {
    if (newId) {
        const website = websitesStore.websites.find((website) => website.id === parseInt(newId, 10));
        currentWebsiteName.value = website ? website.name : '';
    }
}, { immediate: true })


</script>

<style scoped>

.el-aside {
    /* ... */

    color: var(--el-text-color-primary);
}


.layout-container-demo .el-header {
    position: relative;
    color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
    color: var(--el-text-color-primary);

}

.layout-container-demo .el-menu {
    border-right: none;
}

.layout-container-demo .el-main {
    padding: 0;
    width: 100%;
    height: auto;

}
.elmain{
    width: 100vh;
    height: 100vh;
}

.layout-container-demo .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 0x;
}

.layout_header {
    display: flex;
    flex-direction: row;
    
    align-items: center;
    position: relative;
    right: 5px
}


:root {


    --el-text-color-primary: #303133;
}

.dark {

    --el-color-primary-light-8: #16171d;
    --el-text-color-primary: #fff;
}


.item_sidebar {
 
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
   
}

.item_sidebar .el-icon {
    position: absolute;
    left: 10px;
    width: 100px;
    height: 50px
}
.item_darkmode{
    position: absolute;
    right:10px
}

.item_user{
    position: absolute;
    left:45%
}

iframe{
    border: 1px solid black;
    border-radius: 2%;
}
</style>