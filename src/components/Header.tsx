import { WeeklyContent } from "@/types/weeklyContent"
import Image from "next/image"

interface HeaderProps {
    weeklyContents: WeeklyContent[]
    onWeekSelect: (weekId: string) => void
}

export default function Header({ weeklyContents, onWeekSelect }: HeaderProps) {
    return (
        <header className="border-b-4 border-black py-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <div className="border-4 border-black p-2">
                        <h2 className="text-m font-bold"> ∑: THE WORLD COMPUTER</h2>
                    </div>
                </div>
                <h1 className="text-6xl font-extrabold">MEGA-ETH TIMES</h1>
                <div className="border-4 border-black p-2 flex gap-1">
                    <Image src="/rabbit.png" alt={"discord"} width={40} height={30} />
                    <div>
                        <div className="text-m font-bold">MEGA ETH LABS</div>
                        <div className="text-xs">MegaETH is the first real-time blockchain</div>
                    </div>
                </div>
            </div>
            <div className="flex justify-around items-center my-4 border-t-4 border-black pt-4 ">
                <select
                    onChange={(e) => onWeekSelect(e.target.value)}
                    className=" font-bold bg-transparent"
                >
                    {weeklyContents.map((content) => (
                        <option key={content.id} value={content.id}>
                            {content.month} {content.week}rd Week, {content.year}
                        </option>
                    ))}
                </select>
                <a
                    href="https://discord.com/invite/megaeth"
                    className="hover:opacity-75 flex flex-col items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image src="/discord.png" alt="discord" width={50} height={50} />
                    <span className="text-sm">discord</span>
                </a>

                <a
                    href="https://twitter.com/megaeth_labs"
                    className="hover:opacity-75 flex flex-col items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image src="/x_icon.png" alt="X" width={50} height={50} />
                    <span className="text-sm">@megaeth_labs</span>
                </a>

                <div className="text-m text-center flex items-center h-full font-bold">
                    <div>
                        <div>THE WOLD COMPUTER</div>
                        <div>IS NOT JUST A VISION:</div>
                        <div>IT&apos;S A CALL TO ACTION</div>
                    </div>
                </div>
            </div>
        </header>
    )
}
