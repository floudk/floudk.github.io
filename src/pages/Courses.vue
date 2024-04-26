<template>
    <el-table class="course-table" :data="sortedData" style="width: 100%" :row-class-name="tableRowClassName" border>
        <el-table-column fixed class="col-name" label="Name" :width="nameColumnWidth">
            <template #default="{ row }">
                <el-link v-if="row.repoUrl" :href="row.repoUrl" target="_blank">{{ row.name }}</el-link>
                <span v-else>{{ row.name }}</span>
            </template>
        </el-table-column>

        <!-- Institution column -->
        <el-table-column label="Institution" :width="institutionColumnWidth" v-if="showDetail">
            <template #default="{ row }">
                <el-link v-if="row.courseHomePageUrl" :href="row.courseHomePageUrl" target="_blank">{{ row.institution
                    }}</el-link>
                <span v-else>{{ row.institution }}</span>
            </template>
        </el-table-column>
        <el-table-column label="Start Date" :width="startColumnWidth">
            <template #default="{ row }">
                <span>{{ row.startDate }}</span>
            </template>
        </el-table-column>
        <el-table-column label="End Date" :width="endColumnWidth">
            <template #default="{ row }">
                <span>{{ row.endDate }}</span>
            </template>
        </el-table-column>
        <el-table-column prop="note" label="Notes" :width="nameColumnWidth" v-if="showDetail">
            <template #default="{ row }">
                <span>{{ row.note }}</span>
            </template>
        </el-table-column>
    </el-table>
</template>

<script lang="ts" setup>
// @ts-ignore
import { tableData, Course } from '@/data';
import { ref, onMounted, onUnmounted } from 'vue';

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



// 更新列的宽度，使其适应移动设备
const nameColumnWidth = ref(0);
const institutionColumnWidth = ref(0);
const startColumnWidth = ref(0);
const endColumnWidth = ref(0);
const thFontsize = ref(20);
const showDetail = ref(true);

const updateColumnWidth = () => {
    const screenWidth = window.innerWidth;
    // console.log("当前屏幕宽度：", screenWidth);

    if (screenWidth < 600) {
        showDetail.value = false;
        
        startColumnWidth.value = screenWidth * 0.25;
        endColumnWidth.value = screenWidth * 0.25;
        nameColumnWidth.value = screenWidth * 0.4;

        thFontsize.value = screenWidth / 50;
        document.documentElement.style.setProperty('--course-table-header-name-fontsize', `${thFontsize.value}px`);
        document.documentElement.style.setProperty('--course-table-span-fontsize', `${thFontsize.value*0.9}px`);
    } else {
        showDetail.value = true;
        nameColumnWidth.value = screenWidth / 4;
        institutionColumnWidth.value = nameColumnWidth.value*0.9
        startColumnWidth.value = nameColumnWidth.value*0.45
        endColumnWidth.value = nameColumnWidth.value*0.45

        thFontsize.value = screenWidth / 60;
        document.documentElement.style.setProperty('--course-table-header-name-fontsize', `${thFontsize.value}px`);
        document.documentElement.style.setProperty('--course-table-span-fontsize', `${thFontsize.value*0.8}px`);
    }


    
    // console.log("更新列宽度：", nameColumnWidth.value);
    // console.log("更新字体大小：", thFontsize.value);
};

onMounted(() => {
    updateColumnWidth();
    window.addEventListener('resize', updateColumnWidth);
});

</script>

<style>
.course-table .el-table__header th {
    height: 4rem;
    font-size: var(--course-table-header-name-fontsize);
}


.course-table span {
    font-size:  var(--course-table-span-fontsize);
}

.course-table .el-table__body td {
    padding-top: 1rem;
    padding-bottom: 1rem;
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

@media (max-width: 600px) {
    .course-table span {
        font-size: 0.9em;
    }

    .course-table .el-table__header th,
    .course-table .el-table__body td {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }

    .course-table .el-table__header th {
        height: 3em;
        width: 3em;
        font-size: 1em;
    }
}
</style>