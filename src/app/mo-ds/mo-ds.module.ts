import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoDsRoutingModule } from './mo-ds-routing.module';
import { ModscompoComponent } from './modscompo/modscompo.component';


@NgModule({
  declarations: [
    ModscompoComponent
  ],
  imports: [
    CommonModule,
    MoDsRoutingModule
  ],
  exports: []

})
export class MoDsModule { }
