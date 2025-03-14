import { WeeklyContent } from "@/types/weeklyContent"

// data/weeklyContents.ts
export const weeklyContents: WeeklyContent[] = [
    {
        id: "2025-03-w2",
        week: 2,
        month: "March",
        year: 2025,

        mainArticle: {
            title: "Open Testnet for Test,\nExpanding Towards User Access",
            date: "March 14, 2025",
            paragraphs: [
                "MegaETH has launched its test-focused testnet, offering impressive single-threaded performance of 1.68 Ggas/sec and 15ms effective block times. This testnet is aimed at providing a powerful testing environment, and while general usage is non-incentivized, it serves as a crucial step towards scaling the network.",
                "The MegaETH team is currently prioritizing infrastructure updates and app deployment, and once these are complete, user onboarding will begin. The testnet will provide insights into performance benchmarks and guide users on MegaETH’s innovative implementations.",
                "App teams looking to unleash their creativity and contribute to the network's growth are encouraged to join the MegaForge program. This initiative offers opportunities to build on the MegaETH testnet while helping shape its future.",
                "While the current testnet is a developer-focused environment, MegaETH plans to scale up towards public access in the near future, ensuring that the platform is optimized and ready for broader use. Expect further updates as the testnet evolves into a fully accessible network.",
            ],
            imageUrl: "/uptime.png",
            websiteUrl: "https://uptime.megaeth.com",
        },
        sections: [
            {
                title: "MegaETH Community Engagement & Bounty Program",
                summary: "Mascot Project and New Bounties Announced",
                content:
                    "MegaETH is enhancing community engagement by encouraging participation in its bounty programs, including contributions to its official mascots, the two Fluffles. Participants can take part in various activities such as creating mascot-related content, naming the mascots, and contributing to projects like the Mega Civilization and Mini Blocks.\n\nCommunity have already crafted stickers and emojis for the mascots, which are available in the Mega Cult Kit. Additionally, the Discord server has received updates to improve user experience, and further feedback can be shared in the Mega Discuss channel.\n\nMegaETH continues to grow alongside its community, fostering a creative and dynamic ecosystem through its bounty initiatives.",
                imageUrl: "/fluffle_mascot.jpg",
            },
            {
                title: "ENDGAME: Achieving 10ms Blocks",
                subtitle: "MegaETH's Mini-Block Innovation",
                content: `MegaETH introduces Mini-Blocks, enabling blockchain performance with 10ms block times, offering real-time updates. Unlike traditional blocks, Mini-Blocks are lightweight and propagate quickly through the network, offering a scalable solution with high transaction throughput. These Mini-Blocks are first-class citizens within the system, enjoying rollback guarantees, similar to EVM blocks, and eliminating pre-confirmation uncertainty in transactions.
                
                While Mini-Blocks operate in parallel with EVM blocks, they do so at faster intervals, providing an elastic block production model that optimizes resource consumption and prevents waste. With low gas fees and full Ethereum JSON RPC compatibility, MegaETH aims to bring enhanced scalability and efficiency to the blockchain ecosystem.
            
                The Mini-Block structure challenges the traditional pre-confirmation approach, offering real-time, irreversible transaction inclusion. MegaETH’s real-world performance, scalability, and potential congestion management will be crucial to its success, but it holds the potential to revolutionize blockchain with its dynamic and demand-driven block production.`,
                imageUrl: "/miniblock.jpeg",
                link: "https://x.com/megaeth_labs/status/1897709751523316000",
            },
        ],
        ads: [
            {
                type: "image",
                imageUrl: "/civilization.jpeg",
                imageAlt: "Mega Civilization",
            },

            {
                type: "apply",
                title: "fluffle tools",
                subTitle: "Utilities for MegaETH explorers and Fluffle holders",
                location: "by @0x_ultra",
                applyLink: "https://www.fluffle.tools/",
            },
            {
                type: "image",
                imageUrl: "/openspace.png",
                imageAlt: "kaito new launch",
            },
        ],
    },
    {
        id: "2025-02-w1",
        week: 1,
        month: "February",
        year: 2025,
        mainArticle: {
            title: "Introduces 'The Fluffle' NFT Collection",
            date: "February 5, 2025",
            paragraphs: [
                "MegaETH Labs introduces 'The Fluffle', a flagship NFT collection of 10,000 soulbound tokens, moving beyond traditional airdrop models that often create misaligned incentives. Through the Echo sale, MegaETH has already attracted over 3,200 new investors, demonstrating its commitment to user-centric network expansion rather than pursuing high-valuation VC funding with limited circulation.",
                "Each Fluffle NFT is priced at 1 ETH and represents at least 5% of the MegaETH network, ensuring meaningful ownership. The distribution follows a two-phase whitelist approach - retroactive and proactive - with over 80,000 addresses already included in the first phase. To maintain fairness and community focus, MegaETH team members will not hold any of these NFTs, reinforcing the project's dedication to genuine community-driven growth.",
            ],
            imageUrl: "/NFT.png",
            websiteUrl: "https://x.com/megaeth_labs/status/1886947683220234670",
        },
        sections: [
            {
                title: "MegaETH Public Testnet Announcement",
                summary: "Launch in 30 Days",
                content: `MegaETH Labs has announced a groundbreaking achievement in blockchain performance, reaching approximately 1.5 GGas/s against historical Ethereum transactions, even without implementing parallelism. This remarkable performance is 60 times faster than the current top-performing rollup solution. The team expects to double this performance instantly once parallel processing is implemented.
                In a significant development for the Ethereum ecosystem, MegaETH has confirmed the launch of their public testnet within the next 30 days. This announcement comes as the project demonstrates its capability to process transactions at unprecedented speeds, marking a pivotal moment in blockchain scalability solutions. The team invites developers and community members to prepare for this major milestone in making Ethereum truly great again.`,
                imageUrl: "/testnet.png",
            },
            {
                title: "JANUARY RECAP",
                subtitle: "MegaETH's Key Achievements in January",
                content: `MegaETH announced various events and innovative changes in January, drawing attention within the blockchain ecosystem. They unveiled a new website design, emphasizing an interactive and neutral canvas as part of their branding. Additionally, they successfully hosted founder-led IRL events in Istanbul and Dubai, expanding their ecosystem. MegaETH aims to minimize user feedback loops to achieve a low-latency environment and has brought four protocols out of stealth mode, offering new financial and gamified experiences.
                Notably, with the launch of the Builder Program, they presented a vision for a "Mega Civilization," aiming to build a strong and interactive ecosystem with diverse creators. BingBing highlighted the role of builders, artists, and philosophers at the core of this civilization. Furthermore, they announced a partnership with Tether for a new "everywhere" stablecoin, accelerating ecosystem expansion. Check the link for more information.`,
                imageUrl: "/JanuaryLog.png",
                link: "https://x.com/megaeth_labs/status/1885032829480034342",
            },
        ],
        ads: [
            {
                type: "image",
                imageUrl: "/newlaunch.png",
                imageAlt: "kaito new launch",
            },
            {
                type: "apply",
                title: "Fluffle WL",
                subTitle: "Check your wallet address",
                location: "Mega With Community",
                applyLink: "https://nft.megaeth.com/login",
            },
            {
                type: "image",
                imageUrl: "/wlcheck.png",
                imageAlt: "Check WL",
            },
        ],
    },
    {
        id: "2025-01-w3",
        week: 3,
        month: "January",
        year: 2025,
        mainArticle: {
            title: "Launch New MegaETH Website",
            date: "January 10, 2025",
            paragraphs: [
                "MegaETH Labs announced the launch of their new domain and website on January 10, 2025. Designed by HarukoRose, this website extends MegaETH's role within the Ethereum ecosystem by offering a unique interface that is both familiar and foreign.",
                "It aims to provide an interactive platform that serves as a neutral canvas, allowing users to add their own color and engage with the site. MegaEth introduced several key features through a series of posts upon launch, emphasizing that the homepage serves as a visualization of MegaEth's future vision. It includes various interactive elements for users to explore, encouraging them to visit and discover these features. This launch signifies a pivotal moment in MegaETH's development, focusing on enhancing community interaction and expanding the ecosystem. Users are invited to explore the site and share their experiences to foster engagement.",
            ],
            imageUrl: "/website.png",
            websiteUrl: "https://www.megaeth.com",
        },
        sections: [
            {
                title: "Join Megabul!",
                summary: `Istanbul, Turkiye
                 January 24th,
                  from 6pm to 9pm`,
                content: `The MegaETH team is in Istanbul to meet you for the first time. If you're a builder who loves consumer DeFi and practical applications, come talk about building together. If you're a strong investor and love trading, come to exchange contract addresses. If you're just curious about making Ethereum great again, we can chat about our North Star. Even better, if you're a solana maxi, let's discuss what real-time performance actually looks like. There will be no boring panels, just good wine, good conversations, and good vibes. Join us on Megabul!`,
                imageUrl: "/megabul.png",
            },
            {
                title: "MegaMafia 2.0",
                subtitle: "MegaETH's Real-Time App Push",
                content: `The MegaMafia program has successfully backed projects on MegaETH, raising more funds than the blockchain itself. As MegaETH's testnet approaches, the program will become more open, preserving the Mafia spirit through community and mentorship.
        
        The aim is to leverage MegaETH's capabilities for superior applications (PMF^2), focusing on DeFi, stablecoins, real-time data, and on-chain data storage. In 2025, MegaMafia will intensify support for builders to destigmatize crypto and add value.`,
                imageUrl: "/megamafia.png",
                link: "https://x.com/hotpot_dao/status/1878992820926215346",
            },
        ],
        ads: [
            {
                type: "image",
                imageUrl: "/bingbing.png",
                imageAlt: "Brother Bing Tweet",
            },
            {
                type: "apply",
                title: "In-House Counsel",
                subTitle: "MEGAETH | REMOTE | FULL-TIME",
                location: "Remote",
                applyLink: "https://www.megaeth.com/about#career",
            },
            {
                type: "image",
                imageUrl: "/fluffle.png",
                imageAlt: "Join the Mafia",
            },
        ],
    },
]
