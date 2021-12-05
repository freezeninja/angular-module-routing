import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { PlacehomeComponent } from './placehome/placehome.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { TimeDirective } from './time.directive';
import { SharedModule} from '../shared/shared.module';
import { SegmentComponent } from './segment/segment.component'

@NgModule({
  declarations: [
    PlacehomeComponent,
    PlaceholderComponent,
    TimeDirective,
    SegmentComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule
  ],
  exports: []
})
export class ElementsModule { }
