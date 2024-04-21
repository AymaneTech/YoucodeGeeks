import {object, string, any} from "zod";

export const createCategorySchema = object({
    name: string().min(2).max(30),
    image: any()
})

export const createTagSchema = object({
    name: string().min(2).max(30),
})