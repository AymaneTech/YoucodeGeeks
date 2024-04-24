import '@splidejs/react-splide/css';

import {PostsSlide} from "@/components/Student/PostsSlide.jsx";
import {QuestionsList} from "@/components/Student/QuestionsList.jsx";

export const Home = () => {

    return (
        <>
            <PostsSlide/>
            <section>
                <QuestionsList/>
            </section>
        </>
    )
}