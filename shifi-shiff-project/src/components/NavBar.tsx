import { ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Typography } from "@mui/material";
import { UserContext } from "./AppLayout";
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import FastfoodIcon from '@mui/icons-material/Fastfood';

import { Link } from "react-router"
import { useContext } from "react";


const NavBar = () => {

  const context = useContext(UserContext);

  return (<>
    {/* <Grid container>
            <Grid sx={{
                position: "fixed",
                top: 5,
                right: 5
            }}>
            <nav>
                <Link to='/'>Home</Link> |
                <Link to='/UserPage'>user</Link> |
                <Link to={`/person/${name}`}>one person</Link> |
                <Link to={`/recipes`}>Show recipe</Link> |

                { context?.user.id!=null &&
                <Link to={`/addRecipe`}>Add recipe</Link> }
            </nav>
            </Grid>
        </Grid> */}















    {/* <div style={{ position: "absolute", top: "5px", right: "5px" }}>


      <Paper sx={{ width: 150, maxWidth: '100%' }}>
        <MenuList>

          <Link to='/'><MenuItem>
            <ListItemIcon>
              <HomeIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            </Typography>
          </MenuItem></Link>

          <Link to={`/recipes`}><MenuItem>
            <ListItemIcon>
              <FastfoodIcon fontSize="small" />

            </ListItemIcon>
            <ListItemText>Show recipes</ListItemText>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            </Typography>
          </MenuItem></Link>





          {context?.user.id != null &&
            <Link to={`/Addrecipe`}><MenuItem>
              <ListItemIcon>
                <AddIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Add recipe</ListItemText>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              </Typography>
            </MenuItem></Link>}


        </MenuList>
      </Paper>
    </div> */}



<div style={{ position: "absolute", top: "10px", right: "10px" }}>
  <Paper sx={{ width: 180, maxWidth: '100%', padding: 1, borderRadius: 2 }}>
    <MenuList>

      <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
        <MenuItem>
          <ListItemIcon>
            <HomeIcon fontSize="small" sx={{ color: '#40E0D0' }} />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ fontWeight: 'bold', color: '#333' }}>
            Home
          </ListItemText>
        </MenuItem>
      </Link>

      <Link to='/recipes' style={{ textDecoration: 'none', color: 'inherit' }}>
        <MenuItem>
          <ListItemIcon>
            <FastfoodIcon fontSize="small" sx={{ color: '#40E0D0' }} />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ fontWeight: 'bold', color: '#333' }}>
            Show recipes
          </ListItemText>
        </MenuItem>
      </Link>

      {context?.user.id != null && (
        <Link to='/Addrecipe' style={{ textDecoration: 'none', color: 'inherit' }}>
          <MenuItem>
            <ListItemIcon>
              <AddIcon fontSize="small" sx={{ color: '#40E0D0' }} />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{ fontWeight: 'bold', color: '#333' }}>
              Add recipe
            </ListItemText>
          </MenuItem>
        </Link>
      )}

    </MenuList>
  </Paper>
</div>

  </>)
}

export default NavBar