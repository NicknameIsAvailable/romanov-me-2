import { IProject, TProjectType } from "@/shared/types";

export interface IProjectAPI {
    getAll(): Promise<IProject[] | undefined>;
    getByType(type: TProjectType): Promise<IProject[] | undefined>;
    getById(id: string): Promise<IProject | undefined>;
}
