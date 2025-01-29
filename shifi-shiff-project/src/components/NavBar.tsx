import { Divider, Grid2 as Grid, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Typography } from "@mui/material";
import { UserContext } from "./AppLayout";
import HomeIcon from '@mui/icons-material/Home';
import AddIcon   from '@mui/icons-material/Add';
import FastfoodIcon  from '@mui/icons-material/Fastfood';

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


















        <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>
        <MenuItem>
        <Link to='/'>
          <ListItemIcon>
            {/* <ContentCut fontSize="small" /> */}
            <HomeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          </Typography></Link>
        </MenuItem>
        
        <MenuItem>
        <Link to={`/recipes`}>
          <ListItemIcon>
            {/* <ContentCopy fontSize="small" /> */}
            <FastfoodIcon  fontSize="small" />

          </ListItemIcon>
          <ListItemText>Show recipes</ListItemText>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          </Typography>
          </Link> 
        </MenuItem>


        
        <MenuItem>
        { context?.user.id!=null &&
                <Link to={`/addRecipe`}>
          <ListItemIcon>
            <AddIcon  fontSize="small" />
          </ListItemIcon>
          <ListItemText>Add recipe</ListItemText>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          </Typography>
          </Link> }
        </MenuItem>

      </MenuList>
    </Paper>
    </>)
}

export default NavBar