import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanvasComponent } from './canvas.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CanvasComponent
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
export class CanvasRoutingModule { }
