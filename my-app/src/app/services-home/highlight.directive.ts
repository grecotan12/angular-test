import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(el: ElementRef) { 
    debugger;
    el.nativeElement.style.backgroundColor = 'purple'; 
 }

}
