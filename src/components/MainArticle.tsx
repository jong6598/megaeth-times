import Image from 'next/image'

// types/article.ts
interface ArticleContent {
    title: string
    date: string
    subtitle: string
    paragraphs: string[]
    imageUrl: string
}

// components/articles/MainArticle.tsx
const MainArticle = ({ content }: { content: ArticleContent }) => {
    return (
        <article className='space-y-8'>
            <div className='space-y-4 text-center'>
                <h1 className='text-6xl font-bold tracking-tight'>{content.title}</h1>
                <div className='flex justify-between text-sm'>
                    <time>{content.date}</time>
                    <span>{content.subtitle}</span>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='prose max-w-none'>
                    {content.paragraphs.map((paragraph, index) => (
                        <p
                            key={index}
                            className={`
                                text-base leading-relaxed
                                ${index !== content.paragraphs.length - 1 ? 'mb-4' : ''}
                                first-letter:text-lg first-letter:font-semibold
                            `}
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>
                <div className='relative aspect-video bg-gray-100'>
                    <Image
                        src={'/public/website.png'}
                        alt={content.title}
                        fill
                        className='object-cover'
                    />
                </div>
            </div>
        </article>
    )
}

export default MainArticle

// 사용 예시:
