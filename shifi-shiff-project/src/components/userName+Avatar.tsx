import { useContext } from "react";
import { UserContext } from "./HomePage";
import { Avatar, Box, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";


const UserName = () => {


    const context = useContext(UserContext);
    let f: string = ''
    if (context) {
        f = context.user.firstName
    }


    return (<>
      

    <Box sx={{ display: "flex", alignItems: "center", marginBottom:"20px"}}>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>{f[0]}</Avatar>      
      <Typography variant="h6">hello {f}</Typography>
    </Box>
            

    </>)

}

export default UserName