import {Link} from "react-router-dom";
import {getFullName} from "@/Helpers/functions.js";
import {TagList} from "@/components/Partials/Elements/TagList.jsx";
import {BiRightArrowAlt} from "react-icons/bi";

export const QuestionCard = ({question}) => {
    const {title, slug, details, image, created_at, author, category, tags} = question;
    return (
        <>
            <article
                className="my-10 flex max-w-md flex-col rounded-2xl bg-white dark:bg-[#1A1F3A] px-4 shadow md:max-w-5xl md:flex-row md:items-center">
                <div className="shrink-0 my-4 md:mr-8 md:max-w-sm">
                    <img className="rounded-2xl"
                         src={"https://images.unsplash.com/photo-1663287695452-bf59337d8746?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"}
                         alt=""/>
                </div>
                <div className="py-4 sm:py-8 mb-6">
                    <div>
                        <Link to={`questions/${slug}`}
                              className="block text-2xl font-medium text-gray-700 dark:text-white">{title}</Link>
                        <span
                            className="inline-block border px-4 py-1.5 my-2 border-white rounded-3xl text-sm">{category.name}</span>
                    </div>
                    <p className="mb-6 text-gray-500 dark:text-gray-300">{details}</p>
                    <div className="flex justify-between items-center">
                        <div>
                            <TagList tags={tags}/>
                            <div className="flex items-center">
                                <img
                                    className="inline-block size-[38px] rounded-full ring-2 ring-white dark:ring-neutral-800"
                                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                    alt="Image"/>
                                <p className="ml-4 w-56">
                                    <strong
                                        className="block font-medium text-gray-700 dark:text-white">{getFullName(author)}</strong>
                                    <span className="text-sm text-gray-400 dark:text-gray-300">{created_at}</span>
                                </p>
                            </div>
                        </div>
                        <Link className="flex items-center text-sm underline " to={`questions/${slug}`}>
                            Read More
                            <BiRightArrowAlt size={26}/>
                        </Link>
                    </div>
                </div>
            </article>
        </>
    )
}