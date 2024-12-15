import { createContext, useReducer, useState } from "react";
import { User, userReducer } from "./User";
import Login from "./Login";
import UpdateDetails from "./Upadat";
import UserName from "./userName+Avatar";
import { Box } from "@mui/material";

//  export const UserContext = createContext({})

export type UserContextType = {
  user: User;
  userDispatch: React.Dispatch<any>; // Action typing can be more specific
};

export const UserContext = createContext<UserContextType | null>(null); // יש להחזיר null במקרה שאין קונטקסט


const HomePage = () => {

  const initialUser: User = {
    firstName: 'shifi',
    lastName: '',
    email: '',
    password: '1234',
    addres: '',
    phone: ''
  };

  const [user, userDispatch] = useReducer(userReducer, initialUser)
  const [loginSuccess, setLoginSuccess] = useState(false); // מצב התחברות

  const handleLoginSuccess = () => {
    setLoginSuccess(true);
  };



  return (<>

    <Box
      sx={{
        position: "fixed",
        top: 5,
        left: 5
      }}>
      <UserContext.Provider value={{ user, userDispatch }}>

        {loginSuccess === false && <Login onLoginSuccess={handleLoginSuccess}></Login>}

        {loginSuccess && <UserName></UserName>}

        <div></div>
        {loginSuccess && <UpdateDetails></UpdateDetails>}


      </UserContext.Provider>
    </Box>

    {user.firstName}
    {user.lastName}
    {user.email}
    {user.password}
    {user.addres}
    {user.phone}

  </>)

}

export default HomePage