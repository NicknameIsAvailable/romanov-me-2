import { BlocksContent } from "@strapi/blocks-react-renderer";
import dynamicIconImports from "lucide-react/dynamicIconImports";

export interface IState {
    id: number;
    attributes: {
        name: string;
        description: string;
        preview: string;
        content?: BlocksContent;
        icon: keyof typeof dynamicIconImports;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    }
}