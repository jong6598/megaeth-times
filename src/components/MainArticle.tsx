import { ArticleContent } from "@/types/weeklyContent"
import Image from "next/image"

const MainArticle = ({ content }: { content: ArticleContent }) => {
    return (
        <article className="space-y-8 border-b-4 border-black py-4">
            <div className="space-y-4 text-center">
                <h1 className="text-6xl font-bold tracking-tight whitespace-pre-line">
                    {content.title}
                </h1>
                <div className="flex justify-between text-sm">
                    <time>{content.date}</time>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="prose max-w-none flex flex-col justify-center">
                    {content.paragraphs.map((paragraph, index) => (
                        <p
                            key={index}
                            className={`
                                text-base leading-relaxed
                                ${index !== content.paragraphs.length - 1 ? "mb-4" : ""}
                                first-letter:text-lg first-letter:font-semibold
                            `}
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>
                <a
                    href={content.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full h-[400px]"
                >
                    <Image
                        src={content.imageUrl}
                        alt={content.title}
                        layout="fill"
                        objectFit="contain"
                    />
                </a>
            </div>
        </article>
    )
}
export default MainArticle
