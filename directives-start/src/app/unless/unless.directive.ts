import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  // NOTE: set sets the Input into a function
  @Input() set appUnless(condition: boolean){
    if(!condition){
      this.viewcontainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewcontainerRef.clear();

    }
  }
  constructor(private templateRef: TemplateRef<any>, private viewcontainerRef: ViewContainerRef) { }

}
