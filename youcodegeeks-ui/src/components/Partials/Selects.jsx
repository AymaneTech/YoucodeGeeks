import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.jsx";
import {FormField, FormItem, FormLabel} from "@/components/ui/form.jsx";
import {useDispatch, useSelector} from "react-redux";
import {SelectLabel} from "@radix-ui/react-select";
import {useEffect} from "react";
import {getCampus} from "@/Features/CampusSlice.js";
import {Controller} from "react-hook-form";

export const Selects = () => {
    const {classRooms} = useSelector((state) => state.classRooms)
    return (
        <>  {classRooms.length === 0 ? (
            <p>No classrooms available</p>
        ) : (
            <Select name="">
                <FormLabel>Class Room</FormLabel>
                <SelectTrigger>
                    <SelectValue placeholder="Selects a class room"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Class Rooms</SelectLabel>
                        {classRooms.map((classRoom) => (
                            <SelectItem key={classRoom.id} value={classRoom.name}>
                                {classRoom.name}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        )}</>
    )
}

export const CampusSelect = ({form}) => {
    const {campus} = useSelector((state) => state.campus)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCampus())
    }, []);
    return (
        <>  {campus.length === 0 ? (
            <p>No classrooms available</p>
        ) : (
            <FormField
                control={form.control}
                name="campusId"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Campus</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a class room" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Campuses</SelectLabel>
                                    {campus.map((c) => (
                                        <SelectItem key={c.id} value={c.id}>
                                            {c.name}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </FormItem>
                )}
            />
        )}</>
    )
}

export const SchoolYearSelect = ({control}) => {

    return (
        <FormField
            control={control}
            name="schoolYear"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>School Year</FormLabel>
                    <Controller
                        control={control}
                        name="schoolYear"
                        render={({ field }) => (
                            <Select
                                onValueChange={field.onChange}
                                value={field.value}
                            >
                                <SelectTrigger className="">
                                    <SelectValue placeholder="Select a school year" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>School Year</SelectLabel>
                                        <SelectItem value={1}>First Year</SelectItem>
                                        <SelectItem value={2}>Second Year</SelectItem>
                                        <SelectItem value={3}>Old School</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        )}
                    />
                </FormItem>
            )}
        />
    )
}