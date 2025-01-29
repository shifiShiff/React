import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import { array, object, string } from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form"
import recipesStore, { RecipeType } from "../srore/recipesStore"
import { useContext, useEffect, useState } from "react"
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import { UserContext } from "./HomePage"
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
};


const schema = object({
    title: string().required('error'),
    description: string().required().min(10, 'description nust be 10 letters'),
    // ingredients: string().required('error'),
    ingredients: array()
        .of(string().required('Each product is required')) // כל פריט במערך חייב להיות מחרוזת
        .min(1, 'At least one product is required'), // חייב להיות לפחות מוצר אחד
    instructions: string().required('error'),

})



const AddRecipe = observer(() => {

    const [clicked, setClicked] = useState(false)
    const context = useContext(UserContext);
    // const [products, setProducts] = useState<string[]>(['']); // מערך של מוצרים


    const onSubmit: SubmitHandler<RecipeType> = (data) => {
        console.log(data);
        setClicked(false);
        if (context)
            recipesStore.addRecipe(data, context.user.id)
        // reset()
        reset({
            ingredients: [] // מנקה את המערך            
        });
    }

    // const addProductField = () => {
    //     setProducts([...products, '']); // הוספת שדה חדש למערך

    // };

    // const handleProductChange = (value: string, index: number) => {
    //     const updatedProducts = [...products];
    //     updatedProducts[index] = value;
    //     setProducts(updatedProducts);
    // };
  

    const { control } = useForm({ resolver: yupResolver(schema) });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({ resolver: yupResolver(schema) })

    const { fields, append, remove } = useFieldArray({
        control, // ודאי ש-control קיים
        name: "ingredients", // שם המערך כפי שהוא בסכמה
    });

 
        // useEffect(() => {
        //     if (clicked) {
        //         reset({
        //             ingredients: [] // מנקה את המערך
        //         });
        //         append({}); // מוסיף שדה ריק אחד
        //     }
        // }, [clicked, reset, append]);
    
        const handleModalOpen = () => {
            // setClicked(true);
            console.log("yyyyyyyyyyyy");

            reset({
                ingredients: [] // נוודא שהמערך מתחיל עם שדה ריק אחד בלבד
            });
            fields.forEach((field, index) => {
                remove(index); // מסיר את כל השדות הנוכחיים
            });
        };
    return (<>

        <Button onClick={() => { handleModalOpen()
            setClicked(true)
         }} variant="outlined" sx={{ backgroundColor: 'white', color: ' #40E0D0 ', border: '1px solid gray' }}>Add Recipe</Button>

        <Modal
            open={clicked}
            onClose={() => { setClicked(false) }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div><TextField {...register('title')} type="text" fullWidth label="title" variant="outlined" />
                            {errors.title && <span>{errors.title.message}</span>}</div>
                        <div><TextField {...register('description')} type="text" fullWidth label="description" variant="outlined" />
                            {errors.description && <span>{errors.description.message}</span>}</div>
                        {/* <div><TextField {...register('ingredients')} type="text" fullWidth label="ingredients" variant="outlined" />
                            {errors.ingredients && <span>{errors.ingredients.message}</span>}</div> */}

                        <Typography variant="subtitle1" sx={{ mt: 2 }}>Products:</Typography>
                        {/* {products.map((product, index) => (
                            <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                                <TextField
                                    {...register(`ingredients.${index}`)}
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                    value={product}
                                    onChange={(e) => handleProductChange(e.target.value, index)}
                                    label={`Product ${index + 1}`}
                                />
                            </div>
                        ))} */}
                        {/* 
                        <Button
                            type="button"
                            onClick={addProductField}
                            variant="outlined"
                            startIcon={<AddIcon />}
                            sx={{ mt: 1 }}
                        >
                            Add Product
                        </Button> */}

                        {fields.map((field, index) => (
                            <div key={field.id}>
                                <TextField
                                    {...register(`ingredients.${index}`)}
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                    label={`Product ${index + 1}`}
                                />
                                <Button onClick={() => remove(index)}>Remove</Button>
                            </div>
                        ))}
                        <Button
                            onClick={() => append({})}
                            variant="outlined"
                            startIcon={<AddIcon />}
                        >
                            Add Product
                        </Button>

                        <div><TextField {...register('instructions')} type="text" fullWidth label="instructions" variant="outlined" />
                            {errors.instructions && <span>{errors.instructions.message}</span>}</div>


                        <Button type='submit' variant="contained" endIcon={<SendIcon />} sx={{
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


    </>)

})

export default AddRecipe