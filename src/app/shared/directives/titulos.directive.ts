import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTitulos]'
})
export class TitulosDirective {

  constructor(
    private elemnent: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.setStyle(this.elemnent.nativeElement, 'font-size', '20px')
  }

}
