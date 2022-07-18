import { Ingredient } from "../shared/ingredient.model";

export class ShoppinglistService{
    ingredients:Ingredient[]=[new Ingredient('apples',5),new Ingredient('Tomatoes',4)]

    addnewIngredients=(ingredient:Ingredient)=>{
        this.ingredients.push(ingredient)
    }

    addIngredientsfromRecipie=(ingredients:Ingredient[])=>{
        this.ingredients.push(...ingredients)
    }
    
}