import { useContext, useRef, useState } from "react";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { UserContext } from "./HomePage";
import { Box, Modal, TextField, Typography } from "@mui/material";


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


  const handleSubmit = () => {
    if (context) {
      setClicked(false)
      if (context.user.firstName === nameref.current?.value && context.user.password == passwordref.current?.value) {
        context.userDispatch({ type: 'CREATE', data: { firstName: nameref.current?.value || '', password: passwordref.current?.value || '' } })
        onLoginSuccess()
      }
    }
  }


  return (<>

    <Button onClick={() => { setClicked(true) }} variant="outlined" sx={{ backgroundColor: 'white', color: ' #40E0D0 ', border: '1px solid gray' }}>Login</Button>


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
              <TextField fullWidth label="First Name" variant="outlined" inputRef={nameref} />
              <TextField fullWidth label="Password" variant="outlined" inputRef={passwordref} />
              <Button  type='submit' variant="contained" endIcon={<SendIcon />} sx={{
                backgroundColor: 'white',
                color: ' #40E0D0 ',
                marginTop: '15px',
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

