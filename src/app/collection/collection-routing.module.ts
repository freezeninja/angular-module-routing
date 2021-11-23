import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CollectioncompoComponent } from './collectioncompo/collectioncompo.component'

const routes: Routes = [
  {path: '', component: CollectioncompoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionRoutingModule { }
