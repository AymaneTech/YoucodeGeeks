import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getCategories} from "@/Features/CategorySlice.js";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {questionCreateForm} from "@/Validations/Question.js";
import {Requirements} from "@/components/Partials/Requirements.jsx";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Label} from "@/components/ui/label.jsx";
import {Textarea} from "@/components/ui/textarea.jsx";
import TagInput from "@/components/Student/TagInput.jsx";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.jsx";
import {SelectLabel} from "@radix-ui/react-select";

export const AskQuestion = () => {
    const dispatch = useDispatch();
    const {categories} = useSelector((state) => state.categories);
    const [image, setImage] = useState(null)

    const form = useForm({
        resolver: zodResolver(questionCreateForm), defaultValues: {
            title: "lorem Ipsum ",
            details: "Lorem Ipsum ",
            body: "Lorem Ipsum ",
            tags: [],
            categoryId: 1,
            image: null,
        }
    })
    const {control, handleSubmit, formState} = form;

    const onSubmit = () => {
        const formData = new FormData();
        console.log("here submit")

    }

    useEffect(() => {
        dispatch(getCategories());
    }, []);
    return (
        <>
            <Requirements/>
            <section className="quetion-form my-8">
                <h2 className="font-semibold text-3xl my-4">Question form</h2>
                <div className="border border-gray-200 dark:border-gray-500 p-6 rounded-xl">
                    <Form {...form}>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <input type="file" name="image" onChange={(e) => setImage(e.target.files[0])}/>
                            <FormField
                                control={control}
                                name="title"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="docker" {...field} />
                                        </FormControl>
                                        <FormMessage>
                                        </FormMessage>
                                    </FormItem>
                                )}
                            />
                            <div className="grid w-full gap-1.5">
                                <Label htmlFor="message-2">Your Details</Label>
                                <Textarea placeholder="Type your details here." id="message-2"/>
                                <p className="text-sm text-muted-foreground">
                                    Your details will be copied to the team.
                                </p>
                            </div>
                            <div className="grid w-full gap-1.5">
                                <Label htmlFor="message-2">Question Body</Label>
                                <Textarea className="min-h-72" placeholder="Type your details here." id="message-2"/>
                                <p className="text-sm text-muted-foreground">
                                    Your body will be copied to the team.
                                </p>
                            </div>
                            <TagInput/>
                            <FormField
                                control={form.control}
                                name="role"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>User Role</FormLabel>
                                        <Select
                                            onValueChange={(value) => {
                                                form.setValue("categoryId", value);
                                            }}
                                            value={form.getValues("categoryId")}
                                        >
                                            <SelectTrigger className="">
                                                <SelectValue placeholder="Select a user role"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>
                                                        User Roles
                                                    </SelectLabel>
                                                    <SelectItem value={1}>
                                                        Student
                                                    </SelectItem>
                                                    <SelectItem value={2}>
                                                        Admin
                                                    </SelectItem>
                                                    <SelectItem value={3}>
                                                        Coach
                                                    </SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </form>
                    </Form>
                </div>
            </section>
        </>
    )
}