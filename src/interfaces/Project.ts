// src/interfaces/Project.ts
export interface Project {
    name: string;
    brief: string;
    githubUrl: string;
    description: string;
    myJob: string;
}

export interface ProjectData {
    name: string;
    tabDescription: string;
    projects: Project[];
}