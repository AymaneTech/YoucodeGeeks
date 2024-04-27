import DataTable from "@/Components/DataTable/DataTable.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getClassrooms} from "@/Features/ClassRooms/ClassRoomAction.js";
import {classRoomssColumns} from "@/Components/DataTable/Columns.jsx";
import {ClassRoomCreate} from "@/Components/Admin/ClassRooms/ClassRoomCreate.jsx";

export const ClassRooms = () => {
    const {classRooms} = useSelector((state) => state.classRooms);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getClassrooms());
    }, []);
    return (
        <>
            <div className="flex justify-between my-4">
                <h2 className="text-3xl font-semibold">Manage Class Rooms</h2>
                <ClassRoomCreate/>
            </div>
            <div>
                <DataTable data={classRooms} columns={classRoomssColumns()}/>
            </div>
        </>
    )
}