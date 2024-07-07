import { FC } from "react"
import { IBlogIdProps } from "../model/blog[id].props"
import { BlogAPI } from "@/entities/blog";
import SparklesText from "@/shared/magicui/sparkles-text";
import Link from "next/link";
import { BlocksRendererClient } from "@/widgets/blog";
import Image from "next/image";
import { AspectRatio } from "@/shared/ui/aspect-ratio";

export const BlogIdPage: FC<IBlogIdProps> = async ({ params }) => {
    const { id } = params;
    const data = await BlogAPI.getById(id);

    return (
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
            <Link href="/blog">
                <SparklesText text="Супрематическая дурка" className="text-2xl"/>
            </Link>
            <AspectRatio ratio={16 / 9}>
                <Image src={data?.attributes.preview || ""} alt="" className="w-full h-full object-cover rounded-2xl border border-border" width={1920} height={1080}/>
            </AspectRatio>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{data?.attributes.name}</h1>
            <div>
                <BlocksRendererClient content={data?.attributes.content || []}/>
            </div>
        </div>
    )
}