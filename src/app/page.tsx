// app/page.tsx
import Header from '@/components/Header'
import MainArticle from '@/components/MainArticle'
import AdSection, { AdContent } from '@/components/AdSection'
import ContentSection from '@/components/ContentSection'
import Footer from '@/components/Footer'

export default function Home() {
    const articleContent = {
        title: 'Launch New MegaETH Website',
        date: 'January 10, 2025',
        subtitle: 'Announce new domain and website',
        paragraphs: [
            "MegaETH Labs announced the launch of their new domain and website on January 10, 2025. Designed by HarukoRose, this website extends MegaETH's role within the Ethereum ecosystem by offering a unique interface that is both familiar and foreign.",
            "It aims to provide an interactive platform that serves as a neutral canvas, allowing users to add their own color and engage with the site. MegaEth introduced several key features through a series of posts upon launch, emphasizing that the homepage serves as a visualization of MegaEth's future vision. It includes various interactive elements for users to explore, encouraging them to visit and discover these features. This launch signifies a pivotal moment in MegaETH's development, focusing on enhancing community interaction and expanding the ecosystem. Users are invited to explore the site and share their experiences to foster engagement.",
        ],
        imageUrl: '/website.png',
        websiteUrl: 'https://www.megaeth.com',
    }

    const contentSections = [
        {
            title: 'Join Megabul!',
            summary: `Istanbul, Turkiye
             January 24th,
              from 6pm to 9pm`,
            content: `The MegaETH team is in Istanbul to meet you for the first time. If you're a builder who loves consumer DeFi and practical applications, come talk about building together. If you're a strong investor and love trading, come to exchange contract addresses. If you're just curious about making Ethereum great again, we can chat about our North Star. Even better, if you're a solana maxi, let's discuss what real-time performance actually looks like. There will be no boring panels, just good wine, good conversations, and good vibes. Join us on Megabul!`,
            imageUrl: '/megabul.png',
        },
        {
            title: 'MegaMafia 2.0',
            subtitle: "MegaETH's Real-Time App Push",
            content: `The MegaMafia program has successfully backed projects on MegaETH, raising more funds than the blockchain itself. As MegaETH's testnet approaches, the program will become more open, preserving the Mafia spirit through community and mentorship.

The aim is to leverage MegaETH's capabilities for superior applications (PMF^2), focusing on DeFi, stablecoins, real-time data, and on-chain data storage. In 2025, MegaMafia will intensify support for builders to destigmatize crypto and add value.`,
            imageUrl: '/megamafia.png',
            link: 'https://x.com/hotpot_dao/status/1878992820926215346',
        },
    ]

    const adContents: AdContent[] = [
        {
            type: 'image',
            imageUrl: '/bingbing.png',
            imageAlt: 'Brother Bing Tweet',
        },
        {
            type: 'apply',
            title: 'In-House Counsel',
            subTitle: 'MEGAETH | REMOTE | FULL-TIME',
            location: 'Remote',
            applyLink: 'https://www.megaeth.com/about#career',
        },
        {
            type: 'image',
            imageUrl: '/fluffle.png',
            imageAlt: 'Join the Mafia',
        },
    ]

    return (
        <main className='min-h-screen bg-[#FDFDFD]'>
            <Header />
            <MainArticle content={articleContent} />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-8'>
                {contentSections.map((section, index) => (
                    <ContentSection key={index} section={section} />
                ))}
            </div>
            <AdSection contents={adContents} />
            <Footer />
        </main>
    )
}
