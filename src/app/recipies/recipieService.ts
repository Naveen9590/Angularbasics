import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipie } from "./recipielist/recipie.model";

export class RecipieService{
    recipieList:Recipie []=[new Recipie('test','Sample test recipie',
    'https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=45&resize=768,574'
     ,[new Ingredient('bread',2),new Ingredient('eggs',4)]),
    new Recipie('test1','description1','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505'
    ,[new Ingredient('eggplant',6),new Ingredient('Lemons',5)])]
    // selectedRecipie:Recipie=this.recipieList[0]

    // setSelectedRecipie(recipie:Recipie){
    //     this.selectedRecipie=recipie
    // }
    // selectedRecipieChange:EventEmitter<Recipie>
    selectedRecipie=new EventEmitter<Recipie>()
}