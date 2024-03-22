import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

import Home from './pages/Home.vue'
import Courses from './pages/Courses.vue'
import Projects from './pages/Projects.vue'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

const routes = [
  {path: '/', component: Home},
  {path: '/courses', component: Courses},
  {path: '/projects', component: Projects},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)

app.mount('#app')