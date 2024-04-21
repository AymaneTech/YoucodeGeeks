
import {createBrowserRouter} from "react-router-dom";
import {Login} from "../Pages/Authentication/Login.jsx";
import {Register} from "../Pages/Authentication/Register.jsx";
import {Home} from "../Pages/Home.jsx";
import {NotFound} from "../Pages/NotFound.jsx";
import {GuestLayout} from "@/Layout/GuestLayout.jsx";
import {DashboardLayout} from "@/Layout/DashboardLayout.jsx";
import {Categories} from "@/Pages/Admin/Categories.jsx";
import {Tags} from "@/Pages/Admin/Tags.jsx";
import {ClassRooms} from "@/Pages/Admin/ClassRooms.jsx";

export const LOGIN_ROUTE = "/login"
export const STUDENT_HOME = "/home"
export const routes = createBrowserRouter([
        {
            element: <DashboardLayout/>,
            children: [
                {
                    path: "/dashboard",
                    element: <Home/>
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
                }
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