import AppLayout from "./components/AppLayout";
import NavBar from "./components/NavBar";
import RecipesList from "./components/recipesList";
import {createBrowserRouter } from "react-router";
import AddRecipe from "./components/addRecipe";
import SingleRecipe from "./components/singleRecipe";


export const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <>main error</>,
        children: [
            // { path: '/', element: <NavBar/> },
           
            {
                path: 'recipes/', element: <RecipesList />,children: [ {

                    path: ':id', element: <SingleRecipe />
                }]

            },
            {
                path: 'Addrecipe', element: <AddRecipe />
            },
            // {
            //     path: 'showRecipe/:id', element: <SingleRecipe />
            // }
            
        ]
    }
])
