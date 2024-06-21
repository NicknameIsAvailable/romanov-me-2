import { FC, ReactNode } from "react";
import { IProjectTypeLayoutProps } from "../model";
import { ILink } from "@/shared/types";
import { Tabs, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import Link from "next/link";

export const ProjectTypeLayout: FC<IProjectTypeLayoutProps> = ({ children, params }) => {
    const { type } = params;

    const links: ILink[] = [
        {
            name: "Коммерческие проекты",
            url: "/projects/commercial",
            id: "commercial"
        },
        {
            name: "Пет проекты",
            url: "/projects/pet-project",
            id: "pet-project"
        },
        {
            name: "Тестовые задания",
            url: "/projects/test-task",
            id: "test-task"
        },
    ]

    return (
        <Tabs defaultValue="commercial" value={type}>
            <div className="flex justify-center items-center">
                <TabsList>
                    {links.map(link => 
                        <Link href={link.url} key={link.id}>
                            <TabsTrigger value={link.id || ""}>
                                {link.name}
                            </TabsTrigger>
                        </Link>
                    )}
                </TabsList>
            </div>
            <div className="mt-4">
                {children}
            </div>
        </Tabs>
    );
}