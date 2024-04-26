import {getFullName} from "@/Helpers/functions.js";

export const Answers = ({answers}) => {
    return (
        <>
            <div className="flex flex-col gap-4">
                {answers.map((answer, index) => {
                        const {body, author, created_at, updated_at} = answer;
                        return (
                            <div key={answer.id} className="">
                                <div className="bg-[#1A1F3A] p-8 mx-12 rounded-2xl">
                                    <div>
                                        <div className="">
                                            <img
                                                className="inline-block size-[38px] rounded-full ring-2 ring-white dark:ring-neutral-800"
                                                src={author?.image?.path || "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"}
                                                alt="Image Description"/>                                            <span className="inline-block text-white text-xl mr-2 font-bold mb-8">{getFullName(author)}</span></div>
                                        <div
                                            className="dates-informations flex flex-wrap md:justify-start justify-center gap-2 text-sm text-[#7b7f93]">
                                            <div className="w-full text-white  indent-4"
                                                 dangerouslySetInnerHTML={{__html: body}}></div>
                                            <div
                                                className="my-4 flex flex-col border-t-[1px] pt-6 border-white w-[90%] justify-self-center ">
                                                <div>Created at: <span
                                                    className="text-white mr-2 font-bold">{created_at}</span>
                                                </div>
                                                <div>Updated at: <span
                                                    className="text-white mr-2 font-bold">{updated_at}</span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                )}
            </div>
        </>
    )
}