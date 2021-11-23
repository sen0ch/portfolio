import { Component, OnInit } from '@angular/core';

import { Item } from '../../../item';
import { ItemService } from '../../../item.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[] = [];
  name: any = [];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems()
    .subscribe(items => this.items = items.slice(0));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.itemService.addItem({ name } as Item)
      .subscribe(item => {
        this.items.push(item);
      });
  }

  delete(item: Item): void {
    this.items = this.items.filter(h => h !== item);
    this.itemService.deleteItem(item.id).subscribe();
  }

}
