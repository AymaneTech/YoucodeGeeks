import {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {showBlog} from "@/Features/Blogs/BlogAction.js";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import {TagList} from "@/Components/Student/tags/TagList.jsx";

export const ShowPost = () => {

    const dispatch = useDispatch();
    const {slug} = useParams();
    const {blog} = useSelector((state) => state.blogs);

    const {title, body, details} = blog;
    useEffect(() => {
        dispatch(showBlog(slug));
    }, []);
    useEffect(() => {
        console.log(blog);
    }, [blog])

    return (
        <>
            {blog &&
                <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
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
                                                type: 'slider',
                                                perPage: {
                                                    breakpoint: 'max',
                                                    mobile: 1,
                                                    tablet: 2,
                                                },
                                                arrows: false,
                                                pagination: false,
                                                drag: "free",
                                                gap: "2rem",
                                                focus: "center",
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
                                                <div
                                                    className="hs-dropdown-menu w-56 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mb-1 z-10 bg-gray-900 shadow-md rounded-xl p-2 dark:bg-black"
                                                    aria-labelledby="blog-article-share-dropdown">
                                                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:focus:ring-neutral-400"
                                                       href="#">
                                                        <svg className="flex-shrink-0 size-4"
                                                             xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                             viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                            <path
                                                                d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                                                            <path
                                                                d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                                                        </svg>
                                                        Copy link
                                                    </a>
                                                    <div
                                                        className="border-t border-gray-600 my-2 dark:border-neutral-800"></div>
                                                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:focus:ring-neutral-400"
                                                       href="#">
                                                        <svg className="flex-shrink-0 size-4"
                                                             xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                             fill="currentColor" viewBox="0 0 16 16">
                                                            <path
                                                                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                                        </svg>
                                                        Share on Twitter
                                                    </a>
                                                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:focus:ring-neutral-400"
                                                       href="#">
                                                        <svg className="flex-shrink-0 size-4"
                                                             xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                             fill="currentColor" viewBox="0 0 16 16">
                                                            <path
                                                                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                                        </svg>
                                                        Share on Facebook
                                                    </a>
                                                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:focus:ring-neutral-400"
                                                       href="#">
                                                        <svg className="flex-shrink-0 size-4"
                                                             xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                             fill="currentColor" viewBox="0 0 16 16">
                                                            <path
                                                                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                                        </svg>
                                                        Share on LinkedIn
                                                    </a>
                                                </div>
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
                                            Leyla Ludic
                                        </h5>
                                        <p className="text-sm text-gray-500 dark:text-neutral-500">
                                            UI/UX enthusiast
                                        </p>
                                    </a>

                                    <div className="grow">
                                        <div className="flex justify-end">
                                            <button type="button"
                                                    className="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                     width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                     stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                     stroke-linejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="9" cy="7" r="4"/>
                                                    <line x1="19" x2="19" y1="8" y2="14"/>
                                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                                </svg>
                                                Follow
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <a className="group flex items-center gap-x-6" href="#">
                                        <div className="grow">
                                            <span
                                                className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500">
                                                5 Reasons to Not start a UX Designer Career in 2022/2023
                                            </span>
                                        </div>

                                        <div className="flex-shrink-0 relative rounded-lg overflow-hidden size-20">
                                            <img className="size-full absolute top-0 start-0 object-cover rounded-lg"
                                                 src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                                 alt="Image Description"/>
                                        </div>
                                    </a>

                                    <a className="group flex items-center gap-x-6" href="#">
                                        <div className="grow">
                                            <span
                                                className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500">
                                                If your UX Portfolio has this 20% Well Done, it Will Give You an 80% Result
                                            </span>
                                        </div>

                                        <div className="flex-shrink-0 relative rounded-lg overflow-hidden size-20">
                                            <img className="size-full absolute top-0 start-0 object-cover rounded-lg"
                                                 src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                                 alt="Image Description"/>
                                        </div>
                                    </a>

                                    <a className="group flex items-center gap-x-6" href="#">
                                        <div className="grow">
                                            <span
                                                className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500">
                                                7 Principles of Icon Design
                                            </span>
                                        </div>

                                        <div className="flex-shrink-0 relative rounded-lg overflow-hidden size-20">
                                            <img className="size-full absolute top-0 start-0 object-cover rounded-lg"
                                                 src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                                 alt="Image Description"/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}