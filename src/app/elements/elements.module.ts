import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { PlacehomeComponent } from './placehome/placehome.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { TimeDirective } from './time.directive';

@NgModule({
  declarations: [
    PlacehomeComponent,
    PlaceholderComponent,
    TimeDirective
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ],
  exports: []
})
export class ElementsModule { }
