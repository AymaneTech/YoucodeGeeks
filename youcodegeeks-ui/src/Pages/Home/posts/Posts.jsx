import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getBlogs} from '@/Features/BlogSlice.js';
import {Blink} from '@/Components/Partials/Elements/CustomButtons.jsx';
import {Link, useSearchParams} from "react-router-dom";
import {TagList} from "@/Components/Student/tags/TagList.jsx";
import {getTags} from "@/Features/TagsSlice.js";

export const Posts = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const {blogs} = useSelector((state) => state.blogs);
    const {tags} = useSelector((state) => state.tags);

    useEffect(() => {
        dispatch(getBlogs());
        dispatch(getTags());
    }, []);

    useEffect(() => {
        let tag = searchParams.get("filter")
        dispatch(filterByTag())
    }, [searchParams]);

    useEffect(() => {

        console.log(blogs);
    }, [blogs]);

    return (
        <div className="dark:bg-[#020817] dark:text-white">
            <div className="my-8">
                <TagList justify="center" tags={tags}/>
            </div>
            <section className="py-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 flex justify-between">
                        <h2 className="font-manrope text-4xl font-bold dark:text-white">Our latest blog</h2>
                        <Blink to="/blogs/write">Write A Blog</Blink>
                    </div>
                    <div
                        className="flex justify-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                        {blogs.map((blog) => {
                            const {images, created_at, details, title, slug} = blog;
                            return (
                                <div
                                    className="group w-full max-lg:max-w-xl lg:w-1/3 border dark:border-gray-700 rounded-2xl">
                                    <div className="flex items-center">
                                        <img src={images[0]?.path} alt="blogs tailwind section"
                                             className="rounded-t-2xl w-full"/>
                                    </div>
                                    <div
                                        className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl dark:group-hover:bg-gray-800">
                                        <span
                                            className="text-indigo-600 dark:text-indigo-400 font-medium mb-3 block">{created_at}</span>
                                        <h4 className="text-xl dark:text-white font-medium leading-8 mb-5">{title}</h4>
                                        <p className="text-gray-500 dark:text-gray-400 leading-6 mb-10">{details}</p>
                                        <Link to={`/blogs/${slug}`}
                                              className="cursor-pointer text-lg text-indigo-600 dark:text-indigo-400 font-semibold">
                                            Read more..
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};