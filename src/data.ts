import type { ListCache } from 'element-plus';
import { ref } from 'vue';


// data used in page/Projects.vue to transmit data to the child component/ProjectList.vue
interface Project {
    name: string;
    brief: string;
    githubUrl: string;
    role: Array<string>;
}

export interface ProjectData {
    tabDescription: string;
    projects: Array<Project>;
}
export const courseProps = ref<ProjectData>({
    tabDescription: 'course tabs',
    projects: [
        {
            name: "naivegator",
            brief: "Course project of Practice on Android Application Development. (Presented by ByteDance x SJTU)",
            githubUrl: 'https://github.com/Purewhite2019/naivegator',
            role: ['developer'],
        },
        {
            name: "test",
            brief: "",
            githubUrl: 'https://github.com/Purewhite2019/naivegator',
            role: ['developer'],
        },
    ]
});

export const academicProps = ref<ProjectData>({
    tabDescription: 'academic tabs',
    projects: [],
});


// data used in page/Courses.vue to show the course list
export interface Course {
    name: string
    institution: string
    startDate?: string
    endDate?: string
    note?: string
    cancel?: boolean
    repoUrl?: string
    courseHomePageUrl?: string
}

export const tableData: Course[] = [
    {
        name: 'Machine Learning Specialization',
        institution: 'Stanford University(Coursera)',
        repoUrl: 'https://github.com/floudk/coursera-machine-learning',
        courseHomePageUrl: 'https://www.coursera.org/specializations/machine-learning-introduction#courses',
        startDate: '2024-03-17',
    },
]