import { FC, ReactNode } from "react";

export const ProjectsLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <main className="flex flex-col gap-6 container mx-auto py-4">
            <h1 className="text-5xl font-bold text-center">Мои проекты</h1>
            {children}
        </main>
    )
}