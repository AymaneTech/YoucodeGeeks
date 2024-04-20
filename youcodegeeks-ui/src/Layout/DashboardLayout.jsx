import {Outlet} from "react-router-dom";
import {DashboardSideBar} from "@/components/Partials/DashboardSideBar.jsx";

export const DashboardLayout = () => {
    return (
        <>
            <DashboardSideBar/>
            <main>
                <Outlet/>
            </main>
            <footer>footer</footer>
        </>
    )
}