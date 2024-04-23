import {RoleFlag} from "@/components/Partials/RoleFlag.jsx";

export const UsersList = ({title, users}) => {

    return (
            <div className="flex flex-col gap-4 ">
                <h2 className="font-bold text-xl mt-3">{title}</h2>
                {users.map((user) => (
                    <div key={user.id} className="flex gap-4 items-center py-2 border-b-[1px] border-gray-500">
                        <img
                            className="inline-block size-[38px] rounded-full ring-2 ring-white dark:ring-neutral-800"
                            src={user.image || "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"}
                            alt="Image"/>
                        <div className="flex justify-between items-center w-full">
                            <p className="text-sm">{user.firstName + " " + user.lastName} </p>
                            <RoleFlag role={user.role.name}/>
                        </div>
                    </div>
                ))}
            </div>
    )
}