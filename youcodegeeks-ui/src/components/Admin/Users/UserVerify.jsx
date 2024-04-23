import {ShieldOff, UserRoundCheck} from "lucide-react";
import {useDispatch} from "react-redux";
import {verifyUser} from "@/Features/UsersSlice.js";

export const UserVerify = ({user}) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(verifyUser(user.id))
    }
    return (
        <>
            {user.isVerified ? (
                <div className="bg-green-600 rounded-3xl p-3">
                    <UserRoundCheck onClick={handleClick}/>
                </div>
            ) : (
                <div className="bg-red-600 rounded-3xl p-3 ">
                    <ShieldOff onClick={handleClick}/>
                </div>
            )}

        </>
    )
}