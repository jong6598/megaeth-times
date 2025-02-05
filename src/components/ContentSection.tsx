import Image from 'next/image'

interface Section {
    title: string
    summary?: string
    content: string
    imageUrl: string
    link?: string // 옵셔널 링크 추가
}

const ContentSection = ({ section }: { section: Section }) => {
    return (
        <section className='border-r-2 border-black pr-8'>
            <div className='flex gap-8 mb-6'>
                <div className='relative aspect-video w-1/2'>
                    <Image
                        src={section.imageUrl}
                        alt={section.title}
                        fill
                        className='object-contain opacity-90'
                    />
                </div>
                <div className='w-1/2'>
                    <h3 className='text-4xl font-black mb-4'>{section.title}</h3>
                    <h3 className='text-lg font-black mb-4 whitespace-pre-line'>
                        {section.summary}
                    </h3>
                </div>
            </div>
            <p className='text-base leading-relaxed whitespace-pre-line'>{section.content}</p>
            {section.link && (
                <a
                    href={section.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-sm hover:underline mt-4 block underline'
                >
                    {section.link}
                </a>
            )}
        </section>
    )
}

export default ContentSection
