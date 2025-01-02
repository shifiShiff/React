import { Grid2 as Grid } from "@mui/material";

import { Link } from "react-router"

const NavBar = () => {

    const name = 'Shifi'

    return (<>
        <Grid container>
            <Grid sx={{
                position: "fixed",
                top: 5,
                right: 5
            }}>
            <nav>
                <Link to='/'>Home</Link> |
                <Link to='/UserPage'>user</Link> |
                <Link to={`/person/${name}`}>one person</Link>
            </nav>
            </Grid>
        </Grid>
    </>)
}

export default NavBar