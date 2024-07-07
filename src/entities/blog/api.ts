import { IBlogAPI } from "./model";
import axios, { CreateAxiosDefaults } from "axios";
import { IState } from "@/shared/types/blog";

const blogOptions: CreateAxiosDefaults = {
    baseURL: process.env.NEXT_PUBLIC_BLOG_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_BLOG_API_KEY}`
    },
    withCredentials: true,
};

const api = axios.create(blogOptions);

export const BlogAPI: IBlogAPI = {
    async getAll() {
        try {
            const response = await api.get("/api/states/", {
                params: {
                    "fields": ["name", "description", "preview", "icon"]
                }
            })
            return response.data.data as unknown[] as IState[]
        } catch (e) {
            console.error(e)
        }
    },
    async getById(id: number) {
        try {
            const response = await api.get(`/api/states/${id}`)
            console.log(response.data)
            return response.data.data as unknown as IState
        } catch (e) {
            console.error(e)
        }
    }
}