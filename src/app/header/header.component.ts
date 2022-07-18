import {Component, EventEmitter, Output} from '@angular/core'

@Component({
    selector:'header-root',
    templateUrl:'./header.component.html'
})
export class Header{
    // selectedMenu:String=''
    @Output() onmenuSelected:EventEmitter<String>=new EventEmitter<String>()


    handleMenu(val:String){
        // this.selectedMenu=val;
        this.onmenuSelected.emit(val)
    }
}