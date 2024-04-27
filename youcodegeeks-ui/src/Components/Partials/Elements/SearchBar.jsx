import {useDispatch} from "react-redux";
import {searchQuestions} from "@/Features/Questions/QuestionAction.js";

export const SearchBar = () => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="hidden sm:block border rounded-2xl px-2 py-1">
                <label htmlFor="icon" className="sr-only">Search</label>
                <div className="relative min-w-72 md:min-w-80">
                    <div
                        className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                        <svg className="flex-shrink-0 size-4 text-gray-400 dark:text-neutral-400"
                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             fill="none" stroke="currentColor">
                            <circle cx="11" cy="11" r="8"/>
                            <path d="m21 21-4.3-4.3"/>
                        </svg>
                    </div>
                    <input type="text" id="icon" name="icon"
                           className="py-2 px-4 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#020817] dark:border-white dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                           placeholder="Search"
                           onChange={(e) => dispatch(searchQuestions({search: e.target.value, category: null}))}/>
                </div>
            </div>
        </>
    )
}