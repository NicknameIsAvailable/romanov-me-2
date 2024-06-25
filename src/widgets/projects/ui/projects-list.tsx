import { ProjectsApi } from '@/entities/projects';
import React, { FC } from 'react';
import { ProjectCard } from './project-card';
import { IProjectsListProps } from "../model"
import { TProjectType } from '@/shared/types';

export const ProjectList: FC<IProjectsListProps> = async ({ type, length }) => {
    const getData = async (type?: TProjectType) => {
        if (type) return await ProjectsApi.getByType(type);
        return await ProjectsApi.getAll()
    }
    const projects = await getData(type);

    return (
        <div className="grid grid-cols-3 gap-4">
            {projects?.map(project => <ProjectCard key={project.$id} data={project}/>)}
        </div>
    );
};
