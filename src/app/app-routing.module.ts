import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// custom input 
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './error/notfound/notfound.component';

const routes: Routes = [
  { path: 'element', loadChildren: ()=> import('./elements/elements.module').then((res)=> res.ElementsModule) },
  { path: 'collection', loadChildren: ()=> import('./collection/collection.module').then((res)=> res.CollectionModule) },
  {path: 'views', loadChildren: ()=> import('./views/views.module').then((res)=> res.ViewsModule)},
  {path: 'modules', loadChildren: ()=> import('./mo-ds/mo-ds.module').then((res)=> res.MoDsModule)},
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
