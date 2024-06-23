<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane v-for="tab in tabs" :key="tab.name" :label="tab.label" :name="tab.name">
            <ul>
                <li v-for="paper in tab.papers" :key="paper.id">
                    <a :href="paper.link" target="_blank">{{ paper.title }}</a>
                    <div class="meta-info">
                        <span>{{ paper.year }} - {{ paper.conference }}</span>
                    </div>
                    <div class="meta-info">
                        Key words: {{ paper.keywords.join(', ') }}
                    </div>
                    <p>{{ paper.description }}</p>
                </li>
            </ul>
        </el-tab-pane>
    </el-tabs>
</template>


<script lang="ts">
import axios from 'axios';
import { ref, onMounted } from 'vue';

export default {
    setup() {
        const activeName = ref('tab1');
        const tabs = ref([]);

        onMounted(() => {
            axios.get('/data/papers.json')
                .then(response => {
                    tabs.value = response.data;
                })
                .catch(error => {
                    console.error('Failed to load papers:', error);
                });
        });

        function handleClick(tab) {
            console.log('Tab clicked:', tab);
        }

        return { activeName, tabs, handleClick };
    }
};
</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin-bottom: 20px;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

a {
    color: #409eff;
    font-weight: bold;
    font-size: 1.2em;
}

li:nth-child(odd) {
    background-color: #f9f9f9;
}

li:nth-child(even) {
    background-color: #ffffff;
}

div.meta-info {
    color: #666;
    font-style: italic;
    margin-top: 5px;
}

p {
    margin-top: 10px;
    color: #333;
    font-size: 1em;
}

:deep() .el-tabs__item {
    font-size: 1.3em;
}
</style>