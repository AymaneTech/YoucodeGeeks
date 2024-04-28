import {Outlet} from "react-router-dom";
import Logo from "@/Components/Partials/Elements/Logo.jsx";
import {Blink} from "@/Components/Partials/Elements/CustomButtons.jsx";

export const GuestLayout = () => {
    return (
        <div className="GuestLayout bg-[#020817] overflow-y-hidden">
            <nav
                className="col-span-12 flex justify-between items-center px-12 py-3 sticky top-0 z-50 dark:bg-gradient-to-r dark:from-gray-700 dark:to-black text-white shadow-md transition duration-300 ease-in-out">
                <Logo/>
                <ul className="other-icons flex items-center gap-4">
                    <li className="transition duration-300 ease-in-out transform hover:scale-110">
                        <Blink to="/register">Register</Blink>
                    </li>
                    <li className="transition duration-300 ease-in-out transform hover:scale-110">
                        <Blink to="/login">Login</Blink>
                    </li>
                </ul>
            </nav>
            <main>
                <Outlet/>
            </main>
            <footer>footer</footer>
        </div>
    )
}