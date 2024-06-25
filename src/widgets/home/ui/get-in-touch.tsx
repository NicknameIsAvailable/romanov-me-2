import { MagicCard, MagicContainer } from "@/shared/magicui/magic-card"
import RetroGrid from "@/shared/magicui/retro-grid"
import SparklesText from "@/shared/magicui/sparkles-text"
import { ILink } from "@/shared/types"
import GithubIcon from "@/shared/assets/icons/github-logo.svg"
import TelegramIcon from "@/shared/assets/icons/telegram-logo.svg"
import HHIcon from "@/shared/assets/icons/hh-logo.png"
import SupremeMadhouse from "@/shared/assets/images/supreme-madhouse.jpg"
import { Card, CardHeader } from "@/shared/ui/card"
import Image from "next/image"
import { Dock, DockIcon } from "@/shared/magicui/dock"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui/tooltip"
import LinearGradient from "@/shared/magicui/linear-gradient"
import { GetInTouchForm } from "./get-in-touch.form"

export const GetInTouch = () => {
    const links: ILink[] = [
        {
            name: "Мой Гитхаб",
            url: "https://github.com/NicknameIsAvailable",
            icon: <Image src={GithubIcon} alt="Github"/>
        },
        {
            name: "Моя телега",
            url: "https://t.me/NicknameIsAvailable",
            icon: <Image src={TelegramIcon} alt="Telegram"/>
        },
        {
            name: "Мой HH",
            url: "https://github.com/NicknameIsAvailable",
            icon: <Image src={HHIcon} alt="HH"/>
        },
        {
            name: "супрематическая дурка",
            url: "https://t.me/FountainheadOneOfAKind",
            icon: <Image src={SupremeMadhouse} alt="Супрематическая дурка" className="rounded-full"/>
        },
    ]

    return (
        <MagicCard className="mt-10 relative overflow-hidden z-0 rounded-b-none">
            <MagicContainer className="z-10 flex flex-col gap-32 items-center">
                <SparklesText text="Контакты" className="text-center"/>
                <Card className="w-96">
                    <CardHeader>
                        <h3 className="text-xl font-bold">
                            Оставить заявку
                        </h3>
                    </CardHeader>
                    <GetInTouchForm />
                </Card>
                <Dock>
                    {links.map((link, index) => (
                        <DockIcon key={index}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                        {link.icon}
                                </TooltipTrigger>
                                <TooltipContent>
                                    {link.name}
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}
                </Dock>
            </MagicContainer>
            <RetroGrid className="absolute left-0 top-0 z-0"/>
            <LinearGradient className="absolute left-0 top-0 z-0"/>
        </MagicCard>
    )
}