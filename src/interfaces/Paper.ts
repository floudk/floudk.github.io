export interface Paper {
    id: number;
    title: string;
    link: string;
    year: number;
    conference: string;
    keywords: string[];
    description: string;
}

export interface Tab {
    name: string;
    label: string;
    papers: Paper[];
}
