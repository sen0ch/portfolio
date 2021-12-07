import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PageRoutingModule } from './page-routing.module';
import { MaterialModule } from '../material.module';

import { PageComponent } from './page.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ItemsComponent } from './components/items/items.component';
import { CodeComponent } from './components/code/code.component';


@NgModule({
  declarations: [
    PageComponent,
    ItemDetailComponent,
    ItemsComponent,
    CodeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    PageRoutingModule,
  ]
})
export class PageModule { }
