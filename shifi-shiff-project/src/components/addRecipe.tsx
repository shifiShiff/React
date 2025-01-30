
import { Alert, Box, Button, Modal, TextField, Typography } from "@mui/material"
import { array, object, string } from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form"
import recipesStore, { RecipeType } from "../store/recipesStore"
import { useContext, useState } from "react"
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import { UserContext } from "./AppLayout"
import { observer } from "mobx-react-lite"

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
    overflowY: 'auto', 
    maxHeight: '80vh',
};

const schema = object({
    title: string().required('Error: title is required'),
    description: string().required().min(10, 'description nust be 10 letters'),
    ingredients: array()
        .min(1, 'At least one product is required'),    
    instructions: string().required('Error: instructions is required'),
})
const AddRecipe = observer(() => {

    const [clicked, setClicked] = useState(false)
    const context = useContext(UserContext);

    const onSubmit: SubmitHandler<RecipeType> = (data) => {
        setClicked(false);
        if (context)
            recipesStore.addRecipe(data, context.user.id)
        reset({
            ingredients: []            
        });
    }
    const { control } = useForm({ resolver: yupResolver(schema) });
    const {
        register,handleSubmit,reset,
        formState: { errors }
    } = useForm({ resolver: yupResolver(schema) })

    const { fields, append, remove } = useFieldArray({
        control, name: "ingredients"});
    const handleModalOpen = () => {
        reset({
            ingredients: [] 
        });
        fields.forEach((_field, index) => {
            remove(index); 
        });
    };
    return (<>

        <Button onClick={() => {
            handleModalOpen()
            setClicked(true)
        }} variant="outlined" sx={{ backgroundColor: 'white', color: ' #40E0D0 ', border: '1px solid gray' }}>Add Recipe</Button>

        <Modal open={clicked} onClose={() => { setClicked(false) }} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div><TextField {...register('title')} type="text" fullWidth label="title" variant="outlined" />
                            {errors.title && <Alert severity="error">{errors.title?.message}</Alert>}</div>

                        <div><TextField {...register('description')} type="text" fullWidth label="description" variant="outlined" />
                            {errors.description && <Alert severity="error">{errors.description?.message}</Alert>}</div>

                        <div><Typography variant="subtitle1" sx={{ mt: 2 }}>Products:</Typography>
                            {fields.map((field, index) => (
                                <div key={field.id}>
                                    <TextField {...register(`ingredients.${index}`)} type="text" fullWidth variant="outlined" label={`Product ${index + 1}`}/></div>))}
                            {errors.ingredients && <Alert severity="error">{errors.ingredients?.message}</Alert>}</div>
                        <Button onClick={() => append({})} variant="outlined" startIcon={<AddIcon />}>Add Product</Button>

                        <div><TextField {...register('instructions')} type="text" multiline fullWidth label="instructions" variant="outlined" />
                            {errors.instructions && <Alert severity="error">{errors.instructions?.message}</Alert>}</div>

                        <Button type='submit' variant="contained" endIcon={<SendIcon />} sx={{backgroundColor: 'white',color: ' #40E0D0 ', marginTop: '15px', 
                            '&:hover': {
                                backgroundColor: '#f5f5f5',
                            },
                        }}
                        >Send</Button>
                    </form>
                </Typography>
            </Box>
        </Modal >
    </>)
})

export default AddRecipe