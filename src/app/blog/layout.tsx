import { BlogLayout } from '@/views/blog/ui/blog.layout';
import React, { FC, ReactNode } from 'react';

const Layout: FC<{ children: ReactNode }> = ({ children }) => <BlogLayout>{children}</BlogLayout>
export default Layout;