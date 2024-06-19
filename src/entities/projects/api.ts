import {IProjectAPI} from "./model";
import {db} from "@/shared/app-write";
import {COLLECTION_PROJECTS, DB_ID} from "@/shared/contants";
import {Models, Query} from "appwrite";

export const ProjectsApi: IProjectAPI = {
    getAll: async () => {
        const response = await db.listDocuments(DB_ID, COLLECTION_PROJECTS);
        const data: Models.Document[] = response.documents;
        return data;
    },
    getById: async (id: string) => {
        const response = await db.listDocuments(DB_ID, COLLECTION_PROJECTS, [
            Query.equal("$id", id)
        ]);
        const data: Models.Document[] = response.documents;
        return data;
    }
}
