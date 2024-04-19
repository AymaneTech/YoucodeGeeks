import {createBrowserRouter} from "react-router-dom";
import Login from "../pages/auth/Login.jsx";
import Register from "../pages/auth/Register.jsx";
import {Home} from "../pages/Home.jsx";

export const router = createBrowserRouter([
    {
        path: "login",
        element: <Login/>
    },
    {
        path: "register",
        element: <Register/>
    },
    {
        path: "/",
        element: <Home/>
    },
])