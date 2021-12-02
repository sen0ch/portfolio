import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService,
    ) { }

    ngOnInit() {
      this.getItems();
    }
    getItems(): void {
      this.itemService.getItems()
        .subscribe(items => this.items = items);
    }

}
