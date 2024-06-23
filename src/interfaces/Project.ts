export interface Tab {
    name: string;  
    projects: Project[];  
}

export interface ProjectData {
    name: string;
    tabDescription: string;
    projects: Project[];
}