import { FC } from "react"
import { ICustomersIdProps } from "../model"
import { Avatar } from "@radix-ui/react-avatar"
import { CustomersAPI } from "@/entities/customers"

export const CustomersIdPage: FC<ICustomersIdProps> = async ({ params }) => {
    const data = await CustomersAPI.getById(params.id)

    return (
        <div>
            <Avatar/>
        </div>
    )
}