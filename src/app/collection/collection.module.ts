import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionRoutingModule } from './collection-routing.module';
import { CollectioncompoComponent } from './collectioncompo/collectioncompo.component';


@NgModule({
  declarations: [
    CollectioncompoComponent
  ],
  imports: [
    CommonModule,
    CollectionRoutingModule
  ],
  exports: []
})
export class CollectionModule { }
