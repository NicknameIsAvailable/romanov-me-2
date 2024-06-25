import {FC} from "react";
import {ISkillCardProps} from "../model";
import Image from "next/image";
import { Card, CardContent } from "@/shared/ui/card";
import Link from "next/link";
import RadialGradient from "@/shared/magicui/radial-gradient";

export const SkillCard: FC<ISkillCardProps> = ({ data }) => {
    return (
        <Link href={data.url} target="_blank">
            <Card className="relative z-10 backdrop-blur-md bg-background/70">
                <CardContent className="px-6 py-4">
                    <div className="flex gap-4 items-center">
                        <Image className="w-20 h-20" width={512} height={512} src={data.icon} alt={data.name}/>
                        <div className="flex flex-col gap-2">
                            <h4 className="font-bold">{data.name}</h4>
                            <p>{data.description}</p>
                        </div>
                    </div>
                </CardContent>
                <RadialGradient/>
            </Card>
        </Link>
    )
}
