import React, { FC, ReactNode } from 'react';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <main className='container mx-auto'>
            {children}
        </main>
    );
};

export default Layout;