import {QuestionDetails} from "@/components/Student/questions/QuestionDetails.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {showQuestion} from "@/Features/QuestionSlice.js";
import {AnswerForm} from "@/components/Student/answers/AnswerForm.jsx";
import {getAnswers} from "@/Features/AnswerSlice.js";
import {Answers} from "@/components/Student/answers/Answers.jsx";

export const ShowQuestion = () => {
    const dispatch = useDispatch();
    const {slug} = useParams();
    const {question} = useSelector((state) => state.questions);
    const {answers} = useSelector((state) => state.answers);

    useEffect(() => {
        dispatch(showQuestion(slug))
            .then((action) => {
                if (action.payload && action.payload.id) {
                    dispatch(getAnswers(action.payload.id));
                }
            });
    }, []);



    return (
        <div className="mx-12 my-12 md:mx-32 text-sm md:text-lg">
            <QuestionDetails question={question}/>
            <div className="my-12">
                {answers && answers.length > 0 ? (
                    <Answers key={answers.length} answers={answers}/>
                ) : (
                    <p className="text-center">no answer for this question</p>
                )}
            </div>
            <AnswerForm question_id={question.id}/>
        </div>
    );
};