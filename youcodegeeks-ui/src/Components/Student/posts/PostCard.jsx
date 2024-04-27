import {SplideSlide} from "@splidejs/react-splide";
import {Heart, MessageCircle, UserIcon} from "lucide-react";
import {Blink, } from "@/Components/Partials/Elements/CustomButtons.jsx";
import {TagList} from "@/Components/Student/tags/TagList.jsx";

export const PostCard = ({post}) => {
    const {slug, images, title, details, author, category, tags} = post;
    return (
        <SplideSlide
            className=" flex flex-col mt-6 text-gray-700 bg-white dark:bg-[#1A1F3A] shadow-md bg-clip-border rounded-xl w-96 h-[500px]">
            <div
                className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 dark:bg-[#344675] shadow-blue-gray-500/40 dark:shadow-[#344675]/40">
                <img
                    src={images[0].path}
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
                <Blink to={`/blogs/${slug}`}>Read More</Blink>
            </div>
        </SplideSlide>
    )
}