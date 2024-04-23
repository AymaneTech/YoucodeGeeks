import {object, string, any} from "zod";
const MAX_FILE_SIZE = 9 * 1024 * 1024; // 5MB in bytes

const ACCEPTED_IMAGE_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
];

export const loginSchema = object({
    email: string().email().min(2).max(30),
    password: string().min(6).max(30),
})

export const registerSchema = object({
    firstName: string().min(2).max(30),
    lastName: string().min(2).max(30),
    email: string().email().min(2).max(30),
    className: string().min(2).max(30),
    password: string().min(6).max(30),
    password_confirmation: string().min(6).max(30),
    image: any(),
});

export const userSchema = object({
    firstName: string().min(2).max(30),
    lastName: string().min(2).max(30),
    email: string().email().min(2).max(30),
    password: string().min(6).max(30),
    password_confirmation: string().min(6).max(30),
    image: any(),
    role: any(),
    className: string().optional()

})