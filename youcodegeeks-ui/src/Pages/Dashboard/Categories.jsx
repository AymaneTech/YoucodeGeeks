import DataTable from "@/Components/DataTable/DataTable.jsx";
import {categoriescolumns} from "@/Components/DataTable/Columns.jsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "@/Features/Categories/CategoryAction.js";
import {CategoryCreate} from "@/Components/Admin/Category/CategoryCreate.jsx";

export const Categories = () => {
    const dispatch = useDispatch();
    const {categories} = useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    return (
        <>
            <div className="flex justify-between my-4">
                <h2 className="text-3xl font-semibold">Manage Categories</h2>
                <CategoryCreate/>
            </div>
            <div>
                <DataTable data={categories} columns={categoriescolumns()}/>
            </div>
        </>
    )
}