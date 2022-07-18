import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Event } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppinglistService } from '../shoppinglistService';

@Component({
  selector: 'app-shoppingedit',
  templateUrl: './shoppingedit.component.html',
  styleUrls: ['./shoppingedit.component.css']
})
export class ShoppingeditComponent implements OnInit {

  @ViewChild('nameInput') nameInput:ElementRef
  @ViewChild('amountInput') amountInput:ElementRef
  @Output() newIngredientAdded=new EventEmitter<Ingredient>();
  constructor(private shoppinglistservice:ShoppinglistService) { }

  ngOnInit(): void {
  }

  handleAddnew=(event:any)=>{
    event.preventDefault()
    const ing=new Ingredient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value)
    this.shoppinglistservice.addnewIngredients(ing)
    // this.newIngredientAdded.emit(ing)
    this.nameInput.nativeElement.value=''
    this.amountInput.nativeElement.value=''
  }

}
