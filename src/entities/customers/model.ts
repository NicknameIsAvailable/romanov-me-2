import { ICustomer } from "@/shared/types";

export interface ICustomerAPI {
    getAll(): Promise<ICustomer[] | undefined>;
    getById(id: string): Promise<ICustomer[] | undefined>;
}
