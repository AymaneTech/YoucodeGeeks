import {BugIcon, HomeIcon, Network,} from "lucide-react";
import Logo from "@/Components/Partials/Elements/Logo.jsx";
import {CustomButtons} from "@/Components/Partials/Elements/CustomButtons.jsx";
import {Link, useNavigate} from "react-router-dom";
import {PiArticle} from "react-icons/pi";
import {BiUserCircle} from "react-icons/bi";
import {CiLogout} from "react-icons/ci";
import {logout} from "@/Features/Auth/AuthAction.js";
import {useDispatch} from "react-redux";

export const HomeSidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout())
            .then(() => {
                navigate("/login")
            })

    }
    return (<div id="application-sidebar"
                 className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0-translate-x-full transition-all duration-300 transform w-[260px] hidden fixed inset-y-0 start-0 z-[60]  bg-white border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 dark:bg-[#020817] dark:border-neutral-700">
        <div className="px-8 pt-4">
            <Link to="/"
                  className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80">
                <Logo/>
            </Link>
        </div>

        <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
            <ul className="flex flex-col gap-y-4">
                <CustomButtons options={{
                    name: "Home", to: "/home", icon: <HomeIcon size={22}/>
                }}/>
                <CustomButtons options={{
                    name: "Bugs", to: "/Bugs", icon: <BugIcon size={22}/>
                }}/>
                <CustomButtons options={{
                    name: "Blogs", to: "/blogs", icon: <PiArticle size={22}/>
                }}/>
                <CustomButtons options={{
                    name: "Network", to: "/network", icon: <Network size={22}/>
                }}/>
                <CustomButtons options={{
                    name: "Profile", to: "/profile", icon: <BiUserCircle size={22}/>
                }}/>
                <li>
                    <button
                        className="text-[16px] flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-transparent dark:hover:bg-muted/50 dark:text-white"
                        onClick={handleLogout}>
                        <CiLogout/>
                        Logout
                    </button>
                </li>
            </ul>
        </nav>
    </div>);
};