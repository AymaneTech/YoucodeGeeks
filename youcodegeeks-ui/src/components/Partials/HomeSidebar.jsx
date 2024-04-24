import {BugIcon, HomeIcon, Network, School2, TagIcon, UsersIcon} from "lucide-react";
import {BiCategory} from "react-icons/bi";
import Logo from "@/components/Partials/Elements/Logo.jsx";
import {CLink} from "@/components/Partials/Elements/CLink.jsx";
import {Link} from "react-router-dom";
import {PiArticle} from "react-icons/pi";

export const HomeSidebar = () => {
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
                <CLink options={{
                    name: "Home", to: "/home", icon: <HomeIcon size={22}/>
                }}/>
                <CLink options={{
                    name: "Bugs", to: "/Bugs", icon: <BugIcon size={22}/>
                }}/>
                <CLink options={{
                    name: "Posts", to: "/Posts", icon: <PiArticle size={22}/>
                }}/>
                <CLink options={{
                    name: "Network", to: "/network", icon: <Network size={22}/>
                }}/>
                <CLink options={{
                    name: "Class Rooms", to: "/classRooms", icon: <School2 size={22}/>
                }}/>
            </ul>
        </nav>
    </div>);
};