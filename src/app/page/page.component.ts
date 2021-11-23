import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: [ './page.component.css' ]
})
export class PageComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService,
    ) { }

  ngOnInit() {
    this.getItems();
  }
  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => this.items = items.slice(0));
  }
}
