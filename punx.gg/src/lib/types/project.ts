export interface Tag {
    name: string,
    color: number
}

export interface Project {
    title: string,
    tags: Tag[],
    WIP: boolean
}

