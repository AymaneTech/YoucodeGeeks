import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.jsx";
import {FormLabel} from "@/components/ui/form.jsx";
import {useSelector} from "react-redux";
import {SelectLabel} from "@radix-ui/react-select";

export const ClassroomsSelect = () => {
    const {classRooms} = useSelector((state) => state.classRooms)
    return (
        <>  {classRooms.length === 0 ? (
            <p>No classrooms available</p>
        ) : (
            <Select>
                <FormLabel>Class Room</FormLabel>
                <SelectTrigger>
                    <SelectValue placeholder="Select a class room"/>
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