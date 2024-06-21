import { ICustomer } from "@/shared/types";

export interface ICustomerBadgeProps {
    data?: Pick<ICustomer, "$id" | "name" | "avatar_url">
}