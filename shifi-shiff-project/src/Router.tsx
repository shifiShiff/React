import AppLayout from "./components/AppLayout";
import RecipesList from "./components/RecipesList";
import {createBrowserRouter } from "react-router";
import AddRecipe from "./components/AddRecipe";
import SingleRecipe from "./components/SingleRecipe";


export const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <>main error</>,
        children: [           
            {
                path: 'recipes/', element: <RecipesList />,children: [ {

                    path: ':id', element: <SingleRecipe />
                }]

            },
            {
                path: 'Addrecipe', element: <AddRecipe />
            },
            
        ]
    }
])
