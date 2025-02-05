// components/Footer.tsx
const Footer = () => {
    return (
        <footer className='border-t-2 border-black py-4 mt-8'>
            <div className='flex justify-between items-center'>
                <div className='text-m font-bold'>© 2025 MegaETH. All rights reserved.</div>
                <div className='text-sm'>
                    Designed by{' '}
                    <a
                        href='https://x.com/hyeon__dev'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:underline text-m font-bold'
                    >
                        @hyeon__dev
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
