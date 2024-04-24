import {Link} from "react-router-dom";

export const CLink = ({options}) => {
    const {name, to, icon} = options;
    return (
        <li>
            <Link to={to}
                  className="text-[16px] flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-transparent dark:hover:bg-muted/50 dark:text-white">
                {icon}
                {name}
            </Link>
        </li>
    )
}

export const MainButton = ({children}) => {
    return (
        <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 dark:bg-[#344675] text-white shadow-md shadow-gray-900/10 dark:shadow-[#344675]/10 hover:shadow-lg hover:shadow-gray-900/20 dark:hover:shadow-[#344675]/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button">
            {children}
        </button>
    )
}
export const Blink = ({children, to}) => {
    return (
        <Link to={to}
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 dark:bg-[#344675] text-white shadow-md shadow-gray-900/10 dark:shadow-[#344675]/10 hover:shadow-lg hover:shadow-gray-900/20 dark:hover:shadow-[#344675]/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">
            {children}
        </Link>
    )
}