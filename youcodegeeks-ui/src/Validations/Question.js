import {object, string, number, any} from "zod"

export const questionCreateForm = object({
    title: string().min(10).max(150),
    details: string().min(10).max(400),
    tags: any(),
    categoryId: string(),
    images: any()
})

export const answerSchema = object({
    body: string().min(10).max(200),
})