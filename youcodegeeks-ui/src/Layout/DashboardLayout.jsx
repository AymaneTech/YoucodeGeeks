import {Outlet} from "react-router-dom";

export const DashboardLayout = () => {
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