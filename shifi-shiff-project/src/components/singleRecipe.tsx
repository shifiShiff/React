import { useParams } from "react-router";
import recipesStore from "../store/recipesStore";
import { observer } from "mobx-react-lite";
import { Card, CardContent, Divider, List, ListItem, Typography } from "@mui/material";



const SingleRecipe = observer(() => {
    const { id } = useParams();

    const recipe = recipesStore.GetRecipeById(Number(id));

    return (<>


{recipe && (
        <Card sx={{ maxWidth: 600, margin: "auto", padding: 2, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#40E0D0" }}>
              {recipe.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Recipe Number: {recipe.id}
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              {recipe.description}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6">Ingredients:</Typography>
            <List>
              {recipe.ingredients?.map((ingredient, index) => (
                <ListItem key={index} sx={{ padding: 0 }}>
                  - {ingredient}
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      )}

    </>)
})

export default SingleRecipe