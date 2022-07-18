import { Ingredient } from "src/app/shared/ingredient.model";

export class Recipie{
    public name:String;
    public description:String;
    public imgPath:String;
    public ingredients:Ingredient[];

    constructor(name:String,desc:String,path:String,ingredients:Ingredient[]){
        this.description=desc;
        this.name=name;
        this.imgPath=path;
        this.ingredients=ingredients
    }
}