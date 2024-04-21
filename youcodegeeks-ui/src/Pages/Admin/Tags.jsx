import {TagCreate} from "@/components/Admin/Tag/TagCreate.jsx";

export const Tags = () => {
    return (
        <>
            <div className="flex justify-between my-4">
                <h2 className="text-3xl font-semibold">Manage Tags</h2>
                <TagCreate/>
            </div>
            <div>
                {/*<DataTable data={categories} columns={getCategoriesColumns()}/>*/}
            </div>
        </>
    )
}