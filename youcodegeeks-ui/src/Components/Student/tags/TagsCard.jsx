import {useDispatch, useSelector} from "react-redux";
import {TagList} from "@/Components/Student/tags/TagList.jsx";
import {useEffect} from "react";
import {getTags} from "@/Features/TagsSlice.js";

export const TagsCard = () => {
    const dispatch = useDispatch();
    const {tags} = useSelector(state => state.tags);
    useEffect(() => {
        dispatch(getTags())
    }, []);
    return (
        <div className="dark:bg-[#1A1F3A] rounded-xl p-12 my-10 w-[500px]">
            <h2 className="font-bold text-xl mb-4"> Discover More Tags</h2>
            <TagList tags={tags}/>
        </div>
    )
}