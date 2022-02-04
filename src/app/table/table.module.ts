import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material.module';
import { TableRoutingModule } from './table-routing.module';

import { TableComponent } from './table.component';
import { ItemsComponent } from './components/items/items.component';



@NgModule({
  declarations: [
    TableComponent,
    ItemsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    TableRoutingModule
  ]
})
export class TableModule { }
