import {Statistics} from "@/components/Admin/Home/Statistics.jsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "@/Features/UsersSlice.js";
import DataTable from "@/components/DataTable/DataTable.jsx";
import {usersColumns} from "@/components/DataTable/Columns.jsx";
import {UsersList} from "@/components/Admin/Home/UsersList.jsx";
import {CommunityMembers} from "@/components/Admin/Home/CommunityMembers.jsx";
import {mergeUsers} from "@/Helpers/functions.js";

export const DashboardHome = () => {
    const dispatch = useDispatch();
    const {users} = useSelector((state) => state.users);
    useEffect(() => {
        dispatch(getUsers());
    }, []);
    return (
        <>
            <Statistics/>
            <div className="flex justify-between my-4 gap-8">
                <DataTable columns={usersColumns()} data={mergeUsers(users)}/>
                <div className="w-96">
                    <CommunityMembers/>
                </div>
            </div>
        </>
    )
}