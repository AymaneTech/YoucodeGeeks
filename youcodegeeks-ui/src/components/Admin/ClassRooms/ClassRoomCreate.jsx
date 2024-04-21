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
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.jsx";
import {createTagSchema} from "@/Validations/Admin.js";
import {useDispatch} from "react-redux";
import {createTag} from "@/Features/TagsSlice.js";
import {useEffect} from "react";

export const ClassRoomCreate = () => {

    const dispatch = useDispatch()

    const form = useForm({
        resolver: zodResolver(createTagSchema), defaultValues: {
            name: "blockchain",
            schoolYear: "",
            campusId: null
        },
    })
    const onSubmit = async (values) => {
        dispatch(createTag(values))
    }
    useEffect(() => {
        dispatch(getCampus())
    }, []);
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