import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoDsRoutingModule } from './mo-ds-routing.module';
import { ModscompoComponent } from './modscompo/modscompo.component';
import { SharedModule } from '../shared/shared.module';
import { ModalsComponent } from './modals/modals.component';


@NgModule({
  declarations: [
    ModscompoComponent,
    ModalsComponent
  ],
  imports: [
    CommonModule,
    MoDsRoutingModule,
    SharedModule
  ],
  exports: []

})
export class MoDsModule { }
