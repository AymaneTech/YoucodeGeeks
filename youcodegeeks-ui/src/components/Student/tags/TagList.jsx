export const TagList = ({tags, px = 0}) => {
    return (
        <>
            <div className={`flex flex-wrap items-center gap-3 pb-3 px-${px}`}>
                {tags.map((tag) => (
                    <span
                        key={tag.id} className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-blue-800 dark:hover:bg-blue-700 dark:text-neutral-200">{tag.name}</span>
                ))}
            </div>
        </>
    )
}