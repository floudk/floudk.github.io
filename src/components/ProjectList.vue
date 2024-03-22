<template>
    <div>{{ data.tabDescription }}</div>
  </template>



<script lang="ts" setup>
import { defineProps } from 'vue';
// @ts-ignore
import ProjectData from '@/types';

const props = defineProps<{
  data: ProjectData;
}>();
</script>

