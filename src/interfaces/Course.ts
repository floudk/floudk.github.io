export interface Course {
    name: string;
    institution: string;
    startDate?: string;
    endDate?: string;
    note?: string;
    cancel?: boolean;
    repoUrl?: string;
    courseHomePageUrl?: string;
}