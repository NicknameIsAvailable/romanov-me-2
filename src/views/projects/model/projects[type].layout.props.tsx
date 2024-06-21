import { TProjectType } from "@/shared/types";
import { ReactNode } from "react";

export interface IProjectTypeLayoutProps {
    children: ReactNode, 
    params: {type: TProjectType}
}