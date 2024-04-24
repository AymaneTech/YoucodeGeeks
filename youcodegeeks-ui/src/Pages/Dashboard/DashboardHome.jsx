import {Statistics} from "@/components/Admin/Home/Statistics.jsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import DataTable from "@/components/DataTable/DataTable.jsx";
import {questionsColumns} from "@/components/DataTable/Columns.jsx";
import {CommunityMembers} from "@/components/Admin/Home/CommunityMembers.jsx";
import {getQuestions} from "@/Features/QuestionSlice.js";

export const DashboardHome = () => {
    const dispatch = useDispatch();
    const {questions} = useSelector((state) => state.questions);

    useEffect(() => {
        dispatch(getQuestions());
    }, []);
    return (
        <>
            <Statistics/>
            <div className="flex justify-between my-4 gap-8">
                <DataTable columns={questionsColumns()} data={questions}/>
                <div className="w-96">
                    <CommunityMembers/>
                </div>
            </div>
        </>
    )
}