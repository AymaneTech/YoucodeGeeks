import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getQuestions, searchQuestions } from "@/Features/Questions/QuestionAction.js";
import { QuestionCard } from "@/Components/Student/questions/QuestionCard.jsx";
import { SearchBar } from "@/Components/Partials/Elements/SearchBar.jsx";
import { CategoriesList } from "@/Components/Student/categories/CategoriesList.jsx";
import { useLocation } from "react-router-dom";

export const Bugs = () => {
    const dispatch = useDispatch();
    const { questions } = useSelector((state) => state.questions);
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const category = searchParams.get("category");

        if (!category) {
            dispatch(getQuestions());
        } else {
            dispatch(searchQuestions({ category }));
        }
    }, [dispatch, location.search]);

    return (
        <>
            <div className="text-center my-4 ">
                <div className="flex my-12 justify-center ">
                    <CategoriesList />
                </div>
            </div>
            {questions && questions.length > 0 ? (
                <div>
                    {questions.map((question) => (
                        <QuestionCard key={question.id} question={question} />
                    ))}
                </div>
            ) : (
                <p className="text-center my-32">No result found here</p>
            )}
        </>
    );
};
