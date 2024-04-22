import {
    Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger
} from "@/components/ui/dialog.jsx";
import {Button} from "@/components/ui/button.jsx";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.jsx";
import {Input} from "@/components/ui/input.jsx";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {classRoomSchema} from "@/Validations/Admin.js";
import {Pencil} from "lucide-react";
import {CampusSelect, SchoolYearSelect} from "@/components/Partials/Selects.jsx";
import {updateClassRoom} from "@/Features/ClassRoomSlice.js";

export const ClassRoomEdit = ({classRoom}) => {
    const dispatch = useDispatch()

    const form = useForm({
        resolver: zodResolver(classRoomSchema), defaultValues: {
            name: "code x java", schoolYear: 1, campusId: 1
        }
    })
    const onSubmit = async (values) => {
        dispatch(updateClassRoom({slug: classRoom.slug, data: values}))
    }

    return (<Dialog>
        <DialogTrigger asChild>
            <Button variant="none" className="m-0 p-0"><Pencil/></Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Update this Class Room</DialogTitle>
                <DialogDescription>Update the classRoom details.</DialogDescription>
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

                    <CampusSelect form={form}/>
                    <SchoolYearSelect control={form.control}/>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="submit">Save Class Room</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </Form>
        </DialogContent>
    </Dialog>)
}