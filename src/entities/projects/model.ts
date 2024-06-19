import {Models} from "appwrite";

export interface IProjectAPI {
    getAll(): Promise<Models.Document[]>;
    getById(id: string): Promise<Models.Document[]>;
}
