import {useState } from "react";
import Login from "./Login";
import UpdateDetails from "./Upadat";
import UserName from "./UserNameAvatar";
import {Grid2 as Grid } from "@mui/material";
import SignIn from "./Sign";


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

  </>)

}

export default HomePage