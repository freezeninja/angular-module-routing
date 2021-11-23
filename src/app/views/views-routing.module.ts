import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewscompoComponent } from './viewscompo/viewscompo.component'

const routes: Routes = [
  {path: 'views', component: ViewscompoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
