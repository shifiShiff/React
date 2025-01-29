import { RecipeType } from "../srore/recipesStore";



const SingleRecipe = ({ recipe }: { recipe: RecipeType }) => {

    return (<>

        <div>
            <div>{recipe.authorId}</div>
            <div>{recipe.id}</div>
            <div>{recipe.title}</div>
            <div>{recipe.description}</div>
            <div>{recipe.ingredients}</div>

        </div>

    </>)
}

export default SingleRecipe