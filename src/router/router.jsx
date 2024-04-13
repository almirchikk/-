import { createBrowserRouter } from "react-router-dom"
import Root from "../pages/Root"
import HomePage from "../pages/HomePage"
import SingleproductPage from "../pages/SingleProductPage"
const router = createBrowserRouter([
    {

        path: "/",
        element: <Root />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },

            {
                path: '/products/:id',
                element: <SingleproductPage />
            },
        ]

    }

]

)

export default router