import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form.jsx";
import {Button} from "@/components/ui/button.jsx";
import {Input} from "@/components/ui/input.jsx";
import {axiosClient} from "@/Api/axios.js";
import {Loader} from "lucide-react";
import {setToken} from "@/Helpers/auth.js";
import {loginSchema} from "@/Validations/User.js";
import {useNavigate} from "react-router-dom";
import {STUDENT_HOME} from "@/Routes/index.jsx";

export const StudentLogin = () => {

    const navigate = useNavigate();
    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "aymane@gmail.com",
            password: "password",
        },
    })

    const onSubmit = async values => {
         await axiosClient.post("login", values)
            .then((response) => {
                setToken(response.data.access_token);
                navigate(STUDENT_HOME)
            })
            .catch(error =>
                form.setError("email", {
                    message: error.response.data.message
                })
            )
    };

    return (
        <div className="w-[500px] bg-gray-100 p-10 rounded-xl shadow-xl">
            <div className="my-12 text-[#0F172A]">
                <h1 className="font-bold text-3xl">Wlecome back Geek! </h1>
                <p>please to enter the required informations to login</p>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="email" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="password" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button className="w-[100%]" disabled={form.formState.isSubmitting} type="submit">
                        {
                            form.formState.isSubmitting && <Loader className="m-2 animate-spin"/>
                        }Login</Button>
                </form>
            </Form>
        </div>
    )
}
