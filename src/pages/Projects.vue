<template>
    <el-tabs v-model="activeName" class="project-tabs" @tab-click="handleClick" tab-position="left">
        <el-tab-pane v-for="tab in tabs" :key="tab.name" :label="tab.tabDescription" :name="tab.name">
            <ProjectList :projects="tab.projects"/>
        </el-tab-pane>
    </el-tabs>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import ProjectList from '@/components/ProjectList.vue';
import type { ProjectData } from '@/interfaces/Project';  // Ensure this is where your types are defined
import type { TabsPaneContext } from 'element-plus';

const activeName = ref('first');  // This might need to match your actual data for initial active tab
const tabs = ref<ProjectData[]>([]);

onMounted(async () => {
    try {
        const response = await axios.get('/data/projects.json');
        tabs.value = response.data;  // Assuming the JSON directly maps to the tabs array
        activeName.value = tabs.value.length > 0 ? tabs.value[0].name : '';
    } catch (error) {
        console.error('Failed to load projects:', error);
    }
});

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event);  // Useful for debugging
}
</script>

<style>
.project-tabs .el-tabs__item{
    font-size: 1.2rem;  
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    font-weight: bold;
}
</style>