import {TagList} from "@/components/Partials/Elements/TagList.jsx";
import {Button} from "@/components/ui/button.jsx";

export const QuestionDetails = ({question}) => {
    const {id, title, details, body, created_at, updated_at, category, tags} = question;

    return (
        <>
            <div className="">
                <div className="bg-[#1A1F3A] p-4 mx-12 rounded-2xl">
                    <div>
                        <div className="flex justify-between items-center my-4">
                            <h1 className="text-4xl font-bold dark:text-white">{title}</h1>
                            <a href="#answer">
                                <Button>Answer</Button>
                            </a>
                        </div>
                        <div
                            className="dates-informations flex flex-wrap md:justify-start justify-center gap-2 text-sm text-[#7b7f93]">
                            <div>Asked at: <span className="text-white mr-2 font-bold">{created_at}</span>
                            </div>
                            <div>Updated at: <span className="text-white mr-2 font-bold">{updated_at}</span>
                            </div>
                            {category && <div>
                                related to: <span className="text-white mr-2 font-bold">{category.name}</span>
                            </div>}
                        </div>
                        <hr className="m-4 border-[#7B7F93]"/>
                    </div>
                    <div className="problem-details font-sans">
                        <h3 className="font-medium text-xl underline my-4">Problem Details: </h3>
                        <p>{details}</p>
                        <p>{body}</p>
                    </div>
                    <div className="my-4 rounded-2xl">
                        <img className="w-100 h-100 rounded-2xl" src="/src/assets/images/attached.png" alt=""/>
                    </div>
                    {tags && <TagList tags={tags}/>}
                </div>
            </div>

        </>
    )
}