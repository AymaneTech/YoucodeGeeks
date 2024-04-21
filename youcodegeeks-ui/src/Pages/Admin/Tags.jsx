import {TagCreate} from "@/components/Admin/Tag/TagCreate.jsx";
import {useDispatch, useSelector} from "react-redux";
import DataTable from "@/components/DataTable/DataTable.jsx";
import {getTagsColumns} from "@/components/DataTable/Columns.jsx";
import {useEffect} from "react";
import {getTags} from "@/Features/TagsSlice.js";

export const Tags = () => {
    const {tags} = useSelector((state) => state.tags);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTags())
    }, []);
    return (
        <>
            <div className="flex justify-between my-4">
                <h2 className="text-3xl font-semibold">Manage Tags</h2>
                <TagCreate/>
            </div>
            <div>
                <DataTable data={tags} columns={getTagsColumns()}/>
            </div>
        </>
    )
}