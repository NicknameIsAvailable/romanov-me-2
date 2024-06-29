import { CustomersIdPage, ICustomersIdProps } from '@/views/customers';
import React, { FC } from 'react';

const Page: FC<ICustomersIdProps> = ({ params }) => {
    return (
        <CustomersIdPage params={params}/>
    );
};

export default Page;