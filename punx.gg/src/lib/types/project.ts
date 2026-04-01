export interface Tag {
    name: string,
    color: string //represent as hex 
}

export interface Project {
    title: string,
    tags: Tag[],
    WIP: boolean
}

