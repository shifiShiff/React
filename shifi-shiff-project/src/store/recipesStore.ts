import axios from "axios";
import { makeAutoObservable } from "mobx";


export type RecipeType = {
    id?: number,
    title?: string,
    description?: string,
    authorId?: number,
    ingredients?:string[],
    instructions?: string
}


class RecipeStore {



    list: RecipeType[] = [];
    constructor() {
        makeAutoObservable(this);
        this.getAllRecipesFromServer();

    }
    async getAllRecipesFromServer() {

        console.log("get all recupies from server");
        
        try {
            const res = await axios.get('http://localhost:3000/api/recipes')

            this.list = res.data;

        } catch (e:any) {
            if (e.status === 401) 
                alert("something worng...")
            console.log(e);
        }
    }


    async addRecipe(recipe: RecipeType, id: number | null) {
        console.log("in add recipe");
        console.log("id=" + id);
        try {
            const res = await axios.post('http://localhost:3000/api/recipes', {
                title: recipe.title,
                description: recipe.description,
                ingredients: recipe.ingredients,
                instructions: recipe.instructions

            },
                {
                    headers: {
                        'user-id': id
                    },
                }
            )

            console.log(res.data.recipe);
            this.list.push(res.data.recipe)

        } catch (e:any) {
            if (e .status === 403)
                alert('You must be logged in to add a recipe')
            console.log(e);

        }
    }

    GetRecipeById(id:number):RecipeType|undefined {
        return this.list.find(t=>t.id===id);

    }
    GetRecipesListById(id:number|undefined|null){
        return this.list.filter(t=>t.authorId == id);

    }
}

export default new RecipeStore();