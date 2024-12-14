import {  useContext,  useRef, useState } from "react";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { UserContext } from "./HomePage";
import { Box, Modal, Typography } from "@mui/material";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


type LoginProps = {
  onLoginSuccess: () => void; // טיפוס לפונקציה שמעדכנת את ההצלחה
};

const Login = ({ onLoginSuccess }: LoginProps) => {


  const nameref = useRef<HTMLInputElement>(null)
  const passwordref = useRef<HTMLInputElement>(null)
  const [clicked, setClicked]= useState(false)


  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserContext is not available. Make sure it's provided at a higher level.");
  }
  const { userDispatch } = context;

  const adduser = () => {

    setClicked(false)
    if(context.user.firstName === nameref.current?.value && context.user.password ==passwordref.current?.value)
       {userDispatch({ type: 'CREATE', data: { firstName: nameref.current?.value||'', password:passwordref.current?.value||''} })

    onLoginSuccess()
  }
  }


  return (<>

    <Button onClick={()=>{setClicked(true)}}  variant="outlined">Login</Button>


    {clicked && <Modal
      open={true}
      onClose={()=>{}}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          <input ref={nameref} placeholder="name" />
          <br></br>
          <input ref={passwordref} placeholder="password" />
          <br></br>
          <Button onClick={adduser} variant="contained" endIcon={<SendIcon />}>Send</Button>

        </Typography>

      </Box>
    </Modal>
    }

  </>)

}

export default Login

