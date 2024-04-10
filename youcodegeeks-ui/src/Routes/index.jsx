import {createBrowserRouter} from "react-router-dom";
import {Login} from "../Pages/Login.jsx";
import {Register} from "../Pages/Register.jsx";
import {Home} from "../Pages/Home.jsx";

export const routes = createBrowserRouter([
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/",
        element: <Home/>
    },

]);