import { ref } from 'vue';


// data used in page/Projects.vue to transmit data to the child component/ProjectList.vue
export interface ProjectData {
    tabDescription: string;
}
export const courseProps = ref<ProjectData>({
    tabDescription: 'course tabs'
});

export const academicProps = ref<ProjectData>({
    tabDescription: 'academic tabs'
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