import {RouterProvider} from "react-router-dom";
import {routes} from "./Routes/index.jsx";
import {Provider} from "react-redux";
import {store} from "@/Store/index.js";
import {ThemeProvider} from "@/Components/Theme/ThemeProvider.jsx";

function App() {

    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Provider store={store}>
                    <RouterProvider router={routes}/>
                </Provider>
            </ThemeProvider>
        </>
    );
}

export default App
