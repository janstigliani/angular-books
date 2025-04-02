export interface Book {
    id: number,
    title: string,
    authors: Authors[],
    summaries: string []
    subjects: string[],
    "image/jpeg": string
}

interface Authors {
    name:string,
    birth_year?: number,
    death_year?: number 
}
