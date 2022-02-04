import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TableComponent } from './table.component';
// import { ItemDetailComponent } from './components/item-detail/item-detail.component';


const routes: Routes = [
  {
    path: '',
    component: TableComponent
  },
  /*{
    path: 'detail/:id',
    component: ItemDetailComponent
  },*/
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TableRoutingModule { }
