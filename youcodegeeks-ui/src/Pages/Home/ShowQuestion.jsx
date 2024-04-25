import {QuestionDetails} from "@/components/Student/QuestionDetails.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {showQuestion} from "@/Features/QuestionSlice.js";
import {AnswerForm} from "@/components/Student/AnswerForm.jsx";
import {Answers} from "@/components/Student/Answers.jsx";

export const ShowQuestion = () => {
    const dispatch = useDispatch();
    const {slug} = useParams();
    const {question} = useSelector((state) => state.questions);

    useEffect(() => {
        dispatch(showQuestion(slug));
    }, []);
    return (
        <div className="mx-12 my-12 md:mx-32 text-sm md:text-lg">
            <QuestionDetails question={question}/>
            <AnswerForm question_id={question.id}/>
            <Answers answers={question.answers}/>


        </div>
    )
}