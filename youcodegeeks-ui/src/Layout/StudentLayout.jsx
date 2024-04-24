import {Outlet} from "react-router-dom";
import {DashboardNavbar} from "@/components/Partials/DashboardNavbar.jsx";
import {HomeSidebar} from "@/components/Partials/HomeSidebar.jsx";

export const StudentLayout = () => {
    return (
        <>
            <DashboardNavbar/>
            <HomeSidebar/>
            <main>
                <div className="overflow-x-hidden font-mono mx-4 lg:ml-72 mr-8 lg:mr-12">
                    <Outlet/>
                </div>
            </main>
        </>
)
}