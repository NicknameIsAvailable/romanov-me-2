import {IProjectAPI} from "./model";
import {db} from "@/shared/app-write";
import {COLLECTION_PROJECTS, DB_ID} from "@/shared/constants";
import { IProject } from "@/shared/types";
import {Query} from "appwrite";

export const ProjectsApi: IProjectAPI = {
    async getAll(length) {
        try {
            const response = await db.listDocuments(DB_ID, COLLECTION_PROJECTS, [
                length ? Query.limit(length) : ""
            ]);
            return response.documents as unknown[] as IProject[];
        } catch (e) {
            console.error(e)
        }
    },
    async getByType(type, length) {
        try {
            const response = await db.listDocuments(DB_ID, COLLECTION_PROJECTS, [
                Query.equal("type", type),
                // length ? Query.limit(length) : ""
            ]);
            return response.documents as unknown[] as IProject[];
        } catch (e) {
            console.error(e)
        }
    },
    async getBestProjects() {
        try {
            const response = await db.listDocuments(DB_ID, COLLECTION_PROJECTS, [
                Query.equal("best", true)
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
            return response.documents[0] as unknown as IProject;
        } catch (e) {
            console.error(e)
        }
    }
}
