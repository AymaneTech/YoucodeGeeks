import { Button } from "@/components/ui/button"
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form.jsx";
import { classRoomSchema } from "@/Validations/Admin.js";

import {CampusSelect, SchoolYearSelect} from "@/components/Partials/Selects.jsx";
import {useDispatch} from "react-redux";
import {createClassRooms} from "@/Features/ClassRoomSlice.js";

export const ClassRoomCreate = () => {
    const dispatch = useDispatch();
    const form = useForm({
        resolver: zodResolver(classRoomSchema),
        defaultValues: {
            name: "code x java",
            schoolYear: 1,
            campusId: 1
        },
    });

    const onSubmit = async (values) => {
        dispatch(createClassRooms(values))
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="bg-blue-600">Add Class</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add New Class Room</DialogTitle>
                    <DialogDescription>Fill out the details for the new class room.</DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="name" {...field} />
                                    </FormControl>
                                    <FormMessage></FormMessage>
                                </FormItem>
                            )}
                        />

                        <CampusSelect form={form}/>
                        <SchoolYearSelect control={form.control}/>
                        <DialogFooter>
                            <DialogClose asChild>
                            <Button type="submit">Save</Button>
                            </DialogClose>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}