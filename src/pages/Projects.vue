<template>
    <el-tabs v-model="activeName" class="project-tabs" @tab-click="handleClick" tab-position="left">
        <el-tab-pane label="Course Work" name="first">
            <ProjectList  :data="courseProps"/>
        </el-tab-pane>
        <el-tab-pane label="Academic" name="second">
            <ProjectList  :data="academicProps"/>
        </el-tab-pane>
    </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
// @ts-ignore
import ProjectList from '@/components/ProjectList.vue'

// @ts-ignore
import { courseProps } from '@/data';
import {academicProps} from '@/data';

import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
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