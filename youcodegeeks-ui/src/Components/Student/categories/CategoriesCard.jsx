import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {CategoriesList} from "@/Components/Student/categories/CategoriesList.jsx";
import {getCategories} from "@/Features/Categories/CategoryAction.js";

export const CategoriesCard = () => {
    return (
        <div className="dark:bg-[#1A1F3A] rounded-xl p-12 my-10 w-[500px]">
            <h2 className="font-bold text-xl mb-4"> Discover More Categories</h2>
            <CategoriesList/>
        </div>
    )
}