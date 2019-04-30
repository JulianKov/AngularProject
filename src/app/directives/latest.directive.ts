import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  'selector': '[latest]'
})
export class LatestDirective {
  constructor(el: ElementRef) {
    setTimeout(() => {
      if (this.date.slice(0,4) === '2019') {
        el.nativeElement.style.border = '2px solid gray'
        el.nativeElement.style.borderTop = '0px'
        el.nativeElement.style.backgroundColor = 'rgba(16, 255, 203, 0.521)'
      }
    }, 0);

  }
  @Input('latest') date: string;

}
