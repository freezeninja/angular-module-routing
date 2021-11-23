import { Directive,TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTime]'
})
export class TimeDirective {

  constructor(private viewContent: ViewContainerRef, private template: TemplateRef<any>) { }

  @Input('appTime') set render(times: number){
    this.viewContent.clear();

    for(let i=0; i< times; i++){
      this.viewContent.createEmbeddedView(this.template, {});
    }
  }
}
