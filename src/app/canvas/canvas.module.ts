import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CanvasRoutingModule } from './canvas-routing.module';
import { MaterialModule } from '../material.module';

import { CanvasComponent } from './canvas.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ItemsComponent } from './components/items/items.component';

@NgModule({
  declarations: [
    CanvasComponent,
    ItemDetailComponent,
    ItemsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    CanvasRoutingModule
  ]
})
export class CanvasModule { }
