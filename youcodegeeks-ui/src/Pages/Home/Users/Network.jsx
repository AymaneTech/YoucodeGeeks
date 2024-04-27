import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "@/Features/Users/UsersAction.js";
import {mergeUsers} from "@/Helpers/functions.js";
import {UserCard} from "@/Pages/Home/Users/UserCard.jsx";

export const Network = () => {
    const dispatch = useDispatch();
    const {users} = useSelector((state) => state.users);
    const allUsers = mergeUsers(users)

    useEffect(() => {
        dispatch(getUsers())
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-12 px-5 py-5">
            {allUsers.map(user => {
                return (
                    <UserCard key={user.id} user={user}/>
                )
            })}
        </div>
    )};

