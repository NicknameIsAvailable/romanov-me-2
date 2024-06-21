import { IProjectTypeLayoutProps, ProjectTypeLayout } from '@/views/projects';
import React, { FC } from 'react';

const Layout: FC<IProjectTypeLayoutProps> = ({ children, params }) => {
    return (
        <ProjectTypeLayout params={params}>
            {children}
        </ProjectTypeLayout>
    );
};

export default Layout;