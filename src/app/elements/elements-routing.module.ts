import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlacehomeComponent} from './placehome/placehome.component'

const routes: Routes = [
  { path: '', component: PlacehomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
