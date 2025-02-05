export interface AdContent {
    type: 'image' | 'apply'
    title?: string
    imageUrl?: string
    subTitle?: string
    imageAlt?: string
    location?: string
    applyLink?: string
}

export interface Section {
    title: string
    summary?: string
    subtitle?: string
    content: string
    imageUrl: string
    link?: string // 옵셔널 링크 추가
}

export interface ArticleContent {
    title: string
    date: string
    paragraphs: string[]
    imageUrl: string
    websiteUrl: string
}

export interface WeeklyContent {
    id: string
    week: number
    month: string
    year: number
    mainArticle: ArticleContent
    sections: Section[]
    ads: AdContent[]
}
