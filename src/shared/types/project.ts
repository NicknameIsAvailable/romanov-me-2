import {IDocumentsBase} from "@/shared/types/base";
import {ICustomer} from "@/shared/types/customer";
import { IProjectTag } from "./tag";

export type TProjectType = "commercial" | "pet-project" | "test-task"

export interface IProject extends IDocumentsBase {
    name: string;
    description: string;
    projectTags: IProjectTag[];
    preview_url: string;
    repo_url: string;
    type: TProjectType;
    images: string[];
    customer: ICustomer[];
    date: string;
}
