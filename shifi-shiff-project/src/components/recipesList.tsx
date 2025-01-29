import { observer } from "mobx-react-lite";
import { RecipeType } from "../srore/recipesStore";
import RecipeStore from "../srore/recipesStore"
import { Box, IconButton,  Typography } from "@mui/material";
import { Grid2 as Grid } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import { Outlet, useNavigate } from "react-router";

const RecipesList = observer(() => {

  const navigate = useNavigate();

  const handleUpdate = (recipe: RecipeType) => {
    navigate(`${recipe.id}`)
    console.log("select one recipe");

  }


  return (<>

<Grid container spacing={2} sx={{ padding: 2 }}>
  {/* צד שמאל - רשימת המתכונים */}
  <Grid xs={12} sm={4}>
    <Box sx={{
      padding: 2,
      border: '1px solid #ccc',
      borderRadius: 2,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto', // מאפשר גלילה במקרה של יותר מדי מתכונים
      maxHeight: 'calc(100vh - 40px)', // מוודא שהרשימה לא תצא מחוץ לגבולות המסך
      paddingRight: { xs: 0, sm: 2 },
      paddingBottom: { xs: 2, sm: 0 },
      boxShadow: '0px 4px 10px rgba(64, 224, 208, 0.5)', 
    }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>רשימת המתכונים</Typography>
      {RecipeStore.list.map((r) => (
        <Box
          key={r.id}
          sx={{
            marginBottom: 2,
            display: 'flex',
            alignItems: 'center',
            padding: 1,
            border: '1px solid #eee',
            borderRadius: 2,
            // boxShadow: 1, // מוסיף צל להפרדה
            boxShadow: '0px 4px 5px rgba(64, 224, 208, 0.5)', // צל בצבע טורקיז שקוף

            '&:hover': {
              backgroundColor: '#f5f5f5', // שינוי צבע בעת ריחוף
              boxShadow: '0px 4px 10px rgba(64, 224, 208, 0.8)', // צל יותר חזק בריחוף

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

  {/* צד ימין - המתכון הנבחר */}
  <Grid xs={12} sm={8}>
    <Box sx={{
      padding: 2,
      border: '1px solid #ccc',
      height: '100%',
      borderRadius: 2, // רדיוס פינות
      // boxShadow: 3, // צל קטן להבלטה
      boxShadow: '0px 4px 10px rgba(64, 224, 208, 0.5)', // צל בצבע טורקיז שקוף

    }} component="section">
      <Outlet />
    </Box>
  </Grid>
</Grid>








     

  </>)

})







export default RecipesList