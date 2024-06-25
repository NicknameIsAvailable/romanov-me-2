import { IProject, TProjectType } from "@/shared/types";

export interface IProjectAPI {
    getAll(length?: number): Promise<IProject[] | undefined>;
    getByType(type: TProjectType, length?: number): Promise<IProject[] | undefined>;
    getBestProjects(): Promise<IProject[] | undefined>;
    getById(id: string): Promise<IProject | undefined>;
}
