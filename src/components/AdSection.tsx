import Image from 'next/image'

export interface AdContent {
    type: 'image' | 'apply'
    title?: string
    imageUrl?: string
    subTitle?: string
    imageAlt?: string
    location?: string
    applyLink?: string
}
const AdSection = ({ contents }: { contents: AdContent[] }) => {
    return (
        <section className='grid grid-cols-3 gap-6 border-t-4 border-black pt-6'>
            {' '}
            {contents.map((content, index) => (
                <div key={index} className='border-2 border-black p-3 flex flex-col justify-center'>
                    {' '}
                    {content.type === 'image' ? (
                        <div className='relative aspect-square w-full'>
                            <Image
                                src={content.imageUrl!}
                                alt={content.imageAlt || ''}
                                fill
                                className='object-contain'
                            />
                        </div>
                    ) : (
                        <div className='flex flex-col justify-center h-full space-y-2'>
                            <h3 className='text-2xl font-bold'>{content.title}</h3>{' '}
                            <div>
                                <div>{content.subTitle}</div>
                                <div>{content.location}</div>
                            </div>
                            <a
                                href={content.applyLink}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-block border border-black px-4 py-1.5 hover:bg-black hover:text-white text-center'
                            >
                                LINK
                            </a>
                        </div>
                    )}
                </div>
            ))}
        </section>
    )
}

export default AdSection
