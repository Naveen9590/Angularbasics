import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector:'[dropDirective]'
})
export class DropDownDirective{
    @HostBinding('class.open') isOpen=false;
    constructor(private element:ElementRef,private renderer:Renderer2){

    }

    @HostListener ('document:click',['$event.target'])
    onClick(event:Event){
        console.log(this.element.nativeElement)
        // this.renderer.addClass(this.element.nativeElement,'open')
        this.isOpen=this.element.nativeElement.contains(event)?!this.isOpen:false
    }

}