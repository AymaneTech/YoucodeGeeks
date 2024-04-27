import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "@/Features/Users/UsersAction.js";
import DataTable from "@/Components/DataTable/DataTable.jsx";
import { usersColumns} from "@/Components/DataTable/Columns.jsx";
import {UserCreate} from "@/Components/Admin/Users/UserCreate.jsx";
import {mergeUsers} from "@/Helpers/functions.js";

export const Users = () => {

    const dispatch = useDispatch();
    const {users} = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(getUsers());
    }, []);


    return (
        <>
            <div className="flex justify-between my-4">
                <h2 className="text-3xl font-semibold">Manage Users</h2>
                <UserCreate/>
            </div>
            <div>
                <DataTable data={mergeUsers(users)} columns={usersColumns()}/>
            </div>
        </>
    )
}