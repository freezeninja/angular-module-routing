import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionRoutingModule } from './collection-routing.module';
import { CollectioncompoComponent } from './collectioncompo/collectioncompo.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';


@NgModule({
  declarations: [
    CollectioncompoComponent,
    TableComponent,
    BiographyComponent,
    CompaniesComponent,
    PartnersComponent
  ],
  imports: [
    CommonModule,
    CollectionRoutingModule,
    SharedModule
  ],
  exports: []
})
export class CollectionModule { }
