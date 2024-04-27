import {Statistics} from "@/Components/Admin/Home/Statistics.jsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import DataTable from "@/Components/DataTable/DataTable.jsx";
import {questionsColumns} from "@/Components/DataTable/Columns.jsx";
import {CommunityMembers} from "@/Components/Admin/Home/CommunityMembers.jsx";
import {getQuestions} from "@/Features/Questions/QuestionAction.js";

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