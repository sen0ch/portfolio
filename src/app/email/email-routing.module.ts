import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailComponent } from './email.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

const routes: Routes = [
  {
    path: '',
    component: EmailComponent
  },
  {
    path: 'detail/:id',
    component: ItemDetailComponent
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailRoutingModule { }
