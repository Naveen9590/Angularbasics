import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipieService } from '../../recipieService';
import { Recipie } from '../recipie.model';

@Component({
  selector: 'app-recipieitem',
  templateUrl: './recipieitem.component.html',
  styleUrls: ['./recipieitem.component.css']
})
export class RecipieitemComponent implements OnInit {
@Input('val') item: Recipie;
// @Output() selectedRecipie=new EventEmitter<Recipie>()
  constructor(private recipieService:RecipieService) { }

  ngOnInit(): void {
  }

  handleClick=(val:Recipie)=>{
    // this.selectedRecipie.emit(val)
    // this.recipieService.setSelectedRecipie(val)
    this.recipieService.selectedRecipie.emit(val)
    // selectedRecipieChange.emit(val)
  }

}
