import {Blink} from "@/components/Partials/Elements/CLink.jsx";
import {Splide} from "@splidejs/react-splide";
import {PostCard} from "@/components/Partials/PostCard.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getBlogs} from "@/Features/BlogSlice.js";

export const PostsSlide = () => {
    const dispatch = useDispatch();
    const {blogs} = useSelector((state) => state.blogs);

    useEffect(() => {
        dispatch(getBlogs())
    }, []);
    return (
        <section className="">
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
                    {blogs.map((post, index) => (
                        <PostCard key={index} post={post}/>
                    ))}
                </Splide>
            </div>
        </section>
    )
}