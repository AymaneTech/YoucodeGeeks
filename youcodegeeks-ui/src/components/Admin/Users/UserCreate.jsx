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
import { createCategory } from "@/Features/CategorySlice.js";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.jsx";
import { SelectLabel } from "@radix-ui/react-select";

export const UserCreate = () => {
    const USER_ROLES = {
        STUDENT: 1,
        ADMIN: 2,
        COACH: 3,
    };

    const [showAdditionalFields, setShowAdditionalFields] = useState({
        student: false,
        admin: false,
        coach: false
    });
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

    const handleUserRoleChange = async (role) => {
        if (role === USER_ROLES.ADMIN) {
           await setShowAdditionalFields({
                ...showAdditionalFields,
                admin: !showAdditionalFields.admin
            });
        } else if (role === USER_ROLES.STUDENT) {
            setShowAdditionalFields({
                ...showAdditionalFields,
                student: !showAdditionalFields.student
            });
        } else if (role === USER_ROLES.COACH) {
            setShowAdditionalFields({
                ...showAdditionalFields,
                coach: !showAdditionalFields.coach
            });
        } else {
            setShowAdditionalFields({
                student: false,
                admin: false,
                coach: false
            });
        }
    };

    const onSubmit = async (values) => {
        const formData = new FormData();
        formData.append("image", imageValue);
        formData.append("name", values.name);
        dispatch(createCategory(formData))
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
                                            <Select
                                                onValueChange={(value) => {
                                                    field.onChange(value);
                                                    handleUserRoleChange(value);
                                                }}
                                                value={field.value}
                                            >
                                                <SelectTrigger className="">
                                                    <SelectValue placeholder="Select a user role" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectLabel>User Roles</SelectLabel>
                                                        <SelectItem value={USER_ROLES.STUDENT}>Student</SelectItem>
                                                        <SelectItem value={USER_ROLES.ADMIN}>Admin</SelectItem>
                                                        <SelectItem value={USER_ROLES.COACH}>Coach</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                </FormItem>
                            )}
                        />
                        {showAdditionalFields.student && (
                            <FormField
                                control={form.control}
                                name="additionalField"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Additional Field</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Additional Field" {...field} />
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