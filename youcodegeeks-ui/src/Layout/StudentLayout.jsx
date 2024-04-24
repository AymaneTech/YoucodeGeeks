import {Outlet} from "react-router-dom";
import {DashboardNavbar} from "@/components/Partials/DashboardNavbar.jsx";
import {HomeSidebar} from "@/components/Partials/HomeSidebar.jsx";

export const StudentLayout = () => {
    return (
        <>
            <DashboardNavbar/>
            <HomeSidebar/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}