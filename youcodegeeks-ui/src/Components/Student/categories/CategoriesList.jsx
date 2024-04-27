import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCategories} from "@/Features/Categories/CategoryAction.js";
import {searchQuestions} from "@/Features/Questions/QuestionAction.js";
import {Link} from "react-router-dom";

export const CategoriesList = () => {
    const dispatch = useDispatch();
    const {categories} = useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(getCategories())
    }, []);
    return (
        <>
            <div className={`flex flex-wrap items-center gap-3 pb-3 `}>
                <Link to="/bugs"
                      key="all"
                      className="text-center text-sm font-medium bg-blue-100 py-1 px-2 rounded-2xl text-blue-900 align-middle"
                      onClick={() => dispatch(getCategories())}
                >All</Link>
                {categories.map((category) => (
                    <Link to={`/bugs?category=${category.name}`}
                          key={category.id}
                          className="text-center text-sm font-medium bg-blue-100 py-1 px-2 rounded-2xl text-blue-900 align-middle"
                          onClick={() => dispatch(searchQuestions({search: null, category: category.name}))}
                    >{category.name}</Link>
                ))}
            </div>
        </>
    )
}