import {useState } from "react";
import Login from "./Login";
import UpdateDetails from "./Upadat";
import UserName from "./UserNameAvatar";
import {Grid2 as Grid, Link } from "@mui/material";
import SignIn from "./Sign";
import { Box, Container, Typography} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";


const HomePage = () => {

  const [loginSuccess, setLoginSuccess] = useState(false); 

  const handleLoginSuccess = () => {
    setLoginSuccess( (prevState) => !prevState);

    console.log(loginSuccess);
    
  };

  return (<>
 <h1>My recipes site</h1>

    <Grid container>
      <Grid sx={{
        position: "fixed",
        top: 5,
        left: 5
      }}>
          {!loginSuccess ? ( 
          <>
            <Login onLoginSuccess={handleLoginSuccess} />
            <SignIn onLoginSuccess={handleLoginSuccess}/>
            </>            
          ) : ( 
            <>
              <UserName />
              <UpdateDetails />
            </>
          )}
   
      </Grid>
    </Grid>

    <Box
      component="footer"
      sx={{
        zIndex:'99999',
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "rgb(27, 187, 171)",
        color: "#E0FFFF", 
        py: 3,
        textAlign: "center",
      }}
    >
      <Container maxWidth={false} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography variant="body1">&copy;  All rights reserved Shifi Shiff {new Date().getFullYear()}</Typography>
        <Box sx={{ mt: 1 }}>
          <Link href="https://github.com/ShifiShiff" target="_blank" rel="noopener noreferrer" sx={{ color: "#AFEEEE" }}>
            <GitHubIcon sx={{ fontSize: 30 }} />
          </Link>
        </Box>
      </Container>
    </Box>

  </>)

}

export default HomePage