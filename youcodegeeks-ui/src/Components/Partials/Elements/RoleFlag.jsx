export const RoleFlag = ({ role }) => {
    return (
        <>
            {role == "student" && <p className="w-fit text-sm bg-yellow-600 py-1 px-3 rounded-3xl">{role}</p>}
            {role == "admin" && <p className="w-fit text-sm bg-red-600 py-1 px-3 rounded-3xl">{role}</p>}
            {role == "coach" && <p className="w-fit text-sm bg-green-600 py-1 px-3 rounded-3xl">{role}</p>}
        </>
    )
}

export const Status = ({ status }) => {
    return (
        <>
            {
                status ? (
                    <p className="w-fit text-sm bg-green-600 py-1 px-3 rounded-3xl" > Accepted</p>
                ) : (
                    <p className="w-fit text-sm bg-red-600 py-1 px-3 rounded-3xl" > Not Verified</p>
                )
            }
        </>

    )
}