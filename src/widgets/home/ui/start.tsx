import { MagicCard } from "@/shared/magicui/magic-card"
import Particles from "@/shared/magicui/particles"
import ShinyButton from "@/shared/magicui/shiny-button"
import SparklesText from "@/shared/magicui/sparkles-text"
import { ILink } from "@/shared/types"
import { AspectRatio } from "@/shared/ui/aspect-ratio"
import { ModeToggle } from "@/widgets/mode-toggle"
import { GithubIcon } from "lucide-react"

export const Start = () => {
    const links: ILink[] = [
        {
            name: "GitHub",
            url: "https://github.com/NicknameIsAvailable",
            icon: <GithubIcon />
        },
        {
            name: "GitHub",
            url: "https://github.com/NicknameIsAvailable",
            icon: <GithubIcon />
        },
        {
            name: "GitHub",
            url: "https://github.com/NicknameIsAvailable",
            icon: <GithubIcon />
        },
    ]

    return (
        <section className="w-screen h-screen">
            <div className="container mx-auto  min-h-screen grid grid-cols-3 gap-4">
                <div className="flex flex-col justify-center items-start gap-4 h-full col-span-2">
                    <h1 className="text-8xl font-bold">
                        Ярослав Романов
                    </h1>
                    <h3 className="text-6xl font-bold">
                        <SparklesText text="Легенда фронтенда" />
                    </h3>
                    <span className="text-base font-medium"> Всмысле вы меня не знаете?.. </span>
                    <div className="flex gap-4">
                        <ShinyButton text="Узнать"/>
                        <ModeToggle />
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <AspectRatio ratio={3/4}>
                        <MagicCard>
                            <h1>МНЕ НУЖНО УЖЕ ПИЗДАТО СФОТКАТЬСЯ</h1>
                        </MagicCard>
                    </AspectRatio>
                </div>
            </div>
        </section>
    )
}