import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// custom imports 
// import { ElementsModule } from './elements/elements.module';
// import { CollectionModule } from './collection/collection.module';
import { MoDsModule } from './mo-ds/mo-ds.module';
import { ViewsModule } from './views/views.module';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './error/notfound/notfound.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    ViewsModule,
    MoDsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
