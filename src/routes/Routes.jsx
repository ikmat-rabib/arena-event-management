import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Homepage from "../Pages/Home/Homepage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element:<Homepage></Homepage>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default routes;