import {StatisticsItem} from "@/components/Partials/StatisticsItem.jsx";
import {UsersIcon} from "lucide-react";
import {BiCategoryAlt, BiLogoBlogger} from "react-icons/bi";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getStatistics} from "@/Features/StatisticsSlice.js";
import {GiTeacher} from "react-icons/gi";
import {MdOutlineArticle} from "react-icons/md";

export const Statistics = () => {

    const dispatch = useDispatch();
    const {statistics} = useSelector((state) => state.statistics);
    useEffect(() => {
        dispatch(getStatistics());
    }, []);
    return (
        <>
            {/*{statistics && Object.keys(statistics).length > 0  ? (*/}
                <div className="flex gap-12">
                    <StatisticsItem options={{
                        title: "Students",
                        number: statistics.students,
                        icon: <UsersIcon size={40}/>
                    }}/>
                    <StatisticsItem options={{
                        title: "Coaches",
                        number: statistics.coaches,
                        icon: <GiTeacher size={40}/>
                    }}/>
                    <StatisticsItem options={{
                        title: "Blogs",
                        number: statistics.blogs,
                        icon: <MdOutlineArticle size={40}/>
                    }}/>
                    <StatisticsItem options={{
                        title: "Questions",
                        number: statistics.questions,
                        icon: <BiCategoryAlt size={40}/>
                    }}/>
                </div>
        </>

    )
}