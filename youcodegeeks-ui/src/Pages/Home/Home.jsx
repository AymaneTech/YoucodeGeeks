import '@splidejs/react-splide/css';

import {PostsSlide} from "@/components/Student/PostsSlide.jsx";
import {QuestionsList} from "@/components/Student/QuestionsList.jsx";

export const Home = () => {

    return (
        <div className="overflow-x-hidden font-mono mx-4 lg:ml-72 mr-8 lg:mr-12">
            <PostsSlide/>
            <section>
                <QuestionsList/>
            </section>
        </div>
    )
}