import { createContext, useReducer, useState } from "react";
import { User, userReducer } from "./User";
import Login from "./Login";
import UpdateDetails from "./Upadat";
import UserName from "./userName+Avatar";
import { Grid2 as Grid } from "@mui/material";
import SignIn from "./Sign";
import Recipes from "./recipes";

//  export const UserContext = createContext({})

export type UserContextType = {
  user: User;
  userDispatch: React.Dispatch<any>; 
};

export const UserContext = createContext<UserContextType | null>(null);


const HomePage = () => {

  const initialUser: User = {
    id : null,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    addres: '',
    phone: ''
  };

  const [user, userDispatch] = useReducer(userReducer, initialUser)
  const [loginSuccess, setLoginSuccess] = useState(false); 

  const handleLoginSuccess = () => {
    setLoginSuccess( (prevState) => !prevState);

    console.log(loginSuccess);
    
  };



  return (<>

    <Grid container>
      <Grid sx={{
        position: "fixed",
        top: 5,
        left: 5
      }}>

        <UserContext.Provider value={{ user, userDispatch }}>

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


        </UserContext.Provider>

      </Grid>

    </Grid>



    {user.id}
    {user.firstName}
    {user.lastName}
    {user.email}
    {user.password}
    {user.addres}
    {user.phone}

    <Recipes></Recipes>

  </>)

}

export default HomePage