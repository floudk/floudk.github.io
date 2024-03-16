<template>
    <el-table :data="sortedTableData" style="width: 100%" :row-class-name="tableRowClassName" >
            <!-- Name column -->
    <el-table-column label="Name" width="180">
      <template #default="{row}">
        <el-link v-if="row.repoUrl":href="row.repoUrl" target="_blank">{{ row.name }}</el-link>
        <span v-else>{{ row.name }}</span>
      </template>
    </el-table-column>
    
    <!-- Institution column -->
    <el-table-column label="Institution" width="180">
      <template #default="{row}">
        <el-link v-if="row.courseHomePageUrl":href="row.courseHomePageUrl" target="_blank">{{ row.institution }}</el-link>
        <span v-else>{{ row.institution }}</span>
      </template>
    </el-table-column>
        <el-table-column prop="startDate" label="Start Date" width="180" />
        <el-table-column prop="endDate" label="End Date" width="180" />
        <el-table-column prop="Notes" label="note" />
    </el-table>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
interface Course {
    name: string
    institution: string
    startDate?: string
    endDate?: string
    note?: string
    cancel?: boolean
    repoUrl?: string
    courseHomePageUrl?: string
}

const tableData: Course[] = [
    {
        name: 'Tom',
        institution: 'Coursera',
        repoUrl: 'https://element-plus.gitee.io/zh-CN/component/table.html',
    },
    {
        startDate: '2016-05-02',
        endDate: '2016-05-02',
        name: 'Tom',
        institution: 'Coursera',
    },
    {
        startDate: '2016-05-02',
        name: 'Tom',
        institution: 'Coursera',
    },
    {
        name: 'Nick',
        institution: 'Coursera',
        cancel: true,
    },
]

const sortedTableData = computed(() => tableData.sort((a, b) => {
    const getWeight = (course: Course) => {
        if (course.cancel) return 4;
        if (course.startDate && !course.endDate) return 1; // ongoing
        if (course.startDate && course.endDate) return 3; // finish
        if (!course.startDate && !course.endDate) return 2; // plan
        return 5; // default
    };

    return getWeight(a) - getWeight(b);
}));

const tableRowClassName = ({ row }: { row: Course }) => {
    if (row.cancel) return 'cancel-row';
    if (row.startDate && !row.endDate) return 'ongoing-row';
    if (row.startDate && row.endDate) return 'finish-row';
    if (!row.startDate && !row.endDate) return 'plan-row';
    return '';
};

</script>

<style>
.el-table .ongoing-row {
    --el-table-tr-bg-color: #ff672166;
}

.el-table .finish-row {
    --el-table-tr-bg-color: var(--el-color-success-light-7);
}

.el-table .cancel-row {
    --el-table-tr-bg-color: var(--el-color-info-light-7);
}

.el-table .plan-row {
    --el-table-tr-bg-color: var(--el-color-primary-light-7);
}
</style>