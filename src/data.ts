import type { ListCache } from 'element-plus';
import { ref } from 'vue';


// data used in page/Projects.vue to transmit data to the child component/ProjectList.vue
interface Project {
    name: string;
    brief: string;
    githubUrl: string;
    description: string;
    myJob: string;
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
            description:" An Android frontend project developed using Kotlin and Java, based on the open API provided by SJTU, which aims to provide a integrated campus service platform for students.",
            myJob:'As the developer, I was responsible for the development of the canteen page.',
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
        endDate: '2024-05-28',
        note:'Fundamental knowledge and projects about supervised/unsupervised/reinforcement learning'
    },
    {
        name: 'CS234: Reinforcement Learning',
        institution: 'Stanford University',
        repoUrl: 'https://github.com/floudk/cs234-reinforcement-learning',
        courseHomePageUrl: 'https://web.stanford.edu/class/cs234/',
        startDate: '2024-05-29',
    },
    {
        name: 'EE374: Blockchain Foundations',
        institution: 'Stanford University',
        repoUrl: 'https://github.com/floudk/ee374-blockchain-foundations',
        courseHomePageUrl: 'https://ee374.stanford.edu/',
        startDate: '2024-05-29',
    },
]