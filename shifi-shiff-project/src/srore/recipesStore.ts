import axios from "axios";
import { makeAutoObservable } from "mobx";
import { AxiosError } from 'axios';


export type RecipeType = {
    id?: number,
    title: string,
    description: string,
    authorId?: number,
    ingredients?:string[],
    instructions: string
}


class RecipeStore {



    list: RecipeType[] = [];
    constructor() {
        makeAutoObservable(this);
        this.getAllRecipesFromServer();

    }
    async getAllRecipesFromServer() {

        try {
            const res = await axios.get('http://localhost:3000/api/recipes')

            this.list = res.data;

        } catch (e) {
            if ((e as AxiosError).response && (e as AxiosError).response?.status === 401) 
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

            console.log(res);
            // console.log(res.data.userId);
            this.getAllRecipesFromServer();

        } catch (e) {
            if ((e as AxiosError).response && (e as AxiosError).response?.status === 401)
                alert('מייל או סיסמא לא תקינים')
            if ((e as AxiosError).response && (e as AxiosError).response?.status === 403)
                alert('יש להתחבר בכדי להכניס מתכון ')
            console.log(e);

        }
    }

    GetRecipeById(id:number):RecipeType|undefined {
        return this.list.find(t=>t.id===id);

    }

}

export default new RecipeStore();