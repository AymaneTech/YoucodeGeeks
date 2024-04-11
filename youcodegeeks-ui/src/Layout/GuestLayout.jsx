import {Outlet} from "react-router-dom";

export const GuestLayout = () => {
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