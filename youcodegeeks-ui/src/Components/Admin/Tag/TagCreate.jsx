import {Button} from "@/Components/ui/button"
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog"
import {Input} from "@/Components/ui/input"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/Components/ui/form.jsx";
import {createTagSchema} from "@/Validations/Admin.js";
import {useDispatch} from "react-redux";
import {createTag} from "@/Features/Tags/TagsAction.js";

export const TagCreate = () => {

    const dispatch = useDispatch()

    const form = useForm({
        resolver: zodResolver(createTagSchema), defaultValues: {
            name: "blockchain",
        },
    })
    const onSubmit = async (values) => {
        dispatch(createTag(values))
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="bg-blue-600">Add Tag</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add New Tag</DialogTitle>
                    <DialogDescription>Fill out the details for the new tag.</DialogDescription>
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
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button type="submit">Save Tag</Button>
                            </DialogClose>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}