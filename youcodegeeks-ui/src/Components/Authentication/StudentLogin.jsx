import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/Components/ui/form.jsx";
import {Button} from "@/Components/ui/button.jsx";
import {Input} from "@/Components/ui/input.jsx";
import {Loader} from "lucide-react";
import {loginSchema} from "@/Validations/User.js";
import {useDispatch, useSelector} from "react-redux";
import {Login} from "@/Features/Auth/AuthAction.js";
import {useNavigate} from "react-router-dom";
import {isAuthenticated,} from "@/Helpers/functions.js";

export const StudentLogin = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {response, user} = useSelector((state) => state.user);
    const form = useForm({
        resolver: zodResolver(loginSchema), defaultValues: {
            email: "user@gmail.com", password: "password",
        },
    })

    const onSubmit = async (values) => {
        await dispatch(Login(values))
            .then(action => {
                let role = action.payload.user.role.name;
                if (role === "admin" && isAuthenticated()){
                    navigate("/dashboard")
                }else if (role === "student" && isAuthenticated()){
                    navigate("/home")
                }
            })
    };

    return (
        <div
            className="flex justify-center items-center bg-cover bg-center w-[100vw] h-[100vh] bg-[url('/src/assets/images/hero.png')] font-mono">
            <div className="flex gap-12 dark:bg-gradient-to-r dark:from-gray-700 dark:to-black p-20 rounded-2xl">
                <div className="flex flex-col gap-6">
                    <div className="">
                        <h1 className="text-4xl text-white font-bold">Login to you account! </h1>
                        <p className="text-white"> Welcome to geeks world</p>
                    </div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({field}) => (<FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input className="border border-white bg-transparent px-3 py-2"
                                               placeholder="email" {...field} />
                                    </FormControl>
                                    <FormMessage>
                                        {response && response}
                                    </FormMessage>
                                </FormItem>)}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({field, formState}) => (<FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input className="border border-white bg-transparent px-3 py-2" type="password"
                                               placeholder="password" {...field} />
                                    </FormControl>
                                    <FormMessage>
                                        {formState.errors.password?.message}
                                    </FormMessage>
                                </FormItem>)}
                            />
                            <Button className="w-[100%]" disabled={form.formState.isSubmitting} type="submit">
                                {form.formState.isSubmitting && <Loader className="m-2 animate-spin"/>}
                                Login
                            </Button>
                        </form>
                    </Form>

                </div>
                <div className="">
                    <img src="/src/assets/images/regsiter.png" alt=""/>
                </div>
            </div>
        </div>)
}
