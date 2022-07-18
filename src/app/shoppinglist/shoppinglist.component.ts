import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model'
import { ShoppinglistService } from './shoppinglistService';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  ingredients:Ingredient[]
  constructor(private shoppinglistservice:ShoppinglistService) { }

  ngOnInit(): void {
    this.ingredients=this.shoppinglistservice.ingredients
  }

  handlenewAdded=(val:Ingredient)=>{
    this.ingredients.push(val)
  }

}
