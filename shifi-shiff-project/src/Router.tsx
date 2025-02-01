import AppLayout from "./components/AppLayout";
import {createBrowserRouter } from "react-router";
import RecipesListByID from "./components/RecipesById";
import RecipesList from "./components/recipesList";
import SingleRecipe from "./components/singleRecipe";
import AddRecipe from "./components/addRecipe";
import UpdateRecipe from "./components/UpdateRecipe";


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
            {
                path: 'RecipiesById', element: <RecipesListByID/>,children: [ {

                    path: ':id', element: <UpdateRecipe/>
                }]
            }
            
        ]
    }
])
