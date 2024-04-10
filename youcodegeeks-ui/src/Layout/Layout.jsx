import {Outlet} from "react-router-dom";

export const Layout = () => {
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