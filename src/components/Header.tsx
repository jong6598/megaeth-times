// components/Header.tsx
export default function Header() {
    return (
        <header className='border-b border-black py-4'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <div className='border border-black p-2'>
                        <h2 className='text-sm'>THE WORLD COMPUTER</h2>
                    </div>
                </div>
                <h1 className='text-4xl font-bold'>MEGA-ETH TIMES</h1>
                <div className='border border-black p-2'>
                    <div className='text-sm'>MEGA ETH LABS</div>
                    <div className='text-xs'>MegaETH is the first real-time blockchain</div>
                </div>
            </div>
            <div className='flex justify-between items-center mt-4'>
                <div>Weekly 3, Jan, 2025</div>
                <div className='flex gap-4'>
                    <a href='discord.com/invite/megaeth' className='hover:opacity-75'>
                        <span className='text-sm'>discord.com/invite/megaeth</span>
                    </a>
                    <a href='@megaeth_labs' className='hover:opacity-75'>
                        <span className='text-sm'>@megaeth_labs</span>
                    </a>
                </div>
                <div className='text-sm'>
                    THE WOLD COMPUTER IS NOT JUST A VISION: IT&apos;S A CALL TO ACTION
                </div>
            </div>
        </header>
    )
}
