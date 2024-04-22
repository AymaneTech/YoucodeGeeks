import { Button } from "@/components/ui/button"
import {
    Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form.jsx";
import { createCategorySchema } from "@/Validations/Admin.js";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.jsx";
import { SelectLabel } from "@radix-ui/react-select";

export const UserCreate = () => {
    const [imageValue, setImageValue] = useState();
    const dispatch = useDispatch()

    const form = useForm({
        resolver: zodResolver(createCategorySchema), defaultValues: {
            name: "web development", image: null, userRole: null,
        },
    })

    const handleImage = (e) => {
        setImageValue(e.target.files[0])
    }

    const onSubmit = async (values) => {
        const formData = new FormData();
        formData.append("image", imageValue);
        formData.append("name", values.name);
    }


    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="bg-blue-600">Add User</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add New User</DialogTitle>
                    <DialogDescription>Fill out the details for the new category.</DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
                        <div className="flex flex-col items-start gap-3">
                            <Label className="text-right" htmlFor="image">
                                Image
                            </Label>
                            <input type="file" name="image" onChange={handleImage} />
                        </div>
                        <div className="flex gap-4 items-center">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="name" {...field} />
                                        </FormControl>
                                        <FormMessage></FormMessage>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="userRole"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>User Role</FormLabel>
                                    <Controller
                                        control={form.control}
                                        name="userRole"
                                        render={({ field }) => (
                                            <Select onValueChange={handleUserRoleChange}>
                                                <SelectTrigger className="">
                                                    <SelectValue placeholder="Select a user role" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectLabel>User Roles</SelectLabel>
                                                        <SelectItem value={1}>Student</SelectItem>
                                                        <SelectItem value={2}>Admin</SelectItem>
                                                        <SelectItem value={3}>Coach</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                </FormItem>
                            )}
                        />
                        {showStudentField && (
                            <FormField
                                control={form.control}
                                name="classroom"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Classroom</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Classroom" {...field} />
                                        </FormControl>
                                        <FormMessage></FormMessage>
                                    </FormItem>
                                )}
                            />
                        )}
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button type="submit">Save User</Button>
                            </DialogClose>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}