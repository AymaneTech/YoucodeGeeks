import {z} from "zod"
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

const formSchema = z.object({
    email: z.string().email().min(2).max(30),
    password: z.string().min(6).max(30),
})
export const StudentLogin = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "aymane@gmail.com",
            password: "password",
        },
    })

    const onSubmit = async values => {
        const data = await axiosClient.post("login", values)
            .then((response) =>
                console.log(response)
            ).catch(error =>
                form.setError("email", {
                    message: error.response.data.message
                })
            )
    };

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                    <Button disabled={ form.formState.isSubmitting } type="submit">
                        {
                            form.formState.isSubmitting && <Loader className="m-2 animate-spin" />
                        }Login</Button>
                </form>
            </Form>
        </>
    )
}
