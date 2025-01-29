import { observer } from "mobx-react-lite";
import { RecipeType } from "../srore/recipesStore";
import RecipeStore from "../srore/recipesStore"
import { useState } from "react";
import SingleRecipe from "./singleRecipe";
import { Box, Button, Checkbox, Drawer, IconButton, List, ListItem, Typography } from "@mui/material";
import { Grid2 } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

const RecipesList = observer(() => {


  const [selectedRecipe, setSelectedRecipe] = useState<RecipeType | null>(null);
  const [checkedRecipes, setCheckedRecipes] = useState<Set<number>>(new Set());


  const handleUpdate = (recipe: RecipeType) => {
    setSelectedRecipe(recipe);
    console.log("select one recipe");

  }



  return (<>
    {/* 
{selectedRecipe &&
<SingleRecipe recipe={selectedRecipe}/>
}

  
    { RecipeStore.list.map((r) => (
          <div key={r.id}>
            <span>{r.title}</span>
            <button onClick={() => handleUpdate(r)}>עדכון</button>
          </div>
        ))
      } */}



    <Grid2 container spacing={2} sx={{ padding: 2 }}>
      {/* צד שמאל - רשימת המתכונים */}
      <Grid2 xs={12} sm={4}>
        <Box sx={{ padding: 2, border: '1px solid #ccc' }}>
          <Typography variant="h6">רשימת המתכונים</Typography>
          {RecipeStore.list.map((r) => (
            <Box key={r.id} sx={{ marginBottom: 2, display: 'flex', alignItems: 'center' }}>
              <Typography>{r.title}</Typography>
              <Box sx={{ marginLeft: 2 }}>
                {/* <button onClick={() => handleUpdate(r)}>עדכון</button> */}
                <IconButton onClick={() => handleUpdate(r)} color="secondary" aria-label="add an alarm">
                  <CheckIcon />
                </IconButton>
              </Box>
            </Box>
          ))}
        </Box>
      </Grid2>

      {/* צד ימין - המתכון הנבחר */}
      <Grid2 xs={12} sm={8}>
        <Box sx={{ padding: 2, border: '1px solid #ccc' }}>
          {selectedRecipe ? <SingleRecipe recipe={selectedRecipe} /> : <Typography>בחר מתכון לעדכון</Typography>}
        </Box>
      </Grid2>
    </Grid2>

  </>)

})







export default RecipesList