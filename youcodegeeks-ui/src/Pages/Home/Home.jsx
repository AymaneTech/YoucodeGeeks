import {useDispatch, useSelector} from "react-redux";
import '@splidejs/react-splide/css';

import {useEffect} from "react";
import {getQuestions} from "@/Features/QuestionSlice.js";
import {PostCard} from "@/components/Partials/PostCard.jsx";
import {Splide} from "@splidejs/react-splide";
import {Blink} from "@/components/Partials/Elements/CLink.jsx";

export const Home = () => {
    const dispatch = useDispatch();
    const {questions} = useSelector((state) => state.questions);

    useEffect(() => {
        dispatch(getQuestions())
    }, []);
    return (
        <section className="mx-4 lg:ml-72">
            <div className="group text-black dark:text-white my-6 flex justify-between items-center">
                <h2 className="font-bold text-2xl">Latest blogs</h2>
                <Blink to="posts">Show all posts</Blink>
            </div>
            <div className="flex justify-between my-2">
                <Splide className="my-6" aria-label="new posts slider" options={{
                    type: 'loop',
                    perPage: {
                        breakpoint: 'max',
                        mobile: 1,
                        tablet: 2,
                    }, arrows: false, pagination: false, drag: "free", gap: "2rem", rewind: true,
                }}>
                    {questions.map((post, index) => (
                        <PostCard key={index} post={post}/>
                    ))}
                </Splide>
            </div>
        </section>
    )
}