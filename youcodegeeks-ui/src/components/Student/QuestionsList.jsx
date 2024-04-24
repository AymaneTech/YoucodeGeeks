import {useDispatch, useSelector} from "react-redux";
import {getQuestions} from "@/Features/QuestionSlice.js";
import {useEffect} from "react";
import {Blink} from "@/components/Partials/Elements/CLink.jsx";
import {QuestionCard} from "@/components/Partials/QuestionCard.jsx";
import {TagsCard} from "@/components/Student/TagsCard.jsx";

export const QuestionsList = () => {
    const dispatch = useDispatch();
    const {questions} = useSelector((state) => state.questions);
    useEffect(() => {
        dispatch(getQuestions())
    }, []);

    return (<>
        <div className="header flex justify-between items-center">
            <h2 className="text-2xl font-bold">All the questions</h2>
            <Blink to="questions/ask">Ask A question</Blink>
        </div>
        <div className="flex justify-between ">
            <div className="questions-list {/*flex flex-col items-start*/}">
                {questions.map((question) => (<QuestionCard question={question}/>))}
            </div>
            <TagsCard/>
        </div>
    </>)
}