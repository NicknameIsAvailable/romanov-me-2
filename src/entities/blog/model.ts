import { IState } from "@/shared/types/blog";

export interface IBlogAPI {
    getAll(): Promise<IState[] | undefined>;
    getById(id: number): Promise<IState | undefined>;
}
