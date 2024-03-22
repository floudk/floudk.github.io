<template>
    <el-table class="course-table" :data="sortedData" style="width: 100%" :row-class-name="tableRowClassName"  border >
    <el-table-column  label="Name" width="400" >
      <template #default="{row}">
        <el-link v-if="row.repoUrl":href="row.repoUrl" target="_blank">{{ row.name }}</el-link>
        <span v-else>{{ row.name }}</span>
      </template>
    </el-table-column>
    
    <!-- Institution column -->
    <el-table-column label="Institution" width="400">
      <template #default="{row}">
        <el-link v-if="row.courseHomePageUrl":href="row.courseHomePageUrl" target="_blank">{{ row.institution }}</el-link>
        <span v-else>{{ row.institution }}</span>
      </template>
    </el-table-column>
        <el-table-column prop="startDate" label="Start Date" width="180" />
        <el-table-column prop="endDate" label="End Date" width="180" />
        <el-table-column prop="note" label="Notes" />
    </el-table>
</template>

<script lang="ts" setup>
// @ts-ignore
import {tableData,Course} from '@/data';


const getWeight = (course: Course) => {
    if (course.cancel) return 4;
    if (course.startDate && !course.endDate) return 1; // ongoing
    if (course.startDate && course.endDate) return 3; // finished
    if (!course.startDate && !course.endDate) return 2; // planned
    return 5; // default
};

const sortedData = tableData.sort((a, b) => {
    const weightA = getWeight(a);
    const weightB = getWeight(b);

    if (weightA === weightB && a.startDate && b.startDate) {
        return a.startDate.localeCompare(b.startDate);
    }

    return weightA - weightB;
});


const tableRowClassName = ({ row }: { row: Course }) => {
    if (row.cancel) return 'cancel-row';
    if (row.startDate && !row.endDate) return 'ongoing-row';
    if (row.startDate && row.endDate) return 'finish-row';
    if (!row.startDate && !row.endDate) return 'plan-row';
    return '';
};

</script>

<style >

.course-table {
    font-size: 1.2rem;
}
.course-table span {
    font-size: 1.2rem;
}

.course-table .el-table__body td {
    padding-top: 1rem; 
    padding-bottom: 1rem;
}

.course-table .el-table__header th{
    height: 4rem;
    font-size: 1.4rem;
}


.el-table .ongoing-row {
    --el-table-tr-bg-color: #fff42156;
    --el-table-row-hover-bg-color: #fff42127;
}

.el-table .finish-row {
    --el-table-tr-bg-color: var(--el-color-success-light-9);
    --el-table-row-hover-bg-color: var(--el-color-success-light-8);
}

.el-table .cancel-row {
    --el-table-tr-bg-color: var(--el-color-info-light-9);
    --el-table-row-hover-bg-color: var(--el-color-info-light-8);
}

.el-table .plan-row {
    --el-table-tr-bg-color: var(--el-color-primary-light-9);
    --el-table-row-hover-bg-color: var(--el-color-primary-light-8);
}



</style>