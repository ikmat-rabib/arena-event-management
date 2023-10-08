import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Homepage from "../Pages/Home/Homepage";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element:<Homepage></Homepage>
            }
        ]
    }
])

export default routes;