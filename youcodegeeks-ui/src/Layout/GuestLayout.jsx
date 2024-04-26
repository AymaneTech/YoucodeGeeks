import {Outlet} from "react-router-dom";
import {Bell, Moon, Search} from "lucide-react";
import {Discord} from "@/assets/CustomSvg/Discord.jsx";
import Logo from "@/Components/Partials/Elements/Logo.jsx";

export const GuestLayout = () => {
    return (
        <div className="GuestLayout bg-[#16161a] overflow-y-hidden">
            <nav
                className="col-span-12 flex justify-between items-center px-12 py-3 sticky top-0 z-50 bg-[#16161a] text-white shadow-md transition duration-300 ease-in-out">
                <Logo/>
                <form>
                    <div className="hidden md:flex border border-gray-500 rounded-lg p-2 px-4  items-center gap-4">
                        <Search/>
                        <input type="text" placeholder="Type to search"
                               className="bg-transparent focus:outline-none focus:border-none w-full text-white"/>
                        <div className="shortuct flex gap-2">
                            <span className="bg-[#363939] px-2 py-1 text-xs rounded-sm ">Ctrl</span>
                            +
                            <span className="bg-[#363939] px-2 py-1 text-xs rounded-sm ">K</span>
                        </div>
                    </div>
                </form>

                <ul className="other-icons flex items-center gap-4">
                    <li className="transition duration-300 ease-in-out transform hover:scale-110">
                        <Bell/>
                    </li>
                    <li className="transition duration-300 ease-in-out transform hover:scale-110">
                        <Moon/>
                    </li>
                    <li className="transition duration-300 ease-in-out transform hover:scale-110">
                        <Discord/>
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