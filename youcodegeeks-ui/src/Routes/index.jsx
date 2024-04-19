import {createBrowserRouter} from "react-router-dom";
import {Login} from "../Pages/Login.jsx";
import {Register} from "../Pages/Register.jsx";
import {Home} from "../Pages/Home.jsx";
import {NotFound} from "../Pages/NotFound.jsx";
import {StudentLayout} from "@/Layout/StudentLayout.jsx";
import {GuestLayout} from "@/Layout/GuestLayout.jsx";

export const LOGIN_ROUTE = "/login"
export const STUDENT_HOME = "/home"
export const routes = createBrowserRouter([
        {
            element: <StudentLayout/>,
            children: [
                {
                    path: "/home",
                    element: <Home/>
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