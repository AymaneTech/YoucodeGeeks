import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form.jsx";
import {Button} from "@/components/ui/button.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Loader} from "lucide-react";
import {useEffect, useState} from "react";
import {registerSchema} from "@/Validations/User.js";
import {useDispatch, useSelector} from "react-redux";
import {Register} from "@/Features/UserSlice.js";
import {isAuthenticated} from "@/Helpers/auth.js";
import {useNavigate} from "react-router-dom";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.jsx";
import {getClassrooms} from "@/Features/ClassRoomSlice.js";

export const StudentRegister = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const {response} = useSelector((state) => state.user);
    const {classRooms} = useSelector((state) => state.classRooms);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    const form = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@example.com",
            className: "Class A",
            password: "password123",
            password_confirmation: "password123",
            image: null,
        },
    });

    const {control, handleSubmit, formState} = form;

    const onSubmit = async (values) => {
        const formData = new FormData();

        formData.append("image", selectedImage);
        formData.append("firstName", values.firstName);
        formData.append("lastName", values.lastName);
        formData.append("email", values.email);
        formData.append("className", values.className);
        formData.append("password", values.password);
        formData.append("password_confirmation", values.password_confirmation);

        await dispatch(Register(formData));
        if (isAuthenticated()) {
            navigate("/home");
        }
    };

    useEffect(() => {
        dispatch(getClassrooms());
    }, []);

    return (
        <div className="w-[700px] bg-gray-100 p-10 rounded-xl shadow-xl">
            <div className="my-12 text-[#0F172A]">
                <h1 className="font-bold text-3xl">Welcome to youcode community!</h1>
                <p>Create your account and wait for confirmation</p>
            </div>
            <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" encType="multipart/form-data">
                    <input type="file" name="image" onChange={onImageChange}/>

                    <div className="flex justify-between">
                        <FormField
                            control={control}
                            name="firstName"
                            render={({field}) => (
                                <FormItem className="w-72">
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John" {...field} />
                                    </FormControl>
                                    <FormMessage>
                                        {response && response.firstName && response.firstName}
                                    </FormMessage>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="lastName"
                            render={({field}) => (
                                <FormItem className="w-72">
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Doe" {...field} />
                                    </FormControl>
                                    <FormMessage>
                                        {response && response.lastName && response.lastName}
                                    </FormMessage>
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="john.doe@example.com" {...field} />
                                </FormControl>
                                <FormMessage>
                                    {response && response.email && response.email}
                                </FormMessage>
                            </FormItem>
                        )}
                    />

                    {classRooms.length === 0 ? (
                        <p>No classrooms available</p>
                    ) : (
                        <Select>
                            <FormLabel className="block">Class Room</FormLabel>
                            <SelectTrigger className="" disabled={classRooms.length === 0}>
                                <SelectValue
                                    placeholder={classRooms.length > 0 ? classRooms[0].name : "Select a class"}/>
                            </SelectTrigger>
                            <SelectContent>
                                {classRooms.map((classRoom) => (
                                    <SelectItem key={classRoom.id} value={classRoom.id}>
                                        {classRoom.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    )}

                    <div className="flex justify-between">
                        <FormField
                            control={control}
                            name="password"
                            render={({field}) => (
                                <FormItem className="w-72">
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="password123" {...field} />
                                    </FormControl>
                                    <FormMessage>
                                        {response && response.password && response.password}
                                    </FormMessage>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="password_confirmation"
                            render={({field}) => (
                                <FormItem className="w-72">
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="Confirm your password" {...field} />
                                    </FormControl>
                                    <FormMessage>
                                        {response && response.password_confirmation && response.password_confirmation}
                                    </FormMessage>
                                </FormItem>
                            )}
                        />
                    </div>

                    <Button className="w-[100%]" disabled={formState.isSubmitting} type="submit">
                        {formState.isSubmitting && <Loader className="m-2 animate-spin"/>}
                        Register
                    </Button>
                </form>
            </Form>
        </div>
    );
};
