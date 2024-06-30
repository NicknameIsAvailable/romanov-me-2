import { FC } from "react"
import { ICustomersIdProps } from "../model"
import { CustomersAPI } from "@/entities/customers"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"

export const CustomersIdPage: FC<ICustomersIdProps> = async ({ params }) => {
    const data = await CustomersAPI.getById(params.id)

    return (
        <div className="py-4 flex flex-col justify-center h-screen gap-4 max-w-xl mx-auto">
            <header className="flex gap-4 items-center">
                <Avatar className="h-24 w-24">
                    <AvatarImage src={data?.avatar_url}/>
                    <AvatarFallback />
                </Avatar>
                <h1 className="text-4xl font-bold">{data?.name}</h1>
            </header>
            <p className="text-xl">
                {data?.description}
            </p>
        </div>
    )
}