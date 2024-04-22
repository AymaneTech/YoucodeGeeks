import {DashboardNavbar} from "@/components/Partials/DashboardNavbar.jsx";
import {DashboardSidebar} from "@/components/Partials/DashboardSideBar.jsx";
import {Outlet} from "react-router-dom";

export const DashboardLayout = () => {
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