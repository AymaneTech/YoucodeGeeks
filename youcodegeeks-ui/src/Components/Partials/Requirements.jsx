export const Requirements = () => {
    return (
        <>
            <div className="flex items-center justify-between gap-8">
                <div className="flex flex-col gap-8">
                    <h1 className="text-3xl mt-8 font-bold text-white">Ask public question to the community: </h1>
                    <div
                        className="flex flex-col gap-4 p-6 border w-[800px]  border-[#7b7f93] rounded-lg  dark:bg-[#1A1F3A]">
                        <h2 className="font-bold text-3xl">Hey Nerd! </h2>
                        <p>Writing a good question let others understand and help you find the solution, so write a
                            clever
                            question</p>
                        <strong>Steps to follow: </strong>
                        <ul className="flex flex-col gap-1">
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetur adipiscing elit</li>
                            <li>Integer molestie lorem at massa</li>
                            <li>Facilisis in pretium nisl aliquet</li>
                        </ul>
                    </div>
                </div>
                <div className="w-100 h-100">
                    <img className="w-100 h-100" src="/src/assets/images/code.png" alt=""/>
                </div>
            </div>
        </>
    )
}