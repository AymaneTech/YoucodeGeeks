import {Outlet, useNavigate} from "react-router-dom";
import {DashboardNavbar} from "@/Components/Partials/DashboardNavbar.jsx";
import {HomeSidebar} from "@/Components/Partials/HomeSidebar.jsx";
import {useEffect} from "react";
import {getUserFromLocalStorage} from "@/Helpers/functions.js";
import Cookies from "js-cookie";

export const StudentLayout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const user = getUserFromLocalStorage();
        if (! Cookies.get("token")){
            navigate("/login");
        }

    }, []);
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