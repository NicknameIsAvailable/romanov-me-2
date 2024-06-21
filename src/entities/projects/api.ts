import {IProjectAPI} from "./model";
import {db} from "@/shared/app-write";
import {COLLECTION_PROJECTS, DB_ID} from "@/shared/contants";
import { IProject } from "@/shared/types";
import {Query} from "appwrite";

export const ProjectsApi: IProjectAPI = {
    async getAll() {
        try {
            const response = await db.listDocuments(DB_ID, COLLECTION_PROJECTS);
            return response.documents as unknown[] as IProject[];
        } catch (e) {
            console.error(e)
        }
    },
    async getByType(type) {
        try {
            const response = await db.listDocuments(DB_ID, COLLECTION_PROJECTS, [
                Query.equal("type", type)
            ]);
            return response.documents as unknown[] as IProject[];
        } catch (e) {
            console.error(e)
        }
    },
    async getById(id: string) {
        try {
            const response = await db.listDocuments(DB_ID, COLLECTION_PROJECTS, [
                Query.equal("$id", id)
            ]);
            console.log(21345, response.documents)
            return response.documents[0] as unknown as IProject;
        } catch (e) {
            console.error(e)
        }
    }
}
