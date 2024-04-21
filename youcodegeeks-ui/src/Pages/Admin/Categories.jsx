import DataTable from "@/components/DataTable/DataTable.jsx";
import {getCategoriesColumns} from "@/components/DataTable/GetCategoriesColumns.jsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "@/Features/CategorySlice.js";
import {CategoryCreate} from "@/components/Admin/Category/CategoryCreate.jsx";

export const Categories = () => {
    const dispatch = useDispatch();
    const {categories} = useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    return (
        <div className="border p-4 rounded-xl border-gray-200">
            <div className="flex justify-between">
                <h2 className="text-3xl font-semibold">Categories</h2>
                <CategoryCreate/>
            </div>
            <div>
               <DataTable data={categories} columns={getCategoriesColumns()} />
            </div>
        </div>
    )
}