import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailRoutingModule } from './email-routing.module';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { EmailComponent } from './email.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ItemsComponent } from './components/items/items.component';
import { CodeComponent } from './components/code/code.component';


@NgModule({
  declarations: [
    EmailComponent,
    ItemDetailComponent,
    ItemsComponent,
    CodeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EmailRoutingModule,
    HttpClientModule,
    MaterialModule,
    EmailRoutingModule,
  ]
})
export class EmailModule { }
