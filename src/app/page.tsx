// app/page.tsx
'use client'
import { useState } from 'react'
import { weeklyContents } from '@/data/weeklyContent'
import Header from '@/components/Header'
import MainArticle from '@/components/MainArticle'
import ContentSection from '@/components/ContentSection'
import AdSection from '@/components/AdSection'
import Footer from '@/components/Footer'

export default function Home() {
    const [selectedWeek, setSelectedWeek] = useState(weeklyContents[0].id)
    const currentContent = weeklyContents.find((content) => content.id === selectedWeek)!

    const handleWeekSelect = (weekId: string) => {
        setSelectedWeek(weekId)
    }

    return (
        <main className='min-h-screen bg-[#FDFDFD]'>
            <Header weeklyContents={weeklyContents} onWeekSelect={handleWeekSelect} />
            <div className='max-w-7xl mx-auto px-4'>
                <MainArticle content={currentContent.mainArticle} />
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-8'>
                    {currentContent.sections.map((section, index) => (
                        <ContentSection key={index} section={section} />
                    ))}
                </div>
                <AdSection contents={currentContent.ads} />
                <Footer />
            </div>
        </main>
    )
}
