import React from "react";
import Home from "../Screens/Home/index";
import About from "../Screens/About/index"

const AppRoutes = () => {
    return (
        [
            {
                path: '/',
                element: <Home />,
                id: 1
            },
            {
                path: '/about',
                element: <About />,
                id: 2
            }
        ]
    );
}

export default AppRoutes;