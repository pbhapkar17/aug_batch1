import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumbersOnly]'
})
export class NumbersOnlyDirective {

  constructor(private element:ElementRef) { }

  @HostListener('input', ['$event'])
  onInputChange(){
  
    let inputBoxdata = this.element.nativeElement.value;
    this.element.nativeElement.value  = inputBoxdata.replace(/[^0-9]*/g, '')
  }

}
