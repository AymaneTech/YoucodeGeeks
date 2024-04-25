import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getCategories} from "@/Features/CategorySlice.js";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {questionCreateForm} from "@/Validations/Question.js";
import {Requirements} from "@/components/Partials/Requirements.jsx";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Textarea} from "@/components/ui/textarea.jsx";
import TagInput from "@/components/Student/TagInput.jsx";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.jsx";
import {SelectLabel} from "@radix-ui/react-select";
import {Button} from "@/components/ui/button.jsx";
import {createQuestion} from "@/Features/QuestionSlice.js";
import {useNavigate} from "react-router-dom";

export const AskQuestion = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {categories} = useSelector((state) => state.categories);
    const {tagsInput} = useSelector((state) => state.tagsInput);
    const [image, setImage] = useState([])

    const form = useForm({
        resolver: zodResolver(questionCreateForm), defaultValues: {
            title: "lorem Ipsum ",
            details: "Lorem Ipsum ",
            body: "Lorem Ipsum ",
            categoryId: null,
            images: null,
        }
    })
    const {control, handleSubmit, formState} = form;

    const onSubmit = (values) => {
        const formData = new FormData();

        for (let i = 0; i < tagsInput.length; i++) {
            formData.append('tags[]', tagsInput[i].text);
        }
        for (let i = 0; i < image.length; i++) {
            for (let i = 0; i < image.length; i++) {
                formData.append('images[]', image[i]);
            }
        }
        for (const [key, value] of Object.entries(values)) {
            if (key !== "image") {
                formData.append(key, value)
            }
        }
        dispatch(createQuestion(formData))
            .then(() => navigate("/home"));
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
                            <input type="file" name="images[]" onChange={(e) => setImage(e.target.files)} multiple/>
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
                            <FormField
                                control={control}
                                name="details"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Your Details</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Type your details here." {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="body"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Your Details</FormLabel>
                                        <FormControl>
                                            <Textarea className="min-h-52"
                                                      placeholder="Type your details here." {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <TagInput/>
                            <FormField
                                control={form.control}
                                name="categoryId"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Category</FormLabel>
                                        <Select
                                            onValueChange={(value) => {
                                                form.setValue("categoryId", value);
                                            }}
                                            value={form.getValues("categoryId")}
                                        >
                                            <SelectTrigger className="">
                                                <SelectValue placeholder="select category"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>
                                                        Categories List
                                                    </SelectLabel>
                                                    {categories.map((category) => (
                                                        <SelectItem value={parseInt(category.id)} key={category.id}>
                                                            {category.name}
                                                        </SelectItem>

                                                    ))}


                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">
                                Submit Question
                            </Button>
                        </form>
                    </Form>
                </div>
            </section>
        </>
    )
}