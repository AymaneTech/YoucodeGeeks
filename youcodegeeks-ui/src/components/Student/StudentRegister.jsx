import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {
    Form, FormControl, FormField, FormItem, FormLabel, FormMessage
} from "@/components/ui/form.jsx";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select"

import {Button} from "@/components/ui/button.jsx";
import {Input} from "@/components/ui/input.jsx";
import {axiosClient} from "@/Api/axios.js";
import {Loader} from "lucide-react";
import {useEffect, useRef, useState} from "react";
import {registerSchema} from "@/Validations/User.js";


export const StudentRegister = () => {
    const imageInputRef = useRef(null);

    const [classRooms, setClassRooms] = useState([]);
    const form = useForm({
        resolver: zodResolver(registerSchema), defaultValues: {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            className: 'Class A',
            password: 'password123',
            password_confirmation: 'password123',
        },
    });

    const onSubmit = async (values) => {
        const formData = new FormData();
        Object.keys(values).forEach((key) => {
            if (key === "image") {
                formData.append(key, imageInputRef.current.files[0]);
            } else {
                formData.append(key, values[key]);
            }
        });

        console.log(formData);
        await axiosClient
            .post("register", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) =>
                form.setError("email", {
                    message: error.response.data.message,
                })
            );
    };
    const getClassrooms = async () => {
        try {
            const response = await axiosClient.get('helpers/classrooms');
            setClassRooms(response.data.data);
        } catch (error) {
            console.log(error.response.data.message);
        }
    };

    useEffect(() => {
        getClassrooms();
    }, []);

    return (<div className="w-[700px] bg-gray-100 p-10 rounded-xl shadow-xl">
        <div className="my-12 text-[#0F172A]">
            <h1 className="font-bold text-3xl">Welcome to youcode community!</h1>
            <p>Create your account and wait for confirmation</p>
        </div>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" encType={"multipart/form-data"}>
                <FormField
                    control={form.control}
                    name="image"
                    render={({field}) => (<FormItem>
                        <FormLabel>User profile</FormLabel>
                        <FormControl>
                            <Input ref={imageInputRef}
                                   onChange={(e) => {
                                       field.onChange(e.target.files);
                                   }}
                                   type="file" {...field} />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>)}
                />
                <div className="flex justify-between">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({field}) => (<FormItem className="w-72">
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                                <Input placeholder="John" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>)}
                    />
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({field}) => (<FormItem className="w-72">
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Doe" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>)}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (<FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input placeholder="john.doe@example.com" {...field} />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>)}
                />
                {classRooms.length === 0 ? (<p>No classrooms available</p>) : (<Select>
                    <FormLabel className="block">Class Room</FormLabel>
                    <SelectTrigger className="" disabled={classRooms.length === 0}>
                        <SelectValue
                            placeholder={classRooms.length > 0 ? classRooms[0].name : 'Select a class'}/>
                    </SelectTrigger>
                    <SelectContent>
                        {classRooms.map((classRoom) => (<SelectItem key={classRoom.id} value={classRoom.id}>
                            {classRoom.name}
                        </SelectItem>))}
                    </SelectContent>
                </Select>)}
                <div className="flex justify-between">
                    <FormField
                        control={form.control}
                        name="password"
                        render={({field}) => (<FormItem className="w-72">
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="password123" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>)}
                    />
                    <FormField
                        control={form.control}
                        name="password_confirmation"
                        render={({field}) => (<FormItem className="w-72">
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="Confirm your password" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>)}
                    />
                </div>
                <Button className="w-[100%]" disabled={form.formState.isSubmitting} type="submit">
                    {form.formState.isSubmitting && <Loader className="m-2 animate-spin"/>}
                    Register
                </Button>
            </form>
        </Form>
    </div>)
};

