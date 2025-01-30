import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useContext, useRef, useState } from "react";
import { UserContext } from "./AppLayout";
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

const UpdateDetails = () => {

    const [clicked, setClicked] = useState(false)
    const lastref = useRef<HTMLInputElement>(null)
    const emailref = useRef<HTMLInputElement>(null)
    const addressref = useRef<HTMLInputElement>(null)
    const phoneref = useRef<HTMLInputElement>(null)
    const context = useContext(UserContext);
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
          const res = await axios.put('http://localhost:3000/api/user', {
            id:context?.user.id,
            firstName: context?.user.firstName,
            lastName: lastref.current?.value || context?.user.lastName,
            password: context?.user.password,
            email: emailref.current?.value||context?.user.email,
            address:addressref.current?.value|| context?.user.addres,
            phone:phoneref.current?.value|| context?.user.phone
        },
        {
            headers: {
                'user-id': context?.user.id
            },
        })
          if (context?.user        ) {
            setClicked(false)
              context.userDispatch({ type: 'UPDATE', data: res.data.user })
          }
        } catch (e:any) {
          if (e.status === 404)
            alert('User not found')
          console.log(e);
    
        }
      }
    return (<>
        <Button onClick={() => { setClicked(true) }} variant="outlined" sx={{ backgroundColor: 'white', color: ' #40E0D0 ', border: '1px solid gray' }}>Update</Button>
        {clicked && <Modal
            open={clicked}
            onClose={() => { setClicked(false) }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    <form onSubmit={handleSubmit}>
                        <TextField type="text" fullWidth label="Last Name" variant="outlined" inputRef={lastref} />
                        <TextField type="email" fullWidth label="Email" variant="outlined" inputRef={emailref} />
                        <TextField type="text" fullWidth label="Address" variant="outlined" inputRef={addressref} />
                        <TextField type="text" fullWidth label="Phone" variant="outlined" inputRef={phoneref} />
                        <Button type='submit' variant="contained" sx={{backgroundColor: 'white',color: ' #40E0D0 ',marginTop: '15px',
                            '&:hover': {
                                backgroundColor: '#f5f5f5',
                            },}} >Send</Button>
                    </form>
                </Typography>
            </Box>
        </Modal>
        }

    </>)
}

export default UpdateDetails