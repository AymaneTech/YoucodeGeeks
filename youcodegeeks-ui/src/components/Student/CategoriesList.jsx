export const CategoriesList = ({categories}) => {
    return (
        <>
            <div className={`flex flex-wrap items-center gap-3 pb-3 `}>
                {categories.map((category) => (
                    <span
                        key={category.id}
                        className="text-center text-sm font-medium bg-blue-100 py-1 px-2 rounded-2xl text-blue-900 align-middle">{category.name}</span>
                ))}
            </div>
        </>
    )
}