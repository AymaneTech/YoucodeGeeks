import {DashboardNavbar} from "@/Components/Partials/DashboardNavbar.jsx";
import {DashboardSidebar} from "@/Components/Partials/DashboardSideBar.jsx";
import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {getUserFromLocalStorage} from "@/Helpers/functions.js";

export const DashboardLayout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const user = getUserFromLocalStorage();
        if (!user || user.role.name !== "admin") {
            navigate("/login");
        }
    }, []);
    return (
        <>
            <DashboardNavbar/>
            <DashboardSidebar/>

            <div className="w-full lg:ps-64">
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                    <div className="border p-4 rounded-xl  border-[#02087]">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    )
}