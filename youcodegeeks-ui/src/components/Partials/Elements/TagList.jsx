export const TagList = ({tags, px = 0}) => {
    return (
        <>
            <div className={`flex items-center gap-3 pb-3 px-${px}`}>
                {tags.map((tag) => (
                    <span
                        key={tag.id} className="text-center text-sm font-medium bg-blue-100 py-1 px-2 rounded-2xl text-blue-500 align-middle">{tag.name}</span>
                ))}
            </div>
        </>
    )
}