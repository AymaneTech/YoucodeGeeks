import {RoleFlag} from "@/Components/Partials/Elements/RoleFlag.jsx";

export const UsersList = ({title, users}) => {

    return (
            <div className="flex flex-col gap-4 ">
                <h2 className="font-bold text-xl mt-3">{title}</h2>
                {users.map((user) => (
                    <div key={user.id} className="flex gap-4 items-center py-2 border-b-[1px] border-gray-500">
                        <img
                            className="inline-block size-[38px] rounded-full ring-2 ring-white dark:ring-neutral-800"
                            src={user.image.path}
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