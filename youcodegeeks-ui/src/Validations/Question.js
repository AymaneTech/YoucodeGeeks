import {object, string, number, any} from "zod"

export const questionCreateForm = object({
    title: string().min(10).max(60),
    details: string().min(10).max(200),
    body: string().min(100),
    tags: any(),
    categoryId: number(),
    image: any()
})