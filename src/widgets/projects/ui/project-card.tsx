import { FC } from "react";
import { IProjectCardProps } from "../model";
import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import Image from "next/image";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Button } from "@/shared/ui/button";
import { Skeleton } from "@/shared/ui/skeleton";
import Link from "next/link";

export const ProjectCard: FC<IProjectCardProps> = ({ data }) => {
    return (
        <AspectRatio ratio={9 / 16}>
            <Card>
                <CardHeader>
                    {
                        data.images[0] ? 
                            <AspectRatio ratio={16/9}>
                                <Image className="rounded-xl" height={4000} width={4000} alt={data.images[0]} src={data.images[0]}/>
                            </AspectRatio>
                        : 
                            <AspectRatio ratio={16/9}>
                                <Skeleton />
                            </AspectRatio>
                    }
                </CardHeader>
                <CardContent>
                    <h3 className="text-xl font-bold">
                        {data.name}
                    </h3>
                </CardContent>
                <CardFooter>
                    <Link href={`/projects/${data.type}/${data.$id}`}>
                        <Button>
                            Подробнее
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </AspectRatio>
    )
}