import '@splidejs/react-splide/css';

import {PostsSlide} from "@/components/Student/posts/PostsSlide.jsx";
import {QuestionsList} from "@/components/Student/questions/QuestionsList.jsx";

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