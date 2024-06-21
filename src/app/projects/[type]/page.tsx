import { TProjectType } from '@/shared/types';
import { ProjectList } from '@/widgets/projects';
import { TabsContent } from '@radix-ui/react-tabs';
import React from 'react';

const Page = () => {
    const types: TProjectType[] = [
        "commercial",
        "pet-project",
        "test-task",
    ]

    return types.map(type => 
        <TabsContent value={type}>
            <ProjectList type={type} />
        </TabsContent>
    );
};

export default Page;