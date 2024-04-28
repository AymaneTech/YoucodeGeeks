import {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {showBlog} from "@/Features/Blogs/BlogAction.js";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import {TagList} from "@/Components/Student/tags/TagList.jsx";
import {getFullName} from "@/Helpers/functions.js";

export const ShowPost = () => {

    const dispatch = useDispatch();
    const {slug} = useParams();
    const {blog, relatedBlogs} = useSelector((state) => state.blogs);

    const {title, body, details, author} = blog;
    useEffect(() => {
        dispatch(showBlog(slug));
    }, []);
    useEffect(() => {
        console.log(blog);
    }, [blog])

    return (<>
        {blog && <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
                <div className="lg:col-span-2">
                    <div className="py-8 lg:pe-8">
                        <div className="space-y-5 lg:space-y-8">
                            <Link to="/home"
                                  className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline dark:text-blue-500">
                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                     width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor">
                                    <path d="m15 18-6-6 6-6"/>
                                </svg>
                                Back to Home
                            </Link>

                            <h2 className="text-3xl font-bold lg:text-5xl dark:text-white">{blog.title}</h2>

                            <div className="flex items-center gap-x-5">
                                <Link to="/categories"
                                      className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-800 dark:text-neutral-200">
                                    {blog.category ? blog.category.name : 'Loading...'}
                                </Link>

                                <p className="text-xs sm:text-sm text-gray-800 dark:text-neutral-200">January
                                    18, 2023</p>
                            </div>

                            <p className="text-lg text-gray-800 dark:text-neutral-200">{details}</p>

                            <div className="text-center">
                                <div className="grid lg:grid-cols-2 gap-3">
                                    <Splide className="my-6 w-full" aria-label="new posts slider" options={{
                                        type: 'slider', perPage: {
                                            breakpoint: 'max', mobile: 1, tablet: 2,
                                        }, arrows: false, pagination: false, drag: "free", gap: "2rem", focus: "center",
                                    }}>
                                        <SplideSlide>
                                            <div className="w-[600px] h-[400px]">
                                                <img className=" object-cover rounded-xl"
                                                     src="https://images.unsplash.com/photo-1671726203638-83742a2721a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                                                     alt="Image Description"/>
                                            </div>
                                        </SplideSlide>
                                        <SplideSlide>
                                            <div className="w-[600px] h-[400px]">
                                                <img className=" object-cover rounded-xl"
                                                     src="https://images.unsplash.com/photo-1671726203638-83742a2721a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                                                     alt="Image Description"/>
                                            </div>
                                        </SplideSlide>
                                        <SplideSlide>
                                            <div className="w-[600px] h-[400px]">
                                                <img className=" object-cover rounded-xl"
                                                     src="https://images.unsplash.com/photo-1671726203638-83742a2721a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                                                     alt="Image Description"/>
                                            </div>
                                        </SplideSlide>
                                    </Splide>

                                </div>
                            </div>
                            <div dangerouslySetInnerHTML={{__html: body}}></div>

                            <div className="grid lg:flex lg:justify-between lg:items-center gap-y-5 lg:gap-y-0">
                                {blog.tags ? <TagList tags={blog.tags}/> : 'Loading...'}

                                <div className="flex justify-end items-center gap-x-1.5">
                                    <div className="hs-tooltip inline-block">
                                        <button type="button"
                                                className="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200">
                                            <svg className="flex-shrink-0 size-4"
                                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path
                                                    d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                                            </svg>
                                            875
                                            <span
                                                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-black"
                                                role="tooltip">
                                                        Like
                                                    </span>
                                        </button>
                                    </div>

                                    <div
                                        className="block h-3 border-e border-gray-300 mx-3 dark:border-neutral-600"></div>

                                    <div className="hs-tooltip inline-block">
                                        <button type="button"
                                                className="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200">
                                            <svg className="flex-shrink-0 size-4"
                                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/>
                                            </svg>
                                            16
                                            <span
                                                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-black"
                                                role="tooltip">
                                                        Comment
                                                    </span>
                                        </button>
                                    </div>

                                    <div
                                        className="block h-3 border-e border-gray-300 mx-3 dark:border-neutral-600"></div>

                                    <div className="hs-dropdown relative inline-flex">
                                        <button type="button" id="blog-article-share-dropdown"
                                                className="hs-dropdown-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200">
                                            <svg className="flex-shrink-0 size-4"
                                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                                                <polyline points="16 6 12 2 8 6"/>
                                                <line x1="12" x2="12" y1="2" y2="15"/>
                                            </svg>
                                            Share
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-[#1A1F3A]">
                    <div className="sticky top-0 start-0 py-8 lg:ps-8">
                        <div
                            className="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8 dark:border-neutral-700">
                            <a className="block flex-shrink-0" href="#">
                                <img className="size-10 rounded-full"
                                     src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                     alt="Image Description"/>
                            </a>

                            <a className="group grow block" href="">
                                <h5 className="group-hover:text-gray-600 text-sm font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                                    {author && getFullName(author)}
                                </h5>
                            </a>
                        </div>

                        <div className="space-y-6">
                            {relatedBlogs.length > 0 ? (relatedBlogs.map(relatedBlog => (
                                <a className="group flex items-center gap-x-6" href="#" key={relatedBlog.id}>
                                    <div className="grow">
                    <span
                        className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500">
                        {relatedBlog.title}
                        <p className="my-2">
                            created:
                            <span className="ml-4">{relatedBlog.created_at}</span>
                        </p>
                    </span>
                                    </div>
                                    <div className="flex-shrink-0 relative rounded-lg overflow-hidden size-20">
                                        <img
                                            className="size-full absolute top-0 start-0 object-cover rounded-lg"
                                            src={relatedBlog.images[0].path}
                                            alt="Image Description"
                                        />
                                    </div>
                                </a>))) : (<div className="text-center my-32 flex flex-col gap-9">
                                <p>No result found</p>
                                <p>{author && getFullName(author)} has only this blog</p>
                            </div>)}
                        </div>

                    </div>
                </div>
            </div>
        </div>}
    </>)
}