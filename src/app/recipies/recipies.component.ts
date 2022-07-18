import { Component, OnInit } from '@angular/core';
import { Recipie } from './recipielist/recipie.model';
import { RecipieService } from './recipieService';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {
  selectedRecipie:Recipie

  constructor(private recipieService:RecipieService) { }

  ngOnInit(): void {
    // this.selectedRecipie=this.recipieService.selectedRecipie
    this.recipieService.selectedRecipie.subscribe((recipie:Recipie)=>{this.selectedRecipie=recipie})
  }

  // ngOnChanges(): void {
  //   this.selectedRecipie=this.recipieService.selectedRecipie
  // }

  // handleRecipieDetail=(val:Recipie)=>{
  //   this.selectedRecipie=val
  // }

}
