import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewscompoComponent } from './viewscompo/viewscompo.component';
import { SharedModule } from '../shared/shared.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { ItemlistComponent } from './itemlist/itemlist.component';

@NgModule({
  declarations: [
    ViewscompoComponent,
    StatisticsComponent,
    ItemlistComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule
  ]
})
export class ViewsModule { }
