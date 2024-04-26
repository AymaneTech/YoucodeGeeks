
export const StatisticsItem = ({options}) => {
    const {title, number, icon} = options;
    return (
        <>
            <div className="group p-4 md:w-1/4 sm:w-1/2 w-full">
                <div
                    className="border-2 flex flex-col items-center border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 dark:group-hover:bg-gray-300">
                    {icon}
                    <h2 className="title-font font-medium text-3xl text-gray-900 dark:text-white dark:group-hover:text-gray-950">{number}</h2>
                    <p className="leading-relaxed dark:group-hover:text-gray-950">{title}</p>
                </div>
            </div>
        </>
    )
}