import { Box, Button, Modal, Typography } from "@mui/material";
import { useContext, useRef, useState } from "react";
import { UserContext } from "./HomePage";


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


  

const UpdateDetails = () => {

    const [clicked, setClicked] = useState(false)
    const lastref = useRef<HTMLInputElement>(null)
    const emailref = useRef<HTMLInputElement>(null)
    const addressref = useRef<HTMLInputElement>(null)
    const phoneref = useRef<HTMLInputElement>(null)
    const context = useContext(UserContext);


    const updateUser = () => {

        setClicked(false);

        if (context) {
            context.userDispatch({type:'UPDATE',data: {
                
                lastName:lastref.current?.value||'' ,
                email:emailref.current?.value|| '',
                addres: addressref.current?.value||'',
                phone: phoneref.current?.value||''
        }})
        }


    }

    return (<>


        <Button onClick={() => { setClicked(true) }} variant="outlined">Update</Button>


        {clicked && <Modal
            open={true}
            onClose={() => { }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    <input ref={lastref} placeholder="lastName" />
                    <br></br>
                    <input ref={emailref} placeholder="email" />
                    <br></br>
                    <input ref={addressref} placeholder="address" />
                    <br></br>
                    <input ref={phoneref} placeholder="phone" />
                    <br></br>
                    <Button onClick={updateUser} variant="contained" >Send</Button>

                </Typography>

            </Box>
        </Modal>
        }


    </>)


}

export default UpdateDetails