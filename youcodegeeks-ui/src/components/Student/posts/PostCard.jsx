import {SplideSlide} from "@splidejs/react-splide";
import {Heart, MessageCircle, UserIcon, UsersIcon} from "lucide-react";
import {MainButton} from "@/components/Partials/Elements/CLink.jsx";
import {TagList} from "@/components/Student/tags/TagList.jsx";

export const PostCard = ({post}) => {
    const {image, title, details, author, category, tags} = post;
    return (
        <SplideSlide
            className="relative flex flex-col mt-6 text-gray-700 bg-white dark:bg-[#1A1F3A] shadow-md bg-clip-border rounded-xl w-96">
            <div
                className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 dark:bg-[#344675] shadow-blue-gray-500/40 dark:shadow-[#344675]/40">
                <img
                    src={image?.path || "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"}
                    alt="card-image"
                    className="object-cover w-full h-full"/>
            </div>
            <div className="flex justify-between items-center px-3 pt-2">
                <div className="group text-gray-900 dark:text-white flex items-center gap-4 px-4 pt-3">
                    <UserIcon className=""/>
                    <p>{author.firstName + " " + author.lastName}</p>
                </div>
                <div className="mt-1 py-1.5 px-3 bg-blue-600 text-white rounded-3xl">
                    {category.name}
                </div>
            </div>
            <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 dark:text-white">
                    {title}
                </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit dark:text-gray-300">
                    {details}
                </p>
            </div>
            <TagList px={5} tags={tags} />
            <div className="p-6 pt-0 flex justify-between">
                <div className="group flex gap-3 items-center text-white">
                    <button className="flex gap-1">
                        <Heart/>
                        Like
                    </button>
                    <button className="flex gap-1">
                        <MessageCircle />
                        Comment
                    </button>
                </div>
                <MainButton>Read More</MainButton>
            </div>
        </SplideSlide>
    )
}