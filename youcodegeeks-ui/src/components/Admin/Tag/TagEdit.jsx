import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.jsx";
import {Button} from "@/components/ui/button.jsx";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Label} from "@/components/ui/label.jsx";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {createCategorySchema} from "@/Validations/Admin.js";
import {updateCategory} from "@/Features/CategorySlice.js";
import {Pencil} from "lucide-react";

export const TagEdit = ({category}) => {
    const [imageValue, setImageValue] = useState();
    const dispatch = useDispatch()

    const form = useForm({
        resolver: zodResolver(createCategorySchema), defaultValues: {
            name: category.name, image: null,
        },
    })
    const handleImage = (e) => {
        setImageValue(e.target.files[0])
    }
    const onSubmit = async (values) => {
        const formData = new FormData();
        formData.append("image", imageValue);
        formData.append("name", values.name);
        dispatch(updateCategory({slug: category.slug, formData}))
    }
    useEffect(() => {
        console.log(category)
    }, []);
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="none" className="m-0 p-0"><Pencil/></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Update this Category Category</DialogTitle>
                    <DialogDescription>Update the category details.</DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({field}) => (<FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input {...field} />
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