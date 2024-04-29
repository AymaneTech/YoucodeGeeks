import { StatisticsItem } from "@/Components/Admin/Home/StatisticsItem.jsx";
import { UsersIcon } from "lucide-react";
import { BiCategoryAlt } from "react-icons/bi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStatistics } from "@/Features/StatisticsSlice.js";
import { GiTeacher } from "react-icons/gi";
import { MdOutlineArticle } from "react-icons/md";

export const Statistics = () => {

    const dispatch = useDispatch();
    const { statistics } = useSelector((state) => state.statistics);
    useEffect(() => {
        dispatch(getStatistics());
    }, []);
    return (
        <>
            {statistics && Object.keys(statistics).length > 0 && (
                <div className="flex gap-12">
                    <StatisticsItem options={{
                        title: "Students",
                        number: statistics.students,
                        icon: <UsersIcon className="dark:group-hover:text-gray-950" size={40} />
                    }} />
                    <StatisticsItem options={{
                        title: "Coaches",
                        number: statistics.coaches,
                        icon: <GiTeacher className="dark:group-hover:text-gray-950" size={40} />
                    }} />
                    <StatisticsItem options={{
                        title: "Blogs",
                        number: statistics.blogs,
                        icon: <MdOutlineArticle className="dark:group-hover:text-gray-950" size={40} />
                    }} />
                    <StatisticsItem options={{
                        title: "Questions",
                        number: statistics.questions,
                        icon: <BiCategoryAlt className="dark:group-hover:text-gray-950" size={40} />
                    }} />
                </div>
            )}
        </>

    )
}