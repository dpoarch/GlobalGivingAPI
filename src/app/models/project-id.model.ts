export interface ProjectIds {
    projects: Projects;
}

export interface Projects {
    project:      Project[];
    _numberFound: string;
}

export interface Project {
    id: string;
}