import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUserFromLocalStorage} from "@/Helpers/functions.js";
import {getAuthenticatedInfo} from "@/Features/Auth/AuthAction.js";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {updateProfile} from "@/Validations/User.js";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/Components/ui/form.jsx";
import {Input} from "@/Components/ui/input.jsx";
import {Textarea} from "@/Components/ui/textarea.jsx";

export const Profile = () => {
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.user);
    const {firstName, lastName, email, bio,} = user;
    const [image, setImage] = useState()

    const form = useForm({
        resolver: zodResolver(updateProfile), defaultValues: {
            firstName, lastName, email, bio,
        }
    });
    const {formState, control, handleSubmit} = form;
    const onSubmit = async (values) => {
        const formData = new FormData();
        for (let [key, value] of Object.entries(values)) {
            formData.append(key, value);
        }
        formData.append("image", image);
        console.log(formData)
    }
    useEffect(() => {
        const authenticatedUser = getUserFromLocalStorage();
        dispatch(getAuthenticatedInfo(authenticatedUser.id))
    }, []);
    return (<>
            <main className="flex justify-center w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
                <div className="p-2 md:p-4 w-full">
                    <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                        <h2 className="pl-6 text-2xl font-bold sm:text-xl dark:text-white">Public Profile</h2>

                        <div className="grid max-w-2xl mx-auto mt-8">
                            <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">

                                <img
                                    className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                                    src={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"}
                                    alt="Bordered avatar"/>

                                <div className="flex flex-col space-y-5 sm:ml-8">
                                    <input type="file" name="image" onChange={(e) => setImage(e.target.files[0])}/>
                                </div>
                            </div>

                            <Form {...form}>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="items-center mt-8 sm:mt-14 text-[#202142] dark:text-white">
                                        <div
                                            className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                            <FormField
                                                control={control}
                                                name="firstName"
                                                render={({field}) => (
                                                    <FormItem className="w-full">
                                                        <FormLabel>First Name</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="John" {...field} />
                                                        </FormControl>
                                                        <FormMessage>
                                                        </FormMessage>
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={control}
                                                name="lastName"
                                                render={({field}) => (
                                                    <FormItem className="w-full">
                                                        <FormLabel>Last Name</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Doe" {...field} />
                                                        </FormControl>
                                                        <FormMessage>
                                                        </FormMessage>
                                                    </FormItem>
                                                )}
                                            />

                                        </div>

                                        <div className="mb-2 sm:mb-6">
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
                                                        </FormMessage>
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        <FormField
                                            control={control}
                                            name="bio"
                                            render={({field}) => (
                                                <FormItem className="mb-6">
                                                    <FormLabel>Bio</FormLabel>
                                                    <FormControl>
                                                        <Textarea placeholder="Type bio about you" {...field} />
                                                    </FormControl>
                                                    <FormMessage>
                                                    </FormMessage>
                                                </FormItem>
                                            )}
                                        />

                                        <div className="flex justify-end">
                                            <button type="submit"
                                                    className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Save
                                            </button>
                                        </div>

                                    </div>
                                </form>
                            </Form>
                        </div>
                    </div>
                </div>
            </main>
        </>

    )
}
