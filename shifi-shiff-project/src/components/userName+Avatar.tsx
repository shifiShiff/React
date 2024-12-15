import { useContext } from "react";
import { UserContext } from "./HomePage";
import { Avatar, Box, Typography } from "@mui/material";


const UserName = () => {


    const context = useContext(UserContext);
    let f: string = ''
    if (context) {
        f = context.user.firstName
    }


    return (<>
      

    <Box sx={{ display: "flex", alignItems: "center", marginBottom:"20px"}}>

      <Avatar sx={{ bgcolor:'  #40E0D0'  , marginRight: '15px'}}>{f[0]}</Avatar>  

      <Typography variant="h6">hello {f}</Typography>
    </Box>
            

    </>)

}

export default UserName