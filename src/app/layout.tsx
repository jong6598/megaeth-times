import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'MEGA-ETH TIMES',
    description: "THE WORLD COMPUTER IS NOT JUST A VISION: IT'S A CALL TO ACTION",
    icons: {
        icon: '/favicon.ico',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-7xl mx-auto px-4 min-h-screen font-sans text-black bg-[#FDFDFD] `}
            >
                {children}
            </body>
        </html>
    )
}
