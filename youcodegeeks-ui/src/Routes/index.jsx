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
import {AskQuestion} from "@/Pages/Home/questions/AskQuestion.jsx";
import {ShowQuestion} from "@/Pages/Home/questions/ShowQuestion.jsx";
import {ShowPost} from "@/Pages/Home/posts/ShowPost.jsx";
import {Posts} from "@/Pages/Home/posts/Posts.jsx";
import {WritePost} from "@/Pages/Home/posts/WritePost.jsx";
import {Bugs} from "@/Pages/Home/questions/Bugs.jsx";
import {Network} from "@/Pages/Home/Users/Network.jsx";
import {Profile} from "@/Components/Student/Users/Profile.jsx";

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
                {
                  path: "/blogs",
                  element: <Posts/>
                },
                {
                    path: "/blogs/write",
                    element: <WritePost/>
                },
                {
                    path: "/bugs",
                    element: <Bugs/>
                },
                {
                    path: "/questions/ask",
                    element: <AskQuestion/>
                },
                {
                    path: "/questions/:slug",
                    element: <ShowQuestion/>
                },
                {
                    path: "/blogs/:slug",
                    element: <ShowPost/>
                },
                {
                    path: "/network",
                    element: <Network/>
                },
                {
                    path: "/profile",
                    element: <Profile/>
                },
                {
                    path: "/profile/:slug",
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
                    path: "/waiting-page",
                    element: <p className="text-center mx-32 my-64 text-2xl">please wait until the admin accept your request </p>
                },
                {
                    path: "/*",
                    element: <NotFound/>
                },
            ]
        }
    ]
);