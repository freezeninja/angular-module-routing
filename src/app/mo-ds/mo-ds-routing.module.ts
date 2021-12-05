import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModscompoComponent } from './modscompo/modscompo.component'

const routes: Routes = [
  {path: '', component: ModscompoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoDsRoutingModule { }
