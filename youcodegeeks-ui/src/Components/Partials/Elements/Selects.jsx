import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/Components/ui/select.jsx";
import {FormField, FormItem, FormLabel} from "@/Components/ui/form.jsx";
import {useDispatch, useSelector} from "react-redux";
import {SelectLabel} from "@radix-ui/react-select";
import {useEffect} from "react";
import {getCampus} from "@/Features/Campus/CampusAction.js";
import {Controller} from "react-hook-form";
import {getClassrooms} from "@/Features/ClassRooms/ClassRoomAction.js";

export const ClassRoomsSelect = ({ value, onChange }) => {
    const dispatch = useDispatch();
    const { classRooms } = useSelector((state) => state.classRooms);

    useEffect(() => {
        dispatch(getClassrooms());
    }, []);

    return (
        <Select value={value} onValueChange={onChange} name="class_room_id" style={{border: '1px solid white', borderRadius: '0.25rem', padding: '0.5rem', backgroundColor: 'transparent'}}>
            <SelectTrigger className="bg-transparent border border-white">
                <SelectValue className="bg-transparent border border-white" placeholder="Select a class room" style={{color: 'white'}} />
            </SelectTrigger>
            <SelectContent >
                <SelectGroup>
                    <SelectLabel style={{color: 'white'}}>Class Rooms</SelectLabel>
                    {classRooms.map((classRoom) => (
                        <SelectItem key={classRoom.id} value={classRoom.id} style={{color: 'white'}}>
                            {classRoom.name}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>

    );
};

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
const USER_ROLES = {
    STUDENT: 1,
    ADMIN: 2,
    COACH: 3,
};

export const UserRoleSelect = ({ control }) => {
    return (
        <FormField
            control={control}
            name="userRole"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>User Role</FormLabel>
                    <Controller
                        control={control}
                        name="userRole"
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} value={field.value}>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="Select a user role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>User Roles</SelectLabel>
                                        <SelectItem value={USER_ROLES.STUDENT}>Student</SelectItem>
                                        <SelectItem value={USER_ROLES.ADMIN}>Admin</SelectItem>
                                        <SelectItem value={USER_ROLES.COACH}>Coach</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        )}
                    />
                </FormItem>
            )}
        />
    );
};