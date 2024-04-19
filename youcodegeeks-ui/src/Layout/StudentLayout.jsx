import {Outlet} from "react-router-dom";

export const StudentLayout = () => {
    return (
        <>
            <header>header</header>
            <main>
                <Outlet/>
            </main>
            <footer>footer</footer>
        </>
    )
}