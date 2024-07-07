import { FC, ReactNode } from "react";

export const BlogLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="container mx-auto my-4 flex flex-col gap-4">
            {children}
        </div>
    )
}