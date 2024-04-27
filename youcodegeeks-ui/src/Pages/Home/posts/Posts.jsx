import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {filterByTag, getBlogs} from '@/Features/Blogs/BlogAction.js';
import {Blink} from '@/Components/Partials/Elements/CustomButtons.jsx';
import {Link, useSearchParams} from "react-router-dom";
import {getTags} from "@/Features/Tags/TagsAction.js";
import {TagSlider} from "@/Components/Student/tags/TagSlider.jsx";

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
        let param = searchParams.get("filter");
        if (param) {
            dispatch(filterByTag(param))
        }
    }, [searchParams]);

    return (
        <div className="dark:bg-[#020817] dark:text-white">
            <div className="my-8">
                <TagSlider tags={tags}/>
            </div>
            <section className="py-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 flex justify-between">
                        <h2 className="font-manrope text-4xl font-bold dark:text-white">Our latest blog</h2>
                        <Blink to="/blogs/write">Write A Blog</Blink>
                    </div>
                    {blogs && blogs.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
                            {blogs.map((blog) => {
                                const {images, created_at, details, title, slug} = blog;
                                return (
                                    <div key={slug}
                                         className="max-w-md border dark:border-gray-700 rounded-2xl overflow-hidden">
                                        <div className="flex items-center">
                                            <img src={images[0]?.path} alt="blogs tailwind section"
                                                 className="rounded-t-2xl w-full h-40 object-cover"/>
                                        </div>
                                        <div className="p-4 lg:p-6">
                                            <span
                                                className="text-indigo-600 dark:text-indigo-400 font-medium mb-3 block">{created_at}</span>
                                            <h4 className="text-xl dark:text-white font-medium leading-8 mb-5">{title}</h4>
                                            <p className="text-gray-500 dark:text-gray-400 leading-6 mb-6">{details.slice(0, 70)}...</p>
                                            <Link to={`/blogs/${slug}`}
                                                  className="cursor-pointer text-lg text-indigo-600 dark:text-indigo-400 font-semibold">
                                                Read more..
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <p className="text-center">No result found</p>
                    )}
                </div>
            </section>
        </div>
    );

};