import { useContext, useRef, useState } from "react";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { UserContext } from "./AppLayout";
import { Box, Modal, TextField, Typography } from "@mui/material";
import axios from "axios";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  background: 'linear-gradient(50deg, #40E0D0 50%,  #D3D3D3 80%)',
  border: '3px solid #40E0D0 ',
  boxShadow: 24,
  borderRadius: '16px',
  p: 4,
};

const Login = ({ onLoginSuccess }: { onLoginSuccess: Function }) => {
  const nameref = useRef<HTMLInputElement>(null)
  const passwordref = useRef<HTMLInputElement>(null)
  const [clicked, setClicked] = useState(false)
  const context = useContext(UserContext);
  const [, setUser] = useState({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const res = await axios.post('http://localhost:3000/api/user/login', {
        firstName: nameref.current?.value,
        password: passwordref.current?.value
      })

      setUser(res.data.user)
      console.log(res.data.user);
      onLoginSuccess();
      if (context) {
      setClicked(false)
        context.userDispatch({ type: 'CREATE', data: res.data.user })
        console.log(context.user);
      }

    } catch (e:any) {
      if (e.status === 401)
        alert('Invalid credentials')
      console.log(e);
    }
  }

  return (<>

    <Button onClick={() => { setClicked(true) }} variant="outlined" sx={{ backgroundColor: 'white', color: ' #40E0D0 ', border: '1px solid gray', marginLeft:'7px',  marginTop:'10px'}}>Login</Button>

    {clicked &&
      <Modal
        open={clicked}
        onClose={() => { setClicked(false) }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <form onSubmit={handleSubmit}>
              <TextField type="text" fullWidth label="First Name" variant="outlined" inputRef={nameref} />
              <TextField type="password" fullWidth label="Password" variant="outlined" inputRef={passwordref} />
              <Button type='submit' variant="contained" endIcon={<SendIcon />} sx={{
                backgroundColor: 'white',color: ' #40E0D0 ',marginTop: '15px',
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                },
              }}
              >Send</Button>
            </form>
          </Typography>

        </Box>
      </Modal>
    }

  </>)

  }

  export default Login

