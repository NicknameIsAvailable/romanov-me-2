import { ProjectsApi } from "@/entities/projects"
import ShinyButton from "@/shared/magicui/shiny-button"
import SparklesText from "@/shared/magicui/sparkles-text"
import Link from "next/link"

export const Projects = async () => {
    const projects = await ProjectsApi.getBestProjects()

    return (
        <div className="container mx-auto flex flex-col gap-4">
            <SparklesText text="Проекты" className="text-center z-10 mt-10"/>
            <p className="text-center text-xl font-bold">Лучшие проекты в которых я учавствовал</p>
            <div className="grid grid-cols-3 gap-4">

            </div>
            <div className="w-full flex justify-center">
                <Link href="/projects">
                    <ShinyButton text="Все проекты" className="w-72 mx-auto"/>
                </Link>
            </div>
        </div>
    )
}