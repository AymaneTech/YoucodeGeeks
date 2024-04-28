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
    const [className, setClassName] = useState(null)
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
            classRoomId: 1,
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
        formData.append("classRoomId", className)
        formData.append("password", values.password);
        formData.append("password_confirmation", values.password_confirmation);

        await dispatch(Register(formData))
            .then(() => {
                navigate("/waiting-page");
            })
    };

    useEffect(() => {
        dispatch(getClassrooms());
    }, []);

    return (
        <div
            className="flex justify-center items-center bg-cover bg-center w-[100vw] h-[100vh] bg-[url('/src/assets/images/hero.png')] font-mono">
            <div className="flex gap-12 dark:bg-gradient-to-r dark:from-gray-700 dark:to-black p-20 rounded-2xl">
                <div className="flex flex-col gap-6">
                    <div>
                        <h1 className="text-4xl text-white font-bold">Create you account </h1>
                        <p className="text-white"> Welcome to geeks world</p>
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
                                                <Input placeholder="John" {...field} style={{
                                                    backgroundColor: 'transparent',
                                                    border: "1px solid white"
                                                }}/>
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
                                                <Input placeholder="Doe" {...field} style={{
                                                    backgroundColor: 'transparent',
                                                    border: "1px solid white"
                                                }}/>
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
                                            <Input placeholder="john.doe@example.com" {...field}
                                                   style={{backgroundColor: 'transparent', border: "1px solid white"}}/>
                                        </FormControl>
                                        <FormMessage>
                                            {response && response.email && response.email}
                                        </FormMessage>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="classRoomId"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Class Room</FormLabel>
                                        <ClassRoomsSelect
                                            value={field.value}
                                            onChange={(e) => setClassName(e)}
                                        />
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <div className="flex justify-between">
                                <FormField
                                    control={control}
                                    name="password"
                                    render={({field}) => (
                                        <FormItem className="w-72">
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input type="password" placeholder="password123" {...field} style={{
                                                    backgroundColor: 'transparent',
                                                    border: "1px solid white"
                                                }}/>
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
                                                <Input type="password" placeholder="Confirm your password" {...field}
                                                       style={{
                                                           backgroundColor: 'transparent',
                                                           border: "1px solid white"
                                                       }}/>
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
            </div>
        </div>
    );

};
