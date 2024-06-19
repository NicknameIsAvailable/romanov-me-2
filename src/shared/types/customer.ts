import {IDocumentsBase} from "./base";

export interface ICustomer extends IDocumentsBase {
    name: string;
    description: string;
    avatar_url: string;
    website_url: string;
}
