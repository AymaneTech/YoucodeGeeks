import {QuestionDetails} from "@/components/Student/QuestionDetails.jsx";
import {Answers} from "@/components/Student/Answers.jsx";

export const ShowQuestion = () => {

    return (
        <div className="mx-12 my-12 md:mx-32 text-sm md:text-lg">
            <QuestionDetails/>
            <Answers/>
        </div>
    )
}