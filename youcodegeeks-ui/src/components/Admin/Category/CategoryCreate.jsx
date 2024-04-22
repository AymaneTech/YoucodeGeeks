import {Button} from "@/components/ui/button"
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.jsx";
import {createCategorySchema} from "@/Validations/Admin.js";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {createCategory} from "@/Features/CategorySlice.js";

export const CategoryCreate = () => {

    const [imageValue, setImageValue] = useState();
    const dispatch = useDispatch()

    const form = useForm({
        resolver: zodResolver(createCategorySchema), defaultValues: {
            name: "web development", image: null,
        },
    })
    const handleImage = (e) => {
        setImageValue(e.target.files[0])
    }
    const onSubmit = async (values) => {
        const formData = new FormData();
        formData.append("image", imageValue);
        formData.append("name", values.name);
        dispatch(createCategory(formData))
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="bg-blue-600">Add Category</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add New Category</DialogTitle>
                    <DialogDescription>Fill out the details for the new category.</DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({field}) => (<FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="name" {...field} />
                                </FormControl>
                                <FormMessage></FormMessage>
                            </FormItem>)}
                        />
                        <div className="flex flex-col items-start gap-3">
                            <Label className="text-right" htmlFor="image">
                                Image
                            </Label>
                            <input type="file" name="image" onChange={handleImage}/>
                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button type="submit">Save Category</Button>
                            </DialogClose>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}