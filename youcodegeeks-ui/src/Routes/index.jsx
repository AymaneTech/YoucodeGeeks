import {createBrowserRouter} from "react-router-dom";
import {Login} from "../Pages/Authentication/Login.jsx";
import {Register} from "../Pages/Authentication/Register.jsx";
import {NotFound} from "../Pages/NotFound.jsx";
import {GuestLayout} from "@/Layout/GuestLayout.jsx";
import {DashboardLayout} from "@/Layout/DashboardLayout.jsx";
import {Categories} from "@/Pages/Dashboard/Categories.jsx";
import {Tags} from "@/Pages/Dashboard/Tags.jsx";
import {ClassRooms} from "@/Pages/Dashboard/ClassRooms.jsx";
import {Users} from "@/Pages/Dashboard/Users.jsx";
import {DashboardHome} from "@/Pages/Dashboard/DashboardHome.jsx";
import {StudentLayout} from "@/Layout/StudentLayout.jsx";
import {Home} from "@/Pages/Home/Home.jsx";

export const LOGIN_ROUTE = "/login"
export const routes = createBrowserRouter([
        {
            element: <DashboardLayout/>,
            children: [
                {
                    path: "/dashboard",
                    element: <DashboardHome/>
                },
                {
                    path: "/dashboard/categories",
                    element: <Categories/>
                },
                {
                    path: "/dashboard/tags",
                    element: <Tags/>
                },
                {
                    path: "/dashboard/classRooms",
                    element: <ClassRooms/>
                },
                {
                    path: "/dashboard/categories",
                    element: <Categories/>
                },
                {
                    path: "/dashboard/users",
                    element: <Users/>
                }
            ]
        },
        {
            element: <StudentLayout/>,
            children: [
                {
                    path: "/home",
                    element: <Home/>
                },
                {
                    path: "/",
                    element: <Home/>
                },
            ]
        },
        {
            element: <GuestLayout/>,
            children: [
                {
                    path: LOGIN_ROUTE,
                    element: <Login/>
                },
                {
                    path: "/register",
                    element: <Register/>
                },
                {
                    path: "/*",
                    element: <NotFound/>
                }
            ]
        }
    ]
);