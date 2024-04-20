import {RouterProvider} from "react-router-dom";
import {routes} from "./Routes/index.jsx";
import {Provider} from "react-redux";
import {store} from "@/Store/index.js";

function App() {

    return (
        <>
            <Provider store={store}>
                <RouterProvider router={routes}/>
            </Provider>
        </>
    )
}

export default App
