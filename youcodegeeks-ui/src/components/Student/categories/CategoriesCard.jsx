import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {CategoriesList} from "@/components/Student/categories/CategoriesList.jsx";
import {getCategories} from "@/Features/CategorySlice.js";

export const CategoriesCard = () => {
    const dispatch = useDispatch();
    const {categories} = useSelector(state => state.categories);
    useEffect(() => {
        dispatch(getCategories())
    }, []);
    return (
        <div className="dark:bg-[#1A1F3A] rounded-xl p-12 my-10 w-[500px]">
            <h2 className="font-bold text-xl mb-4"> Discover More Categories</h2>
            <CategoriesList categories={categories}/>
        </div>
    )
}