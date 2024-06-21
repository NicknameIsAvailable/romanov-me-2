import { IProjectTypeIdPageProps } from '@/views/projects';
import { ProjectTypeIdPage } from '@/views/projects/ui/projects[type][id].page';
import React, { FC } from 'react';

const Page: FC<IProjectTypeIdPageProps> = async ({ params }) => <ProjectTypeIdPage params={params} />
export default Page;