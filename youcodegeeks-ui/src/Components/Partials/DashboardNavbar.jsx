import { ModeToggle } from "@/Components/Theme/ModeToggle.jsx";
import { useDispatch, useSelector } from "react-redux";
import Logo from "@/Components/Partials/Elements/Logo.jsx";
import { SearchBar } from "@/Components/Partials/Elements/SearchBar.jsx";
import {useEffect, useState} from "react";
import { getUserFromLocalStorage } from "@/Helpers/functions";
import { getAuthenticatedInfo } from "@/Features/Auth/AuthAction.js";
import {
    DropdownMenu, DropdownMenuContent,
    DropdownMenuRadioGroup, DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/Components/ui/dropdown-menu.jsx";
import {Button} from "@/Components/ui/button.jsx";
import {DropdownMenuLabel} from "@radix-ui/react-dropdown-menu";

export const DashboardNavbar = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    const [position, setPosition] = useState("bottom")

    useEffect(() => {
        const connectedUser = getUserFromLocalStorage();
        dispatch(getAuthenticatedInfo(connectedUser.id))
    }, [])


    return (
        <>
            <header
                className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:ps-64 dark:bg-[#020817] dark:border-[#02087]">
                <nav className="flex basis-full items-center w-full mx-auto px-4 sm:px-6" aria-label="Global">
                    <div className="me-5 lg:me-0 lg:hidden">
                        <Logo />
                    </div>

                    <div
                        className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
                        <div className="sm:hidden">
                            <button type="button"
                                className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700">
                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.3-4.3" />
                                </svg>
                            </button>
                        </div>

                        <SearchBar />

                        <div className="flex flex-row items-center justify-end gap-2">
                            <button type="button"
                                className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700">
                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                                </svg>
                            </button>

                            <button id="hs-dropdown-with-header" type="button"
                                className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700">
                                <img
                                    className="inline-block size-[38px] rounded-full ring-2 ring-white dark:ring-neutral-800"
                                    src={user.image?.path}
                                    alt="avatar" />
                            </button>
                            <ModeToggle />
                        </div>
                    </div>
                </nav>
            </header>
            {/* Mobile version */}
            <div
                className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-[#020817] dark:border-neutral-700">
                <div className="flex justify-between items-center py-2">
                    <ol className="ms-3 flex items-center whitespace-nowrap">
                        <li className="flex items-center text-sm text-gray-800 dark:text-neutral-400">
                        </li>
                        <li className="text-sm font-semibold text-gray-800 truncate dark:text-neutral-400"
                            aria-current="page">
                            Dashboard
                        </li>
                    </ol>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline">Open</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                                <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <button type="button"
                        className="py-2 px-3 flex justify-center items-center gap-x-1.5 text-xs rounded-lg border border-gray-200 text-gray-500 hover:text-gray-600 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
                        data-hs-overlay="#application-sidebar" aria-controls="application-sidebar"
                        aria-label="Sidebar">
                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M17 8L21 12L17 16M3 12H13M3 6H13M3 18H13" />
                        </svg>
                        <span className="sr-only">Sidebar</span>
                    </button>
                </div>
            </div>
        </>
    )
        ;
};