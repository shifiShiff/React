import { useParams } from "react-router";
import recipesStore, { RecipeType } from "../srore/recipesStore";
import { observer } from "mobx-react-lite";



const SingleRecipe = observer(() => {
    const { id } = useParams();

    const recipe = recipesStore.GetRecipeById(Number(id));
    // let recipe = recipesStore.GetRecipeById(parseInt(id, 10));

    return (<>
{recipe &&
        <div style={{ textAlign: "left" }}>
            <div>user id: {recipe?.authorId}</div>
            <div>recipe number: {recipe?.id}</div>
            <div>title: {recipe?.title}</div>
            <div>description: {recipe?.description}</div>
            <div>ingredients: </div>
            <div>
                <ul>
                    {recipe?.ingredients?.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>

        </div>}

    </>)
})

export default SingleRecipe