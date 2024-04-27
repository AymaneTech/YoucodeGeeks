import {ShieldOff, UserRoundCheck} from "lucide-react";
import {useDispatch} from "react-redux";
import {verifyUser} from "@/Features/Users/UsersAction.js";

export const UserVerify = ({user}) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(verifyUser(user.id))
    }
    return (
        <>
            {user.isVerified ? (
                <div className="bg-green-600 rounded-3xl p-3 hover:bg-green-500">
                    <UserRoundCheck onClick={handleClick}/>
                </div>
            ) : (
                <div className="bg-red-600 rounded-3xl p-3 hover:bg-red-500">
                    <ShieldOff onClick={handleClick}/>
                </div>
            )}

        </>
    )
}