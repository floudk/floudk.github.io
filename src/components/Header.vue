<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
        @select="handleSelect">
        <el-menu-item index="0">
            <!-- <img
          style="width: 100px"
          src="/images/element-plus-logo.svg"
          alt="Element logo"
        /> -->
        </el-menu-item>
        <div class="flex-grow" />
        <el-menu-item class="menu-item-1" index="1">Projects</el-menu-item>
        <el-menu-item class="menu-item-1" index="2">About</el-menu-item>
        <el-sub-menu index="3">
            <template #title>
                <p class="menu-item-1">Notes</p>
            </template>
            <el-menu-item index="3-1">Courses</el-menu-item>
            <el-menu-item index="3-2">Books</el-menu-item>
            <el-menu-item index="3-3">Papers</el-menu-item>
        </el-sub-menu>
        <div class="language-switch">
            <el-dropdown>
                <el-icon size="1.7em">
                    <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="m18.5 10l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16.5 10h2zM10 2v2h6v2h-1.968a18.222 18.222 0 0 1-3.62 6.301a14.864 14.864 0 0 0 2.336 1.707l-.751 1.878A17.015 17.015 0 0 1 9 13.725a16.676 16.676 0 0 1-6.201 3.548l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042A18.078 18.078 0 0 1 4.767 8h2.24A16.032 16.032 0 0 0 9 10.877a16.165 16.165 0 0 0 2.91-4.876L2 6V4h6V2h2zm7.5 10.885L16.253 16h2.492L17.5 12.885z"></path></svg>
                </el-icon>
                <template #dropdown>
                <el-dropdown-menu style="font-size:4em">
                    <el-dropdown-item>English</el-dropdown-item>
                    <el-dropdown-item :disabled="true">中文</el-dropdown-item>
                </el-dropdown-menu>
            </template>
            </el-dropdown>
        </div>
    </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router' // Import useRouter

const router = useRouter() // Use useRouter to access the router instance

const activeIndex = ref('')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
    if (key === '3-1') {
        console.log('Open Courses')
        router.push('/courses')
    }else if(key === '1'){
        console.log('Open Projects')
        router.push('/projects')
    }else if(key === '3-3'){
        console.log('Open Papers')
        router.push('/papers')
    }
}

</script>

<style>
.flex-grow {
    flex-grow: 1;
}

.menu-item-1 {
    font-size: medium;
    font-family: MicroSoft YaHei;
    font-weight: bold;
}

.language-switch {
   /* align vertical center */
    display: flex;
    align-items: center;
    font-size: 2em;
}

</style>