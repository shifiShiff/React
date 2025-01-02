import AppLayout from "./components/AppLayout";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import Person from "./components/Person";
import UserPage from "./components/UserPage";
import {createBrowserRouter } from "react-router";


export const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <>main error</>,
        children: [
            { path: '/', element: <NavBar /> },

            { path: 'shifi', element: <>my name is: shifi</> },

            {
                path: 'person/:name', element: <Person />
            },
            {
                path: 'UserPage', element: <UserPage />
            }
            
        ]
    }
])
