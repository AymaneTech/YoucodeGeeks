import {Button} from "@/components/ui/button"
import {
    Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import { useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.jsx";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.jsx";
import {SelectLabel} from "@radix-ui/react-select";
import {userSchema} from "@/Validations/User.js";
import {ClassRoomsSelect} from "@/components/Partials/Selects.jsx";

export const UserCreate = () => {
    const [imageValue, setImageValue] = useState();
    const dispatch = useDispatch()

    const form = useForm({
        resolver: zodResolver(userSchema), defaultValues: {
            firstName: "aymane",
            lastName: "January",
            email: "aymane@gmail.com",
            password: "password",
            password_confirmation: "password",
            role: "student",
            className: ""
        },
    })

    const handleImage = (e) => {
        setImageValue(e.target.files[0])
    }
    const handleClassNameField = (e) => {
        const classNameInput = document.querySelector('#className');
        if (e === 1){
            classNameInput.classList.toggle("hidden");
        }
    }

    const onSubmit = async (values) => {
        const formData = new FormData();
        formData.append("image", imageValue);
        for (const [key, value] of Object.entries(values)) {
            if (key !== 'image') {
                formData.append(key, value);
            }
        }
        console.log(formData)

    }


    return (<Dialog>
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
                            <input type="file" name="image" onChange={handleImage}/>
                        </div>
                        <div className="flex gap-4 items-center">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({field}) => (<FormItem>
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="name" {...field} />
                                        </FormControl>
                                        <FormMessage></FormMessage>
                                    </FormItem>)}
                            />
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({field}) => (<FormItem>
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="name" {...field} />
                                        </FormControl>
                                        <FormMessage></FormMessage>
                                    </FormItem>)}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({field}) => (<FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="email@gmail.com" {...field} />
                                    </FormControl>
                                    <FormMessage></FormMessage>
                                </FormItem>)}
                        />
                        <div className="flex gap-4 items-center">
                            <FormField
                                control={form.control}
                                name="password"
                                render={({field}) => (<FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input placeholder="password" {...field} />
                                        </FormControl>
                                        <FormMessage></FormMessage>
                                    </FormItem>)}
                            />
                            <FormField
                                control={form.control}
                                name="password_confirmation"
                                render={({field}) => (<FormItem>
                                        <FormLabel>Password Confirmation</FormLabel>
                                        <FormControl>
                                            <Input placeholder="password" {...field} />
                                        </FormControl>
                                        <FormMessage></FormMessage>
                                    </FormItem>)}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="role"
                            render={({field}) => (<FormItem>
                                    <FormLabel>User Role</FormLabel>
                                    <Select
                                        onValueChange={handleClassNameField}
                                        value={field.value}
                                    >
                                        <SelectTrigger className="">
                                            <SelectValue placeholder="Select a user role"/>
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
                                    <FormMessage/>
                                </FormItem>)}
                        />
                        <div id="className"  className="hidden">
                            <ClassRoomsSelect/>
                        </div>

                        <DialogFooter>
                            <DialogClose asChild>
                                <Button type="submit">Save User</Button>
                            </DialogClose>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>)
}