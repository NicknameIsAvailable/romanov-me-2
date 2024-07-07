import { BlogAPI } from "@/entities/blog"
import SparklesText from "@/shared/magicui/sparkles-text"
import { Avatar, AvatarFallback } from "@/shared/ui/avatar"
import SupremeMadhouse from "@/shared/assets/images/supreme-madhouse.jpg"
import Image from "next/image"
import Link from "next/link"
import { BentoCard, BentoGrid } from "@/shared/magicui/bento-grid"
import { ReactNode } from "react"
import Icon from "@/shared/ui/icon"

interface IGridItem {
    Icon: ReactNode;
    name: string;
    description: string;
    href: string;
    cta: string;
    background: ReactNode;
    className: string;
}

const randomCta = () => {
    const ctas = ["Подробнее", "Ого, интересно", "Так, и что там?"]
    return ctas[Math.floor(Math.random() * ctas.length)]
}

export const BlogPage = async () => {
    const data = await BlogAPI.getAll()

    const gridData: IGridItem[] | undefined = data?.map((item, index) => {
        const spanVariants = [1, 3, 2, 2, 3, 1, 2, 1, 1];
        const colSpan = spanVariants[index % spanVariants.length];
    
        return {
            Icon: <Icon name={item.attributes.icon} className="h-12 w-12 origin-left transform-gpu text text-neutral-300 transition-all duration-300 ease-in-out group-hover:scale-75"/>,
            name: item.attributes.name,
            description: item.attributes.description,
            href: `/blog/${item.id}`,
            cta: randomCta(),
            background: <Image
                            width={1920}
                            height={1080}
                            src={item.attributes.preview}
                            alt=""
                            className="h-full w-full absolute top-0 object-cover hover:scale-125 duration-300"
                        />,
            className: `col-span-${colSpan}`,
        };
    });

    return (
        <div className="flex flex-col gap-4">
            <div className="h-96 flex flex-col gap-4 justify-center">
                <SparklesText text="Супрематическая дурка" className="lg:text-5xl text-3xl"/>
                <h2 className="lg:text-4xl text-2xl font-bold">Мой безопасный блог</h2>
                <div className="flex gap-4 items-center">
                    <h3>А тут мой ТГК (опасно для здоровья)</h3>
                    <Link href="https://t.me/FountainheadOneOfAKind" target="_blank">
                        <Avatar>
                            <Image alt="Супрематическая дурка" src={SupremeMadhouse}/>
                            <AvatarFallback />
                        </Avatar>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold">Статейки</h3>
                {data &&
                    <BentoGrid className="lg:grid-cols-4 grid-cols-1">
                        {gridData?.map((item) => (
                            <BentoCard key={item.name} {...item} />
                        ))}
                    </BentoGrid>
                }
            </div>
        </div>
    )
}