import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDisableProduct]'
})
export class DisableProductDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { 

  }
@Input() set appDisableProduct (disable: Boolean){
  if(disable){
    this.renderer.addClass(this.element.nativeElement, 'disable-out-of-stock-product');
  }
}

}
