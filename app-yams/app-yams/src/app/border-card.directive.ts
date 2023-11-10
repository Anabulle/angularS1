import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  // @Input('appBorderCard') borderColor: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setBorder('#f5f5f5');
  }

  private setBorder(color: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'border', `2px solid ${color}`);
  }

@HostListener('click') onClick() {
    this.setBorder('yellow');
  }
}
