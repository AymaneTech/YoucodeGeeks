import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsers} from "@/Features/UsersSlice.js";
import {UsersList} from "@/components/Admin/Home/UsersList.jsx";

export const CommunityMembers = () => {
    const dispatch = useDispatch();
    const {users} = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(getUsers())
    }, []);
    return (
        <>
            <div className="bg-[#1A1F3A] rounded-xl p-8">
                <div className="my-4  border-b-[1px] border-gray-500 pb-3">
                    <h1 className="text-2xl font-bold text-center">Community members</h1>
                </div>
                {users.students && users.students.length > 0 ? (
                    <UsersList title="Students" users={users.students} />
                ) : (
                    <p>Loading...</p>
                )}

                {users.coaches && users.coaches.length > 0 ? (
                    <UsersList title="Coaches" users={users.coaches} />
                ) : null}

                {users.admins && users.admins.length > 0 ? (
                    <UsersList title="Admins" users={users.admins} />
                ) : null}
            </div>
        </>
    )
}