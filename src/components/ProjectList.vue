<template>
    <el-collapse class="project-collapse" v-model="activeName" accordion v-for="(project, index) in data.projects">
      <el-collapse-item :name="index">
        <template #title >
          <el-text class="project-title mx-1">
            {{project.name}}
          </el-text>
          <el-text class="project-brief mx-1" truncated>
            {{ project.brief }}
          </el-text>
        </template>
      </el-collapse-item>
    </el-collapse>
</template>



<script lang="ts" setup>
// @ts-ignore
import { ProjectData } from '@/data';
import { ref } from 'vue'

const activeName = ref('0')

const props = defineProps<{
  data: ProjectData;
}>();
</script>

<style>

.project-collapse {
  --el-collapse-header-height: 3rem; 
}
.project-title{
  font-weight: 600;
  font-size: 1.5rem;
}


.project-brief{
  font-size: 1rem;
  padding-left: .5rem;
  padding-top: .5rem;
}

</style>
