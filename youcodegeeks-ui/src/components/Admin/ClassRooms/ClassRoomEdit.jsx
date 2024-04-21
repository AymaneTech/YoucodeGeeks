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
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {createTagSchema} from "@/Validations/Admin.js";
import {Pencil} from "lucide-react";
import {updateTag} from "@/Features/TagsSlice.js";

export const ClassRoomEdit = ({tag}) => {
    const dispatch = useDispatch()

    const form = useForm({
        resolver: zodResolver(createTagSchema), defaultValues: {
            name: tag.name,
        },
    })
    const onSubmit = async (values) => {
        console.log(values)
        dispatch(updateTag({slug: tag.slug, data: values}))
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="none" className="m-0 p-0"><Pencil/></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Update this Tag</DialogTitle>
                    <DialogDescription>Update the tag details.</DialogDescription>
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