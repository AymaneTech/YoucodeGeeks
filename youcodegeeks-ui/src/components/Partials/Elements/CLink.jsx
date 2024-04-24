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