export interface BlogSummary{
    id: string,
    name: string,
    category: string,
    summary: string,
    image: string,
    dateCreated: string
}

export interface BlogDetails{
    id: string,
    name: string,
    category: string,
    content: string
    dateCreated: string,
    summary: string,
    image: string
}