import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/Components/ui/form.jsx";
import {Button} from "@/Components/ui/button.jsx";
import {Input} from "@/Components/ui/input.jsx";
import {Loader} from "lucide-react";
import {useEffect, useState} from "react";
import {registerSchema} from "@/Validations/User.js";
import {useDispatch, useSelector} from "react-redux";
import {Register} from "@/Features/Auth/AuthAction.js";
import {isAuthenticated} from "@/Helpers/functions.js";
import {useNavigate} from "react-router-dom";
import {getClassrooms} from "@/Features/ClassRooms/ClassRoomAction.js";
import {ClassRoomsSelect} from "@/Components/Partials/Elements/Selects.jsx";

export const StudentRegister = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const {response} = useSelector((state) => state.user);

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
            class_room_id: "Class A",
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
        formData.append("class_room_id", values.class_room_id);
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
                    <ClassRoomsSelect/>
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
