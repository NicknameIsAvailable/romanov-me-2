import { Card } from '@/shared/ui/card';
import React, { FC, ReactNode } from 'react';

const Layout: FC<{children: ReactNode}> = ({ children }) => {
    return (
        <Card>
            {children}
        </Card>
    );
};

export default Layout;