<template>
  <el-collapse class="project-collapse" v-model="activeName" accordion v-for="(project, index) in data.projects">
    <el-collapse-item :name="index">
      <template #title>
        <el-text class="project-title mx-1">
          {{ project.name }}
        </el-text>
        <el-text class="project-brief mx-1" truncated>
          {{ project.brief }}
        </el-text>
      </template>
      <el-row style="margin-bottom: 1.5rem">
        <el-image style="width: 35px" src='/images/github-mark.svg' fit="contain"></el-image>
        <el-link style="font-size: 20px; margin-left: 15px;" type="primary" :href="project.githubUrl">
          {{ project.name }}
        </el-link>
      </el-row >
          <span v-html="highlightDescription(project.description)" style="font-size: 18px;"></span>
          <br>
          <span v-html="highlightDescription(project.myJob)" style="font-size: 18px;"></span>
      <el-row>

      </el-row>

    </el-collapse-item>

  </el-collapse>
</template>



<script lang="ts" setup>
// @ts-ignore
import { ProjectData } from '@/data';
import { ref, type HtmlHTMLAttributes } from 'vue'
import { computed } from 'vue';

const activeName = ref('0')

const props = defineProps<{
  data: ProjectData;
}>();

type Highlights = {
  [key: string]: string[];
};

// 使用Highlights类型来声明highlights对象
const highlights: Highlights = {
  language: ['Python', 'Kotlin', 'Java', 'C++', 'C', 'JavaScript'],
  framework: ['Vue', 'React', 'Angular', 'Spring', 'Flask', 'Django'],
  platform: ['Android', 'iOS', 'Web', 'Desktop'],
  role: ['developer', 'maintainer', 'manager'],
};

function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
}

function highlightDescription(description: string): string {
  let highlighted = description;

  for (const category in highlights) {
    for (const keyword of highlights[category]) {
      console.log(keyword);
      if (highlighted.includes(keyword)) {
        highlighted = highlighted.replace(
          new RegExp(escapeRegExp(keyword), 'g'), // 使用转义后的关键词创建正则表达式
          `<span class="${category + '-highlight'}">${keyword}</span>`
        );
      }
    }
  }
  return highlighted;
}


</script>

<style>
.project-collapse {
  --el-collapse-header-height: 3rem;
}

.project-title {
  font-weight: 600;
  font-size: 1.5rem;
}


.project-brief {
  font-size: 1rem;
  padding-left: .5rem;
  padding-top: .5rem;
}

.language-highlight {
  color: rgb(7, 152, 241);
  font-weight: bold;
}

.framework-highlight {
  color: green;
  font-weight: bold;
}

.platform-highlight {
  color: rgba(242, 70, 70, 0.867);
  font-weight: bold;
}

.role-highlight {
  color: rgb(246, 143, 9);
  font-weight: bold;
}

</style>
