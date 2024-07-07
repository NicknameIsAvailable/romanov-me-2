import { MagicCard } from "@/shared/magicui/magic-card"
import Particles from "@/shared/magicui/particles"
import ShinyButton from "@/shared/magicui/shiny-button"
import SparklesText from "@/shared/magicui/sparkles-text"
import { ILink } from "@/shared/types"
import { AspectRatio } from "@/shared/ui/aspect-ratio"
import { Button } from "@/shared/ui/button"
import { ModeToggle } from "@/widgets/mode-toggle"
import { GithubIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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
                    <h1 className="md:text-8xl text-6xl font-bold">
                        Ярослав Романов
                    </h1>
                    <h3 className="md:text-6xl text-5xl font-bold">
                        <SparklesText text="Легенда фронтенда" />
                    </h3>
                    <span className="text-base font-medium"> Всмысле вы меня не знаете?.. </span>
                    <div className="flex gap-4">
                        <Link href="#about-me">
                            <Button>Узнать</Button>
                        </Link>
                        {/* <Link href="/blog">
                            <ShinyButton text="Супрематическая дурка"/>
                        </Link> */}
                        <ModeToggle />
                    </div>
                </div>
                {/* <div className="flex justify-center items-center">
                    <AspectRatio ratio={3/4}>
                        <MagicCard className="overflow-hidden">
                            <Image className="absolute -top-10 left-0 z-0" alt="Это я" width={1920} height={1080} src="https://cloud.appwrite.io/v1/storage/buckets/project-images/files/667afa14000974402a2d/view?project=romanov-me&mode=admin" />
                        </MagicCard>
                        <h3 className="z-10">У меня нет ни одной адекватной фотокарточки...</h3>
                    </AspectRatio>
                </div> */}
            </div>
        </section>
    )
}