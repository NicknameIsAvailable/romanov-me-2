import {IDocumentsBase} from "./base";
import { IProject } from "./project";

export interface ICustomer extends IDocumentsBase {
    name: string;
    description: string;
    avatar_url: string;
    website_url: string;
    projects: IProject[];
}
