import {useDispatch, useSelector} from "react-redux";
import '@splidejs/react-splide/css';

import {useEffect} from "react";
import {getQuestions} from "@/Features/QuestionSlice.js";
import {PostCard} from "@/components/Partials/PostCard.jsx";
import {Splide} from "@splidejs/react-splide";
import {Blink} from "@/components/Partials/Elements/CLink.jsx";
import {PostsSlide} from "@/components/Student/PostsSlide.jsx";
import {QuestionsList} from "@/components/Student/QuestionsList.jsx";

export const Home = () => {

    return (
        <>
            <PostsSlide/>
            <QuestionsList/>
        </>
    )
}