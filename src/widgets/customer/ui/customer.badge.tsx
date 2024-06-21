import { FC } from "react";
import { ICustomerBadgeProps } from "../model/customer.badge.props";
import { Card, CardContent } from "@/shared/ui/card";
import { Avatar, AvatarImage } from "@/shared/ui/avatar";
import Link from "next/link";

export const CustomerBadge: FC<ICustomerBadgeProps> = ({ data }) => {
    return (
        <Link href={`/customers/${data?.$id}`}>
            <Card className="flex items-center gap-4 p-4">
                    <Avatar className="h-16 w-16">
                        <AvatarImage src={data?.avatar_url}/>
                    </Avatar>
                    <span className="font-bold text-xl">
                        {data?.name}
                    </span>
            </Card>
        </Link>
    )
}