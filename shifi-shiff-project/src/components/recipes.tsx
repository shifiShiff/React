import { Button } from "@mui/material";
import axios from "axios";

const Recipes=()=>{

    const getRecipes= async()=>{
    try {
        const res = await axios.get('http://localhost:3000/api/recipes')
  
        console.log(res);
        console.log(res.data);
        const recipes=res.data.map(t=>t.title)
        console.log(recipes);
        

      } catch (e) {
        if (e.status === 401)
          alert("something worng...")
        console.log(e);
  
      }
    }

    return(<>

<Button onClick={() => {getRecipes() }} variant="outlined" sx={{ backgroundColor: 'white', color: ' #40E0D0 ', border: '1px solid gray' }}>All Recipe</Button>

    </>)

}

export default Recipes