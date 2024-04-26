import '@splidejs/react-splide/css';

import {PostsSlide} from "@/Components/Student/posts/PostsSlide.jsx";
import {QuestionsList} from "@/Components/Student/questions/QuestionsList.jsx";

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