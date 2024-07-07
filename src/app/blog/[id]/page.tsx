import { IBlogIdProps } from '@/views/blog/model/blog[id].props';
import { BlogIdPage } from '@/views/blog/ui/blog[id].page';
import React, { FC } from 'react';

const Page: FC<IBlogIdProps> = ({ params }) => <BlogIdPage params={params}/>

export default Page;