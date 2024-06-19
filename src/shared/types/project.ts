import {IDocumentsBase} from "@/shared/types/base";
import {ICustomer} from "@/shared/types/customer";

export type TProjectType = "commercial" | "pet-project" | "test-task"

export interface IProject extends IDocumentsBase {
    name: string;
    description: string;
    tags: string[];
    preview_url: string;
    repo_url: string;
    type: TProjectType;
    images: string[];
    customers: ICustomer[];
}
