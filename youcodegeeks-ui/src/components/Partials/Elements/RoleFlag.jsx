export const RoleFlag = ({role}) => {
    return (
        <>
            {role == "student" && <p className="text-sm bg-yellow-600 py-1 px-3 rounded-3xl">{role}</p>}
            {role == "admin" && <p className="text-sm bg-red-600 py-1 px-3 rounded-3xl">{role}</p>}
            {role == "coach" && <p className="text-sm bg-green-600 py-1 px-3 rounded-3xl">{role}</p>}
        </>
    )
}