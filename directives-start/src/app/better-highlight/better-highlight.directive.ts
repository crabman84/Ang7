import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
  Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() startColor: string = 'yellow'
  @Input('appBetterHighlight') defaultColor: string = 'transparent';
  @Input() highlightColor: string  = 'blue';

  //NOTE: backgroundColor is a DOM property it cant be spelt in another way. DOM those not know -'s
  @HostBinding('style.backgroundColor') backgroundColor: string = this.startColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {  }

  ngOnInit() {
    this.backgroundColor = this.startColor;
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    //NOTE: setStyle(elemment, a variable of the element we want to style , the value of style)
  }

  //NOTE: mouseenter is an event provided by the DOM
  @HostListener('mouseenter') mouseover(eventDate: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  //NOTE: mouseleave is an event provided by the DOM
  @HostListener('mouseleave') mouseleave(eventDate: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}
