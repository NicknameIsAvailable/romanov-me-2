import { ProjectsApi } from '@/entities/projects';
import { Button } from '@/shared/ui/button';
import { Card, CardContent, CardHeader } from '@/shared/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/shared/ui/carousel';
import { CustomerBadge } from '@/widgets/customer';
import { ChevronLeft, GithubIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { IProjectTypeIdPageProps } from '../model';

export const ProjectTypeIdPage: FC<IProjectTypeIdPageProps> = async ({ params }) => {
    const {id} = params;
    
    const data = await ProjectsApi.getById(id)

    return (
        <Card>
            <CardHeader>
                <div className="flex gap-4 items-center">
                    <Link href={`/projects/${data?.type}`}>
                        <Button variant="ghost" size="icon">
                            <ChevronLeft />
                        </Button>
                    </Link>
                    <h1 className="text-4xl font-bold">
                        {data?.name}
                    </h1>
                </div>
            </CardHeader>
            <CardContent>
                <div className='grid grid-cols-3 gap-6'>
                    <div className="flex flex-col col-span-2 gap-4">
                        <Carousel>
                            <CarouselContent>
                                {data?.images.map((img, index) =>
                                    <CarouselItem key={index}>
                                        <Image className='rounded-2xl border-border' width={1920} height={1080} src={img} alt={img}/>
                                    </CarouselItem>
                                )}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                        <div className="flex flex-row">
                            {/* {data?.projectTags.map(tag => 
                                <Badge>
                                    {tag.name}
                                </Badge>
                            )} */}
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <CustomerBadge data={data?.customer[0]}/>
                        <p className="text-xl">
                            {data?.description}
                        </p>
                        <div className="flex gap-4">
                            <Link href={data?.preview_url || ""} className='flex-1'>
                                <Button className='w-full'>
                                    Превью
                                </Button>
                            </Link>
                            <Link href={data?.repo_url || ""} className='flex-1'>
                                <Button className='w-full'>
                                    <GithubIcon className='mr-2' size={16}/>
                                    Репозиторий
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}