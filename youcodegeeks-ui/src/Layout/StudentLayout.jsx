import {Outlet} from "react-router-dom";
import {DashboardNavbar} from "@/Components/Partials/DashboardNavbar.jsx";
import {HomeSidebar} from "@/Components/Partials/HomeSidebar.jsx";

export const StudentLayout = () => {
    return (
        <>
            <DashboardNavbar/>
            <HomeSidebar/>
            <main>
                <div className="overflow-x-hidden font-mono mx-4 lg:ml-72 mr-8 lg:mx-12">
                    <Outlet/>
                </div>
            </main>
        </>
)
}