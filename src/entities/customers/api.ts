import { db } from "@/shared/app-write";
import { ICustomerAPI } from "./model";
import { COLLECTION_CUSTOMERS, DB_ID } from "@/shared/contants";
import { Query } from "appwrite";
import { ICustomer } from "@/shared/types";

export const CustomersAPI: ICustomerAPI = {
    async getAll() {
        try {
            const response = await db.listDocuments(DB_ID, COLLECTION_CUSTOMERS)
            return response.documents as unknown[] as ICustomer[]
        } catch (e) {
            console.error(e)
        }
    },
    async getById(id: string) {
        try {
            const response = await db.listDocuments(DB_ID, COLLECTION_CUSTOMERS, [
                Query.equal("$id", id)
            ]);
            return response.documents as unknown[] as ICustomer[]
        } catch (e) {
            console.error(e)
        }
    }
}