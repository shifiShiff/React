import { observer } from "mobx-react-lite";
import { RecipeType } from "../srore/recipesStore";
import RecipeStore from "../srore/recipesStore"
import { useState } from "react";
import SingleRecipe from "./singleRecipe";
import { Box, Button, Checkbox, Drawer, Grid, IconButton, List, ListItem, Typography } from "@mui/material";
import { Grid2 } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import { Outlet, useNavigate } from "react-router";

const RecipesList = observer(() => {

  const navigate = useNavigate();

  const [selectedRecipe, setSelectedRecipe] = useState<RecipeType | null>(null);


  const handleUpdate = (recipe: RecipeType) => {
    setSelectedRecipe(recipe);
    navigate(`${recipe.id}`)
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





    {/* <Grid2 container spacing={2} sx={{ padding: 2 }}>
      <Grid2 xs={12} sm={4}>
        <Box sx={{ padding: 2, border: '1px solid #ccc' }}>
          <Typography variant="h6">רשימת המתכונים</Typography>
          {RecipeStore.list.map((r) => (
            <Box key={r.id} sx={{ marginBottom: 2, display: 'flex', alignItems: 'center' }}>
              <Typography>{r.title}</Typography>
              <Box sx={{ marginLeft: 2 }}>
                <IconButton onClick={() => handleUpdate(r)} color="secondary" aria-label="add an alarm">
                  <CheckIcon />
                </IconButton>
              </Box>
            </Box>
          ))}
        </Box>
      </Grid2>

      <Grid2 xs={12} sm={8}>
        <Box sx={{ padding: 2, border: '1px solid #ccc' }}>
          <Outlet/>
        </Box>
      </Grid2>
    </Grid2> */}



<Grid container spacing={2} sx={{ padding: 2 }}>
      {/* צד שמאל - רשימת המתכונים */}
      <Grid item xs={12} sm={4} sx={{ paddingRight: { xs: 0, sm: 2 }, paddingBottom: { xs: 2, sm: 0 } }}>
        <Box sx={{ padding: 2, border: '1px solid #ccc', height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6">רשימת המתכונים</Typography>
          {RecipeStore.list.map((r) => (
            <Box key={r.id} sx={{ marginBottom: 2, display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ flex: 1 }}>{r.title}</Typography>
              <IconButton onClick={() => handleUpdate(r)} color="secondary" aria-label="add an alarm">
                <CheckIcon />
              </IconButton>
            </Box>
          ))}
        </Box>
      </Grid>

      {/* צד ימין - המתכון הנבחר */}
      <Grid item xs={12} sm={8}>
        <Box sx={{ padding: 2, border: '1px solid #ccc', height: '100%' }}>
          <Outlet />
        </Box>
      </Grid>
    </Grid>


  </>)

})







export default RecipesList