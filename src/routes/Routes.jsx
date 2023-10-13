import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Homepage from "../Pages/Home/Homepage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceDetail from "../Pages/ServiceDetail/ServiceDetail";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ContactPage from "../Pages/ContactPage/ContactPage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import PremiumDeals from "../Pages/PremiumDeals/PremiumDeals";
import UpcomingEvents from "../Pages/UpcomingEvents/UpcomingEvents";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Homepage></Homepage>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/services/:id',
                element: <PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/contact',
                element: <ContactPage></ContactPage>
            },
            {
                path: "/about",
                element: <AboutPage></AboutPage>
            },
            {
                path: '/premium',
                element: <PrivateRoute><PremiumDeals></PremiumDeals></PrivateRoute>
            },
            {
                path: '/upcoming',
                element: <PrivateRoute><UpcomingEvents></UpcomingEvents></PrivateRoute>
            }
        ]
    }
])

export default routes;