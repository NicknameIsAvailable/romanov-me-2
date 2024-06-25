import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ISkill { 
    name: string;
    description: string;
    icon: StaticImport;
    url: string;
}