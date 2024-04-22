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
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getCampus} from "@/Features/CampusSlice.js";
import {classRoomSchema} from "@/Validations/Admin.js";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select.jsx";
import * as classRooms from "zod";
import {ClassroomsSelect} from "@/components/Partials/ClassroomsSelect.jsx";

export const ClassRoomCreate = () => {

    const dispatch = useDispatch()

    const form = useForm({
        resolver: zodResolver(classRoomSchema), defaultValues: {
            name: "blockchain",
            schoolYear: "",
            campusId: null
        },
    })
    // TODO: complete this boring shit
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="name" {...field} />
                                </FormControl>
                                <FormMessage></FormMessage>
                            </FormItem>)}
                        />
                        <ClassroomsSelect/>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a School Year" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>School Year</SelectLabel>
                                    <SelectItem value="first_year">First Year</SelectItem>
                                    <SelectItem value="second_year">Second Year</SelectItem>
                                    <SelectItem value="old_school">Old School</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button type="submit">Save Class ROom</Button>
                            </DialogClose>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}