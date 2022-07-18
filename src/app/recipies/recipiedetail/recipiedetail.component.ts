import { Component, OnInit, Input } from '@angular/core';
import { ShoppinglistService } from 'src/app/shoppinglist/shoppinglistService';
import { Recipie } from '../recipielist/recipie.model';

@Component({
  selector: 'app-recipiedetail',
  templateUrl: './recipiedetail.component.html',
  styleUrls: ['./recipiedetail.component.css']
})
export class RecipiedetailComponent implements OnInit {
  @Input('recipie') recipieItem:Recipie 
  constructor(private shoppingListService:ShoppinglistService) { }

  ngOnInit(): void {
  }

  handleAddtoShoppingList(): void {
    // for(let i=0;i<this.recipieItem.ingredients.length;i++){
      this.shoppingListService.addIngredientsfromRecipie([...this.recipieItem.ingredients])
    // }

    
  }

}
