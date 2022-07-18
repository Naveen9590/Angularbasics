import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Header} from './header/header.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { RecipiedetailComponent } from './recipies/recipiedetail/recipiedetail.component';
import { RecipielistComponent } from './recipies/recipielist/recipielist.component';
import { RecipieitemComponent } from './recipies/recipielist/recipieitem/recipieitem.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppingeditComponent } from './shoppinglist/shoppingedit/shoppingedit.component';
import {DropDownDirective} from './shared/dropDown.directive';
import {RecipieService} from './recipies/recipieService'
import { ShoppinglistService } from './shoppinglist/shoppinglistService';
@NgModule({
  declarations: [
    AppComponent,
    Header,
    RecipiesComponent,
    RecipiedetailComponent,
    RecipielistComponent,
    RecipieitemComponent,
    ShoppinglistComponent,
    ShoppingeditComponent,
    DropDownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RecipieService,ShoppinglistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
