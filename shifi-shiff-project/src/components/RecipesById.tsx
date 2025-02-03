import { observer } from "mobx-react-lite";
import recipesStore, { RecipeType } from "../store/recipesStore";
import { Box, IconButton, Typography } from "@mui/material";
import { Grid2 as Grid } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import { Outlet, useNavigate } from "react-router";
import { useContext, useState } from "react";
import { UserContext } from "./AppLayout";

const RecipesListByID = observer(() => {

    const navigate = useNavigate();
    const context = useContext(UserContext);
    const Id = context?.user.id;
    const listById = recipesStore.GetRecipesListById(Id);
    const [clicked, setClicked] = useState(false)


    const handleUpdate = (recipe: RecipeType) => {
        setClicked(true)
        navigate(`${recipe.id}`)
        console.log("select one recipe");

    }


    return (<>

<Grid container spacing={2} sx={{ padding: 2 }}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Box sx={{
          width:'250px',
          padding: 2,
          border: '1px solid #ccc',
          borderRadius: 2,
          height: '80%',
          overflowY: 'auto',
          maxHeight: 'calc(100vh - 40px)',
          boxShadow: '0px 4px 10px rgba(64, 224, 208, 0.5)',
        }}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>Your Recipes</Typography>
          {listById.map((r) => (
            <Box
              key={r.id}
              sx={{
                marginBottom: 2,
                display: 'flex',
                alignItems: 'center',
                padding: 1,
                border: '1px solid #eee',
                borderRadius: 2,
                boxShadow: '0px 4px 5px rgba(64, 224, 208, 0.5)',

                '&:hover': {
                  backgroundColor: '#f5f5f5',
                  boxShadow: '0px 4px 10px rgba(64, 224, 208, 0.8)',

                },
              }}
            >
              <Typography sx={{ flex: 1, fontWeight: 'bold', color: '#333' }}>{r.title}</Typography>
              <IconButton onClick={() => handleUpdate(r)} color="secondary" aria-label="update recipe"
                sx={{ color: ' #40E0D0 ' }}>
                <CheckIcon />
              </IconButton>
            </Box>
          ))}
        </Box>
      </Grid>


      <Grid size={{ xs: 12, md: 6 }} sx={{alignContent:'center', justifyContent:'center',padding: 2,}} >
      
          {clicked && <Outlet />}

      </Grid>
    </Grid>

    </>)

})


export default RecipesListByID