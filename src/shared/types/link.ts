import { ReactNode } from "react";

export interface ILink {
    name: string;
    url: string;
    id?: string;
    icon?: ReactNode;
}