import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipieService } from '../recipieService';
import {Recipie} from './recipie.model'

@Component({
  selector: 'app-recipielist',
  templateUrl: './recipielist.component.html',
  styleUrls: ['./recipielist.component.css']
})
export class RecipielistComponent implements OnInit {

  recipies:Recipie[]
  // @Output() selectedRecipieforDetail=new EventEmitter<Recipie>()
  constructor(private recipiService:RecipieService) { }

  ngOnInit(): void {
    this.recipies=this.recipiService.recipieList
  }

  // handleEmittoDetail=(ev:Recipie)=>{
  //   this.selectedRecipieforDetail.emit(ev);
  // }

}
