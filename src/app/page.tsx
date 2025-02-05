// app/page.tsx
import Header from '@/components/Header'
import MainArticle from '@/components/MainArticle'
// import EventSection from '@/components/EventSection'
// import MegaMafia from '@/components/MegaMafia'
// import JobSection from '@/components/JobSection'

export default function Home() {
    const articleContent = {
        title: 'Launch New MegaETH Website',
        date: 'January 10, 2025',
        subtitle: 'Announce new domain and website',
        paragraphs: [
            "MegaETH Labs announced the launch of their new domain and website on January 10, 2025. Designed by HarukoRose, this website extends MegaETH's role within the Ethereum ecosystem by offering a unique interface that is both familiar and foreign.",
            "It aims to provide an interactive platform that serves as a neutral canvas, allowing users to add their own color and engage with the site. MegaEth introduced several key features through a series of posts upon launch, emphasizing that the homepage serves as a visualization of MegaEth's future vision. It includes various interactive elements for users to explore, encouraging them to visit and discover these features. This launch signifies a pivotal moment in MegaETH's development, focusing on enhancing community interaction and expanding the ecosystem. Users are invited to explore the site and share their experiences to foster engagement.",
        ],
        imageUrl: '/megaeth-preview.jpg',
    }

    return (
        <main className='min-h-screen'>
            <Header />
            <MainArticle content={articleContent} />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-8 font-black'>
                {/* <EventSection />
                <MegaMafia /> */}
            </div>
            {/* <JobSection /> */}
        </main>
    )
}
