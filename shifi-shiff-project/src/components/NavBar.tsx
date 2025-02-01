import { ListItemIcon, ListItemText, MenuItem, MenuList, Paper} from "@mui/material";
import { UserContext } from "./AppLayout";
import HomeIcon from '@mui/icons-material/Home';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link } from "react-router"
import { useContext } from "react";


const NavBar = () => {

  const context = useContext(UserContext);

  return (<>


<div style={{ position: "absolute", top: "10px", right: "10px" }}>
  <Paper sx={{ width: 180, maxWidth: '100%', padding: 1, borderRadius: 2 }}>
    <MenuList>

      <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
        <MenuItem>
          <ListItemIcon>
            <HomeIcon fontSize="small" sx={{ color: '#40E0D0' }} />
          </ListItemIcon>
          <ListItemText sx={{ fontWeight: 'bold', color: '#333' }}>
            Home
          </ListItemText>
        </MenuItem>
      </Link>

      <Link to='/recipes' style={{ textDecoration: 'none', color: 'inherit' }}>
        <MenuItem>
          <ListItemIcon>
            <FastfoodIcon fontSize="small" sx={{ color: '#40E0D0' }} />
          </ListItemIcon>
          <ListItemText sx={{ fontWeight: 'bold', color: '#333' }}>
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
            <ListItemText sx={{ fontWeight: 'bold', color: '#333' }}>
              Add recipe
            </ListItemText>
          </MenuItem>
        </Link>
      )} 
       {context?.user.id != null &&
        (<Link to='/RecipiesById' style={{ textDecoration: 'none', color: 'inherit' }}>
          <MenuItem>
            <ListItemIcon>
              <EditIcon fontSize="small" sx={{ color: '#40E0D0' }} />
            </ListItemIcon>
            <ListItemText sx={{ fontWeight: 'bold', color: '#333' }}>
              Update Recipes
            </ListItemText>
          </MenuItem>
        </Link>)}

    </MenuList>
  </Paper>
</div>

  </>)
}

export default NavBar